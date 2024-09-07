import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    kingszone,
    vmeonline,
    rgbibel,
    
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "HTML Developer",
        company_name: "Kings Zone",
        icon: kingszone,
        iconBg: "#accbe1",
        date: "March 2024 - April 2024",
        points: [
            "Developing and maintaining web applications using HTML and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Created a website for the Clash of Clans clan 'Kings Zone' using React.js, with live API integration and additional features.",
        ],
    },
    {
        title: "React.js Developer",
        company_name: "VME Online",
        icon: vmeonline,
        iconBg: "#fbc3bc",
        date: "March 2024 - Mai 2024",
        points: [
            "Developed and maintained a website for VME Online, specializing in chatbot automation.",
            "Built a user-friendly booking system using React.js to streamline appointment scheduling.",
           " Ensured the website was fully responsive, providing an optimal user experience across all devices.",
            "Collaborated with cross-functional teams, including designers and product managers, to deliver a high-quality product.",
        ],
    },
    {
        title: "React.js Developer",
        company_name: "RGBibel Official",
        icon: rgbibel,
        iconBg: "#000000",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developed and maintained an e-commerce website for RGBibelOfficial, a brand specializing in custom-built PCs.",
            "Utilized Payload CMS for efficient content management and integrated Stripe for seamless payment processing.",
            "Implemented various automations using Zapier to streamline business processes and improve operational efficiency.",
            "Ensured the website was fully responsive, providing an optimal shopping experience across all devices.",
            "Collaborated with cross-functional teams, including designers, product managers, and other developers, to deliver a high-quality e-commerce platform.",
            "Participated in code reviews and implemented best practices for code quality and performance optimization.",
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Ecommerce Store',
        description: 'Developed an ecommerce store with payload cms and stripe integration',
        // link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Website for COC Clan',
        description: 'Created a full-stack website for a COC clan with live clan wars preview using clash of clans api.',
        link: 'https://github.com/ls-services-de/Kings-Zone-Website',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: '3D Portfolio',
        description: 'Designed and built my own 3D Portfolio. Have a look!',
        link: '',
    },
    {
        iconUrl: redux,
        theme: 'btn-back-black',
        name: 'Website with Booking System',
        description: 'Designed and built a website with booking system allowing customers to book a call via zoom and email integration.',
        link: 'https://github.com/ls-services-de/VME-Online',
    },

];