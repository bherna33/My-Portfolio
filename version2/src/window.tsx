import React, { useRef, useState, useEffect } from 'react';

interface DraggableWindowProps {
  id: number;
  zIndex: number;
  onClick: (id: number) => void;
}

export default function DraggableWindow({ id, zIndex, onClick }: DraggableWindowProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 100 + id * 30, y: 100 + id * 30 });
  const [isDragging, setIsDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });
  const [size, setSize] = useState<boolean>(false);

  function change(){
    setSize(!size);
  }

  function onMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    onClick(id); // Bring this window to front
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
      className={`absolute border-2 rounded-md bg-white select-none cursor-grab z-${zIndex} ${ size ? 'size-full' : 'w-96 h-96'}`}
      style={{
        left: size ? '': position.x,
        top:  size ? '': position.y,
      }}
    >
      <div className=''>
        <button className='border-2 bg-green-500 rounded-md px-1' >-</button>
        <button className='border-2 bg-yellow-500 rounded-md px-1' onClick={change}>O</button>
        <button className='border-2 bg-red-500 rounded-md px-1'>X</button>
      </div>
    </div>
  );
}

