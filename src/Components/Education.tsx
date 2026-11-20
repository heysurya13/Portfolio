
function Education() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black px-6 py-20 text-white sm:px-12 lg:px-20">

            <style>
                {`
                    @keyframes educationReveal {
                        from {
                            opacity: 0;
                            transform: translateY(40px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes educationZoom {
                        0%, 100% {
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(1.04);
                        }
                    }

                    @keyframes educationFloat {
                        0%, 100% {
                            transform: translate(0, 0);
                        }
                        50% {
                            transform: translate(35px, -30px);
                        }
                    }

                    @keyframes educationPulse {
                        0%, 100% {
                            box-shadow: 0 0 10px rgba(223, 37, 49, 0.2);
                        }
                        50% {
                            box-shadow: 0 0 25px rgba(223, 37, 49, 0.6);
                        }
                    }

                    .education-reveal {
                        animation: educationReveal 0.8s ease-out both;
                    }

                    .education-heading {
                        animation: educationZoom 4s ease-in-out infinite;
                        transform-origin: left center;
                    }

                    .education-orb {
                        animation: educationFloat 8s ease-in-out infinite;
                    }

                    .education-card {
                        transform-style: preserve-3d;
                        transition: transform 0.45s ease, border-color 0.45s ease, box-shadow 0.45s ease;
                    }

                    .education-card:hover {
                        transform: perspective(1000px) rotateX(3deg) rotateY(-3deg) translateY(-6px);
                        border-color: rgba(223, 37, 49, 0.7);
                        box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5), 0 0 25px rgba(223, 37, 49, 0.15);
                    }

                    .education-dot {
                        transition: transform 0.4s ease, box-shadow 0.4s ease;
                        animation: educationPulse 3s ease-in-out infinite;
                    }

                    .education-item:hover .education-dot {
                        transform: scale(1.3);
                        box-shadow: 0 0 25px rgba(223, 37, 49, 0.8);
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .education-reveal,
                        .education-heading,
                        .education-orb,
                        .education-dot {
                            animation: none;
                        }

                        .education-card,
                        .education-dot {
                            transition: none;
                        }
                    }
                `}
            </style>

            {/* Animated Background */}
            <div className="education-orb pointer-events-none absolute -right-20 top-20 h-96 w-96 rounded-full bg-[#DF2531]/15 blur-[140px]"></div>

            <div
                className="education-orb pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#7A101A]/20 blur-[140px]"
                style={{ animationDelay: '2s' }}
            ></div>

            {/* Decorative Shapes */}
            <div className="pointer-events-none absolute right-20 top-40 h-32 w-32 rotate-45 rounded-3xl border border-[#DF2531]/15"></div>

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
                <p className="education-reveal text-sm font-semibold uppercase tracking-[5px] text-[#DF2531]">
                    04 / Academic Journey
                </p>

                <h1 className="education-heading education-reveal mt-5 text-5xl font-extrabold tracking-tight sm:text-7xl">
                    The learning
                    <br />
                    <span className="bg-gradient-to-r from-[#DF2531] via-white to-[#A71924] bg-clip-text text-transparent">
                        journey.
                    </span>
                </h1>

                <div className="mt-7 h-1 w-28 rounded-full bg-gradient-to-r from-[#DF2531] to-[#7A101A]"></div>

                <p className="education-reveal mt-7 max-w-xl text-lg leading-8 text-white/65">
                    Every step of my education has helped shape my
                    knowledge, curiosity and interest in technology.
                </p>

                {/* Education Timeline */}
                <div className="relative mt-16 max-w-4xl">

                    <div className="absolute bottom-8 left-[11px] top-8 w-px bg-gradient-to-b from-[#DF2531] via-[#7A101A] to-transparent"></div>

                    {/* Education 01 */}
                    <div className="education-item education-reveal relative mb-12 pl-12">

                        <div className="education-dot absolute left-0 top-2 h-6 w-6 rounded-full border-4 border-black bg-[#DF2531] shadow-lg shadow-[#DF2531]/40"></div>

                        <div className="education-card rounded-2xl border border-[#DF2531]/25 bg-gradient-to-br from-[#1A1012]/95 to-[#300D13]/70 p-7 shadow-xl shadow-black/40 sm:p-9">

                            <p className="text-sm font-bold tracking-[3px] text-[#DF2531]">
                                POST GRADUATION
                            </p>

                            <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
                                Master of Computer Applications
                            </h2>

                            <p className="mt-3 text-lg font-semibold text-[#DF2531]">
                                MCA
                            </p>

                            <p className="mt-2 leading-7 text-white/65">
                                Adi Shankara Institue of Engineering and Technologies,Kalady
                            </p>

                        </div>
                    </div>

                    {/* Education 02 */}
                    <div className="education-item education-reveal relative mb-12 pl-12 [animation-delay:0.2s]">

                        <div className="education-dot absolute left-0 top-2 h-6 w-6 rounded-full border-4 border-black bg-[#DF2531] shadow-lg shadow-[#DF2531]/40"></div>

                        <div className="education-card rounded-2xl border border-[#DF2531]/25 bg-gradient-to-br from-[#1A1012]/95 to-[#300D13]/70 p-7 shadow-xl shadow-black/40 sm:p-9">

                            <p className="text-sm font-bold tracking-[3px] text-[#DF2531]">
                                UNDERGRADUATE
                            </p>

                            <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
                                Bachelor of Science
                            </h2>

                            <p className="mt-3 text-lg font-semibold text-[#DF2531]">
                                Mathematics
                            </p>

                            <p className="mt-2 leading-7 text-white/65">
                                Nirmala College, Muvattupuzha
                            </p>

                        </div>
                    </div>

                    {/* Education 03 */}
                    <div className="education-item education-reveal relative pl-12 [animation-delay:0.4s]">

                        <div className="education-dot absolute left-0 top-2 h-6 w-6 rounded-full border-4 border-black bg-[#A71924] shadow-lg shadow-[#A71924]/40"></div>

                        <div className="education-card rounded-2xl border border-[#A71924]/30 bg-gradient-to-br from-[#1A1012]/95 to-[#300D13]/70 p-7 shadow-xl shadow-black/40 sm:p-9">

                            <p className="text-sm font-bold tracking-[3px] text-[#DF2531]">
                                CURRENTLY STUDYING
                            </p>

                            <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
                                FDE(Full Stack Development)
                            </h2>

                            <p className="mt-3 leading-7 text-white/65">
                                Educks​​hetra,Kaloor
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Education
