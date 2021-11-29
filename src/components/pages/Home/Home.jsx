import { Link } from 'react-router-dom';
import NewEmployeeForm from '../../NewEmployeeForm/NewEmployeeForm';
import ModalCloseButton from '../../ModalCloseButton/ModalCloseButton';
import { Modal } from 'oc14-modal';
import { useState } from 'react';
const Home = (props) => {
  const [modalState, setModalState] = useState(false);
	const modalContent = <p>Employee Created!</p>;
	return (
		<div>
			<div className="title">
				<h1>HRnet</h1>
			</div>
			<div className="container">
				<Link to="/employees-list">View Current Employees</Link>
				<h2>Create Employee</h2>
				<NewEmployeeForm
					employees={props.employees}
					setEmployees={props.setEmployees}
					setModalState={setModalState}
				></NewEmployeeForm>
			</div>
			<Modal
				isVisible={modalState}
				toggleModal={setModalState}
				modalContent={modalContent}
				customCloseButton={<ModalCloseButton></ModalCloseButton>}
			></Modal>
		</div>
	);
};

export default Home;
