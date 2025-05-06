import Footer from "./Footer";
import Modal from "./Model";
import { useState } from 'react';
// import Draggable from "./Draggable";
import Window from "./Window";

export default function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
	  setIsModalOpen(true);
	};
  
	const closeModal = () => {
	  setIsModalOpen(false);
	};

	
	return (
		<div className="h-screen w-screen bg-cover bg-center " style={{ backgroundImage: "url('/windows-xp.jpg')" }} >
			<Window />
{/* 
			{zIndices.map((zIndex, i) => (
				<Draggable
					key={i}
					id={i}
					zIndex={zIndex}
					onClick={bringToFront}
					x={50}
					y={100}
				>
					<div>
					<button>
						hheh
					</button>
					</div>
					
				</Draggable>
			))} */}

			<div className="p-4">

				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}>
					Open Modal
				</button>

				<Modal isOpen={isModalOpen} onClose={closeModal}>

					<h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
						Modal Title
					</h3>

					<div className="mt-2">

						<p className="text-sm text-gray-500">
							This is the content of the modal.
						</p>
					</div>
				</Modal>
    		</div>
			
			<Footer/>
		</div>
	)
}
