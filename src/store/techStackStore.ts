import { defineStore } from "pinia";

export const useTechStackStore = defineStore('techStack', {
    state: () => ({
        frontEndStack: [
            { name: 'Vue.js', color: 'from-green-500 to-emerald-600' },
            { name: 'React & React Native', color: 'from-sky-500 to-blue-600' },
            { name: 'Quasar', color: 'from-cyan-500 to-cyan-700' },
            { name: 'Shadcn', color: 'from-purple-500 to-purple-700' },
            { name: 'Tailwind', color: 'from-teal-400 to-cyan-500' },
            { name: 'JavaScript', color: 'from-yellow-400 to-yellow-600' },
            { name: 'TypeScript', color: 'from-blue-400 to-blue-700' },
        ],
        backEndStack: [
            { name: 'Node.js', color: 'from-lime-500 to-green-700' },
            { name: 'Bun', color: 'from-gray-700 to-gray-900' },
            { name: 'Express', color: 'from-zinc-600 to-zinc-800' },
            { name: 'Redis', color: 'from-red-500 to-red-700' },
            { name: 'RabbitMQ', color: 'from-orange-400 to-orange-600' },
            { name: 'Python', color: 'from-blue-300 to-blue-600' },
            { name: 'C#', color: 'from-indigo-500 to-indigo-700' },
            { name: 'Java', color: 'from-orange-700 to-amber-900' },
        ],
        toolsAndOtherStack: [
            { name: 'Docker', color: 'from-sky-400 to-blue-700' },
            { name: 'Git', color: 'from-orange-500 to-orange-700' },
            { name: 'ADVPL', color: 'from-purple-700 to-purple-900' },
        ],
        badgeAboutMe: ['Vue.js', 'Node.js', 'TypeScript', 'React', 'Quasar', 'Supabase', 'PostgreSQL', 'Redis']
    }),
});