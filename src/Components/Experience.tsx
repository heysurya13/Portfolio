
function Experience() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black px-6 py-20 text-white sm:px-12 lg:px-20">

            <style>
                {`
                    @keyframes experienceReveal {
                        from {
                            opacity: 0;
                            transform: translateY(40px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes experienceZoom {
                        0%, 100% {
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(1.04);
                        }
                    }

                    @keyframes experienceFloat {
                        0%, 100% {
                            transform: translate(0, 0);
                        }
                        50% {
                            transform: translate(35px, -30px);
                        }
                    }

                    .experience-reveal {
                        animation: experienceReveal 0.8s ease-out both;
                    }

                    .experience-heading {
                        animation: experienceZoom 4s ease-in-out infinite;
                        transform-origin: left center;
                    }

                    .experience-orb {
                        animation: experienceFloat 8s ease-in-out infinite;
                    }

                    .experience-card {
                        transform-style: preserve-3d;
                        transition: transform 0.45s ease, border-color 0.45s ease, box-shadow 0.45s ease;
                    }

                    .experience-card:hover {
                        transform: perspective(1100px) rotateX(3deg) rotateY(-3deg) translateY(-7px);
                        border-color: rgba(223, 37, 49, 0.7);
                        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 25px rgba(223, 37, 49, 0.15);
                    }

                    .experience-item {
                        transition: transform 0.3s ease, color 0.3s ease;
                    }

                    .experience-item:hover {
                        transform: translateX(6px);
                        color: #DF2531;
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .experience-reveal,
                        .experience-heading,
                        .experience-orb {
                            animation: none;
                        }

                        .experience-card,
                        .experience-item {
                            transition: none;
                        }
                    }
                `}
            </style>

            {/* Animated Background */}
            <div className="experience-orb pointer-events-none absolute -right-20 top-40 h-96 w-96 rounded-full bg-[#DF2531]/15 blur-[140px]"></div>

            <div
                className="experience-orb pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-[#7A101A]/20 blur-[140px]"
                style={{ animationDelay: '2s' }}
            ></div>

            {/* Decorative Shapes */}
            <div className="pointer-events-none absolute right-20 top-24 h-32 w-32 rotate-45 rounded-3xl border border-[#DF2531]/15"></div>

            <div className="pointer-events-none absolute bottom-32 left-16 h-24 w-24 rounded-full border border-[#A71924]/25"></div>

            {/* Background Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage: 'linear-gradient(#DF2531 1px, transparent 1px), linear-gradient(90deg, #DF2531 1px, transparent 1px)',
                    backgroundSize: '65px 65px'
                }}
            ></div>

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Heading */}
                <p className="experience-reveal text-sm font-semibold uppercase tracking-[5px] text-[#DF2531]">
                    04 / Experience
                </p>

                <div className="experience-reveal mt-5">

                    <h1 className="experience-heading text-5xl font-extrabold tracking-tight sm:text-7xl">
                        Where I've
                        <br />
                        <span className="bg-gradient-to-r from-[#DF2531] via-white to-[#A71924] bg-clip-text text-transparent">
                            worked.
                        </span>
                    </h1>

                    <div className="mt-7 h-1 w-28 rounded-full bg-gradient-to-r from-[#DF2531] to-[#7A101A]"></div>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
                        My professional experience and opportunities to apply
                        my development skills in real-world environments.
                    </p>

                </div>

                {/* Experience Card */}
                <div className="experience-card experience-reveal mt-16 rounded-2xl border border-[#DF2531]/25 bg-gradient-to-br from-[#1A1012]/95 to-[#300D13]/70 p-7 shadow-xl shadow-black/40 md:p-10">

                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">

                        <div>
                            <p className="text-sm font-bold tracking-[3px] text-[#DF2531]">
                                INTERNSHIP
                            </p>

                            <h2 className="mt-4 text-3xl font-extrabold text-white">
                                Agape AI Technologies
                            </h2>

                            <p className="mt-2 text-lg font-semibold text-[#DF2531]">
                                Software and Automation Developer
                            </p>
                        </div>

                        <p className="w-fit rounded-full border border-[#DF2531]/30 bg-black/70 px-5 py-2 text-sm font-medium text-white/80">
                            July – August 2026
                        </p>

                    </div>

                    <div className="mt-8 border-t border-[#DF2531]/20 pt-7">

                        <h3 className="text-xl font-bold text-white">
                            Responsibilities
                        </h3>

                        <ul className="mt-5 space-y-4 text-white/70">

                            <li className="experience-item flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#DF2531] shadow-[0_0_10px_#DF2531]"></span>
                                <span>
                                    Contributed to software development activities.
                                </span>
                            </li>

                            <li className="experience-item flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#DF2531] shadow-[0_0_10px_#DF2531]"></span>
                                <span>
                                    Worked on automation-related tasks.
                                </span>
                            </li>

                            <li className="experience-item flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#A71924] shadow-[0_0_10px_#A71924]"></span>
                                <span>
                                    Participated in testing and checking application functionality.
                                </span>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Experience
