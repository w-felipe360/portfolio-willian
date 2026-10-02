import lowsetupLogo from "@/assets/projects/lowsetup.svg";
import lovuLogo from "@/assets/projects/lovu.svg";
import psiLogo from "@/assets/projects/psi.webp";

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
  /* identidade do próprio projeto, tirada do repositório dele */
  brand?: ProjectBrand;
}

export interface ProjectBrand {
  logo: string;
  /** fundo do selo da logo e do botão de seta */
  soft: string;
  /** cor do ícone sobre `soft` */
  ink: string;
  /** cor que tinge levemente o card */
  tint: string;
  /** logo sem fundo próprio: precisa de respiro dentro do selo */
  padded?: boolean;
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
    brand: { logo: lowsetupLogo, soft: "#121218", ink: "#d1c9fc", tint: "#8f82e6" },
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
    brand: { logo: lovuLogo, soft: "#ffe2e2", ink: "#4d3636", tint: "#e8a49a" },
  },
  {
    name: "psigabriellebrandao.com",
    year: "2025",
    summary: {
      pt: "Site de uma página para uma psicóloga clínica, sem backend e sem coleta de dados. A página leva o visitante direto ao WhatsApp dela.",
      en: "One-page site for a clinical psychologist, with no backend and no data collection. The page sends visitors straight to her WhatsApp.",
    },
    tags: ["React", "Vite", "Tailwind CSS"],
    live: "https://psigabriellebrandao.com",
    brand: { logo: psiLogo, soft: "#e2eaf8", ink: "#012c78", tint: "#5e86c9", padded: true },
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
  intro: {
    pt: "Construo aplicações web de ponta a ponta. No front-end uso React, Next.js, TypeScript e Tailwind; no back-end, Node.js, NestJS, Spring Boot e Grails, sobre PostgreSQL, Docker e AWS. Também uso agentes de IA conectados por MCP às ferramentas do time para automatizar procedimentos internos, como code review nos pull requests e documentação de tarefas.",
    en: "I build web applications end to end. On the front-end I use React, Next.js, TypeScript and Tailwind; on the back-end, Node.js, NestJS, Spring Boot and Grails, running on PostgreSQL, Docker and AWS. I also use AI agents connected through MCP to the team's tools to automate internal procedures, such as pull request reviews and task documentation.",
  } satisfies Localized,
  about: [
    {
      pt: "Cuido da aplicação inteira, da tela e da API até o banco de dados e o container em produção.",
      en: "I take care of the whole application, from the screen and the API down to the database and the container in production.",
    },
    {
      pt: "Desde 2021, entre IoT, e-commerce e sistemas integrados a órgãos públicos. Inglês em nível profissional.",
      en: "Since 2021, across IoT, e-commerce and systems integrated with government agencies. Professional-level English.",
    },
    {
      pt: "No trabalho, uso agentes de IA ligados por MCP às ferramentas do time. Eles revisam os pull requests e mantêm a documentação das tarefas atualizada.",
      en: "At work I use AI agents connected through MCP to the team's tools. They review pull requests and keep task documentation up to date.",
    },
    {
      pt: "Fora do editor: jogos e ficção científica.",
      en: "Outside the editor: games and sci-fi.",
    },
  ] satisfies Localized[],
  numbers: [
    {
      value: "4+",
      label: { pt: "anos escrevendo código", en: "years writing code" } satisfies Localized,
    },
    {
      value: "3",
      label: { pt: "anos de experiência profissional", en: "years of professional experience" } satisfies Localized,
    },
  ],
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
          pt: "Front-end em React + TypeScript com Tailwind e shadcn/ui, com atenção ao desempenho em formulários longos.",
          en: "Front-end in React + TypeScript with Tailwind and shadcn/ui, with attention to performance on long forms.",
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
          pt: "Integrei agentes de IA ao fluxo de desenvolvimento via MCP, com code review automático nos pull requests.",
          en: "Integrated AI agents into the development workflow through MCP, with automated code review on pull requests.",
        },
        {
          pt: "Automatizei a documentação de tarefas e entregas. O registro técnico ficou padronizado e a escrita manual repetitiva diminuiu.",
          en: "Automated task and delivery documentation, which standardized technical records and reduced repetitive manual writing.",
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
          pt: "Novas funcionalidades e integrações em e-commerces, plataformas digitais e apps móveis.",
          en: "Built new features and integrations for e-commerce sites, digital platforms and mobile apps.",
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
