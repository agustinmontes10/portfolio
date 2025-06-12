
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
        title: "Carpooling App",
        description: "Sistema de gestión empresarial completo",
        text: "Plataforma de comercio electrónico desarrollada con tecnologías modernas. React se utilizó para construir una interfaz de usuario dinámica y responsiva, Node.js para manejar la lógica del servidor y MongoDB como base de datos para almacenar información de productos y usuarios.",
        image: "/assets/projects/carpoolingApp.png",
        tags: ["TypeScript", "React", "PostgreSQL"],
        images: [
            "/assets/projects/carpoolingAppScreen1.png",
            "/assets/projects/carpoolingAppScreen2.png",
            "/assets/projects/carpoolingAppScreen3.png",

        ],
    },
    {
        id: 2,
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
        id: 3,
        title: "Portfolio Personal",
        description: "Diseño y desarrollo de portfolio interactivo",
        text: "Plataforma de comercio electrónico desarrollada con tecnologías modernas. React se utilizó para construir una interfaz de usuario dinámica y responsiva, Node.js para manejar la lógica del servidor y MongoDB como base de datos para almacenar información de productos y usuarios.",
        image: "/assets/projects/carpoolingApp.png",
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