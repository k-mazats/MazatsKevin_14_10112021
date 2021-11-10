import { Link } from 'react-router-dom';
import NewEmployeeForm from '../../NewEmployeeForm/NewEmployeeForm';
import { Modal } from 'oc14-modal';
import { useState } from 'react';
const Home = (props) => {
  const [modalState, setModalState] = useState(false);
	const modalContent = <p>Employee Created!</p>;
	const customCloseButton = <button>Close</button>;
	return (
		<>
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
				customCloseButton={customCloseButton}
			></Modal>
		</>
	);
};

export default Home;
