import { Link } from 'react-router-dom';
const Home = () => {
	return (
		<div>
			<div>Home</div>
			<Link to="/employees-list">View Current Employees</Link>
		</div>
	);
};

export default Home;
