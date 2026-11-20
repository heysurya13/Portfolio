
import { useEffect, useRef } from 'react'

function CursorEffect() {

    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {

        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')

        if (!canvas || !ctx) return

        let particles: {
            x: number,
            y: number,
            size: number,
            opacity: number,
            speedX: number,
            speedY: number,
            color: string
        }[] = []

        let animationFrame: number

        function resizeCanvas() {
            canvas!.width = window.innerWidth
            canvas!.height = window.innerHeight
        }

        function handleMouseMove(e: MouseEvent) {

            for (let i = 0; i < 2; i++) {

                particles.push({
                    x: e.clientX + (Math.random() - 0.5) * 12,
                    y: e.clientY + (Math.random() - 0.5) * 12,
                    size: Math.random() * 3 + 2,
                    opacity: 1,
                    speedX: (Math.random() - 0.5) * 2,
                    speedY: (Math.random() - 0.5) * 2,
                    color: Math.random() > 0.5 ? '#DF2531' : '#FFFFFF'
                })
            }
        }

        function drawStar(x: number, y: number, size: number) {

            ctx!.beginPath()
            ctx!.moveTo(x, y - size)
            ctx!.lineTo(x + size * 0.25, y - size * 0.25)
            ctx!.lineTo(x + size, y)
            ctx!.lineTo(x + size * 0.25, y + size * 0.25)
            ctx!.lineTo(x, y + size)
            ctx!.lineTo(x - size * 0.25, y + size * 0.25)
            ctx!.lineTo(x - size, y)
            ctx!.lineTo(x - size * 0.25, y - size * 0.25)
            ctx!.closePath()
            ctx!.fill()
        }

        function animate() {

            ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

            particles.forEach(particle => {

                particle.x += particle.speedX
                particle.y += particle.speedY
                particle.opacity -= 0.025

                ctx!.globalAlpha = Math.max(0, particle.opacity)
                ctx!.fillStyle = particle.color
                ctx!.shadowColor = particle.color
                ctx!.shadowBlur = 8

                drawStar(particle.x, particle.y, particle.size)

            })

            ctx!.globalAlpha = 1
            ctx!.shadowBlur = 0

            particles = particles.filter(particle => particle.opacity > 0)

            animationFrame = requestAnimationFrame(animate)
        }

        resizeCanvas()

        window.addEventListener('resize', resizeCanvas)
        window.addEventListener('mousemove', handleMouseMove)

        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationFrame)
        }

    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-[100] hidden md:block"
        />
    )
}

export default CursorEffect
