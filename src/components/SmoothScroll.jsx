import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'

const SmoothScroll = ({ children }) => {
    const lenisRef = useRef()
    useEffect(() => {
        let rafId = null
        let mounted = true

        function update(time) {
            if (!mounted) return
            lenisRef.current?.lenis?.raf?.(time)
            rafId = requestAnimationFrame(update)
        }
        rafId = requestAnimationFrame(update)

        return () => {
            mounted = false
            if (rafId) cancelAnimationFrame(rafId)
        }
    }, [])
    return (
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} >
            {children}
        </ReactLenis>
    )
}

export default SmoothScroll;