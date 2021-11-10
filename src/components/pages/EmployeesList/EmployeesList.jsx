import { Link } from 'react-router-dom';
const EmployeesList = () => {
	return (
		<>
      <div id="employee-div" class="container">
            <h1>Current Employees</h1>
            <table id="employee-table" class="display"></table>
            <Link to="/">Home</Link>
        </div>
		</>
	);
};

export default EmployeesList;
