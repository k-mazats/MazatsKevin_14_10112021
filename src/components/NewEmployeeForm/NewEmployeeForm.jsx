import { forwardRef } from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import './NewEmployeeForm.css'
const NewEmployeeForm = (props) => {
	const statesArray = [
		{
			label: 'Alabama',
			value: 'AL',
		},
		{
			label: 'Alaska',
			value: 'AK',
		},
		{
			label: 'American Samoa',
			value: 'AS',
		},
		{
			label: 'Arizona',
			value: 'AZ',
		},
		{
			label: 'Arkansas',
			value: 'AR',
		},
		{
			label: 'California',
			value: 'CA',
		},
		{
			label: 'Colorado',
			value: 'CO',
		},
		{
			label: 'Connecticut',
			value: 'CT',
		},
		{
			label: 'Delaware',
			value: 'DE',
		},
		{
			label: 'District Of Columbia',
			value: 'DC',
		},
		{
			label: 'Federated States Of Micronesia',
			value: 'FM',
		},
		{
			label: 'Florida',
			value: 'FL',
		},
		{
			label: 'Georgia',
			value: 'GA',
		},
		{
			label: 'Guam',
			value: 'GU',
		},
		{
			label: 'Hawaii',
			value: 'HI',
		},
		{
			label: 'Idaho',
			value: 'ID',
		},
		{
			label: 'Illinois',
			value: 'IL',
		},
		{
			label: 'Indiana',
			value: 'IN',
		},
		{
			label: 'Iowa',
			value: 'IA',
		},
		{
			label: 'Kansas',
			value: 'KS',
		},
		{
			label: 'Kentucky',
			value: 'KY',
		},
		{
			label: 'Louisiana',
			value: 'LA',
		},
		{
			label: 'Maine',
			value: 'ME',
		},
		{
			label: 'Marshall Islands',
			value: 'MH',
		},
		{
			label: 'Maryland',
			value: 'MD',
		},
		{
			label: 'Massachusetts',
			value: 'MA',
		},
		{
			label: 'Michigan',
			value: 'MI',
		},
		{
			label: 'Minnesota',
			value: 'MN',
		},
		{
			label: 'Mississippi',
			value: 'MS',
		},
		{
			label: 'Missouri',
			value: 'MO',
		},
		{
			label: 'Montana',
			value: 'MT',
		},
		{
			label: 'Nebraska',
			value: 'NE',
		},
		{
			label: 'Nevada',
			value: 'NV',
		},
		{
			label: 'New Hampshire',
			value: 'NH',
		},
		{
			label: 'New Jersey',
			value: 'NJ',
		},
		{
			label: 'New Mexico',
			value: 'NM',
		},
		{
			label: 'New York',
			value: 'NY',
		},
		{
			label: 'North Carolina',
			value: 'NC',
		},
		{
			label: 'North Dakota',
			value: 'ND',
		},
		{
			label: 'Northern Mariana Islands',
			value: 'MP',
		},
		{
			label: 'Ohio',
			value: 'OH',
		},
		{
			label: 'Oklahoma',
			value: 'OK',
		},
		{
			label: 'Oregon',
			value: 'OR',
		},
		{
			label: 'Palau',
			value: 'PW',
		},
		{
			label: 'Pennsylvania',
			value: 'PA',
		},
		{
			label: 'Puerto Rico',
			value: 'PR',
		},
		{
			label: 'Rhode Island',
			value: 'RI',
		},
		{
			label: 'South Carolina',
			value: 'SC',
		},
		{
			label: 'South Dakota',
			value: 'SD',
		},
		{
			label: 'Tennessee',
			value: 'TN',
		},
		{
			label: 'Texas',
			value: 'TX',
		},
		{
			label: 'Utah',
			value: 'UT',
		},
		{
			label: 'Vermont',
			value: 'VT',
		},
		{
			label: 'Virgin Islands',
			value: 'VI',
		},
		{
			label: 'Virginia',
			value: 'VA',
		},
		{
			label: 'Washington',
			value: 'WA',
		},
		{
			label: 'West Virginia',
			value: 'WV',
		},
		{
			label: 'Wisconsin',
			value: 'WI',
		},
		{
			label: 'Wyoming',
			value: 'WY',
		},
	];
	const departmentsArray = [
		{ value: 'Sales', label: 'Sales' },
		{ value: 'Marketing', label: 'Marketing' },
		{ value: 'Engineering', label: 'Engineering' },
		{ value: 'Human Resources', label: 'Human Resources' },
		{ value: 'Legal', label: 'Legal' },
	];
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [birthDate, setBirthDate] = useState(new Date());
	const [startDate, setStartDate] = useState(new Date());
	const [adressStreet, setAddressStreet] = useState('');
	const [adressCity, setAddressCity] = useState('');
	const [adressState, setAddressState] = useState(statesArray[0]);
	const [adressZip, setAddressZip] = useState(0);
	const [department, setDepartment] = useState(departmentsArray[0]);

	const BirthDateInput = forwardRef(({ onChange, value, onClick }, ref) => (
		<input
			id="date-of-birth"
			onClick={onClick}
			ref={ref}
			value={value}
			onChange={onChange}
		/>
	));
	const StartDateInput = forwardRef(({ onChange, value, onClick }, ref) => (
		<input
			id="start-date"
			onClick={onClick}
			ref={ref}
			value={value}
			onChange={onChange}
		/>
	));
	const createEmployee = () => {
		const employee = {
			firstName,
			lastName,
			birthDate: birthDate.toLocaleDateString('en-US'),
			startDate: startDate.toLocaleDateString('en-US'),
			adressStreet,
			adressCity,
			adressState: adressState.value,
			adressZip,
			department: department.value,
		};
		props.setEmployees(props.employees.concat(employee));
		props.setModalState(true);
	};
	return (
		<>
			<form>
				<label htmlFor="first-name">First Name</label>
				<input
					type="text"
					id="first-name"
					onChange={(e) => {
						setFirstName(e.target.value);
					}}
					value={firstName}
				/>

				<label htmlFor="last-name">Last Name</label>
				<input
					type="text"
					id="last-name"
					onChange={(e) => {
						setLastName(e.target.value);
					}}
					value={lastName}
				/>

				<label htmlFor="date-of-birth">Date of Birth</label>
				<DatePicker
					selected={birthDate}
					onChange={(date) => {
						setBirthDate(date);
					}}
					customInput={<BirthDateInput />}
				/>

				<label htmlFor="start-date">Start Date</label>
				<DatePicker
					selected={startDate}
					onChange={(date) => {
						setStartDate(date);
					}}
					customInput={<StartDateInput />}
				/>

				<fieldset className="address">
					<legend>Address</legend>

					<label htmlFor="street">Street</label>
					<input
						id="street"
						type="text"
						onChange={(e) => {
							setAddressStreet(e.target.value);
						}}
						value={adressStreet}
					/>

					<label htmlFor="city">City</label>
					<input
						id="city"
						type="text"
						onChange={(e) => {
							setAddressCity(e.target.value);
						}}
						value={adressCity}
					/>
					<label htmlFor="state">State</label>
					<Select
						options={statesArray}
						defaultValue={statesArray[0]}
						value={adressState}
						onChange={setAddressState}
						id="state"
					></Select>
					<label htmlFor="zip-code">Zip Code</label>
					<input
						id="zip-code"
						type="number"
						onChange={(e) => {
							setAddressZip(e.target.value);
						}}
						value={adressZip}
					/>
				</fieldset>
				<label htmlFor="department">Department</label>
				<Select
					options={departmentsArray}
					defaultValue={departmentsArray[0]}
					value={department}
					onChange={setDepartment}
					id="department"
				></Select>
			</form>
			<button onClick={createEmployee}>Save</button>
		</>
	);
};

export default NewEmployeeForm;
