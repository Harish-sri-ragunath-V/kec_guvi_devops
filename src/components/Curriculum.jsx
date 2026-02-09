import React from 'react';

const modules = [
    {
        id: 1,
        title: "Linux & Shell Scripting",
        desc: "Master the command line, file systems, permissions, and automate tasks with Bash scripting.",
        icon: "🐧"
    },
    {
        id: 2,
        title: "Version Control with Git",
        desc: "Collaborate effectively using Git workflows, branching strategies, and GitHub enterprise features.",
        icon: "🌿"
    },
    {
        id: 3,
        title: "Containerization with Docker",
        desc: "Build, ship, and run applications anywhere using Docker containers and Docker Compose.",
        icon: "🐳"
    },
    {
        id: 4,
        title: "Orchestration with Kubernetes",
        desc: "Deploy, scale, and manage containerized applications with K8s architecture and Helm charts.",
        icon: "☸️"
    },
    {
        id: 5,
        title: "CI/CD with Jenkins",
        desc: "Automate build, test, and deployment pipelines using Jenkins and modern CI/CD practices.",
        icon: "⚙️"
    },
    {
        id: 6,
        title: "Infrastructure as Code",
        desc: "Manage infrastructure using Terraform and configuration management with Ansible.",
        icon: "🏗️"
    }
];

const Curriculum = () => {
    return (
        <section id="curriculum" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-guvi-green font-bold tracking-wider uppercase text-sm">Course Syllabus</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Comprehensive DevOps Roadmap</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        A structured learning path designed by KEC expertise and GUVI's industry insights to make you job-ready.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((module) => (
                        <div key={module.id} className="group p-8 rounded-2xl border border-gray-100 hover:border-kongu-blue/30 hover:shadow-xl hover:shadow-kongu-blue/5 transition-all duration-300 bg-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5 text-6xl group-hover:scale-110 transition-transform duration-500 select-none">
                                {module.icon}
                            </div>
                            <div className="w-12 h-12 rounded-lg bg-blue-50 text-2xl flex items-center justify-center mb-6 border border-blue-100 group-hover:bg-kongu-blue group-hover:text-white transition-colors">
                                {module.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-kongu-blue transition-colors">
                                {module.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {module.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="inline-flex items-center gap-2 text-kongu-blue font-bold hover:text-guvi-green transition-colors">
                        View Detailed Syllabus
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Curriculum;
