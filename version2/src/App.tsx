import { useState } from "react";
import Footer from "./components/Footer";
import Icon from "./components/Icon";
import Menu from "./components/Menu";

export default function App() {

	const [showMenu, setShowMenu] = useState(false);

    function toggle(){
        setShowMenu(!showMenu)
    }
	
	return (
		<div className="h-screen w-screen bg-cover bg-center relative overflow-hidden " style={{ backgroundImage: "url('/windows-xp.jpg')" }} >
			
			<Icon name="About Me" icon="🧪" xPosition={30} yPosition={30} >
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores hic, veritatis nostrum obcaecati ab laboriosam molestias aspernatur deleniti consequatur, velit modi neque nemo nihil dolores accusantium doloremque esse facilis.
					<br />
					hello 
				</div>
				
			</Icon>	

			<Icon name="Projects" icon="🙋🏾‍♂️" xPosition={30} yPosition={100}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores hic, veritatis nostrum obcaecati ab laboriosam molestias aspernatur deleniti consequatur, velit modi neque nemo nihil dolores accusantium doloremque esse facilis.
			</Icon>	

			<Icon name="Contact" icon="🌎" xPosition={30} yPosition={170}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores hic, veritatis nostrum obcaecati ab laboriosam molestias aspernatur deleniti consequatur, velit modi neque nemo nihil dolores accusantium doloremque esse facilis.
			</Icon>

			<Icon name="Blog" icon="📑" xPosition={30} yPosition={240}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores hic, veritatis nostrum obcaecati ab laboriosam molestias aspernatur deleniti consequatur, velit modi neque nemo nihil dolores accusantium doloremque esse facilis.
			</Icon>	
			

			<Menu styles={`${showMenu ? '':'hidden'}`}/>

			<Footer toggle={toggle} />
			
		</div>
	)
}