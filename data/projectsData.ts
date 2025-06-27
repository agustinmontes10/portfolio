
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
        description: "project1.description",
        text: "project1.text",
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
        description: "project2.description",
        text: "project2.text",
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
        description: "project3.description",
        text: "project3.text",
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
    {
        id: 3,
        title: "Rocketly Web",
        description: "project3.description",
        text: "project3.text",
        image: "/assets/projects/rocketlyWeb.png",
        tags: ["React", "TailwindCSS"],
        images: [
            '/assets/projects/rocketlyWebScreen1.png',
            '/assets/projects/rocketlyWebScreen2.png',
            '/assets/projects/rocketlyWebScreen3.png'
        ],
        deployment: 'https://rocketly-web.vercel.app/',
        linkGithub: 'https://github.com/agustinmontes10/rocketly-web',
    }
];