
export interface ProjectProps {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    images: string[];
    text: string;
    deployment: string;
    linkGithub: string;
}

export const projects: ProjectProps[] = [
    {
        id: 1,
        description: "Aplicación de carpooling para compartir viajes",
        text: "Plataforma de carpooling desarrollada con tecnologías modernas. Next.js y React se utilizaron para crear una interfaz fluida y responsiva, Firebase para la autenticación y almacenamiento de datos en tiempo real, y Tailwind CSS para un diseño atractivo y adaptable. La aplicación permite a los usuarios publicar viajes, reservar asientos, chatear en tiempo real y calificar a otros usuarios, fomentando una comunidad segura y colaborativa de viajes compartidos.",
        title: "Carpooling App",
        image: "/assets/projects/carpoolingApp.png",
        tags: ["TypeScript", "React", "Firebase", 'Tailwind CSS', 'Next.js'],
        images: [
            "/assets/projects/carpoolingAppScreen1.png",
            "/assets/projects/carpoolingAppScreen2.png",
            "/assets/projects/carpoolingAppScreen3.png",
        ],
        deployment: 'https://carpooling-app-blue.vercel.app/',
        linkGithub: '',
    },
    {
        id: 2,
        title: "Rivolta Seguros",
        description: "Plataforma web para un broker de seguros",
        text: "Rivolta Seguros es una plataforma web moderna desarrollada con Next.js, Tailwind CSS y Bolt.new como base de proyecto. Utiliza Google Sheets como una base de datos ligera, donde simulamos una API de marcas y modelos de vehículos para evitar costos adicionales. El sistema permite a los usuarios realizar cotizaciones personalizadas desde una interfaz intuitiva. Al completar la cotización, se genera automáticamente una vista con los datos ingresados y se envía un mensaje directo por WhatsApp para iniciar el contacto comercial. Además, los correos recolectados mediante la suscripción al newsletter se almacenan en Sheets y se integran con Google Contacts, facilitando la gestión desde el Gmail del cliente.",
        image: "/assets/projects/project-seguros.png",
        tags: ["React", "Node.js", "MongoDB"],
        images: [
            "/assets/projects/rivoltaSegurosScreen1.png",
            "/assets/projects/rivoltaSegurosScreen2.png"
        ],
        deployment: 'https://rivolta-seguros.vercel.app/',
        linkGithub: '',
    },
    {
        id: 3,
        title: "Rocketly Web",
        description: "Landing Page para startup de IA y tecnologia",
        text: "Rocketly Web es una landing page desarrollada sobre una base de Bolt.new utilizando Next.js, SCSS puro y animaciones con Framer Motion. Integra Three.js para efectos 3D y cuenta con una experiencia de scroll-telling fluida y atractiva, diseñada para guiar al usuario a través del contenido de forma envolvente. Todo el diseño está pensado para ofrecer una experiencia moderna, amigable y visualmente impactante, ideal para captar la atención desde el primer scroll.",
        image: "/assets/projects/rocketlyWeb.png",
        tags: ["React", "TailwindCSS"],
        images: [
            '/assets/projects/rocketlyWebScreen1.png',
            '/assets/projects/rocketlyWebScreen2.png',
            '/assets/projects/rocketlyWebScreen3.png'
        ],
        deployment: 'https://rocketly-web.vercel.app/',
        linkGithub: 'https://github.com/agustinmontes10/rocketly-web',
    },
];