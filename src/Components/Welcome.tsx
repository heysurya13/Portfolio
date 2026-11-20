
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Welcome() {
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home')
        }, 7000)

        return () => clearTimeout(timer)
    }, [navigate])

    return (
        <div className="relative flex min-h-screen w-full items-center overflow-hidden bg-black px-6 py-16 text-white sm:px-12 lg:px-20">

            <style>
                {`
                    @keyframes welcomeReveal {
                        from {
                            opacity: 0;
                            transform: translateY(40px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes welcomeZoom {
                        0%, 100% {
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(1.025);
                        }
                    }

                    @keyframes welcomeFloat {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-25px);
                        }
                    }

                    @keyframes welcomeRotate {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }

                    @keyframes welcomeGlow {
                        0%, 100% {
                            opacity: 0.3;
                        }
                        50% {
                            opacity: 0.8;
                        }
                    }

                    @keyframes loading {
                        from {
                            transform: scaleX(0);
                        }
                        to {
                            transform: scaleX(1);
                        }
                    }

                    .welcome-reveal {
                        animation: welcomeReveal 1s ease-out both;
                    }

                    .welcome-heading {
                        animation: welcomeZoom 5s ease-in-out infinite;
                    }

                    .welcome-ring {
                        animation: welcomeRotate 18s linear infinite;
                    }

                    .welcome-float {
                        animation: welcomeFloat 7s ease-in-out infinite;
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .welcome-reveal,
                        .welcome-heading,
                        .welcome-ring,
                        .welcome-float {
                            animation: none;
                        }
                    }
                `}
            </style>

            {/* Background Glow */}
            <div
                className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#DF2531]/15 blur-[130px]"
                style={{ animation: 'welcomeFloat 8s ease-in-out infinite' }}
            >
            </div>

            <div
                className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-[#7A101A]/25 blur-[130px]"
                style={{ animation: 'welcomeFloat 10s ease-in-out infinite' }}
            >
            </div>

            <div
                className="pointer-events-none absolute left-[45%] top-[20%] h-72 w-72 rounded-full bg-[#300D13]/60 blur-[120px]"
                style={{ animation: 'welcomeGlow 6s ease-in-out infinite' }}
            >
            </div>

            {/* Decorative Shapes */}
            <div
                className="pointer-events-none absolute right-20 top-24 h-20 w-20 rotate-45 border border-[#DF2531]/20"
                style={{ animation: 'welcomeFloat 8s ease-in-out infinite' }}
            >
            </div>

            <div
                className="pointer-events-none absolute bottom-28 left-[35%] h-12 w-12 rounded-full border border-[#A71924]/30"
                style={{ animation: 'welcomeFloat 9s ease-in-out infinite' }}
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

            <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.4fr_0.6fr]">

                {/* Welcome Content */}
                <div>

                    <p className="welcome-reveal mb-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-[5px] text-[#DF2531]">
                        <span className="h-px w-10 bg-[#DF2531]"></span>
                        Portfolio · 2026
                    </p>

                    <h1 className="welcome-reveal welcome-heading text-6xl font-bold leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl">
                        Hello,
                        <br />
                        I'm <span className="bg-gradient-to-r from-[#DF2531] via-white to-[#A71924] bg-clip-text text-transparent">Surya.</span>
                    </h1>

                    <p className="welcome-reveal mt-8 max-w-xl text-lg leading-9 text-white/70 sm:text-xl [animation-delay:0.2s]">
                        An aspiring Full Stack Developer passionate about
                        turning ideas into meaningful digital experiences.
                    </p>

                    {/* Loading Progress */}
                    <div className="welcome-reveal mt-12 max-w-md [animation-delay:0.4s]">

                        <div className="mb-4 flex items-center gap-3">

                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#DF2531]/20 border-t-[#DF2531]"></div>

                            <p className="text-sm tracking-wider text-white/70">
                                Preparing portfolio...
                            </p>

                        </div>

                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">

                            <div className="h-full w-full origin-left animate-[loading_7s_ease-in-out_forwards] rounded-full bg-gradient-to-r from-[#DF2531] via-[#7A101A] to-[#A71924]"></div>

                        </div>

                        <p className="mt-3 text-xs tracking-[3px] text-white/40">
                            LOADING EXPERIENCE
                        </p>

                    </div>

                </div>

                {/* Animated Developer Circle */}
                <div className="relative hidden lg:flex lg:justify-center">

                    <div className="welcome-float relative flex h-80 w-80 items-center justify-center rounded-full border border-[#DF2531]/30 shadow-[0_0_50px_rgba(223,37,49,0.1)]">

                        <div className="welcome-ring absolute inset-5 rounded-full border border-[#A71924]/40 border-t-[#DF2531]"></div>

                        <div className="absolute inset-10 rounded-full border border-[#DF2531]/20"></div>

                        <div className="absolute inset-16 rounded-full border border-white/10"></div>

                        <div className="text-center">
                            <p className="text-sm font-semibold tracking-[5px] text-white/60">
                                DEVELOPER
                            </p>

                            <p className="mt-3 text-sm font-semibold tracking-wider text-[#DF2531]">
                                BUILD · LEARN · CREATE
                            </p>
                        </div>

                        <div className="absolute -right-3 top-16 h-4 w-4 animate-pulse rounded-full bg-[#DF2531] shadow-[0_0_15px_#DF2531]"></div>

                        <div className="absolute -bottom-2 left-16 h-3 w-3 animate-pulse rounded-full bg-[#A71924] shadow-[0_0_15px_#A71924]"></div>

                        <div className="absolute -left-2 top-28 h-2 w-2 animate-pulse rounded-full bg-white shadow-[0_0_12px_white]"></div>

                        <div className="absolute right-12 -top-2 h-2 w-2 animate-pulse rounded-full bg-[#DF2531] shadow-[0_0_12px_#DF2531]"></div>

                    </div>

                </div>

            </div>

            {/* Footer */}
            <p className="absolute bottom-6 left-6 text-xs tracking-widest text-white/40 sm:left-12 lg:left-20">
                © 2026 · SURYA T SHAJI
            </p>

            <p className="absolute bottom-6 right-6 text-xs tracking-widest text-[#DF2531]/80 sm:right-12 lg:right-20">
                WELCOME
            </p>

        </div>
    )
}

export default Welcome
