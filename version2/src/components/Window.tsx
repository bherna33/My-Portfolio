import Draggable from "./Draggable";
import { useState } from 'react';

interface WindowProps {
    name: string;
    icon: string;
    children: React.ReactNode;
    close: () => void;
}

export default function Window({ name, icon, children, close,   }: WindowProps) {
    const [size, setSize] = useState(false);

    function toggleSize() {
        setSize(!size);
    }

    return (
        <Draggable
            x={Math.floor(Math.random() * (640 - 250 + 1)) + 250}
            y={Math.floor(Math.random() * (200 - 75 + 1)) + 75}
            styles={` ${size ? 'size-full' : 'w-96'} `}
        >
            <div className={`border-2 px-1 pb-1 backdrop-blur-3xl ${size ? 'w-full h-19/20 fixed top-0 left-0 ' : '  rounded-md'}`}>
                <div className="flex justify-between">
                    <div>{icon} {name}</div>
                    <div>
                        <button className='border-2 bg-green-500 rounded-md px-1.5'>_</button>
                        <button className='border-2 bg-yellow-500 rounded-md px-1' onClick={toggleSize}>O</button>
                        <button className='border-2 bg-red-500 rounded-md px-1' onClick={close}>X</button>
                    </div>
                </div>
                <div className=" rounded-xs bg-white overflow-auto xs:overflow-scroll p-2 ">
                    {children}
                </div>
            </div>
        </Draggable>
    );
}
