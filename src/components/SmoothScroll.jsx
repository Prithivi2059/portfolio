import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'

const SmoothScroll = ({ children }) => {
    const lenisRef = useRef()

    useEffect(() => {
        function update(time) {
            lenisRef.current?.lenis?.raf(time)
        }

        const rafId = requestAnimationFrame(update)

        return () => cancelAnimationFrame(rafId)
    }, [])
    return (
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} >
            {children}
        </ReactLenis>
    )
}

export default SmoothScroll;