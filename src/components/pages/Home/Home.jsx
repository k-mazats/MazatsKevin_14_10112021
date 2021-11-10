import { Link } from 'react-router-dom';
import NewEmployeeForm from '../../NewEmployeeForm/NewEmployeeForm';
const Home = (props) => {
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
				></NewEmployeeForm>
			</div>
		</>
	);
};

export default Home;
