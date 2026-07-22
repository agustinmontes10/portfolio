
export type ProjectCategory = 'web' | 'automation' | 'ai-agent';

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
    categories: ProjectCategory[];
    /** i18n keys under "projects." — rendered as a problem/solution/results case study */
    caseStudy?: {
        problem: string;
        solution: string;
        results: string[];
    };
    /** Ordered pipeline of components, rendered as an architecture diagram */
    architecture?: string[];
}

export const projects: ProjectProps[] = [
    {
        id: 6,
        title: "Aesthetic",
        description: "project6.description",
        text: "project6.text",
        image: "/assets/projects/aesthetic.png",
        tags: ["Next.js", "Hono", "n8n", "MercadoPago", "TypeScript", "Tailwind CSS", "Drizzle", "PostgreSQL", "Supabase", "WhatsApp API", "Cloudflare", "Vercel"],
        images: [
            '/assets/projects/aesthetic.png',
            '/assets/projects/aesthetic2.png',
            '/assets/projects/aesthetic3.png',
            '/assets/projects/aesthetic4.png',
        ],
        deployment: 'https://aestheticapp.com.ar/',
        linkGithub: '',
        categories: ['web', 'automation'],
        caseStudy: {
            problem: "project6.problem",
            solution: "project6.solution",
            results: ["project6.result1", "project6.result2", "project6.result3"],
        },
        architecture: ["Next.js", "Hono API", "PostgreSQL", "n8n", "WhatsApp API", "MercadoPago"],
    },
    {
        id: 8,
        title: "Aesthetic Booking Agent",
        description: "project8.description",
        text: "project8.text",
        image: "/assets/projects/aestheticAgent2.png",
        tags: ["n8n", "OpenAI", "AI Agent", "WhatsApp API", "PostgreSQL"],
        images: [
            '/assets/projects/aestheticAgent2.png',
            '/assets/projects/aestheticAgent1.png',
            '/assets/projects/aestheticAgent3.png',
        ],
        deployment: '',
        linkGithub: '',
        categories: ['ai-agent'],
        caseStudy: {
            problem: "project8.problem",
            solution: "project8.solution",
            results: ["project8.result1", "project8.result2", "project8.result3"],
        },
        architecture: ["WhatsApp", "n8n", "AI Agent · OpenAI", "Tools", "PostgreSQL"],
    },
    {
        id: 7,
        title: "Chatbot Consorcios",
        description: "project7.description",
        text: "project7.text",
        image: "/assets/projects/ferrarioAsociados-preview.png",
        tags: ["WhatsApp API", "Chatwoot", "n8n"],
        images: [
            '/assets/projects/ferrarioAsociados-preview.png',
        ],
        deployment: '',
        linkGithub: '',
        categories: ['automation'],
        caseStudy: {
            problem: "project7.problem",
            solution: "project7.solution",
            results: ["project7.result1", "project7.result2", "project7.result3"],
        },
        architecture: ["WhatsApp", "n8n", "Chatwoot"],
    },
    {
        id: 9,
        title: "Personal Finance Assistant",
        description: "project9.description",
        text: "project9.text",
        image: "/assets/projects/personalAsisstantAgent3.png",
        tags: ["n8n", "OpenAI", "Whisper", "AI Agent", "WhatsApp API", "PostgreSQL", "MercadoPago"],
        images: [
            '/assets/projects/personalAsisstantAgent3.png',
            '/assets/projects/personalAsisstantAgent1.png',
            '/assets/projects/personalAsisstantAgent2.png',
        ],
        deployment: '',
        linkGithub: '',
        categories: ['ai-agent'],
        caseStudy: {
            problem: "project9.problem",
            solution: "project9.solution",
            results: ["project9.result1", "project9.result2", "project9.result3"],
        },
        architecture: ["WhatsApp", "Whisper", "AI Agent · OpenAI", "PostgreSQL", "MercadoPago"],
    },
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
        categories: ['web'],
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
        categories: ['web'],
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
        categories: ['web'],
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
        categories: ['web'],
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
        categories: ['web'],
    },
];
