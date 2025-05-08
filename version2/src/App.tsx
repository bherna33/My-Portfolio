import { useState } from "react";
import Footer from "./components/Footer";
import Icon from "./components/Icon";

export default function App() {

	const [showMenu, setShowMenu] = useState(false);

    function toggle(){
        setShowMenu(!showMenu)
    }
	
	return (
		<div className="h-screen w-screen bg-cover bg-center relative overflow-hidden " style={{ backgroundImage: "url('/windows-xp.jpg')" }} >
			<Icon name="test" icon="🧪" xPosition={30} yPosition={30}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores hic, veritatis nostrum obcaecati ab laboriosam molestias aspernatur deleniti consequatur, velit modi neque nemo nihil dolores accusantium doloremque esse facilis.
			</Icon>	

			<Icon name="hello" icon="🙋🏾‍♂️" xPosition={30} yPosition={100}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores hic, veritatis nostrum obcaecati ab laboriosam molestias aspernatur deleniti consequatur, velit modi neque nemo nihil dolores accusantium doloremque esse facilis.
			</Icon>	

			<Icon name="world" icon="🌎" xPosition={30} yPosition={170}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores hic, veritatis nostrum obcaecati ab laboriosam molestias aspernatur deleniti consequatur, velit modi neque nemo nihil dolores accusantium doloremque esse facilis.
			</Icon>	
			<Footer toggle={toggle} showMenu={showMenu}/>
		</div>
	)
}