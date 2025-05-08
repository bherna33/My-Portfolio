import Menu from "./Menu"

interface FooterProps{
    toggle: () => void;
    showMenu: Boolean;
}


export default function Footer({toggle, showMenu}: FooterProps){
    
    
    return (
        <div className="border-blue-500 h-1/15 border-2 bg-blue-500 fixed bottom-0 right-0 left-0 flex justify-between">
            <button className="border-2 px-6  rounded-r-lg border-green-500 bg-green-500 text-white font-bold" onClick={toggle}>
                🪟 start
            </button>
            <Menu styles={`${showMenu ? '':'hidden'}`}/>
            <button className="text-white bg-sky-500 px-6 ">
                11:50 AM
            </button>           
        </div>
    )
}