import Clock from "./Clock";

interface FooterProps{
    toggle: () => void;
}


export default function Footer({toggle}: FooterProps){
    
    
    return (
        <div className="border-blue-500 h-1/20  border-2 bg-blue-500 fixed bottom-0 right-0 left-0 flex justify-between">
            <button className="border-2 px-6 rounded-r-lg border-green-500 bg-green-500 text-white font-bold text-center content-center" onClick={toggle}>
                🪟 start
            </button>
            
            <Clock styles="text-white bg-sky-500 px-6 content-center rounded-l-lg"/>
                     
        </div>
    )
}