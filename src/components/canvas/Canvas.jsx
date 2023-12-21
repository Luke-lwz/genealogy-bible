import { useEffect } from "preact/hooks"



export default function Canvas() {


    useEffect(() => {

        const canvasPosition = {
            x: 0,
            y: 0
        }

        const scale = 0;


        const container = document.getElementById("canvas-container");

        container.addEventListener('mousemove', (e) => {
            const buttonDown = e.buttons !== 0;
            const buttonType = e.buttons === 1 ? 'left' : e.buttons === 2 ? 'right' : null;

            const element = document?.getElementById('canvas');


            if (buttonDown && element) {


                const newX = canvasPosition.x + e.movementX
                const newY = canvasPosition.y + e.movementY


                canvasPosition.x = newX;
                canvasPosition.y = newY;
                console.log(newX, newY)
                element.style.transform = `translate(${newX}px, ${newY}px)`;



            }
        })

        container.addEventListener('wheel', function(e) {

            e.preventDefault()

          
          }, {passive: false})

        return () => {
            container.removeEventListener('mousemove', () => {})
            container.removeEventListener('wheel', () => {})
        }
    }, [])


    return (
        <div id="canvas-container" className="fixed inset-0 z-10">
            <div className="w-full bg-red-300 h-full relative">
                <div id="canvas" className="absolute inset-0 bg-blue-200">
                    <div className="w-full h-full relative bg-green-200">
                        hi
                    </div>
                </div>
            </div>
        </div>
    )
}