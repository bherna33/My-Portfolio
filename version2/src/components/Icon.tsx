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
            <div className=" text-center "  onDoubleClick={change}>
                <div className=" " >
                    {icon}
                </div>

                <div className=" " >
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