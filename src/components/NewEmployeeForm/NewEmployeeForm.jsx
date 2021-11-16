import { forwardRef } from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import SelectMenu from '../SelectMenu/SelectMenu';
import 'react-datepicker/dist/react-datepicker.css';

const NewEmployeeForm = (props) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [birthDate, setBirthDate] = useState(new Date());
	const [startDate, setStartDate] = useState(new Date());
	const [adressStreet, setAddressStreet] = useState('');
	const [adressCity, setAddressCity] = useState('');
	const [adressState, setAddressState] = useState('');
	const [adressZip, setAddressZip] = useState(0);
	const [department, setDepartment] = useState('');
	const statesArray = [
		{
			name: 'Alabama',
			value: 'AL',
		},
		{
			name: 'Alaska',
			value: 'AK',
		},
		{
			name: 'American Samoa',
			value: 'AS',
		},
		{
			name: 'Arizona',
			value: 'AZ',
		},
		{
			name: 'Arkansas',
			value: 'AR',
		},
		{
			name: 'California',
			value: 'CA',
		},
		{
			name: 'Colorado',
			value: 'CO',
		},
		{
			name: 'Connecticut',
			value: 'CT',
		},
		{
			name: 'Delaware',
			value: 'DE',
		},
		{
			name: 'District Of Columbia',
			value: 'DC',
		},
		{
			name: 'Federated States Of Micronesia',
			value: 'FM',
		},
		{
			name: 'Florida',
			value: 'FL',
		},
		{
			name: 'Georgia',
			value: 'GA',
		},
		{
			name: 'Guam',
			value: 'GU',
		},
		{
			name: 'Hawaii',
			value: 'HI',
		},
		{
			name: 'Idaho',
			value: 'ID',
		},
		{
			name: 'Illinois',
			value: 'IL',
		},
		{
			name: 'Indiana',
			value: 'IN',
		},
		{
			name: 'Iowa',
			value: 'IA',
		},
		{
			name: 'Kansas',
			value: 'KS',
		},
		{
			name: 'Kentucky',
			value: 'KY',
		},
		{
			name: 'Louisiana',
			value: 'LA',
		},
		{
			name: 'Maine',
			value: 'ME',
		},
		{
			name: 'Marshall Islands',
			value: 'MH',
		},
		{
			name: 'Maryland',
			value: 'MD',
		},
		{
			name: 'Massachusetts',
			value: 'MA',
		},
		{
			name: 'Michigan',
			value: 'MI',
		},
		{
			name: 'Minnesota',
			value: 'MN',
		},
		{
			name: 'Mississippi',
			value: 'MS',
		},
		{
			name: 'Missouri',
			value: 'MO',
		},
		{
			name: 'Montana',
			value: 'MT',
		},
		{
			name: 'Nebraska',
			value: 'NE',
		},
		{
			name: 'Nevada',
			value: 'NV',
		},
		{
			name: 'New Hampshire',
			value: 'NH',
		},
		{
			name: 'New Jersey',
			value: 'NJ',
		},
		{
			name: 'New Mexico',
			value: 'NM',
		},
		{
			name: 'New York',
			value: 'NY',
		},
		{
			name: 'North Carolina',
			value: 'NC',
		},
		{
			name: 'North Dakota',
			value: 'ND',
		},
		{
			name: 'Northern Mariana Islands',
			value: 'MP',
		},
		{
			name: 'Ohio',
			value: 'OH',
		},
		{
			name: 'Oklahoma',
			value: 'OK',
		},
		{
			name: 'Oregon',
			value: 'OR',
		},
		{
			name: 'Palau',
			value: 'PW',
		},
		{
			name: 'Pennsylvania',
			value: 'PA',
		},
		{
			name: 'Puerto Rico',
			value: 'PR',
		},
		{
			name: 'Rhode Island',
			value: 'RI',
		},
		{
			name: 'South Carolina',
			value: 'SC',
		},
		{
			name: 'South Dakota',
			value: 'SD',
		},
		{
			name: 'Tennessee',
			value: 'TN',
		},
		{
			name: 'Texas',
			value: 'TX',
		},
		{
			name: 'Utah',
			value: 'UT',
		},
		{
			name: 'Vermont',
			value: 'VT',
		},
		{
			name: 'Virgin Islands',
			value: 'VI',
		},
		{
			name: 'Virginia',
			value: 'VA',
		},
		{
			name: 'Washington',
			value: 'WA',
		},
		{
			name: 'West Virginia',
			value: 'WV',
		},
		{
			name: 'Wisconsin',
			value: 'WI',
		},
		{
			name: 'Wyoming',
			value: 'WY',
		},
	];
	const departmentsArray = [
		{ name: 'Sales', value: 'Sales' },
		{ name: 'Marketing', value: 'Marketing' },
		{ name: 'Engineering', value: 'Engineering' },
		{ name: 'Human Resources', value: 'Human Resources' },
		{ name: 'Legal', value: 'Legal' },
	];

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
			birthDate,
			startDate,
			adressStreet,
			adressCity,
			adressState,
			adressZip,
			department,
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
					onChange={(date) => setBirthDate(date)}
					customInput={<BirthDateInput />}
				/>

				<label htmlFor="start-date">Start Date</label>
				<DatePicker
					selected={startDate}
					onChange={(date) => setStartDate(date)}
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
					<SelectMenu
						label="State"
						value={adressState}
						onChangeHandler={setAddressState}
						options={statesArray}
					></SelectMenu>
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
				<SelectMenu
					label="Department"
					value={department}
					onChangeHandler={setDepartment}
					options={departmentsArray}
				></SelectMenu>
			</form>
			<button onClick={createEmployee}>Save</button>
		</>
	);
};

export default NewEmployeeForm;
