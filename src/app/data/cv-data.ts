import { CvDataInfo } from '../models/cv-data.interface';

export const CV_DATA: CvDataInfo = {
  personalInfo: {
    fullName: 'Rafael Ramos Gutierrez',
    shortName: 'Rafael Ramos',
    title: {
      es: 'Desarrollador Full Stack',
      en: 'Full Stack Developer'
    },
    photo: 'assets/images/profile-photo.webp',
    email: 'rafael.ramosg93@gmail.com',
    phone: '+52 672 723 4653',
    location: 'Culiacán, Sinaloa, México',
    linkedin: 'https://linkedin.com/in/tu-perfil',
    github: 'https://github.com/tu-usuario',
    website: 'https://tu-sitio.com',
    summary: {
      es: `Desarrollador de software con más de 8 años de experiencia
              diseñando y construyendo aplicaciones web robustas y escalables.
              Especializado en Angular, TypeScript y arquitecturas modernas.
              Apasionado por el código limpio, la automatización y la mejora continua.`,
      en: `Software developer with over 8 years of experience
           designing and building robust and scalable web applications.
           Specialized in Angular, TypeScript and modern architectures.
           Passionate about clean code, automation and continuous improvement.`
    }
  },

  experience: [
    {
      id: 1,
      company: 'Empresa Tecnológica SA',
      position: {
        es: 'Desarrollador Frontend Senior',
        en: 'Senior Frontend Developer'
      },
      startDate: '2023-03',
      endDate: 'Actual',
      description: {
        es: 'Liderazgo técnico del equipo de desarrollo frontend para la plataforma principal de e-commerce.',
        en: 'Technical leadership of the frontend development team for the main e-commerce platform.'
      },
      achievements: [
        {
          es: 'Migración exitosa de AngularJS a Angular 17+, reduciendo el bundle size en un 45%',
          en: 'Successful migration from AngularJS to Angular 17+, reducing bundle size by 45%'
        },
        {
          es: 'Implementación de arquitectura basada en micro-frontends con Module Federation',
          en: 'Implementation of micro-frontends architecture with Module Federation'
        },
        {
          es: 'Diseño e implementación de un Design System interno con 40+ componentes reutilizables',
          en: 'Design and implementation of an internal Design System with 40+ reusable components'
        },
        {
          es: 'Mentoría técnica a 4 desarrolladores junior del equipo',
          en: 'Technical mentoring of 4 junior developers on the team'
        }
      ],
      technologies: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'NgRx', 'Nx']
    },
    {
      id: 2,
      company: 'Consultora Digital',
      position: {
        es: 'Desarrollador Full Stack',
        en: 'Full Stack Developer'
      },
      startDate: '2021-01',
      endDate: '2023-02',
      description: {
        es: 'Desarrollo de soluciones web a la medida para clientes del sector financiero y retail.',
        en: 'Development of custom web solutions for clients in the financial and retail sectors.'
      },
      achievements: [
        {
          es: 'Desarrollo de portal bancario con Angular + Spring Boot, procesando 10K+ transacciones diarias',
          en: 'Development of banking portal with Angular + Spring Boot, processing 10K+ daily transactions'
        },
        {
          es: 'Integración de APIs REST y GraphQL con manejo avanzado de caché y estados',
          en: 'Integration of REST and GraphQL APIs with advanced cache and state management'
        },
        {
          es: 'Implementación de pipelines CI/CD con Jenkins y GitHub Actions',
          en: 'Implementation of CI/CD pipelines with Jenkins and GitHub Actions'
        },
        {
          es: 'Reducción del 30% en tiempos de carga mediante lazy loading y optimización de assets',
          en: '30% reduction in load times through lazy loading and asset optimization'
        }
      ],
      technologies: ['Angular', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'AWS']
    },
    {
      id: 3,
      company: 'Startup Innovadora',
      position: {
        es: 'Desarrollador Frontend Jr.',
        en: 'Junior Frontend Developer'
      },
      startDate: '2019-06',
      endDate: '2020-12',
      description: {
        es: 'Desarrollo de interfaces de usuario para plataforma SaaS de gestión empresarial.',
        en: 'User interface development for enterprise management SaaS platform.'
      },
      achievements: [
        {
          es: 'Construcción del dashboard principal con gráficas interactivas usando D3.js',
          en: 'Built the main dashboard with interactive charts using D3.js'
        },
        {
          es: 'Desarrollo de sistema de notificaciones en tiempo real con WebSockets',
          en: 'Development of real-time notification system with WebSockets'
        },
        {
          es: 'Implementación de pruebas unitarias alcanzando un 80% de cobertura',
          en: 'Implementation of unit tests achieving 80% coverage'
        }
      ],
      technologies: ['Angular', 'TypeScript', 'D3.js', 'Firebase', 'Material Design']
    }
  ],

  education: [
    {
      id: 1,
      institution: 'Universidad Autónoma de Ejemplo',
      degree: {
        es: 'Ingeniería',
        en: 'Bachelor of Engineering'
      },
      field: {
        es: 'Sistemas Computacionales',
        en: 'Computer Systems'
      },
      startDate: '2015',
      endDate: '2020',
      description: {
        es: 'Especialización en desarrollo de software y bases de datos. Titulado con mención honorífica.',
        en: 'Specialization in software development and databases. Graduated with honors.'
      }
    },
    {
      id: 2,
      institution: 'Platzi / Udemy',
      degree: {
        es: 'Certificación',
        en: 'Certification'
      },
      field: {
        es: 'Angular Avanzado & Arquitectura Frontend',
        en: 'Advanced Angular & Frontend Architecture'
      },
      startDate: '2021',
      endDate: '2023',
      description: {
        es: 'Programa intensivo de especialización en frameworks modernos de JavaScript.',
        en: 'Intensive specialization program in modern JavaScript frameworks.'
      }
    }
  ],

  projects: [
    {
      id: 1,
      title: 'CV Digital',
      description: {
        es: 'Portafolio personal y currículum digital construido con Angular v21, desplegado en GitHub Pages. Diseño industrial oscuro con animaciones de scroll.',
        en: 'Personal portfolio and digital resume built with Angular v21, deployed on GitHub Pages. Dark industrial design with scroll animations.'
      },
      technologies: ['Angular 21', 'TypeScript', 'SCSS', 'GitHub Pages'],
      liveUrl: 'https://tu-usuario.github.io/cv-digital/',
      repoUrl: 'https://github.com/tu-usuario/cv-digital',
      featured: true
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: {
        es: 'Panel de control con visualización de datos en tiempo real, gráficas interactivas y reportes exportables.',
        en: 'Control panel with real-time data visualization, interactive charts and exportable reports.'
      },
      technologies: ['Angular', 'D3.js', 'NgRx', 'WebSockets', 'Node.js'],
      repoUrl: 'https://github.com/tu-usuario/dashboard',
      featured: true
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: {
        es: 'Plataforma completa de comercio electrónico con catálogo, carrito de compras, pasarela de pagos y panel de administración.',
        en: 'Complete e-commerce platform with catalog, shopping cart, payment gateway and admin panel.'
      },
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Stripe', 'Docker'],
      repoUrl: 'https://github.com/tu-usuario/ecommerce',
      featured: true
    },
    {
      id: 4,
      title: 'Task Manager API',
      description: {
        es: 'API RESTful para gestión de proyectos y tareas con autenticación JWT, roles y permisos granulares.',
        en: 'RESTful API for project and task management with JWT authentication, granular roles and permissions.'
      },
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Jest'],
      repoUrl: 'https://github.com/tu-usuario/task-api',
      featured: false
    }
  ],

  certifications: [
    {
      name: 'Angular - Avanzado',
      issuer: 'Platzi',
      date: '2023',
      url: 'https://platzi.com/p/tu-usuario/curso/angular-avanzado/'
    },
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2022',
      url: 'https://www.credly.com/badges/tu-badge'
    },
    {
      name: 'Scrum Fundamentals Certified',
      issuer: 'SCRUMstudy',
      date: '2021',
      url: 'https://www.scrumstudy.com/certification/verify'
    }
  ],

   technologies: [
    // ─── Lenguajes ───
    { name: 'TypeScript', iconKey: 'typescript',    category: 'languages' },
    { name: 'JavaScript', iconKey: 'javascript',    category: 'languages' },
    { name: 'HTML5',      iconKey: 'html5',         category: 'languages' },
    { name: 'CSS3',       iconKey: 'css3',          category: 'languages' },
    { name: 'Java',       iconKey: 'java',          category: 'languages' },
    { name: 'Python',     iconKey: 'python',        category: 'languages' },
    { name: 'PHP',        iconKey: 'php',        category: 'languages' },

    // ─── Frameworks y Librerías ───
    { name: 'Angular',        iconKey: 'angular',       category: 'frameworks' },
    { name: 'RxJS',           iconKey: 'rxjs',          category: 'frameworks' },
    { name: 'Node.js',        iconKey: 'nodejs',        category: 'frameworks' },
    { name: 'Express',        iconKey: 'express',       category: 'frameworks' },
    { name: 'Spring Boot',    iconKey: 'spring',        category: 'frameworks' },
    { name: 'SCSS / Sass',    iconKey: 'sass',          category: 'frameworks' },
    { name: 'Tailwind CSS',   iconKey: 'tailwindcss',   category: 'frameworks' },
    { name: 'jQuery',         iconKey: 'jquery',        category: 'frameworks' },

    // ─── Bases de Datos ───
    { name: 'PostgreSQL',    iconKey: 'postgresql',     category: 'databases' },
    { name: 'MongoDB',       iconKey: 'mongodb',        category: 'databases' },
    { name: 'MySQL',         iconKey: 'mysql',          category: 'databases' },
    { name: 'Firebase',      iconKey: 'firebase',       category: 'databases' },
    { name: 'Redis',         iconKey: 'redis',          category: 'databases' },
    { name: 'SQL Server',    iconKey: 'mssql',          category: 'databases' },

    // ─── Herramientas ───
    { name: 'Git',            iconKey: 'git',         category: 'tools' },
    { name: 'GitLab',         iconKey: 'gitlab',      category: 'tools' },
    { name: 'GitHub',         iconKey: 'github',      category: 'tools' },
    { name: 'Docker',         iconKey: 'docker',      category: 'tools' },
    { name: 'VS Code',        iconKey: 'vscode',      category: 'tools' },
    { name: 'Postman',        iconKey: 'postman',     category: 'tools' },
    { name: 'Jira',           iconKey: 'jira',        category: 'tools' },
    { name: 'npm',            iconKey: 'npm',         category: 'tools' },
    { name: 'Confluence',     iconKey: 'confluence',  category: 'tools' },
    

    // ─── Cloud y DevOps ───
    { name: 'AWS',           iconKey: 'aws',              category: 'cloud' },
    { name: 'GitHub Actions',iconKey: 'githubactions',    category: 'cloud' },
    { name: 'Nginx',         iconKey: 'nginx',            category: 'cloud' },
    { name: 'Linux',         iconKey: 'linux',            category: 'cloud' },
    { name: 'Jenkins',       iconKey: 'jenkins',          category: 'cloud' },
    { name: 'Azure DevOps',  iconKey: 'azuredevops',      category: 'cloud' },

    // ─── Testing ───
    { name: 'Jest',          iconKey: 'jest',          category: 'testing' },
    { name: 'Vitest',        iconKey: 'vitest',        category: 'testing' },
  ],
};