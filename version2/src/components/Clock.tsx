import { useEffect, useState } from "react";


interface ClockProps{
    styles: string;
}

export default function Clock( {styles}:ClockProps ) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000); // update every second

    return () => clearInterval(interval); // cleanup on unmount
    }, []);

    return (
        <div className={`text-center ${styles}`}>
            {time.toLocaleTimeString()}
        </div>
  );
}