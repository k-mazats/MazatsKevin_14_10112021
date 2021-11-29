import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/pages/Home/Home';
import EmployeesList from './components/pages/EmployeesList/EmployeesList';
const App = () => {
	const [employees,setEmployees] = useState([])
	return (
		<Routes>
			<Route
				path="/employees-list"
				element={<EmployeesList employees={employees} />}
			/>
			<Route
				path="/"
				element={<Home employees={employees} setEmployees={setEmployees} />}
			/>
		</Routes>
	);
};

export default App;
