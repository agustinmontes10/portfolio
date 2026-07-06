

const resources = {
    en: {
        translation: {
            welcome: "Welcome to my portfolio",
            description: "This is a showcase of my work",
            hero: {
                title: "Hi, I'm",
                role: 'AI Developer',
                subtitle: "AI Agents, Automations & Full Stack Web Development",
                downloadCV: "Download CV",
                available: "Available for work",
            },
            contact: {
                title: "Contact",
                name: "First Name",
                lastname: "Last Name",
                email: "Email",
                message: "Message",
                placeholder_name: "First Name",
                placeholder_lastname: "Last Name",
                placeholder_email: "Email",
                placeholder_message: "Write your message...",
                send: "Send Message",
                thanks: "Thank you for reaching out! 🙌",
                project_question: "Do you have a project in mind?",
                contactme: "Contact me!",
                fill_all: "Please fill out all fields."
            },
            experience: {
                title: "Experience",
                exp1_title: "Full Stack Web Developer",
                exp1_company: "Noswar Studios",
                exp1_date: "2023 - 2025",
                exp1_desc: "I participated in various projects using technologies such as React, Next.js, SCSS, and other modern web ecosystem tools. Throughout these experiences, I worked with different teams, adopting agile and collaborative methodologies that allowed me to adapt easily and contribute effectively to product development.",
                exp2_title: "Full Stack Web Developer",
                exp2_company: "Freelance",
                exp2_date: "2021 - 2023",
                exp2_desc: "Development of web applications as a freelancer, mainly focused on frontend, using modern technologies such as Next.js, Firebase, Supabase, Tailwind CSS, Bootstrap, among others. I have experience dealing directly with clients, covering the entire development process: from initial planning to implementation and final delivery."
            },
            projects: {
                title: "Projects",
                filter: {
                    all: "All",
                    web: "Web Dev",
                    automation: "Automation",
                    aiAgent: "AI Agents",
                },
                empty: "Coming soon...",
                project6: {
                    description: "SaaS to manage appointments for salons and aesthetic centers",
                    text: "Aesthetic is a SaaS I built end to end to manage appointments for hair salons and aesthetic centers. Each business onboards with its own MercadoPago account via OAuth, enabling both platform subscriptions and deposit payments for bookings. A WhatsApp chatbot built on Meta's official API lets clients book and manage appointments through conversation. The frontend is built with Next.js, Tailwind and TypeScript (deployed on Vercel), while the backend runs on Hono, Drizzle and PostgreSQL over Supabase, deployed on Cloudflare. Business automations and integrations are orchestrated with a self-hosted n8n instance."
                },
                project8: {
                    description: "AI agent that manages WhatsApp bookings for the Aesthetic SaaS",
                    text: "The conversational engine behind Aesthetic's WhatsApp bot. Built in n8n around an AI Agent node connected to OpenAI, it keeps a memory of the conversation per client and calls a set of tools — search or create clients, list services, check available hours and agenda, book and cancel appointments — to resolve the entire booking flow in natural language. It identifies the business and client from the incoming WhatsApp webhook, persists the conversation history, and replies through the WhatsApp API, letting each business run its own AI receptionist with no manual intervention."
                },
                project7: {
                    description: "WhatsApp chatbot for a property management company",
                    text: "A WhatsApp chatbot built for a property management company (administración de consorcios). It answers frequently asked questions automatically and routes conversations to human advisors when needed, integrating with Chatwoot as the inbox and agent system so the team can pick up chats seamlessly. It also runs automated satisfaction surveys and other conversational flows, reducing manual workload and speeding up response times for residents and owners."
                },
                project9: {
                    description: "WhatsApp AI agent for tracking personal expenses and budgets by voice or text",
                    text: "A personal finance assistant that lives inside WhatsApp. Built with n8n around an OpenAI-powered AI Agent, it understands both typed messages and voice notes — audio is downloaded and transcribed with Whisper before reaching the agent. It exposes tools to register, edit, delete and list expenses, define and compare budgets per category and period, and check spending against the stored limits in Postgres. When a budget limit is reached, it automatically generates a MercadoPago payment link through the API, closing the loop between tracking and payment."
                },
                project1: {
                    description: "Carpooling app to share rides",
                    text: "Carpooling platform developed with modern technologies. Next.js and React were used to create a smooth and responsive interface, Firebase for authentication and real-time data storage, and Tailwind CSS for an attractive and adaptable design. The app allows users to post rides, book seats, chat in real time, and rate other users, fostering a safe and collaborative ride-sharing community."
                },
                project2: {
                    description: "Web platform for an insurance broker",
                    text: "Rivolta Seguros is a modern web platform developed with Next.js, Tailwind CSS, and Bolt.new as the project base. It uses Google Sheets as a lightweight database, where we simulate an API of car brands and models to avoid additional costs. The system allows users to make personalized quotes from an intuitive interface. Upon completing the quote, a view with the entered data is automatically generated and a direct WhatsApp message is sent to start commercial contact. In addition, emails collected through newsletter subscription are stored in Sheets and integrated with Google Contacts, making management easier from the client's Gmail."
                },
                project3: {
                    description: "Landing page for an AI and technology startup",
                    text: "Rocketly Web is a landing page developed on a Bolt.new base using Next.js, pure SCSS, and animations with Framer Motion. It integrates Three.js for 3D effects and features a smooth and attractive scroll-telling experience, designed to guide the user through the content in an immersive way. The entire design is intended to offer a modern, friendly, and visually striking experience, ideal for capturing attention from the first scroll."
                },
                project4: {
                    description: "Applicacion para pizzeria, muestra de productos y control de ordenes y stock",
                    text: "Napo’s es una aplicación web desarrollada para optimizar la gestión de pedidos de una pizzería, construida con Next.js y una arquitectura moderna orientada a rendimiento y escalabilidad. La aplicación integra una base de datos en tiempo real para la administración de órdenes, control de stock y validación de horarios, garantizando un flujo de pedidos eficiente y confiable."
                },
                project5: {
                    description: "Website for a travel agency, selling tour packages",
                    text: "I developed a website for a travel agency focused on building trust and facilitating the exploration of international destinations. I optimized the navigation experience so users could quickly find key information and easily consult it. I implemented a responsive design to ensure proper display on mobile, tablet, and desktop. The result is a modern, clear website geared towards generating real inquiries for the business."
                }
            },
            skills: {
                title: "Skills",
            },
            projectDetail: {
                back: "Back",
                viewLive: "View live",
                sourceCode: "Source code",
                loading: "Loading project...",
                notFound: "Project not found",
                backToProjects: "Back to all projects",
                techStack: "Tech stack",
                overview: "Overview",
            },
            navbar: {
                home: "Home",
                skills: "Skills",
                projects: "Projects",
                experience: "Experience",
                contact: "Contact",
            }
        }
    },
    es: {
        translation: {
            welcome: "Bienvenido a mi portafolio",
            description: "Este es un resumen de mi trabajo",
            hero: {
                title: "Hola, soy",
                role: 'AI Developer',
                subtitle: "Agentes de IA, Automatizaciones y Desarrollo Web Full Stack",
                downloadCV: "Descargar CV",
                available: "Disponible para trabajar",
            },
            contact: {
                title: "Contacto", // "Contact" en inglés
                name: "Nombre", // "First Name"
                lastname: "Apellido", // "Last Name"
                email: "Email",
                message: "Mensaje", // "Message"
                placeholder_name: "Nombre", // "First Name"
                placeholder_lastname: "Apellido", // "Last Name"
                placeholder_email: "Email",
                placeholder_message: "Escribe tu mensaje...", // "Write your message..."
                send: "Enviar Mensaje", // "Send Message"
                thanks: "¡Gracias por comunicarte! 🙌", // "Thank you for reaching out! 🙌"
                project_question: "¿Tienes algún proyecto en mente?", // "Do you have a project in mind?"
                contactme: "¡Contactame!", // "Contact me!"
                fill_all: "Por favor, completá todos los campos." // "Please fill out all fields."
            },
            experience: {
                title: "Experiencia", // "Experience"
                exp1_title: "Desarrollador web full stack", // "Full Stack Web Developer"
                exp1_company: "Noswar Studios",
                exp1_date: "2023 - 2025",
                exp1_desc: "Participé en diversos proyectos utilizando tecnologías como React, Next.js, SCSS y otras herramientas modernas del ecosistema web. A lo largo de estas experiencias, trabajé con distintos equipos, adoptando metodologías ágiles y colaborativas que me permitieron adaptarme fácilmente y contribuir de forma efectiva al desarrollo del producto.",
                exp2_title: "Desarrollador web full stack", // "Full Stack Web Developer"
                exp2_company: "Freelance",
                exp2_date: "2021 - 2023",
                exp2_desc: "Desarrollo de aplicaciones web de forma freelance, con un enfoque principalmente frontend, utilizando tecnologías modernas como Next.js, Firebase, Supabase, Tailwind CSS, Bootstrap, entre otras. Cuento con experiencia en el trato directo con clientes, abarcando todo el proceso de desarrollo: desde la planificación inicial hasta la implementación y entrega final."
            },
            projects: {
                title: "Proyectos",
                filter: {
                    all: "Todos",
                    web: "Web Dev",
                    automation: "Automatizaciones",
                    aiAgent: "Agentes de IA",
                },
                empty: "Próximamente...",
                project6: {
                    description: "SaaS para gestionar turnos de peluquerías y centros de estética",
                    text: "Aesthetic es un SaaS que desarrollé de punta a punta para gestionar turnos de peluquerías y centros de estética. Cada negocio se integra con su propia cuenta de MercadoPago mediante OAuth, habilitando tanto las suscripciones a la plataforma como el cobro de señas para las reservas. Un chatbot de WhatsApp construido sobre la API oficial de Meta permite a los clientes reservar y gestionar turnos a través de la conversación. El frontend está hecho con Next.js, Tailwind y TypeScript (deploy en Vercel), mientras que el backend corre sobre Hono, Drizzle y PostgreSQL en Supabase, con deploy en Cloudflare. Las automatizaciones e integraciones del negocio se orquestan con una instancia self-hosted de n8n."
                },
                project8: {
                    description: "Agente de IA que gestiona las reservas por WhatsApp del SaaS Aesthetic",
                    text: "El motor conversacional detrás del bot de WhatsApp de Aesthetic. Construido en n8n alrededor de un nodo AI Agent conectado a OpenAI, mantiene memoria de la conversación por cliente y llama a un conjunto de tools —buscar o crear clientes, listar servicios, consultar horarios y agenda, reservar y cancelar turnos— para resolver todo el flujo de reserva en lenguaje natural. Identifica el negocio y el cliente a partir del webhook de WhatsApp entrante, persiste el historial de la conversación y responde a través de la API de WhatsApp, permitiendo que cada negocio tenga su propia recepcionista de IA sin intervención manual."
                },
                project7: {
                    description: "Chatbot de WhatsApp para una administración de consorcios",
                    text: "Chatbot de WhatsApp desarrollado para una administración de consorcios. Responde preguntas frecuentes de forma automática y deriva las conversaciones a asesores humanos cuando es necesario, integrándose con Chatwoot como sistema de inbox para que el equipo retome los chats sin fricción. Además ejecuta encuestas de satisfacción automáticas y otros flujos conversacionales, reduciendo el trabajo manual y agilizando los tiempos de respuesta para vecinos y propietarios."
                },
                project9: {
                    description: "Agente de IA por WhatsApp para registrar gastos y presupuestos personales por voz o texto",
                    text: "Un asistente de finanzas personales que vive dentro de WhatsApp. Construido con n8n alrededor de un AI Agent potenciado por OpenAI, entiende tanto mensajes de texto como notas de voz —el audio se descarga y se transcribe con Whisper antes de llegar al agente. Expone tools para registrar, editar, eliminar y listar gastos, definir y comparar presupuestos por categoría y período, y verificar el gasto contra los límites guardados en Postgres. Cuando se alcanza un límite de presupuesto, genera automáticamente un link de pago de MercadoPago a través de su API, cerrando el circuito entre el registro y el pago."
                },
                project1: {
                    description: "Aplicación de carpooling para compartir viajes",
                    text: "Plataforma de carpooling desarrollada con tecnologías modernas. Next.js y React se utilizaron para crear una interfaz fluida y responsiva, Firebase para la autenticación y almacenamiento de datos en tiempo real, y Tailwind CSS para un diseño atractivo y adaptable. La aplicación permite a los usuarios publicar viajes, reservar asientos, chatear en tiempo real y calificar a otros usuarios, fomentando una comunidad segura y colaborativa de viajes compartidos.",
                },
                project2: {
                    description: "Plataforma web para un broker de seguros",
                    text: "Rivolta Seguros es una plataforma web moderna desarrollada con Next.js, Tailwind CSS y Bolt.new como base de proyecto. Utiliza Google Sheets como una base de datos ligera, donde simulamos una API de marcas y modelos de vehículos para evitar costos adicionales. El sistema permite a los usuarios realizar cotizaciones personalizadas desde una interfaz intuitiva. Al completar la cotización, se genera automáticamente una vista con los datos ingresados y se envía un mensaje directo por WhatsApp para iniciar el contacto comercial. Además, los correos recolectados mediante la suscripción al newsletter se almacenan en Sheets y se integran con Google Contacts, facilitando la gestión desde el Gmail del cliente.",
                },
                project3: {
                    description: "Landing Page para startup de IA y tecnologia",
                    text: "Rocketly Web es una landing page desarrollada sobre una base de Bolt.new utilizando Next.js, SCSS puro y animaciones con Framer Motion. Integra Three.js para efectos 3D y cuenta con una experiencia de scroll-telling fluida y atractiva, diseñada para guiar al usuario a través del contenido de forma envolvente. Todo el diseño está pensado para ofrecer una experiencia moderna, amigable y visualmente impactante, ideal para captar la atención desde el primer scroll."
                },
                project4: {
                    description: "Applicacion para pizzeria, muestra de productos y control de ordenes y stock",
                    text: "Napo’s es una aplicación web desarrollada para optimizar la gestión de pedidos de una pizzería, construida con Next.js y una arquitectura moderna orientada a rendimiento y escalabilidad. La aplicación integra una base de datos en tiempo real para la administración de órdenes, control de stock y validación de horarios, garantizando un flujo de pedidos eficiente y confiable."
                },
                project5: {
                    description: "Sitio web para una agencia de viajes, venta de paquetes turisticos",
                    text: "Desarrollé el sitio web de una agencia de viajes enfocado en transmitir confianza y facilitar la exploración de destinos internacionales. Optimicé la experiencia de navegación para que los usuarios encuentren rápidamente información clave y puedan consultar con facilidad. Trabajé el diseño responsive para asegurar una visualización correcta en mobile, tablet y desktop. El resultado es una web moderna, clara y orientada a generar consultas reales para el negocio"
                }
            },
            skills: {
                title: "Habilidades",
            },
            projectDetail: {
                back: "Volver",
                viewLive: "Ver en vivo",
                sourceCode: "Código fuente",
                loading: "Cargando proyecto...",
                notFound: "Proyecto no encontrado",
                backToProjects: "Ver todos los proyectos",
                techStack: "Tecnologías",
                overview: "Descripción",
            },
            navbar: {
                home: "Inicio",
                skills: "Habilidades",
                projects: "Proyectos",
                experience: "Experiencia",
                contact: "Contacto",
            }
        }
    }
};

export default resources;
