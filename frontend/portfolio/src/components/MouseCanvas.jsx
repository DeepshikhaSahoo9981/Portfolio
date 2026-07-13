import React, { useEffect, useLayoutEffect, useRef, useState } from "react";


const COLORS = ["#F39A1E", "#F2D24B"];
export default function MouseCanvas() {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [cursorPos, setCursorPos] = useState(null);
    const cursorsTrace = useRef([]);

    const setCanvas = () => {
        let canvas = canvasRef.current;
        if (!canvas) return;
        let ctx = canvas.getContext("2d");
        ctxRef.current = ctx;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    useEffect(() => {
        setCanvas();
        window.addEventListener("resize", setCanvas);
        return () => {
            window.removeEventListener("resize", setCanvas);
        };
    }, []);

    // // Function to update pixels near cursor4
    const updatePixels = () => {
        const canvas = canvasRef.current;
        const ctx = ctxRef.current;
        if (!ctx || !canvas) return;

        const { width, height } = canvas;
        ctx.clearRect(0, 0, width, height);


        ctx.fillStyle = COLORS[0];
        ctx.strokeStyle = "#3B7D8C";
        ctx.lineWidth = 1;

        const len = cursorsTrace.current.length;
        cursorsTrace.current.forEach((ele, i) => {
            ctx.filter = `blur(80px)`;
            ctx.beginPath();
            ctx.arc(ele.x, ele.y, 20, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
            ctx.filter = "none";
        });

        // cursorsTrace.current.shift();
    };

    // Animation loop
    useEffect(() => {
        if (!cursorPos) return
        let frame;
        const animate = () => {
            updatePixels();
            frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, [cursorPos]);

    useEffect(() => {
        const updateCursorPos = (e) => {
            setCursorPos({
                x: e.clientX,
                y: e.clientY
            })
            cursorsTrace.current.length > 100 && cursorsTrace.current.splice(0, 100);
            cursorsTrace.current.push({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", updateCursorPos)
        return () => {
            window.removeEventListener("mousemove", updateCursorPos)
        }
    }, [])

    return <canvas ref={canvasRef} className="screen-canvas" />;
}