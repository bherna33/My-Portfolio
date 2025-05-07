import Draggable from "./Draggable";
import { useState } from 'react';

interface WindowProps{
    name: string;
    icon: string;
    children: React.ReactNode;
    onClose?: () => void;
}

export default function Window({name, icon, children, onClose }:WindowProps){

    const [size, setSize] = useState<boolean>(false);
    const [index, setIndex] = useState(0);

    function bringToFront(){
        setIndex(index+10);
    }

    function toggleSize(){
        setSize(!size);
    }

    return (
        <Draggable
            x={ Math.floor(Math.random() * (640 - 250 + 1)) + 250 } // 250 - 640
            y={ Math.floor(Math.random() * (200 - 75 + 1)) + 75 } //75 - 200
            styles={`${ size ? 'size-full' : 'w-96'}  `}
            onClick={bringToFront}
        >
            <div className={` border-2  px-1 pb-1 backdrop-blur-3xl ${ size ? 'w-full h-14/15 fixed top-0 right-0 left-0' : 'rounded-md'}`} >
                <div className="flex justify-between ">
                    <div className="">{icon} {name}</div>
                    <div className=''>
                        <button className='border-2 bg-green-500 rounded-md px-1.5'>_</button>
                        <button className='border-2 bg-yellow-500 rounded-md px-1' onClick={toggleSize}>O</button>
                        <button className='border-2 bg-red-500 rounded-md px-1' onClick={onClose}>X</button>
                    </div>
                </div>
                
                <div className="bg-white h-47/50 rounded-xs p-2">
                    {children}
                </div>
            </div>
        </Draggable>

      );
}