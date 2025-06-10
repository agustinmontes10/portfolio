
export interface ProjectProps {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    images: string[];
    text: string;
}

export const projects: ProjectProps[] = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "Plataforma de comercio electrónico con React y Node.js",
        text: "Plataforma de comercio electrónico desarrollada con tecnologías modernas. React se utilizó para construir una interfaz de usuario dinámica y responsiva, Node.js para manejar la lógica del servidor y MongoDB como base de datos para almacenar información de productos y usuarios.",
        image: "/assets/projects/project-seguros.png",
        tags: ["React", "Node.js", "MongoDB"],
        images: [
            "/assets/projects/rivoltaSegurosScreen1.png",
            "/assets/projects/rivoltaSegurosScreen2.png"
        ],
    },
    {
        id: 2,
        title: "App de Gestión",
        description: "Sistema de gestión empresarial completo",
        text: "Plataforma de comercio electrónico desarrollada con tecnologías modernas. React se utilizó para construir una interfaz de usuario dinámica y responsiva, Node.js para manejar la lógica del servidor y MongoDB como base de datos para almacenar información de productos y usuarios.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        tags: ["TypeScript", "React", "PostgreSQL"],
        images: [],
    },
    {
        id: 3,
        title: "Portfolio Personal",
        description: "Diseño y desarrollo de portfolio interactivo",
        text: "Plataforma de comercio electrónico desarrollada con tecnologías modernas. React se utilizó para construir una interfaz de usuario dinámica y responsiva, Node.js para manejar la lógica del servidor y MongoDB como base de datos para almacenar información de productos y usuarios.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
        tags: ["React", "TailwindCSS"],
        images: [],
    },
    {
        id: 4,
        title: "E-commerce Platform",
        description: "Plataforma de comercio electrónico con React y Node.js",
        text: "Plataforma de comercio electrónico desarrollada con tecnologías modernas. React se utilizó para construir una interfaz de usuario dinámica y responsiva, Node.js para manejar la lógica del servidor y MongoDB como base de datos para almacenar información de productos y usuarios.",
        image: "/assets/projects/project-seguros.png",
        tags: ["React", "Node.js", "MongoDB"],
        images: [],
    },
];