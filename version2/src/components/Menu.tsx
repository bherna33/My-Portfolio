interface MenuProps{
    styles: string;
}

export default function Menu({styles}: MenuProps){
    return(

        <div className={`border-2 absolute rounded-t-sm bottom-9 ${styles}`}>
            <div className="header">
                image Branden Hernandez
                <br />
                
            </div>

            <div className="flex ">
                <div className="bg-white ">
                    icon
                    <br />
                    icon
                    <br />
                    icon
                    <br />
                    icon
                    <br />
                    icon
                    <br />
                    all programs

                </div>
                <div className="bg-sky-300">
                    My docs
                    <br />
                    recent docs
                    <br />
                    my pictures
                    <br />
                    my music
                    <br />
                    search
                    <br />
                    run
                </div>
            </div>

            <div className="bg-blue">
                log off, turn off computer
            </div>

        </div>

    );
}