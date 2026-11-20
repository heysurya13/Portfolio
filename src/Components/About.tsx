
function About() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black px-6 py-20 text-white sm:px-12 lg:px-20">

            <style>
                {`
                    @keyframes aboutReveal {
                        from {
                            opacity: 0;
                            transform: translateY(40px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes headingZoom {
                        0%, 100% {
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(1.025);
                        }
                    }

                    @keyframes aboutFloat {
                        0%, 100% {
                            transform: translate(0, 0);
                        }
                        50% {
                            transform: translate(30px, -25px);
                        }
                    }

                    @keyframes aboutGlow {
                        0%, 100% {
                            opacity: 0.25;
                        }
                        50% {
                            opacity: 0.65;
                        }
                    }

                    @keyframes aboutLight {
                        0% {
                            transform: translateX(-100%) rotate(25deg);
                        }
                        100% {
                            transform: translateX(200%) rotate(25deg);
                        }
                    }

                    .about-reveal {
                        animation: aboutReveal 0.9s ease-out both;
                    }

                    .about-heading {
                        animation: headingZoom 5s ease-in-out infinite;
                        transform-origin: left center;
                    }

                    .about-orb {
                        animation: aboutFloat 8s ease-in-out infinite;
                    }

                    .about-light {
                        animation: aboutLight 9s linear infinite;
                    }

                    .about-card {
                        position: relative;
                        overflow: hidden;
                        transform-style: preserve-3d;
                        transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
                    }

                    .about-card:hover {
                        transform: perspective(1000px) rotateX(3deg) rotateY(-3deg) translateY(-6px);
                        border-color: rgba(223, 37, 49, 0.8);
                        box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5), 0 0 30px rgba(223, 37, 49, 0.15);
                    }

                    .about-card::before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 60%;
                        height: 100%;
                        background: linear-gradient(90deg, transparent, rgba(223, 37, 49, 0.12), transparent);
                        transition: left 0.7s ease;
                    }

                    .about-card:hover::before {
                        left: 150%;
                    }

                    .about-body {
                        animation: aboutReveal 1s ease-out both;
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .about-reveal,
                        .about-heading,
                        .about-orb,
                        .about-light,
                        .about-body {
                            animation: none;
                        }

                        .about-card {
                            transition: none;
                        }
                    }
                `}
            </style>

            {/* Background Effects */}
            <div className="about-orb pointer-events-none absolute -right-20 top-20 h-96 w-96 rounded-full bg-[#DF2531]/20 blur-[140px]"></div>

            <div
                className="about-orb pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-[#7A101A]/30 blur-[140px]"
                style={{ animationDelay: '2s' }}
            ></div>

            <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
                    backgroundSize: '55px 55px'
                }}
            ></div>

            <div className="about-light pointer-events-none absolute left-0 top-0 h-40 w-40 bg-[#DF2531]/15 blur-[80px]"></div>

            {/* Decorative Shapes */}
            <div className="pointer-events-none absolute right-20 top-40 h-32 w-32 rotate-45 rounded-3xl border border-[#DF2531]/20"></div>

            <div className="pointer-events-none absolute bottom-32 left-16 h-24 w-24 rounded-full border border-[#A71924]/30"></div>

            <div className="pointer-events-none absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-[#DF2531]/30 to-transparent"></div>

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Heading */}
                <div className="about-reveal mb-16">

                    <p className="text-sm font-bold uppercase tracking-[5px] text-[#DF2531]">
                        01 / About Me
                    </p>

                    <h1 className="about-heading mt-5 text-5xl font-extrabold tracking-tight sm:text-7xl">
                        Beyond the
                        <br />
                        <span className="bg-gradient-to-r from-white via-[#DF2531] to-[#7A101A] bg-clip-text text-transparent">
                            code.
                        </span>
                    </h1>

                    <div className="mt-7 h-1 w-28 rounded-full bg-gradient-to-r from-[#DF2531] to-[#7A101A] shadow-[0_0_15px_rgba(223,37,49,0.5)]"></div>

                </div>

                {/* About Content */}
                <div className="about-reveal max-w-4xl [animation-delay:0.2s]">

                    <p className="text-2xl font-bold leading-relaxed text-white sm:text-3xl">
                        I'm Surya T Shaji, an aspiring Full Stack Developer
                        with a background in Mathematics and Computer Applications.
                    </p>

                    <div className="mt-8 h-px w-full bg-gradient-to-r from-[#DF2531]/70 via-[#7A101A]/40 to-transparent"></div>

                    <p className="about-body mt-8 text-lg leading-9 text-white/75">
                        I am an aspiring Software Developer passionate about technology,
                        innovation, and problem-solving. I hold a Bachelor's degree in 
                        Mathematics and am pursuing my Master's in Computer Applications(MCA).
                        Currently, I am undertaking Full Stack Development(FDE) training at 
                        Educkshetra with IIT certification, enhancing my knowledge of modern web 
                        technologies. I have hands-on experience in frontend and backend 
                        development, software automation, and application testing through academic
                        projects and my internship at Agappe. My interests include Full Stack 
                        Development, Python, Data Analytics, and Artificial Intelligence.I am 
                        committed to continuous learning and building practical, 
                        user-friendly digital solutions.
                    </p>

                    {/* Direction Card */}
                    <div className="about-card mt-12 rounded-2xl border border-[#DF2531]/30 bg-gradient-to-br from-[#1A080A]/95 via-[#110708]/95 to-black p-7 shadow-2xl shadow-black/50 sm:p-9">

                        <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#DF2531]/15 blur-[80px]"></div>

                        <div className="relative z-10">

                            <p className="text-sm font-bold uppercase tracking-[4px] text-[#DF2531]">
                                My Direction
                            </p>

                            <h2 className="mt-4 text-3xl font-extrabold text-white">
                                <span className="bg-gradient-to-r from-white via-[#DF2531] to-[#A71924] bg-clip-text text-transparent">
                                    Learn. Build. Improve.
                                </span>
                            </h2>

                            <p className="mt-4 text-lg leading-8 text-white/75">
                                My goal is to become a skilled Full Stack
                                Developer and build meaningful software
                                applications while continuously learning
                                new technologies.
                            </p>

                            <div className="mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-[#DF2531] to-[#7A101A]"></div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default About
