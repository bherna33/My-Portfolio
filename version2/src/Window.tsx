import Draggable from "./Draggable";
import { useState } from 'react';

export default function Window(){

    const [zIndices, setZIndices] = useState<number[]>([1]); // For 3 windows

	function bringToFront(id: number) {
		const maxZ = Math.max(...zIndices);
		setZIndices(prev =>
		prev.map((z, i) => (i === id ? maxZ + 1 : z))
		);
    }

    const [size, setSize] = useState<boolean>(false);
    
      function change(){
        setSize(!size);
      }

    return (
        <Draggable
            // key={i}
            // id={i}
            // zIndex={zIndex}
            // onClick={bringToFront}
            x={ 50 }
            y={ 100 }
            styles={`${ size ? 'size-full' : 'w-96 h-96 '}`}
        >
            
            <div className={` border-2 rounded-md bg-white ${ size ? 'size-full' : 'w-96 h-96'} `} >
                <div className=''>
                    <button className='border-2 bg-green-500 rounded-md px-1' >-</button>
                    <button className='border-2 bg-yellow-500 rounded-md px-1' onClick={change}>O</button>
                    <button className='border-2 bg-red-500 rounded-md px-1'>X</button>
                </div>
            </div>
        </Draggable>
        
      );
}