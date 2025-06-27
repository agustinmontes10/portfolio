import { text } from "framer-motion/m";

const resources = {
    en: {
        translation: {
            welcome: "Welcome to my portfolio",
            description: "This is a showcase of my work",
            hero: {
                title: "Hi, I'm",
                role: 'Developer',
                subtitle: "Full Stack Web Developer",
                downloadCV: "Download CV",
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
                }
            },
            skills: {
                title: "Skills",
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
                role: 'Developer',
                subtitle: "Desarrollador Web Full Stack",
                downloadCV: "Descargar CV",
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
                }
            },
            skills: {
                title: "Habilidades",
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
