
import { useEffect, useState } from 'react'

function Navbar() {

    const [activeSection, setActiveSection] = useState('home')

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Education', id: 'education' },
        { name: 'Experience', id: 'experience' },
        { name: 'Contact', id: 'contact' }
    ]

    function scrollToSection(id: string) {
        const section = document.getElementById(id)
        const navbar = document.querySelector('nav')

        if (section && navbar) {
            const top =
                section.getBoundingClientRect().top +
                window.scrollY -
                navbar.offsetHeight

            window.scrollTo({
                top: top,
                behavior: 'smooth'
            })
        }
    }

    useEffect(() => {

        function handleScroll() {

            const sections = navItems.map(item =>
                document.getElementById(item.id)
            )

            const position = window.innerHeight * 0.35

            sections.forEach((section, index) => {

                if (section) {

                    const rect = section.getBoundingClientRect()

                    if (rect.top <= position && rect.bottom > position) {
                        setActiveSection(navItems[index].id)
                    }

                }

            })

        }

        window.addEventListener('scroll', handleScroll)

        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <nav className="sticky top-0 z-50 flex w-full flex-col items-center justify-between gap-5 border-b border-[#DF2531]/30 bg-black/90 px-6 py-5 text-white shadow-lg shadow-black/50 backdrop-blur-xl md:flex-row md:px-12 lg:px-20">

            {/* Logo */}
            <h2
                onClick={() => scrollToSection('home')}
                className="cursor-pointer text-2xl font-extrabold tracking-wider text-white transition duration-300 hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(223,37,49,0.7)]"
            >
                SURYA<span className="text-[#DF2531]"> T SHAJI</span>
            </h2>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-3">

                {navItems.map((item) => (

                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`relative rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-[#DF2531]/10 hover:text-[#DF2531] ${
                            activeSection === item.id
                                ? 'bg-[#DF2531]/10 font-bold text-[#DF2531]'
                                : 'text-white/75'
                        }`}
                    >
                        {item.name}

                        {activeSection === item.id && (
                            <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#DF2531] shadow-[0_0_10px_rgba(223,37,49,0.8)]"></span>
                        )}

                    </button>

                ))}

            </div>

        </nav>
    )
}

export default Navbar
