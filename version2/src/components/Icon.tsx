import Draggable from "./Draggable";
import Window from "./Window";
import { useEffect, useState } from "react";

interface IconProps {
    name: string;
    icon: string;
    children: React.ReactNode;
    xPosition: number;
    yPosition: number;
}

interface WindowInstance {
    id: number;
    zIndex: number;
}

function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

export default function Icon({ name, icon, children, xPosition, yPosition }: IconProps) {
    const [windows, setWindows] = useState<WindowInstance[]>([]);
    const [isMobile, setIsMobile] = useState(false);
    const [topZ, setTopZ] = useState(10);

    useEffect(() => {
        setIsMobile(isMobileDevice());
    }, []);

    function openNewWindow() {
        const newId = Date.now();
        setWindows((prev) => [
            ...prev,
            { id: newId, zIndex: topZ }
        ]);
        setTopZ((prev) => prev + 1);
    }

    function closeWindow(id: number) {
        setWindows((prev) => prev.filter((win) => win.id !== id));
    }

    function bringToFront(id: number) {
        setTopZ((prevZ) => {
            setWindows((wins) =>
                wins.map((win) =>
                    win.id === id ? { ...win, zIndex: prevZ + 1 } : win
                )
            );
            return prevZ + 1;
        });
    }

    return (
        <>
            <Draggable x={xPosition} y={yPosition}>
                <div className="text-center" onClick={isMobile ? openNewWindow : undefined}onDoubleClick={!isMobile ? openNewWindow : undefined}>
                    <div>{icon}</div>
                    <div>{name}</div>
                </div>
            </Draggable>

            {windows.map((win) => (
                <div key={win.id} className={` relative z-10`} onMouseDown={() =>bringToFront(win.id)}>
                    <Window
                        name={name}
                        icon={icon}
                        close={() => closeWindow(win.id)}
                    >
                        {children}
                    </Window>
                </div>
            ))}
        </>
    );
}
