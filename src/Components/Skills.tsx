
function Skills() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black px-6 py-20 text-white sm:px-12 lg:px-20">

            <style>
                {`
                    @keyframes skillReveal {
                        from {
                            opacity: 0;
                            transform: translateY(40px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes skillZoom {
                        0%, 100% {
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(1.025);
                        }
                    }

                    @keyframes skillFloat {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-25px);
                        }
                    }

                    @keyframes skillGlow {
                        0%, 100% {
                            opacity: 0.3;
                        }
                        50% {
                            opacity: 0.7;
                        }
                    }

                    @keyframes skillLight {
                        from {
                            transform: translateX(-100%);
                        }
                        to {
                            transform: translateX(100%);
                        }
                    }

                    .skill-reveal {
                        animation: skillReveal 0.8s ease-out both;
                    }

                    .skill-heading {
                        animation: skillZoom 5s ease-in-out infinite;
                    }

                    .skill-card {
                        transform-style: preserve-3d;
                        transition: transform 0.45s ease, border-color 0.45s ease, box-shadow 0.45s ease;
                    }

                    .skill-card:hover {
                        transform: perspective(1000px) rotateX(4deg) rotateY(-4deg) translateY(-8px);
                        border-color: rgba(223, 37, 49, 0.7);
                        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.45), 0 0 25px rgba(223, 37, 49, 0.15);
                    }

                    .skill-tag {
                        transition: all 0.3s ease;
                    }

                    .skill-tag:hover {
                        transform: translateY(-4px) scale(1.06);
                        border-color: rgba(223, 37, 49, 0.7);
                        background: rgba(223, 37, 49, 0.15);
                        box-shadow: 0 8px 20px rgba(223, 37, 49, 0.15);
                        color: #DF2531;
                    }

                    .skill-light {
                        animation: skillLight 5s ease-in-out infinite;
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .skill-reveal,
                        .skill-heading,
                        .skill-light {
                            animation: none;
                        }

                        .skill-card,
                        .skill-tag {
                            transition: none;
                        }
                    }
                `}
            </style>

            {/* Background Effects */}
            <div
                className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#DF2531]/15 blur-[130px]"
                style={{ animation: 'skillFloat 8s ease-in-out infinite' }}
            >
            </div>

            <div
                className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-[#7A101A]/20 blur-[130px]"
                style={{ animation: 'skillFloat 10s ease-in-out infinite' }}
            >
            </div>

            <div
                className="pointer-events-none absolute left-[40%] top-[45%] h-72 w-72 rounded-full bg-[#300D13]/50 blur-[120px]"
                style={{ animation: 'skillGlow 6s ease-in-out infinite' }}
            >
            </div>

            {/* Decorative Shapes */}
            <div
                className="pointer-events-none absolute right-16 top-36 h-20 w-20 rotate-45 border border-[#DF2531]/20"
                style={{ animation: 'skillFloat 7s ease-in-out infinite' }}
            >
            </div>

            <div
                className="pointer-events-none absolute bottom-24 left-16 h-14 w-14 rounded-full border border-[#A71924]/30"
                style={{ animation: 'skillFloat 9s ease-in-out infinite' }}
            >
            </div>

            {/* Background Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage: 'linear-gradient(#DF2531 1px, transparent 1px), linear-gradient(90deg, #DF2531 1px, transparent 1px)',
                    backgroundSize: '65px 65px'
                }}
            ></div>

            <div className="relative z-10 mx-auto max-w-7xl">

                <p className="skill-reveal text-sm font-semibold uppercase tracking-[5px] text-[#DF2531]">
                    02 / Technical Expertise
                </p>

                <div className="skill-reveal mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">

                    <h1 className="skill-heading text-5xl font-bold tracking-tight sm:text-7xl">
                        My Tech
                        <br />
                        <span className="bg-gradient-to-r from-[#DF2531] via-white to-[#A71924] bg-clip-text text-transparent">
                            Stack.
                        </span>
                    </h1>

                    <p className="max-w-md leading-8 text-white/70">
                        Technologies and tools I explore and work with
                        while developing my technical skills.
                    </p>

                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-2">

                    {/* Frontend */}
                    <div className="skill-card skill-reveal relative overflow-hidden rounded-2xl border border-[#DF2531]/25 bg-gradient-to-br from-[#1A1012]/95 to-[#300D13]/70 p-8 shadow-xl shadow-black/40">

                        <div className="skill-light pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#DF2531]/10 to-transparent"></div>

                        <p className="relative text-sm tracking-[3px] text-[#DF2531]">
                            01 / INTERFACE
                        </p>

                        <h2 className="relative mt-5 text-2xl font-bold text-white">
                            Frontend Development
                        </h2>

                        <div className="relative mt-7 flex flex-wrap gap-3">
                            {['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'].map((skill) => (
                                <span key={skill} className="skill-tag cursor-default rounded-lg border border-[#DF2531]/25 bg-black/50 px-4 py-3 text-sm text-white/80">
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </div>

                    {/* Backend */}
                    <div className="skill-card skill-reveal relative overflow-hidden rounded-2xl border border-[#DF2531]/25 bg-gradient-to-br from-[#1A1012]/95 to-[#300D13]/70 p-8 shadow-xl shadow-black/40 [animation-delay:0.1s]">

                        <div className="skill-light pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#A71924]/10 to-transparent"></div>

                        <p className="relative text-sm tracking-[3px] text-[#DF2531]">
                            02 / SERVER
                        </p>

                        <h2 className="relative mt-5 text-2xl font-bold text-white">
                            Backend Development
                        </h2>

                        <div className="relative mt-7 flex flex-wrap gap-3">
                            {['Node.js', 'Python', 'Django'].map((skill) => (
                                <span key={skill} className="skill-tag cursor-default rounded-lg border border-[#DF2531]/25 bg-black/50 px-4 py-3 text-sm text-white/80">
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </div>

                    {/* Database */}
                    <div className="skill-card skill-reveal relative overflow-hidden rounded-2xl border border-[#DF2531]/25 bg-gradient-to-br from-[#1A1012]/95 to-[#300D13]/70 p-8 shadow-xl shadow-black/40 [animation-delay:0.2s]">

                        <div className="skill-light pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#DF2531]/10 to-transparent"></div>

                        <p className="relative text-sm tracking-[3px] text-[#DF2531]">
                            03 / DATABASE
                        </p>

                        <h2 className="relative mt-5 text-2xl font-bold text-white">
                            Database Management
                        </h2>

                        <div className="relative mt-7 flex flex-wrap gap-3">
                            {['MySQL', 'MongoDB', 'Firebase'].map((skill) => (
                                <span key={skill} className="skill-tag cursor-default rounded-lg border border-[#DF2531]/25 bg-black/50 px-4 py-3 text-sm text-white/80">
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </div>

                    {/* Tools */}
                    <div className="skill-card skill-reveal relative overflow-hidden rounded-2xl border border-[#DF2531]/25 bg-gradient-to-br from-[#1A1012]/95 to-[#300D13]/70 p-8 shadow-xl shadow-black/40 [animation-delay:0.3s]">

                        <div className="skill-light pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#A71924]/10 to-transparent"></div>

                        <p className="relative text-sm tracking-[3px] text-[#DF2531]">
                            04 / WORKFLOW
                        </p>

                        <h2 className="relative mt-5 text-2xl font-bold text-white">
                            Tools & Platforms
                        </h2>

                        <div className="relative mt-7 flex flex-wrap gap-3">
                            {['Git', 'GitHub', 'VS Code', 'TensorFlow'].map((skill) => (
                                <span key={skill} className="skill-tag cursor-default rounded-lg border border-[#DF2531]/25 bg-black/50 px-4 py-3 text-sm text-white/80">
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </div>

                    {/* Data Science */}
                    <div className="skill-card skill-reveal relative overflow-hidden rounded-2xl border border-[#DF2531]/25 bg-gradient-to-br from-[#1A1012]/95 to-[#300D13]/70 p-8 shadow-xl shadow-black/40 md:col-span-2 [animation-delay:0.4s]">

                        <div className="skill-light pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#DF2531]/10 to-transparent"></div>

                        <p className="relative text-sm tracking-[3px] text-[#DF2531]">
                            05 / DATA
                        </p>

                        <h2 className="relative mt-5 text-2xl font-bold text-white">
                            Data Science
                        </h2>

                        <div className="relative mt-7 flex flex-wrap gap-3">
                            {['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Seaborn', 'Tableau'].map((skill) => (
                                <span key={skill} className="skill-tag cursor-default rounded-lg border border-[#DF2531]/25 bg-black/50 px-4 py-3 text-sm text-white/80">
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Skills
