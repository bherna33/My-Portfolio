import Draggable from "./Draggable";
import Window from "./Window";
import { useState } from "react";


interface IconProps{
    name: string;
    icon: string;
    children: React.ReactNode;
    xPosition: number;
    yPosition: number;
}


export default function Icon({ name, icon, children, xPosition, yPosition }: IconProps){

    const [isOpen, setIsOpen] = useState<boolean>(false);

    function change(){
      setIsOpen(true);
    }

    return (
        <>
            <Draggable
                x={xPosition}
                y={yPosition}
            >
            <div className=" self-center place-content-center place-items-center place-self-center justify-center justify-items-center justify-self-center content-center items-center text-middle align-middle border-2"  onDoubleClick={change}>
                <div className=" self-center place-content-center place-items-center place-self-center justify-center justify-items-center justify-self-center content-center items-center text-middle align-middle " >
                    {icon}
                </div>

                <div className=" self-center place-content-center place-items-center place-self-center justify-center justify-items-center justify-self-center content-center items-center text-middle align-middle " >
                    {name}
                </div>
            </div>

            </Draggable>

            <div className={`${isOpen ? '' : 'hidden'}`} >
                <Window name={name} icon={icon} children={children} />
            </div>
        </>      
    );
}