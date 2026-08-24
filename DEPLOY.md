# Deploy na VPS

Modelo: container Nginx servindo `dist/`, exposto **só no loopback** (`127.0.0.1:8080`).
O Nginx do host recebe a internet, termina o TLS e faz proxy para o container.
Assim o container nunca fica aberto direto na porta 80/443 pública.

## 1. Pré-requisitos na VPS

```bash
sudo apt update && sudo apt install -y docker.io docker-compose-v2 nginx certbot python3-certbot-nginx
sudo systemctl enable --now docker nginx
```

DNS: aponte um registro `A` do domínio (e do `www`) para o IP da VPS antes de emitir o certificado.

## 2. Código na máquina

```bash
sudo mkdir -p /srv && cd /srv
git clone <URL_DO_REPO> portfolio && cd portfolio
```

## 3. Subir o container

```bash
sudo docker compose up -d --build
curl -I http://127.0.0.1:8080        # deve responder 200
curl http://127.0.0.1:8080/healthz   # ok
```

O build acontece dentro do container (Node 22 alpine), então a VPS não precisa de Node instalado.

## 4. Proxy + TLS no host

```bash
sudo cp deploy/portfolio.host.nginx.conf /etc/nginx/sites-available/portfolio
sudo sed -i 's/SEU_DOMINIO/seudominio.com/g' /etc/nginx/sites-available/portfolio
sudo ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx

sudo certbot --nginx -d seudominio.com -d www.seudominio.com
```

O certbot reescreve o vhost com o redirect 443 e instala a renovação automática
(`systemctl list-timers | grep certbot` para confirmar).

## 5. Firewall

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

A porta 8080 **não** deve ser liberada: o bind é em `127.0.0.1`, ela não sai da máquina.

## 6. Atualizar o site

```bash
cd /srv/portfolio
git pull
sudo docker compose up -d --build
sudo docker image prune -f
```

`index.html` vai com `Cache-Control: no-cache` e os assets têm hash no nome, então
o navegador pega a versão nova no primeiro acesso, sem precisar limpar cache.

## Alternativa sem Docker

```bash
npm ci && npm run build
sudo rsync -a --delete dist/ /var/www/portfolio/
```

Nesse caso copie o conteúdo de `deploy/nginx.conf` para o vhost do host, trocando
`root /usr/share/nginx/html` por `root /var/www/portfolio`, e sirva direto — sem proxy.

## Diagnóstico rápido

| Sintoma | Onde olhar |
|---|---|
| 502 no domínio | `sudo docker compose ps`, `sudo docker compose logs portfolio` |
| 404 em rota interna | `try_files ... /index.html` no `deploy/nginx.conf` |
| CSS/JS antigo | hash do arquivo em `dist/assets`, cache do proxy do host |
| Certificado falhou | DNS propagado? porta 80 liberada? `sudo certbot certificates` |
