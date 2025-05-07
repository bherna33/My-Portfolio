import React, { useRef, useState, useEffect } from 'react';

interface DraggableProps {
    children: React.ReactNode;
    x: number;
    y: number;
    styles?: string;
    onClick?: () => void;
}

export default function Draggable({ children, x, y, styles, onClick }: DraggableProps) {

    const windowRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: x, y: y });
    const [isDragging, setIsDragging] = useState(false);
    const offset = useRef({ x: 0, y: 0 });


    function onMouseDown(e: React.MouseEvent<HTMLDivElement>) {

        onClick?.();

        setIsDragging(true);

        const rect = windowRef.current?.getBoundingClientRect();

        offset.current = {
            x: e.clientX - (rect?.left ?? 0),
            y: e.clientY - (rect?.top ?? 0),
        };
    }

    function onMouseMove(e: MouseEvent) {

        if (!isDragging) return;
        
        setPosition({
            x: e.clientX - offset.current.x,
            y: e.clientY - offset.current.y,
        });
    }

    function onMouseUp() {

        setIsDragging(false);
    }

  useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        
        return () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        };
  });

    return (
        <div 
            ref={windowRef}
            onMouseDown={onMouseDown}
            className={`absolute select-none cursor-grab ${styles}`}
            style={{
                    left: position.x,
                    top: position.y,
                }}
        >
            {children}
        </div>
    );

}
