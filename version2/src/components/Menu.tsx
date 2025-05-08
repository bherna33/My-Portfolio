interface MenuProps{
    styles: string;
}

export default function Menu({styles}: MenuProps){
    return(

        <div className={`border-2 absolute top-0 right-0 ${styles}`}>
            <div className="header">
                image Branden Hernandez
            </div>

            <div className="flex justify-between">
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