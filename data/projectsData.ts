
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
        id: 3,
        title: "Rocketly Web",
        description: "project3.description",
        text: "project3.text",
        image: "/assets/projects/rocketly1.png",
        tags: ["Next.js", "TailwindCSS", 'Typescript'],
        images: [
            '/assets/projects/rocketly1.png',
            '/assets/projects/rocketly2.png',
            '/assets/projects/rocketly3.png'
        ],
        deployment: 'https://rocketly.com.ar/',
        linkGithub: 'https://github.com/agustinmontes10/rocketly-web',
    },
    {
        id: 2,
        title: "Rivolta Seguros",
        description: "project2.description",
        text: "project2.text",
        image: "/assets/projects/project-seguros.png",
        tags: ["Next.js", "Node.js", "MongoDB", 'Typescript'],
        images: [
            "/assets/projects/rivoltaSegurosScreen1.png",
            "/assets/projects/rivoltaSegurosScreen2.png"
        ],
        deployment: 'https://rivolta-seguros.vercel.app/',
        linkGithub: '',
    },
    {
        id: 5,
        title: "Agencia de Viajes",
        description: "project5.description",
        text: "project5.text",
        image: "/assets/projects/turismo1.png",
           tags: ["Next.js", "TailwindCSS", "TypeScript", "Supabase"],
        images: [
            '/assets/projects/turismo1.png',
            '/assets/projects/turismo2.png',
            '/assets/projects/turismo3.png'
        ],
        deployment: 'https://mtturismo.com/',
        linkGithub: '',
    },
   
    {
        id: 4,
        title: "Napo's",
        description: "project4.description",
        text: "project4.text",
        image: "/assets/projects/napos1.png",
           tags: ["React", "TailwindCSS", "Next.js", "TypeScript", "Firebase"],
        images: [
            '/assets/projects/napos1.png',
            '/assets/projects/napos2.png',
            '/assets/projects/napos3.png'
        ],
        deployment: 'https://napos.vercel.app/',
        linkGithub: '',
    },
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

];