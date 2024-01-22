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
    
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
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
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
  
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
  
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
        link: 'https://github.com/Targaryean',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/utkarsh-singh-17444a214/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Immersive Canvas',
        description: 'Explore an endless canvas of creativity with smooth, server-side rendered animations powered by Next.js 14 and RESTful APIs. Dive into a world of possibilities where your imagination takes flight.',
        link: 'https://github.com/Targaryean/Endless_Canvas',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: ' Conversational AI',
        description: 'Experience the future of interaction with this secure and scalable AI chatbot. Built with the MERN stack and advanced authentication.',
        link: 'https://github.com/Targaryean/MERN_AI_ChatBot',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Mastermind Sudoku',
        description: '. Built on the power of backtracking algorithms, its a testament to the beauty of data structures and algorithms in action.',
        link: 'https://github.com/Targaryean/SudokuSolver',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Food Delivery Delight',
        description: 'BOrder your favorite meals with ease using this user-friendly food delivery app built with React.js.',
        link: 'https://github.com/Targaryean/Swiggy_clone',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Pathfinding Playground',
        description: ' Visualize the power of Dijkstra algorithm in action with this interactive tool. Explore different graphs, animate the shortest path calculation, and gain a deeper understanding of this fundamental data structures and algorithms concept.',
        link: 'https://github.com/Targaryean/Dijkstra_visualizer',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Algorithm Challenge Hub',
        description: 'Conquer your coding journey with this API that delivers top 10 DSA questions frequently asked by MAANG companies.',
        link: 'https://github.com/Targaryean/DSA_API',
    }
];