import { useState } from "react";
import Footer from "./components/Footer";
import Icon from "./components/Icon";
// import Menu from "./components/Menu";

export default function App() {

	const [showMenu, setShowMenu] = useState(false);

    function toggle(){
        setShowMenu(!showMenu)
    }
	
	return (
		<div className="h-screen w-screen bg-cover bg-center relative overflow-hidden " style={{ backgroundImage: "url('/windows-xp.jpg')" }} >
			
			<Icon name={`About Me`} icon="🧪" xPosition={30} yPosition={30} >
				<div>
					Hi, I’m Branden Hernandez — a Site Reliability Engineer with a background in software development and a passion for automation, cloud infrastructure, and clean design.
					<br/>
					<br/>
					Currently at Thomson Reuters, I help ensure our AI systems stay reliable and responsive by building robust monitoring, alerting, and incident response systems across AWS. My career has spanned full-stack development, DevOps, and teaching — from building internal tools with Python and Flask, to helping young developers get started with coding.
					<br/>
					<br/>
					I bring a strong foundation in cloud platforms (AWS, Azure), infrastructure as code (Terraform), and monitoring tools like Datadog and CloudWatch. I also enjoy front-end work using React, React Native, and Tailwind, especially when building personal projects or teaching others.
					<br/>
					<br/>
					Outside of work, I’m currently building a mobile app, sharing my journey in tech through blogging, and always learning something new — whether that’s a better way to automate a pipeline or a new UI design trick.
				</div>
				
			</Icon>	

			<Icon name="Projects" icon="🙋🏾‍♂️" xPosition={30} yPosition={100}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores hic, veritatis nostrum obcaecati ab laboriosam molestias aspernatur deleniti consequatur, velit modi neque nemo nihil dolores accusantium doloremque esse facilis.
			</Icon>	

			<Icon name="Contact" icon="🌎" xPosition={30} yPosition={170}>
				<div className="">
					<p>I’m always open to chatting about new opportunities or fun ideas. Reach out!</p>
					<br/>
					<ul className="space-y-2 text-lg">
						<li>📧 <strong>Email:</strong> <a href="mailto:Brandenjhernandez@gmail.com" className="text-blue-500 hover:underline">Brandenjhernandez@gmail.com</a></li>
						<li>💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/branden-hernandez-688365165" className="text-blue-500 hover:underline">branden-hernandez-688365165</a></li>
						<li>💻 <strong>GitHub:</strong> <a href="https://github.com/Bherna33" className="text-blue-500 hover:underline">Bherna33</a></li>
						<li>💻 <strong>Medium:</strong> <a href="https://medium.com/@branden-hernandez" className="text-blue-500 hover:underline">branden-hernandez</a></li>
						<li>💻 <strong>Dev.to:</strong> <a href="https://dev.to/branden-hernandez" className="text-blue-500 hover:underline">branden-hernandez</a></li>
					</ul>
				</div>
			</Icon>

			<Icon name="Blog" icon="📑" xPosition={30} yPosition={240}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maiores hic, veritatis nostrum obcaecati ab laboriosam molestias aspernatur deleniti consequatur, velit modi neque nemo nihil dolores accusantium doloremque esse facilis.
			</Icon>	
			

			{/* <Menu styles={`${showMenu ? '':'hidden'}`}/> */}

			<Footer toggle={toggle} />
			
		</div>
	)
}