import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import EmployeesList from './components/pages/EmployeesList/EmployeesList';
const App = () => {
	return (
		<Routes>
			<Route path="/employees-list" element={<EmployeesList />} />	
			<Route path="/" element={<Home />} />
		</Routes>
	);
};

export default App;
