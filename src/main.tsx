import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
if (!container) {
    throw new Error('Root container not found')
}
container.style.position = 'relative'
const root = createRoot(container)
root.render(<App></App>)

function App() {
    useEffect(() => {
        console.log('mount')
        return () => {
            console.log('unmount')
        }
    }, [])
    return null
}