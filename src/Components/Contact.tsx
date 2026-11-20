
function Contact() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black px-6 py-20 text-white sm:px-12 lg:px-20">

            <style>
                {`
                    @keyframes contactReveal {
                        from {
                            opacity: 0;
                            transform: translateY(40px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes contactZoom {
                        0%, 100% {
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(1.025);
                        }
                    }

                    @keyframes contactFloat {
                        0%, 100% {
                            transform: translate(0, 0);
                        }
                        50% {
                            transform: translate(35px, -30px);
                        }
                    }

                    .contact-reveal {
                        animation: contactReveal 0.8s ease-out both;
                    }

                    .contact-heading {
                        animation: contactZoom 5s ease-in-out infinite;
                        transform-origin: left center;
                    }

                    .contact-orb {
                        animation: contactFloat 8s ease-in-out infinite;
                    }

                    .contact-card {
                        position: relative;
                        overflow: hidden;
                        transform-style: preserve-3d;
                        transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
                    }

                    .contact-card:hover {
                        transform: perspective(1000px) rotateX(3deg) rotateY(-3deg) translateY(-7px);
                        border-color: rgba(223, 37, 49, 0.8);
                        box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5), 0 0 30px rgba(223, 37, 49, 0.15);
                    }

                    .contact-arrow {
                        transition: transform 0.35s ease, color 0.35s ease;
                    }

                    .contact-card:hover .contact-arrow {
                        transform: translate(6px, -6px);
                        color: #DF2531;
                    }

                    .contact-card::before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 60%;
                        height: 100%;
                        background: linear-gradient(90deg, transparent, rgba(223, 37, 49, 0.12), transparent);
                        transition: left 0.7s ease;
                    }

                    .contact-card:hover::before {
                        left: 150%;
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .contact-reveal,
                        .contact-heading,
                        .contact-orb {
                            animation: none;
                        }

                        .contact-card,
                        .contact-arrow {
                            transition: none;
                        }
                    }
                `}
            </style>

            {/* Animated Background */}
            <div className="contact-orb pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#DF2531]/20 blur-[140px]"></div>

            <div
                className="contact-orb pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-[#7A101A]/30 blur-[140px]"
                style={{ animationDelay: '2s' }}
            ></div>

            <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
                    backgroundSize: '55px 55px'
                }}
            ></div>

            <div className="pointer-events-none absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-[#DF2531]/30 to-transparent"></div>

            {/* Decorative Shapes */}
            <div className="pointer-events-none absolute right-20 top-40 h-32 w-32 rotate-45 rounded-3xl border border-[#DF2531]/20"></div>

            <div className="pointer-events-none absolute bottom-32 left-16 h-24 w-24 rounded-full border border-[#A71924]/30"></div>

            <div className="relative z-10 mx-auto max-w-7xl">

                <p className="contact-reveal text-sm font-bold uppercase tracking-[5px] text-[#DF2531]">
                    05 / Get In Touch
                </p>

                <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr]">

                    {/* Left Content */}
                    <div className="contact-reveal">

                        <h1 className="contact-heading text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl">
                            Let's make
                            <br />
                            something
                            <br />
                            <span className="bg-gradient-to-r from-white via-[#DF2531] to-[#7A101A] bg-clip-text text-transparent">
                                happen.
                            </span>
                        </h1>

                        <div className="mt-7 h-1 w-28 rounded-full bg-gradient-to-r from-[#DF2531] to-[#7A101A] shadow-[0_0_15px_rgba(223,37,49,0.5)]"></div>

                        <p className="mt-8 max-w-lg text-lg leading-9 text-white/75">
                            Have an opportunity, a project idea or just
                            want to connect? Feel free to reach out through
                            any of the platforms below.
                        </p>

                    </div>

                    {/* Contact Cards */}
                    <div className="flex flex-col justify-center gap-5">

                        <a
                            href="mailto:suryashaji1311@gmail.com"
                            className="contact-card contact-reveal group rounded-2xl border border-[#DF2531]/30 bg-gradient-to-br from-[#20090C] via-[#130708] to-black p-7 shadow-xl shadow-black/40"
                        >
                            <p className="relative z-10 text-sm font-bold tracking-[3px] text-[#DF2531]">
                                EMAIL
                            </p>

                            <div className="relative z-10 mt-4 flex items-center justify-between gap-3">
                                <h2 className="break-all text-xl font-bold text-white">
                                    suryashaji1311@gmail.com
                                </h2>

                                <span className="contact-arrow text-2xl text-[#DF2531]">
                                    ↗
                                </span>
                            </div>
                        </a>

                        <a
                            href="https://github.com/heysurya13"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-card contact-reveal group rounded-2xl border border-[#DF2531]/30 bg-gradient-to-br from-[#20090C] via-[#130708] to-black p-7 shadow-xl shadow-black/40 [animation-delay:0.15s]"
                        >
                            <p className="relative z-10 text-sm font-bold tracking-[3px] text-[#DF2531]">
                                GITHUB
                            </p>

                            <div className="relative z-10 mt-4 flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-white">
                                    Explore my GitHub
                                </h2>

                                <span className="contact-arrow text-2xl text-[#DF2531]">
                                    ↗
                                </span>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/surya-t-shaji-3b21652b0/"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-card contact-reveal group rounded-2xl border border-[#DF2531]/30 bg-gradient-to-br from-[#20090C] via-[#130708] to-black p-7 shadow-xl shadow-black/40 [animation-delay:0.3s]"
                        >
                            <p className="relative z-10 text-sm font-bold tracking-[3px] text-[#DF2531]">
                                LINKEDIN
                            </p>

                            <div className="relative z-10 mt-4 flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-white">
                                    Connect with me
                                </h2>

                                <span className="contact-arrow text-2xl text-[#DF2531]">
                                    ↗
                                </span>
                            </div>
                        </a>

                    </div>

                </div>

                {/* Footer */}
                <div className="mt-20 border-t border-[#DF2531]/30 pt-7">
                    <p className="text-sm tracking-widest text-white/50">
                        © 2026 SURYA T SHAJI · THANKS FOR VISITING
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Contact
