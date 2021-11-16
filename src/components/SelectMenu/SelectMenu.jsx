const SelectMenu = (props) => {
	return (
		<>
			<label htmlFor={props.label.toLowerCase()}>{props.label}</label>
			<select
				id={props.label.toLowerCase()}
				value={props.value}
				onChange={(e) => {
					props.onChangeHandler(e.target.value);
				}}
			>
				{props.options.map((option,index) => {
					return <option value={option.value} key={`option-${option.value}-${index}`} selected={option}>{option.name}</option>;
				})}
			</select>
		</>
	);
};

export default SelectMenu;
