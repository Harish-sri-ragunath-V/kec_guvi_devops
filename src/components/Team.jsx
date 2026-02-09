import React from 'react';

const teamMembers = [
    {
        name: "Dr. V. Hsr",
        role: "Program Director",
        org: "KEC",
        image: "hsr.jpeg"
    },
    {
        name: "P. M. Haris",
        role: "Lead Instructor",
        org: "KEC",
        image: "haris.jpg"
    },
    {
        name: "Dr. N. Harish Kannan",
        role: "Academic Coordinator",
        org: "KEC",
        image: "hk.jpeg"
    },
    {
        name: "M. Kalanithi",
        role: "DevOps Mentor",
        org: "GUVI",
        image: "kala.jpg"
    },
    {
        name: "P. Krishnamoorthi",
        role: "Cloud Specialist",
        org: "GUVI",
        image: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
        name: "Dr. Kalithiresh",
        role: "Industry Liaison",
        org: "GUVI",
        image: "kali.jpg"
    }
];

const Team = () => {
    return (
        <section id="team" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-guvi-green font-bold tracking-wider uppercase text-sm">Meet The Experts</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Our Team</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Industry veterans and academic experts working together to shape your DevOps career.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-kongu-blue/5 to-guvi-green/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="relative flex flex-col items-center text-center">
                                <div className="relative mb-4">
                                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span className={`absolute -bottom-1 -right-1 px-2 py-1 text-xs font-bold rounded-full text-white ${member.org === 'KEC' ? 'bg-kongu-blue' : 'bg-guvi-green'}`}>
                                        {member.org}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                                <p className="text-gray-500 text-sm mt-1">{member.role}</p>

                                <a
                                    href={member.linkedin}
                                    className="mt-4 text-gray-400 hover:text-kongu-blue transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
