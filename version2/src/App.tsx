import Footer from "./Footer";
// import Icon from "./Icon";
import Modal from "./Model";
import { useState } from 'react';
import DraggableWindow from "./window";

export default function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
	  setIsModalOpen(true);
	};
  
	const closeModal = () => {
	  setIsModalOpen(false);
	};

	const [zIndices, setZIndices] = useState<number[]>([1]); // For 3 windows

	function bringToFront(id: number) {
		const maxZ = Math.max(...zIndices);
		setZIndices(prev =>
		prev.map((z, i) => (i === id ? maxZ + 1 : z))
		);
	}
	return (
		<div className="h-screen w-screen bg-cover bg-center " style={{ backgroundImage: "url('/windows-xp.jpg')" }} >
			{/* <Icon/> */}
			{zIndices.map((zIndex, i) => (
				<DraggableWindow
					key={i}
					id={i}
					zIndex={zIndex}
					onClick={bringToFront}
				/>
			))}

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
