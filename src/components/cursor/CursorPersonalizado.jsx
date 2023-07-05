import { useState } from "react";
import "./cursor.css";
import { useEffect } from "react";
import { useRef } from "react";

const CursorPersonalizado = () => {

    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    const cursorOutlineRef = useRef(null)

    useEffect(() => {

        const handleMouseMove = (e) => {
            setPosX(e.clientX);
            setPosY(e.clientY);
            cursorOutlineRef.current.animate(
                {
                    left: `${posX}px`,
                    top: `${posY}px`,
                },
                { duration: 500, fill: "forwards" }
            );
        };
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [posX,posY]);

    return (
        <>
            <div
                className='cursor-dot'
                style={{ left: `${posX}px`, top: `${posY}px` }}
            ></div>

            <div
                className='cursor-outline'
                ref={cursorOutlineRef}
            ></div>
        </>
    );
};

export default CursorPersonalizado;
