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

  // 🖱️ Desktop mouse down
  function onMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    onClick?.();
    startDrag(e.clientX, e.clientY);
  }

  // 📱 Mobile touch start
  function onTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    onClick?.();
    const touch = e.touches[0];
    startDrag(touch.clientX, touch.clientY);
  }

  function startDrag(startX: number, startY: number) {
    setIsDragging(true);
    const rect = windowRef.current?.getBoundingClientRect();

    offset.current = {
      x: startX - (rect?.left ?? 0),
      y: startY - (rect?.top ?? 0),
    };
  }

  function onMouseMove(e: MouseEvent) {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  }

  function onTouchMove(e: TouchEvent) {
    if (!isDragging) return;
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - offset.current.x,
      y: touch.clientY - offset.current.y,
    });
  }

  function endDrag() {
    setIsDragging(false);
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', endDrag);
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', endDrag);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', endDrag);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', endDrag);
    };
  });

  return (
    <div
      ref={windowRef}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      className={`absolute  ${styles}`}
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      {children}
    </div>
  );
}
