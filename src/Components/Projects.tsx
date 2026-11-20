
import signTalkImage from '../assets/sign-talk.png'
import digiHostelImage from '../assets/digi-hostel.png'
import ecommerceImage from '../assets/e-commerce.jpg'
import userManagementImage from '../assets/user-management.jpg'

function Projects() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black px-6 py-20 text-white sm:px-12 lg:px-20">

            <style>
                {`
                    @keyframes projectReveal {
                        from {
                            opacity: 0;
                            transform: translateY(40px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes projectZoom {
                        0%, 100% {
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(1.04);
                        }
                    }

                    @keyframes projectFloat {
                        0%, 100% {
                            transform: translate(0, 0);
                        }
                        50% {
                            transform: translate(35px, -30px);
                        }
                    }

                    .project-reveal {
                        animation: projectReveal 0.8s ease-out both;
                    }

                    .project-heading {
                        animation: projectZoom 4s ease-in-out infinite;
                        transform-origin: left center;
                    }

                    .project-orb {
                        animation: projectFloat 8s ease-in-out infinite;
                    }

                    .project-card {
                        transform-style: preserve-3d;
                        transition: transform 0.45s ease, border-color 0.45s ease, box-shadow 0.45s ease;
                    }

                    .project-card:hover {
                        transform: perspective(1200px) rotateX(2deg) rotateY(-2deg) translateY(-6px);
                        border-color: rgba(223, 37, 49, 0.7);
                        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 25px rgba(223, 37, 49, 0.15);
                    }

                    .project-image {
                        transition: transform 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease;
                    }

                    .project-card:hover .project-image {
                        border-color: rgba(223, 37, 49, 0.7);
                        box-shadow: 0 0 25px rgba(223, 37, 49, 0.15);
                    }

                    .project-number {
                        transition: transform 0.4s ease, text-shadow 0.4s ease;
                    }

                    .project-card:hover .project-number {
                        transform: scale(1.1) translateZ(20px);
                        text-shadow: 0 0 20px rgba(223, 37, 49, 0.4);
                    }

                    .project-tech {
                        transition: all 0.3s ease;
                    }

                    .project-tech:hover {
                        transform: translateY(-4px);
                        background: rgba(223, 37, 49, 0.15);
                        border-color: rgba(223, 37, 49, 0.6);
                        color: #DF2531;
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .project-reveal,
                        .project-heading,
                        .project-orb {
                            animation: none;
                        }

                        .project-card,
                        .project-image,
                        .project-number,
                        .project-tech {
                            transition: none;
                        }
                    }
                `}
            </style>

            {/* Animated Background */}
            <div className="project-orb pointer-events-none absolute -left-20 top-40 h-96 w-96 rounded-full bg-[#DF2531]/15 blur-[140px]"></div>

            <div
                className="project-orb pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#7A101A]/20 blur-[140px]"
                style={{ animationDelay: '2s' }}
            ></div>

            {/* Decorative Shapes */}
            <div className="pointer-events-none absolute right-20 top-32 h-28 w-28 rotate-45 rounded-3xl border border-[#DF2531]/15"></div>

            <div className="pointer-events-none absolute bottom-20 left-16 h-20 w-20 rounded-full border border-[#A71924]/25"></div>

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
                <p className="project-reveal text-sm font-bold uppercase tracking-[5px] text-[#DF2531]">
                    03 / Selected Work
                </p>

                <div className="project-reveal mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">

                    <h1 className="project-heading text-5xl font-extrabold tracking-tight sm:text-7xl">
                        Things I've
                        <br />
                        <span className="bg-gradient-to-r from-[#DF2531] via-white to-[#A71924] bg-clip-text text-transparent">
                            built.
                        </span>
                    </h1>

                    <p className="max-w-md text-lg leading-8 text-white/70">
                        A collection of projects where I explore ideas,
                        experiment with technologies and build practical solutions.
                    </p>

                </div>

                <div className="mt-16 space-y-7">

                    {/* Project 01 */}
                    <div className="project-card project-reveal grid gap-8 rounded-2xl border border-[#DF2531]/25 bg-gradient-to-br from-[#1A1012]/95 to-[#300D13]/70 p-7 shadow-xl shadow-black/40 md:grid-cols-[0.8fr_1.2fr] md:p-10">

                        <div className="project-image min-h-52 overflow-hidden rounded-xl border border-[#DF2531]/30 bg-[#10090B] p-2">

                            <img
                                src={signTalkImage}
                                alt="Sign Talk sign language recognition application"
                                className="h-full min-h-52 w-full rounded-lg object-contain transition duration-500 hover:scale-105"
                            />

                        </div>

                        <div className="flex flex-col justify-center">

                            <p className="project-number text-sm font-bold tracking-[3px] text-[#DF2531]">
                                PROJECT 01
                            </p>

                            <h2 className="mt-4 text-3xl font-extrabold text-white">
                                Sign Talk
                            </h2>

                            <p className="mt-5 text-base leading-8 text-white/70">
                                A sign language recognition application that
                                converts hand gestures into words to support
                                communication.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                {['Flutter', 'Python', 'MediaPipe', 'OpenCV'].map((tech) => (
                                    <span key={tech} className="project-tech cursor-default rounded-full border border-[#DF2531]/25 bg-black/50 px-4 py-2 text-sm text-white/80">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* Project 02 */}
                    <div className="project-card project-reveal grid gap-8 rounded-2xl border border-[#DF2531]/25 bg-gradient-to-br from-[#1A1012]/95 to-[#300D13]/70 p-7 shadow-xl shadow-black/40 md:grid-cols-[0.8fr_1.2fr] md:p-10 [animation-delay:0.15s]">

                        <div className="project-image min-h-52 overflow-hidden rounded-xl border border-[#DF2531]/30 bg-[#10090B] p-2">

                            <img
                                src={digiHostelImage}
                                alt="Digi Hostel Project"
                                className="h-full min-h-52 w-full rounded-lg object-contain transition duration-500 hover:scale-105"
                            />

                        </div>

                        <div className="flex flex-col justify-center">

                            <p className="project-number text-sm font-bold tracking-[3px] text-[#DF2531]">
                                PROJECT 02
                            </p>

                            <h2 className="mt-4 text-3xl font-extrabold text-white">
                                Digi Hostel
                            </h2>

                            <p className="mt-5 text-base leading-8 text-white/70">
                                A hostel management system designed to digitize
                                daily hostel operations, including student
                                attendance, mess management, complaints,
                                service requests and fee tracking.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                {['React', 'Node.js', 'Express.js'].map((tech) => (
                                    <span key={tech} className="project-tech cursor-default rounded-full border border-[#DF2531]/25 bg-black/50 px-4 py-2 text-sm text-white/80">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* Project 03 */}
                    <div className="project-card project-reveal grid gap-8 rounded-2xl border border-[#DF2531]/25 bg-gradient-to-br from-[#1A1012]/95 to-[#300D13]/70 p-7 shadow-xl shadow-black/40 md:grid-cols-[0.8fr_1.2fr] md:p-10 [animation-delay:0.3s]">

                        <div className="project-image min-h-52 overflow-hidden rounded-xl border border-[#DF2531]/30 bg-[#10090B] p-2">

                            <img
                                src={ecommerceImage}
                                alt="E-commerce Website Project"
                                className="h-full min-h-52 w-full rounded-lg object-contain transition duration-500 hover:scale-105"
                            />

                        </div>

                        <div className="flex flex-col justify-center">

                            <p className="project-number text-sm font-bold tracking-[3px] text-[#DF2531]">
                                PROJECT 03
                            </p>

                            <h2 className="mt-4 text-3xl font-extrabold text-white">
                                E-commerce Website
                            </h2>

                            <p className="mt-5 text-base leading-8 text-white/70">
                                A full-stack e-commerce website developed
                                with frontend and backend functionality.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                {['React', 'Node.js'].map((tech) => (
                                    <span key={tech} className="project-tech cursor-default rounded-full border border-[#DF2531]/25 bg-black/50 px-4 py-2 text-sm text-white/80">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* Project 04 */}
                    <div className="project-card project-reveal grid gap-8 rounded-2xl border border-[#DF2531]/25 bg-gradient-to-br from-[#1A1012]/95 to-[#300D13]/70 p-7 shadow-xl shadow-black/40 md:grid-cols-[0.8fr_1.2fr] md:p-10 [animation-delay:0.45s]">

                        <div className="project-image min-h-52 overflow-hidden rounded-xl border border-[#DF2531]/30 bg-[#10090B] p-2">

                            <img
                                src={userManagementImage}
                                alt="User Management Dashboard Project"
                                className="h-full min-h-52 w-full rounded-lg object-contain transition duration-500 hover:scale-105"
                            />

                        </div>

                        <div className="flex flex-col justify-center">

                            <p className="project-number text-sm font-bold tracking-[3px] text-[#DF2531]">
                                PROJECT 04
                            </p>

                            <h2 className="mt-4 text-3xl font-extrabold text-white">
                                User Management Dashboard
                            </h2>

                            <p className="mt-5 text-base leading-8 text-white/70">
                                A dashboard to search, view and manage user
                                information, featuring debounced search,
                                pagination and individual user details.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                {['React', 'TypeScript', 'CSS'].map((tech) => (
                                    <span key={tech} className="project-tech cursor-default rounded-full border border-[#DF2531]/25 bg-black/50 px-4 py-2 text-sm text-white/80">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Projects
