
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()

    return (
        <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-6 text-center text-white">

            <style>
                {`
                    @keyframes errorReveal {
                        from {
                            opacity: 0;
                            transform: translateY(35px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes errorFloat {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-15px);
                        }
                    }

                    @keyframes errorGlow {
                        0%, 100% {
                            opacity: 0.4;
                            transform: scale(1);
                        }
                        50% {
                            opacity: 0.9;
                            transform: scale(1.2);
                        }
                    }

                    .error-reveal {
                        animation: errorReveal 0.9s ease-out both;
                    }

                    .error-number {
                        animation: errorFloat 4s ease-in-out infinite;
                    }

                    .error-orb {
                        animation: errorGlow 5s ease-in-out infinite;
                    }

                    .error-button {
                        transition: all 0.3s ease;
                    }

                    .error-button:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 0 25px rgba(223, 37, 49, 0.3);
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .error-reveal,
                        .error-number,
                        .error-orb {
                            animation: none;
                        }

                        .error-button {
                            transition: none;
                        }
                    }
                `}
            </style>

            {/* Background Effects */}
            <div className="error-orb pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DF2531]/15 blur-[140px]"></div>

            <div
                className="error-orb pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#7A101A]/20 blur-[130px]"
                style={{ animationDelay: '2s' }}
            ></div>

            <div className="pointer-events-none absolute left-16 top-20 h-20 w-20 rotate-45 rounded-2xl border border-[#DF2531]/20"></div>

            <div className="pointer-events-none absolute bottom-20 right-16 h-24 w-24 rounded-full border border-[#A71924]/30"></div>

            {/* Background Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage: 'linear-gradient(#DF2531 1px, transparent 1px), linear-gradient(90deg, #DF2531 1px, transparent 1px)',
                    backgroundSize: '65px 65px'
                }}
            ></div>

            {/* Main Content */}
            <div className="relative z-10">

                <p className="error-reveal text-sm font-bold uppercase tracking-[5px] text-[#DF2531]">
                    ERROR / 404
                </p>

                <h1 className="error-number error-reveal mt-6 text-8xl font-extrabold sm:text-[150px]">
                    <span className="bg-gradient-to-r from-[#DF2531] via-white to-[#A71924] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(223,37,49,0.2)]">
                        404
                    </span>
                </h1>

                <h2 className="error-reveal mt-4 text-3xl font-extrabold sm:text-4xl">
                    Page not found.
                </h2>

                <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#DF2531] to-[#7A101A]"></div>

                <p className="error-reveal mx-auto mt-5 max-w-md text-lg leading-8 text-white/70">
                    Looks like this page has wandered into the digital
                    unknown. Let's get you back on track.
                </p>

                <button
                    onClick={() => navigate('/home')}
                    className="error-button error-reveal mt-9 rounded-lg bg-[#DF2531] px-8 py-4 font-bold text-white shadow-lg shadow-[#DF2531]/20 hover:bg-white hover:text-black"
                >
                    ← Back to Home
                </button>

            </div>
        </div>
    )
}

export default NotFound
