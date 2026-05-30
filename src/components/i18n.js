export const dict = {
  en: {
    nav: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      title: "Fullstack Developer",
      subtitle: "Computer Science student at PUC-Rio · Open to remote opportunities",
      cta: "Get in Touch",
      resume: "Download CV",
    },
    experience: {
      title: "Professional Experience",
      items: [
        {
          period: "Sep 2025 – Present",
          company: "NewMode E-Sports",
          role: "Software Developer",
          description: "Lead end-to-end (Fullstack) development for an e-sports platform, focusing on backend scalability using Java 17 and Spring Boot. Had a crucial role in developing the company's main website from the ground up. Implement critical features using Lean methodologies, prioritizing time-to-market and resource efficiency in a high-growth startup environment. Refactor and optimize core modules to ensure system maintainability, strictly adhering to SOLID principles, Clean Code, and Design Patterns. Collaborate with technical leadership to architect solutions for real-time match data processing and user concurrency.",
        },
        {
          period: "Aug 2025 – Dec 2025",
          company: "PUC-Rio",
          role: "Teaching Assistant: Advanced Data Structures",
          description: "Provided technical guidance to undergraduate students on complex topics, including persistent data structures, advanced graph theory, and search optimization. Developed support materials and assisted in solving problems related to asymptotic complexity, reinforcing the theoretical basis required for low-level software engineering and distributed systems.",
        },
        {
          period: "Jul 2023 – Jun 2024",
          company: "Tecgraf/PUC-Rio",
          role: "Software Development Intern",
          description: "Engineered and deployed intelligent chatbots for automated Data Discovery, significantly reducing time-to-insight for large-scale datasets. Built backend services for textual data processing and integrated RESTful APIs with SQL databases (PostgreSQL and SQL Server). Operated within an agile environment (Scrum/Kanban), applying software engineering best practices to ensure continuous delivery and high-quality code.",
        },
      ],
    },
    projects: {
      title: "Key Projects",
      items: [
        {
          title: "Data Discovery in Contexts with Missing Metadata",
          subtitle: "Undergraduate Thesis",
          description: "Developed a methodology and software tool for automated data discovery in Data Lakes with partial or non-existent metadata. Implemented algorithms for similarity analysis and functional dependency detection, utilizing coverage and uniqueness metrics to validate table relationships. Architected a system to transform isolated data into structured information, enabling Business Intelligence (BI) on previously uncatalogued volumes of data.",
          tags: ["Java", "Data Discovery", "Algorithms", "SQL"],
          url: "https://github.com/SBNetto01/tcc-dataset-relations",
        },
      ],
    },
    skills: {
      title: "Technical Skills",
      categories: [
        {
          name: "Java Ecosystem",
          skills: ["Java 17", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "JUnit"],
        },
        {
          name: "Frontend",
          skills: ["React", "Angular", "TypeScript", "Bootstrap", "HTML5", "CSS3"],
        },
        {
          name: "Software Engineering",
          skills: ["OOP", "SOLID", "Design Patterns", "REST APIs"],
        },
        {
          name: "Data & Infrastructure",
          skills: ["PostgreSQL", "SQL Server", "Git", "Docker", "Linux"],
        },
        {
          name: "Methodologies",
          skills: ["Scrum", "Kanban"],
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          institution: "PUC-Rio",
          degree: "B.S. in Computer Science",
          period: "Expected Graduation: June 2026",
          description: "Building a strong foundation in software engineering, algorithms, and system architecture.",
        },
      ],
    },
    languages: {
      title: "Languages",
      items: [
        { name: "Portuguese", level: "Native" },
        { name: "English", level: "Fluent" },
        { name: "German", level: "Intermediate" },
        { name: "Spanish", level: "Intermediate" },
        { name: "French", level: "Basic" },
      ],
    },
    contact: {
      title: "Get in Touch",
      subtitle: "I'm currently open to remote opportunities. Feel free to reach out!",
      email: "seunetto1@gmail.com",
      phone: "+55 (24) 99881-6961",
    },
    footer: {
      copyright: "All rights reserved.",
    },
  },
  pt: {
    nav: {
      home: "Início",
      experience: "Experiência",
      projects: "Projetos",
      skills: "Habilidades",
      education: "Educação",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      title: "Desenvolvedor Fullstack",
      subtitle: "Estudante de Ciência da Computação na PUC-Rio · Aberto a oportunidades remotas",
      cta: "Entre em Contato",
      resume: "Baixar CV",
    },
    experience: {
      title: "Experiência Profissional",
      items: [
        {
          period: "Set 2025 – Presente",
          company: "NewMode E-Sports",
          role: "Desenvolvedor de Software",
          description: "Lidero o desenvolvimento Fullstack de uma plataforma de e-sports, com foco em escalabilidade de backend usando Java 17 e Spring Boot. Tive um papel crucial no desenvolvimento do site principal da empresa desde o início. Implemento funcionalidades críticas usando metodologias Lean, priorizando time-to-market e eficiência de recursos em um ambiente de startup de alto crescimento. Refatoro e otimizo módulos principais para garantir manutenibilidade, aderindo estritamente aos princípios SOLID, Clean Code e Design Patterns. Colaboro com a liderança técnica para arquitetar soluções para processamento de dados de partidas em tempo real e concorrência de usuários.",
        },
        {
          period: "Ago 2025 – Dez 2025",
          company: "PUC-Rio",
          role: "Monitor: Estruturas de Dados Avançadas",
          description: "Forneci orientação técnica a alunos de graduação em tópicos complexos, incluindo estruturas de dados persistentes, teoria avançada de grafos e otimização de busca. Desenvolvi materiais de apoio e auxiliei na resolução de problemas relacionados à complexidade assintótica, reforçando a base teórica necessária para engenharia de software de baixo nível e sistemas distribuídos.",
        },
        {
          period: "Jul 2023 – Jun 2024",
          company: "Tecgraf/PUC-Rio",
          role: "Estagiário de Desenvolvimento de Software",
          description: "Projetei e implementei chatbots inteligentes para Descoberta Automática de Dados, reduzindo significativamente o tempo de obtenção de insights em grandes conjuntos de dados. Construí serviços de backend para processamento de dados textuais e integrei APIs RESTful com bancos SQL (PostgreSQL e SQL Server). Operei em ambiente ágil (Scrum/Kanban), aplicando melhores práticas de engenharia de software para garantir entrega contínua e código de alta qualidade.",
        },
      ],
    },
    projects: {
      title: "Projetos Principais",
      items: [
        {
          title: "Data Discovery em Contextos com Metadados Ausentes",
          subtitle: "Trabalho de Conclusão de Curso",
          description: "Desenvolvi uma metodologia e ferramenta de software para descoberta automatizada de dados em Data Lakes com metadados parciais ou inexistentes. Implementei algoritmos para análise de similaridade e detecção de dependências funcionais, utilizando métricas de cobertura e unicidade para validar relacionamentos entre tabelas. Projetei um sistema para transformar dados isolados em informação estruturada, permitindo Business Intelligence (BI) em volumes de dados anteriormente não catalogados.",
          tags: ["Java", "Descoberta de Dados", "Algoritmos", "SQL"],
          url: "https://github.com/SBNetto01/tcc-dataset-relations",
        },
      ],
    },
    skills: {
      title: "Habilidades Técnicas",
      categories: [
        {
          name: "Ecossistema Java",
          skills: ["Java 17", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "JUnit"],
        },
        {
          name: "Frontend",
          skills: ["React", "Angular", "TypeScript", "Bootstrap", "HTML5", "CSS3"],
        },
        {
          name: "Engenharia de Software",
          skills: ["POO", "SOLID", "Design Patterns", "APIs REST"],
        },
        {
          name: "Dados & Infraestrutura",
          skills: ["PostgreSQL", "SQL Server", "Git", "Docker", "Linux"],
        },
        {
          name: "Metodologias",
          skills: ["Scrum", "Kanban"],
        },
      ],
    },
    education: {
      title: "Educação",
      items: [
        {
          institution: "PUC-Rio",
          degree: "Bacharelado em Ciência da Computação",
          period: "Previsão de Conclusão: Junho 2026",
          description: "Construindo uma base sólida em engenharia de software, algoritmos e arquitetura de sistemas.",
        },
      ],
    },
    languages: {
      title: "Idiomas",
      items: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "Fluente" },
        { name: "Alemão", level: "Intermediário" },
        { name: "Espanhol", level: "Intermediário" },
        { name: "Francês", level: "Básico" },
      ],
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Estou aberto a oportunidades remotas. Sinta-se à vontade para entrar em contato!",
      email: "seunetto1@gmail.com",
      phone: "+55 (24) 99881-6961",
    },
    footer: {
      copyright: "Todos os direitos reservados.",
    },
  },
}
