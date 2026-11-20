
import { useNavigate } from 'react-router-dom'
import resume from '../assets/SuryaTShaji.pdf'
import profile from '../assets/profile.jpg'

function Home() {
    const navigate = useNavigate()

    return (
        <div className="relative flex min-h-screen w-full items-center overflow-hidden bg-black px-6 py-16 text-white sm:px-12 lg:px-20">

            <style>
                {`
                    @keyframes contentReveal {
                        from {
                            opacity: 0;
                            transform: translateY(35px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes floatProfile {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-12px);
                        }
                    }

                    @keyframes homeZoom {
                        0%, 100% {
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(1.04);
                        }
                    }

                    @keyframes homeGlow {
                        0%, 100% {
                            opacity: 0.5;
                            transform: scale(1);
                        }
                        50% {
                            opacity: 1;
                            transform: scale(1.15);
                        }
                    }

                    .content-reveal {
                        animation: contentReveal 1s ease-out both;
                    }

                    .home-heading {
                        animation: homeZoom 4s ease-in-out infinite;
                        transform-origin: left center;
                    }

                    .profile-float {
                        animation: floatProfile 5s ease-in-out infinite;
                    }

                    .home-glow {
                        animation: homeGlow 4s ease-in-out infinite;
                    }

                    .home-card {
                        transform-style: preserve-3d;
                        transition: transform 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease;
                    }

                    .home-card:hover {
                        transform: perspective(1000px) rotateY(-5deg) rotateX(4deg) scale(1.02);
                        border-color: rgba(223, 37, 49, 0.8);
                        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5), 0 0 30px rgba(223, 37, 49, 0.2);
                    }

                    .home-button {
                        transition: all 0.3s ease;
                    }

                    .home-button:hover {
                        transform: perspective(600px) translateY(-5px) rotateX(5deg);
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .content-reveal,
                        .home-heading,
                        .profile-float,
                        .home-glow {
                            animation: none;
                        }

                        .home-card,
                        .home-button {
                            transition: none;
                        }
                    }
                `}
            </style>

            {/* Animated Background */}
            <div className="home-glow pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#DF2531]/20 blur-[140px]"></div>

            <div
                className="home-glow pointer-events-none absolute -right-20 top-0 h-[500px] w-[500px] rounded-full bg-[#7A101A]/20 blur-[150px]"
                style={{ animationDelay: '2s' }}
            ></div>

            <div className="pointer-events-none absolute bottom-10 left-1/3 h-40 w-40 rotate-45 rounded-3xl border border-[#DF2531]/15"></div>

            {/* Background Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage: 'linear-gradient(#DF2531 1px, transparent 1px), linear-gradient(90deg, #DF2531 1px, transparent 1px)',
                    backgroundSize: '65px 65px'
                }}
            ></div>

            <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">

                {/* Introduction */}
                <div className="content-reveal">

                    <p className="mb-5 text-sm font-bold uppercase tracking-[5px] text-[#DF2531]">
                        Hi, I'm
                    </p>

                    <h1 className="home-heading text-6xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
                        Surya
                        <br />
                        <span className="bg-gradient-to-r from-[#DF2531] via-white to-[#A71924] bg-clip-text text-transparent">
                            Shaji
                        </span>
                    </h1>

                    <p className="mt-8 text-lg font-bold uppercase tracking-[4px] text-[#DF2531]">
                        Full Stack Developer
                    </p>

                    <div className="mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-[#DF2531] to-[#7A101A]"></div>

                    <p className="mt-6 max-w-2xl text-lg leading-9 text-white/70">
                        I am an aspiring Full Stack Developer passionate
                        about building interactive and user-friendly web
                        applications. I enjoy learning new technologies
                        and solving problems through coding.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center gap-5">

                        <button
                            onClick={() => navigate('/projects')}
                            className="home-button rounded-lg bg-[#DF2531] px-8 py-4 font-bold text-white shadow-lg shadow-[#DF2531]/20 hover:bg-white hover:text-black"
                        >
                            View My Projects →
                        </button>

                        <a
                            href={resume}
                            download="SuryaTShaji.pdf"
                            className="home-button rounded-lg border border-[#DF2531]/60 px-8 py-4 font-bold text-white hover:border-[#DF2531] hover:bg-[#300D13]/80"
                        >
                            Download CV ↓
                        </a>

                    </div>

                </div>

                {/* Profile Image */}
                <div className="content-reveal relative mx-auto flex w-full max-w-lg items-center justify-center [animation-delay:0.3s]">

                    {/* Outer Portrait Frame */}
                    <div className="absolute aspect-[4/5] w-[min(440px,calc(100vw-3rem))] rounded-[2rem] border border-[#DF2531]/40 shadow-[0_0_40px_rgba(223,37,49,0.15)]"></div>

                    {/* Inner Portrait Frame */}
                    <div className="absolute aspect-[4/5] w-[min(410px,calc(100vw-4rem))] rounded-[1.8rem] border border-[#A71924]/50"></div>

                    {/* Decorative Elements */}
                    <div className="home-glow absolute right-4 top-8 h-5 w-5 rounded-full bg-[#DF2531] shadow-[0_0_20px_#DF2531]"></div>

                    <div
                        className="home-glow absolute bottom-12 left-3 h-4 w-4 rounded-full bg-[#A71924] shadow-[0_0_20px_#A71924]"
                        style={{ animationDelay: '1s' }}
                    ></div>

                    <div className="absolute -left-2 top-20 h-4 w-4 rotate-45 border border-[#DF2531]"></div>

                    <div className="absolute bottom-20 -right-2 h-5 w-5 rotate-45 border border-[#A71924]"></div>

                    {/* Profile Card */}
                    <div className="profile-float home-card relative z-10 aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-[1.5rem] border border-[#DF2531]/50 bg-gradient-to-br from-[#1A1012] to-[#300D13] p-2 shadow-2xl shadow-black/60">

                        <div className="h-full w-full overflow-hidden rounded-[1.1rem] border border-white/10">

                            <img
                                src={profile}
                                alt="Surya T Shaji"
                                className="h-full w-full object-cover object-center"
                            />

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home
