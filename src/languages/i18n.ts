import { createI18n } from "vue-i18n";
import { Images } from "@/assets/images";

const messages = {
    us: {
        HomePage: {
            ProfileSection: {
                introduction: "Hi, I'm João Vitor Tadeo",
                description: "Full Stack Developer - Vue - Node.js - TypeScript",
                linkedinButton: "Let's Connect!",
                resumeButton: "My Resume"
            },
            ProfessionallyIntroducedSection: {
                title: "Building Full Stack Solutions",
                description: "Full Stack Developer specializing in Vue, Node.js and TypeScript focused on building scalable web applications and dynamic dashboards.",
                backgroundDescription: "Passionate developer with experience in building dashboards, APIs, and real-time interfaces. Currently working on-site at HTM Eletrônica.",
                techStackTitle: "Tech Stack",
                learnMoreAboutMeButton: "Learn More About Me"
            },
            ProjectsSection: {
                title: "Featured Projects",
                description: "A selection of my recent work in full-stack development and real-time systems.",
                viewAllProjectsButton: "View All Projects"
            }
        },
        AboutPage: {
            ProfessionalSection: {
                title: "Professional Summary",
                description: "I'm a Full Stack developer passionate about building clean, responsive, and user-focused web applications. I specialize in Vue, Node.js, TypeScript, and React, and have hands-on experience developing real-time dashboards, scalable APIs, and custom ERP integrations. At HTM Eletrônica, I’ve worked on automating operational flows, implementing custom reporting solutions with ADVPL for Protheus, and integrating asynchronous systems using Redis and RabbitMQ. I’m always eager to learn, grow, and take on meaningful challenges independently or as part of a team."
            },
            EducationSection: {
                title: "Education",
                Degree: {
                    title: "Associate Degree in Systems Analysis and Development",
                    institution: "Federal Institute of São Paulo – Bragança Paulista Campus",
                    date: "Graduated in December 2024"
                }
            },
            TechnologiesSection: {
                title: "Technologies",
                languages: "Programming Languages",
                frameworks: "Frameworks",
                backend: "Back-end & Infrastructure",
                tools: "Tools & Platforms"
            },
            ExperienceSection: {
                title: "Work Experience",
                HTMEletronica: {
                    jobTitle: "Junior Full Stack Developer",
                    date: "May 2024 – Present",
                    companyTitle: "HTM Eletrônica",
                    location: "Amparo, São Paulo · On-site",
                    responsibilities: [
                        "Developed real-time dashboards using Vue.js, Quasar, and WebSocket for live operator metrics.",
                        "Created and optimized RESTful APIs with Express and Node.js to serve consolidated data to the frontend.",
                        "Integrated Redis caching to improve request performance and reduce latency.",
                        "Consumed and improved RabbitMQ workers to enhance asynchronous data synchronization.",
                        "Implemented automated email workflows triggered by custom business logic.",
                        "Built custom reporting routines in ADVPL for the Protheus ERP system."
                    ]
                }
            },
            CourseSection: {
                webTitle: "Courses & Certifications",
                courses: [
                    {
                        title: "JavaScript – Complete Course with 6 Real Projects",
                        institutionAndDate: "Udemy · 2023",
                        certificateLink: "https://www.udemy.com/certificate/UC-26142b49-fd15-4bae-b9e9-db3830828aac/"
                    },
                    {
                        title: "React – From Zero to Mastery (Hooks, Router, API, Projects)",
                        institutionAndDate: "Udemy · 2023",
                        certificateLink: "https://www.udemy.com/certificate/UC-f359994e-6313-4ac1-bc53-2063e5bd5a94/"
                    },
                    {
                        title: "UI & UX Design for Apps and Websites – Adobe XD and PSD",
                        institutionAndDate: "Udemy · 2023",
                        certificateLink: "https://www.udemy.com/certificate/UC-d7651161-8e33-405f-b68a-85fc0ee77246/"
                    },
                    {
                        title: "Programming in ADVPL – From Scratch",
                        institutionAndDate: "Udemy · 2025",
                        certificateLink: "https://www.udemy.com/certificate/UC-ac608500-4aef-4b18-aff5-2400e41e2036/"
                    },
                ],
                gameDevTitle: "Game Development & 3D Art",
                gameDevCourses: [
                    {
                        title: "Digital Sculpting with Blender",
                        institutionAndDate: "Udemy · 2022",
                        certificateLink: "https://www.udemy.com/certificate/UC-538bd6af-1128-4087-af97-3f6a61e261a6/"
                    },
                    {
                        title: "Beginner Game Development – Quick and Straightforward",
                        institutionAndDate: "Udemy · 2023",
                        certificateLink: "https://www.udemy.com/certificate/UC-e0376dfb-f650-4f7c-89ad-1e033f263dc3/"
                    },
                    {
                        title: "Complete Blender Creator: Learn 3D Modelling for Beginners",
                        institutionAndDate: "Udemy · 2025",
                        certificateLink: "https://www.udemy.com/certificate/UC-a5ab5520-81cf-4e7e-a844-6673dbd3f51e/"
                    },
                    {
                        title: "Texturing a Complete Scene in Substance 3D Painter",
                        institutionAndDate: "Udemy · 2025",
                        certificateLink: "https://www.udemy.com/certificate/UC-3bded6cb-916b-4c78-9c84-c5411e9ecbcb/"
                    },
                ]
            }
        },
        ProjectPage: {
            title: "Projects",
            description: "A curated collection of web development projects built primarily with React, along with technologies like TypeScript, Node.js, and Vue. These works showcase my ability to create dynamic UIs, scalable APIs, and responsive user experiences.",
            WebAndMobileSection: {
                title: "Web & Mobile",
                projects: [
                    {
                        title: "Fetch Pets - Mobile",
                        description: "A final course project focused on pet adoption and donation. This fully functional mobile app was built using React Native for the front end and Node.js with Express for the back end. Supabase was used for database management and authentication. Key features include user registration, pet listings, management, and a complete authentication flow with real-time data updates.",
                        githubLink: "https://github.com/felipergoncalves/mobile-fetch-pets",
                        image: Images.FetchPetPreview,
                        altImage: "Fetch Pets App Preview",
                        tags: ["React Native", "TypeScript", "Node.JS", "Express", "Supabase"]
                    },
                    {
                        title: "PokeDex",
                        description: "A simple PokeDex built using React and Tailwind CSS. It fetches data from the PokeAPI and displays information about different Pokemon.",
                        githubLink: "https://github.com/JvTadeo/PokeDex",
                        image: Images.PokeDex,
                        altImage: "PokeDex Preview",
                        tags: ["React", "Tailwind CSS", "PokeAPI"]
                    },
                    {
                        title: "ToDo",
                        description: "A simple ToDo application where you can add tasks, mark them as completed, and delete them. Built with React and Tailwind CSS.",
                        githubLink: "https://github.com/JvTadeo/ToDo",
                        image: Images.TodoPreview,
                        altImage: "ToDo Preview",
                        tags: ["React", "Tailwind CSS"]
                    }
                ]
            },
            GameDevSection: {
                title: "Game Development",
                projects: [
                    {
                        title: "Pong",
                        description: "A simple Pong remake developed in Unity for self-practice. While the project is small in scope, it has been a great opportunity to strengthen my understanding of game mechanics, Unity's component system, and C# scripting.",
                        githubLink: "https://github.com/JvTadeo/PongClone",
                        itchLink: "https://tadeozin.itch.io/pong-clone",
                        image: Images.PongMenuPreview,
                        altImage: "Pong Preview",
                        tags: ["Unity", "C#"]
                    }
                ]
            }            
        }
    },
    br: {
        HomePage: {
            ProfileSection: {
                introduction: "Oi, Eu sou João Vitor Tadeo",
                description: "Desenvolvedor Full Stack - Vue - Node.js - TypeScript",
                linkedinButton: "Vamos Conectar!",
                resumeButton: "Curriculo"
            },
            ProfessionallyIntroducedSection: {
                title: "Construindo Soluções Full Stack",
                description: "Desenvolvedor Full Stack especializado em Vue, Node.js e TypeScript, focado na criação de aplicações web escaláveis e dashboards dinâmicos.",
                backgroundDescription: "Desenvolvedor apaixonado com experiência na criação de dashboards, APIs e interfaces em tempo real. Atualmente trabalhando presencialmente na HTM Eletrônica.",
                techStackTitle: "Tecnologias",
                learnMoreAboutMeButton: "Saiba Mais Sobre Mim"
            },
            ProjectsSection: {
                title: "Projetos em Destaque",
                description: "Uma seleção dos meus trabalhos recentes em desenvolvimento full-stack e sistemas em tempo real.",
                viewAllProjectsButton: "Ver Todos os Projetos"
            }
        },
        AboutPage: {
            ProfessionalSection: {
                title: "Resumo Profissional",
                description: "Sou um desenvolvedor Full Stack apaixonado por criar aplicações web limpas, responsivas e focadas no usuário. Tenho especialização em Vue, Node.js, TypeScript e React, com experiência prática no desenvolvimento de dashboards em tempo real, APIs escaláveis e integrações personalizadas com sistemas ERP. Na HTM Eletrônica, atuei na automação de fluxos operacionais, implementação de soluções de relatórios personalizados em ADVPL para o Protheus e integração de sistemas assíncronos utilizando Redis e RabbitMQ. Estou sempre em busca de aprender, evoluir e encarar desafios significativos seja de forma independente ou em equipe."
            },
            EducationSection: {
                title: "Formação Acadêmica",
                Degree: {
                    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
                    institution: "Instituto Federal de São Paulo – Campus Bragança Paulista",
                    date: "Concluído em Dezembro de 2024"
                }
            },
            TechnologiesSection: {
                title: "Tecnologias",
                languages: "Linguagens de Programação",
                frameworks: "Frameworks",
                backend: "Back-end e Infraestrutura",
                tools: "Ferramentas e Plataformas"
            },
            ExperienceSection: {
                title: "Experiência Profissional",
                HTMEletronica: {
                    jobTitle: "Desenvolvedor Full Stack Júnior",
                    date: "Maio de 2024 – Atualmente",
                    companyTitle: "HTM Eletrônica",
                    location: "Amparo, São Paulo · Presencial",
                    responsibilities: [
                        "Desenvolvimento de dashboards em tempo real utilizando Vue.js, Quasar e WebSocket para métricas operacionais ao vivo.",
                        "Criação e otimização de APIs RESTful com Express e Node.js para fornecer dados consolidados ao frontend.",
                        "Integração de cache com Redis para melhorar a performance das requisições e reduzir a latência.",
                        "Consumo e aprimoramento de workers do RabbitMQ para melhorar a sincronização assíncrona de dados.",
                        "Implementação de fluxos automatizados de e-mail baseados em regras de negócio personalizadas.",
                        "Criação de rotinas personalizadas de relatórios em ADVPL para o sistema ERP Protheus."
                    ]
                }
            },
            CourseSection: {
                webTitle: "Cursos & Certificados",
                courses: [
                    {
                        title: "JavaScript - Curso Completo Com 6 Projetos Reais",
                        institutionAndDate: "Udemy · 2023",
                        certificateLink: "https://www.udemy.com/certificate/UC-26142b49-fd15-4bae-b9e9-db3830828aac/"
                    },
                    {
                        title: "React do Zero a Maestria (c/ hooks, router, API, Projetos)",
                        institutionAndDate: "Udemy · 2023",
                        certificateLink: "https://www.udemy.com/certificate/UC-f359994e-6313-4ac1-bc53-2063e5bd5a94/"
                    },
                    {
                        title: "UI & UX Design de aplicativos e sites - Adobe XD e PSD 2024",
                        institutionAndDate: "Udemy · 2023",
                        certificateLink: "https://www.udemy.com/certificate/UC-d7651161-8e33-405f-b68a-85fc0ee77246/"
                    },
                    {
                        title: "Programando em ADVPL - Aprenda do Zero",
                        institutionAndDate: "Udemy · 2025",
                        certificateLink: "https://www.udemy.com/certificate/UC-ac608500-4aef-4b18-aff5-2400e41e2036/"
                    },
                ],
                gameDevTitle: "Desenvolvimento de Jogos & Arte 3D",
                gameDevCourses: [
                    {
                        title: "Escultura Digital com o Blender",
                        institutionAndDate: "Udemy · 2022",
                        certificateLink: "https://www.udemy.com/certificate/UC-538bd6af-1128-4087-af97-3f6a61e261a6/"
                    },
                    {
                        title: "Iniciante Desenvolvimento de Jogos! Rápido, Fácil e Direto.",
                        institutionAndDate: "Udemy · 2023",
                        certificateLink: "https://www.udemy.com/certificate/UC-e0376dfb-f650-4f7c-89ad-1e033f263dc3/"
                    },
                    {
                        title: "Complete Blender Creator: Learn 3D Modelling for Beginners",
                        institutionAndDate: "Udemy · 2025",
                        certificateLink: "https://www.udemy.com/certificate/UC-a5ab5520-81cf-4e7e-a844-6673dbd3f51e/"
                    },
                    {
                        title: "Texturing a Complete Scene in Substance 3D Painter",
                        institutionAndDate: "Udemy · 2025",
                        certificateLink: "https://www.udemy.com/certificate/UC-3bded6cb-916b-4c78-9c84-c5411e9ecbcb/"
                    },
                ]
            }
        },
        ProjectPage: {
            title: "Projetos",
            description: "Uma coleção selecionada de projetos de desenvolvimento web criados principalmente com React, além de tecnologias como TypeScript, Node.js e Vue. Esses trabalhos demonstram minha capacidade de criar interfaces dinâmicas, APIs escaláveis e experiências responsivas para o usuário.",
            WebAndMobileSection: {
                title: "Web e Mobile",
                projects: [
                    {
                        title: "Fetch Pets - Mobile",
                        description: "Projeto final de curso focado em adoção e doação de pets. Este aplicativo mobile totalmente funcional foi desenvolvido com React Native no front-end e Node.js com Express no back-end. O Supabase foi utilizado para o gerenciamento do banco de dados e autenticação. Os principais recursos incluem cadastro de usuários, listagem e gerenciamento de pets, e um fluxo completo de autenticação com atualizações de dados em tempo real.",
                        githubLink: "https://github.com/felipergoncalves/mobile-fetch-pets",
                        image: Images.FetchPetPreview,
                        altImage: "Prévia do App Fetch Pets",
                        tags: ["React Native", "TypeScript", "Node.JS", "Express", "Supabase"]
                    },
                    {
                        title: "PokeDex",
                        description: "Uma Pokédex simples construída com React e Tailwind CSS. Ela consome dados da PokeAPI e exibe informações sobre diferentes Pokémon.",
                        githubLink: "https://github.com/JvTadeo/PokeDex",
                        image: Images.PokeDex,
                        altImage: "Prévia da PokeDex",
                        tags: ["React", "Tailwind CSS", "PokeAPI"]
                    },
                    {
                        title: "ToDo",
                        description: "Um aplicativo simples de tarefas (ToDo) onde você pode adicionar tarefas, marcá-las como concluídas e excluí-las. Desenvolvido com React e Tailwind CSS.",
                        githubLink: "https://github.com/JvTadeo/ToDo",
                        image: Images.TodoPreview,
                        altImage: "Prévia do ToDo",
                        tags: ["React", "Tailwind CSS"]
                    }
                ]
            },
            GameDevSection: {
                title: "Desenvolvimento de Jogos",
                projects: [
                    {
                        title: "Pong",
                        description: "Um remake simples do jogo Pong, desenvolvido no Unity como prática pessoal. Embora o projeto tenha escopo pequeno, foi uma ótima oportunidade para aprimorar meu entendimento sobre mecânicas de jogo, sistema de componentes do Unity e programação em C#.",
                        githubLink: "https://github.com/JvTadeo/PongClone",
                        itchLink: "https://tadeozin.itch.io/pong-clone",
                        image: Images.PongMenuPreview,
                        altImage: "Prévia do Pong",
                        tags: ["Unity", "C#"]
                    }
                ]
            }
        }
    },
};

export const i18n = createI18n({
    legacy: false,
    locale: "us",
    fallbackLocale: "us",
    messages,
});