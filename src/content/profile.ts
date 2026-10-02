export type Lang = "pt" | "en";

export type Localized = Record<Lang, string>;

export type SectionId = "home" | "about" | "stack" | "experience" | "projects" | "contact";

export interface StackGroup {
  label: Localized;
  items: string[];
}

export interface ExperienceEntry {
  company: string;
  role: Localized;
  period: Localized;
  place: Localized;
  bullets: Localized[];
  tags: string[];
  current?: boolean;
}

export interface EducationEntry {
  school: string;
  course: Localized;
  period: string;
}

export interface ProjectEntry {
  name: string;
  summary: Localized;
  year: string;
  tags: string[];
  live?: string;
  repo?: string;
  privateCode?: boolean;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

/* anotado (e não `satisfies`): com `satisfies` o tipo inferido perde as chaves
   opcionais que nenhum item usa, e `project.repo` deixa de compilar */
const projects: ProjectEntry[] = [
  {
    name: "LowSetup",
    year: "2026",
    summary: {
      pt: "Curadoria de periféricos, celulares e consoles por faixa de orçamento: uma escolha por faixa, o motivo em uma linha e link de afiliado. Painel próprio de cadastro, renderizado no servidor para busca e preview de link.",
      en: "Budget-tier curation of peripherals, phones and consoles: one pick per tier, a one-line reason and an affiliate link. Custom admin panel, server-rendered for search and link previews.",
    },
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Docker"],
    live: "https://lowsetup.com",
  },
  {
    name: "Lovu",
    year: "2025",
    summary: {
      pt: "Criador de site-presente: rascunho anônimo, checkout com Mercado Pago (cartão e PIX) e liberação do acesso apenas após pagamento aprovado.",
      en: "Gift-site builder: anonymous draft, Mercado Pago checkout (card and PIX) and access released only after approved payment.",
    },
    tags: ["Fastify", "Prisma", "PostgreSQL", "React", "Docker"],
    live: "https://lovuapp.com.br",
  },
  {
    name: "psigabriellebrandao.com",
    year: "2025",
    summary: {
      pt: "Landing page de página única para psicóloga clínica. Sem backend e sem coleta de dados: só conteúdo, performance e um caminho claro até o WhatsApp.",
      en: "Single-page landing for a clinical psychologist. No backend, no data collection: just content, performance and a clear path to WhatsApp.",
    },
    tags: ["React", "Vite", "Tailwind CSS"],
    live: "https://psigabriellebrandao.com",
  },
];

export const profile = {
  name: "Willian Braz",
  shortName: "will",
  initials: "WB",
  role: {
    pt: "Desenvolvedor Full Stack",
    en: "Full Stack Developer",
  } satisfies Localized,
  location: {
    pt: "Rio de Janeiro, Brasil",
    en: "Rio de Janeiro, Brazil",
  } satisfies Localized,
  available: {
    pt: "aberto a novas oportunidades",
    en: "open to new opportunities",
  } satisfies Localized,
  headline: {
    pt: "Construo aplicações web que precisam funcionar de verdade, do componente ao container em produção.",
    en: "I build web applications that actually have to work, from the component to the container in production.",
  } satisfies Localized,
  intro: {
    pt: "Trabalho com React, Next.js, TypeScript e Tailwind no front-end, com Node.js, NestJS, Spring Boot e Grails no back-end, e com PostgreSQL, Docker e AWS na infraestrutura. Integro agentes de IA ao fluxo de desenvolvimento via MCP para automatizar code review e documentação.",
    en: "I work with React, Next.js, TypeScript and Tailwind on the front-end, with Node.js, NestJS, Spring Boot and Grails on the back-end, and with PostgreSQL, Docker and AWS on the infrastructure. I wire AI agents into the development workflow through MCP to automate code review and documentation.",
  } satisfies Localized,
  about: [
    {
      pt: "Desde 2021, entre IoT, e-commerce e sistemas integrados a órgãos públicos. Gosto de interface clara, API previsível e banco bem modelado. Inglês em nível profissional.",
      en: "Since 2021, across IoT, e-commerce and systems integrated with government agencies. I care about a clear interface, a predictable API and a well-modeled database. Professional-level English.",
    },
    {
      pt: "Automatizo o que é repetitivo. Hoje uso agentes de IA conectados por MCP às ferramentas do time para fazer code review nos pull requests e manter a documentação de tarefas em dia sem escrita manual.",
      en: "I automate what is repetitive. Today I use AI agents connected through MCP to the team's tools to review pull requests and keep task documentation current without manual writing.",
    },
    {
      pt: "Fora do editor: jogos e ficção científica.",
      en: "Outside the editor: games and sci-fi.",
    },
  ] satisfies Localized[],
  stack: [
    {
      label: { pt: "Front-end", en: "Front-end" },
      items: ["React", "Next.js", "Angular", "TypeScript", "React Native", "Tailwind CSS", "shadcn/ui", "Sass"],
    },
    {
      label: { pt: "Back-end", en: "Back-end" },
      items: ["Node.js", "Express", "NestJS", "Spring Boot", "Grails / Groovy", "Laravel", "REST"],
    },
    {
      label: { pt: "Dados", en: "Data" },
      items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "TypeORM", "Sequelize", "Hibernate"],
    },
    {
      label: { pt: "Infra & ferramentas", en: "Infra & tooling" },
      items: ["Docker", "AWS (S3)", "Nginx", "Linux / bash", "Git & GitHub", "Vite", "Vitest"],
    },
    {
      label: { pt: "IA & automação", en: "AI & automation" },
      items: ["MCP (Model Context Protocol)", "Claude Code", "Kiro CLI", "OpenAI Codex", "Atlassian / Jira MCP"],
    },
  ] satisfies StackGroup[],
  experience: [
    {
      company: "Solution TI",
      role: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" },
      period: { pt: "jul 2025 — atual", en: "Jul 2025 — present" },
      place: { pt: "Rio de Janeiro, BR", en: "Rio de Janeiro, BR" },
      current: true,
      bullets: [
        {
          pt: "Lidero o desenvolvimento e a manutenção do sistema de transferência e emplacamento de veículos em parceria com o Detran-PE.",
          en: "I lead development and maintenance of the vehicle transfer and registration system in partnership with Detran-PE.",
        },
        {
          pt: "Front-end em React + TypeScript com Tailwind e shadcn/ui, priorizando fluxos longos de formulário sem perder desempenho.",
          en: "Front-end in React + TypeScript with Tailwind and shadcn/ui, built around long form flows without losing performance.",
        },
        {
          pt: "Back-end em Groovy/Grails: regras de negócio, APIs e modelagem e otimização do banco de dados.",
          en: "Back-end in Groovy/Grails: business rules, APIs, plus database modeling and tuning.",
        },
        {
          pt: "Infraestrutura na AWS, com Amazon S3 para armazenamento e gestão de arquivos da aplicação.",
          en: "AWS infrastructure, using Amazon S3 for application file storage and management.",
        },
        {
          pt: "Responsável por integrar agentes de IA ao fluxo de desenvolvimento via MCP, com code review automático nos pull requests.",
          en: "Responsible for integrating AI agents into the development workflow through MCP, with automated code review on pull requests.",
        },
        {
          pt: "Automatizei a documentação de tarefas e entregas, padronizando o registro técnico e cortando escrita manual repetitiva.",
          en: "Automated task and delivery documentation, standardizing technical records and cutting repetitive manual writing.",
        },
      ],
      tags: ["React", "TypeScript", "Grails", "Groovy", "AWS S3", "SQL", "MCP", "IA"],
    },
    {
      company: "Meest Digital",
      role: { pt: "Desenvolvedor Web", en: "Web Developer" },
      period: { pt: "fev 2025 — jul 2025", en: "Feb 2025 — Jul 2025" },
      place: { pt: "São Paulo, BR (remoto)", en: "São Paulo, BR (remote)" },
      bullets: [
        {
          pt: "Evolução de e-commerces, plataformas digitais e apps móveis, com foco em novas funcionalidades e integrações.",
          en: "Evolved e-commerce sites, digital platforms and mobile apps, focused on new features and integrations.",
        },
        {
          pt: "Front-end e mobile com React, React Native e TypeScript; back-end e regras de negócio com PHP e Laravel.",
          en: "Front-end and mobile with React, React Native and TypeScript; back-end and business rules with PHP and Laravel.",
        },
        {
          pt: "Customização e manutenção de lojas VTEX e projetos WordPress.",
          en: "Customization and maintenance of VTEX stores and WordPress projects.",
        },
      ],
      tags: ["React", "React Native", "Laravel", "PHP", "VTEX", "WordPress"],
    },
    {
      company: "LessLoss IoT",
      role: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" },
      period: { pt: "dez 2023 — mar 2024", en: "Dec 2023 — Mar 2024" },
      place: { pt: "Recife, BR", en: "Recife, BR" },
      bullets: [
        {
          pt: "Reformulei a interface do sistema de monitoramento de fluidos para deixá-la mais legível e acessível ao operador.",
          en: "Reworked the fluid monitoring system interface to make it more readable and accessible to the operator.",
        },
        {
          pt: "Manutenção de páginas dinâmicas em Angular e correção de bugs de compatibilidade em desktop, tablet e mobile.",
          en: "Maintained dynamic Angular pages and fixed compatibility bugs across desktop, tablet and mobile.",
        },
        {
          pt: "Conteinerização com Docker para testes em ambiente isolado.",
          en: "Containerized the app with Docker for isolated test environments.",
        },
      ],
      tags: ["Angular", "TypeScript", "Docker"],
    },
  ] satisfies ExperienceEntry[],
  education: [
    {
      school: "Estácio",
      course: {
        pt: "Análise e Desenvolvimento de Sistemas",
        en: "Systems Analysis and Development",
      },
      period: "2026 — 2028",
    },
    {
      school: "Trybe",
      course: {
        pt: "Desenvolvimento Web Full Stack",
        en: "Full Stack Web Development",
      },
      period: "2021 — 2023",
    },
  ] satisfies EducationEntry[],
  projects,
  contact: {
    email: "w.felipebraz@gmail.com",
    phoneLabel: "+55 21 97214-5252",
    whatsapp: "https://wa.me/5521972145252",
    linkedin: "https://www.linkedin.com/in/will-felipe",
    github: "https://github.com/w-felipe360",
    /* um PDF por idioma: o botão do hero segue o idioma ativo da interface */
    cv: {
      pt: "/willian-braz-cv-pt.pdf",
      en: "/willian-braz-cv-en.pdf",
    } satisfies Localized,
  },
};
