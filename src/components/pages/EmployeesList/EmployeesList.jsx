import { Link } from 'react-router-dom';
import EmployeesTable from '../../EmployeesTable/EmployeesTable';
const EmployeesList = (props) => {
	return (
		<>
      <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <EmployeesTable employees={props.employees}></EmployeesTable>
            <Link to="/">Home</Link>
        </div>
		</>
	);
};

export default EmployeesList;
