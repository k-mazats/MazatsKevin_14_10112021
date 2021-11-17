const SetPagination = (props) => {
	const { setPageSize, pageSize } = props;
	return (
		<label>
      Show
      <select
        className="form-control"
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
        style={{ width: '120px', height: '38px' }}
      >
        {[10, 25, 50, 100].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>
      entries
    </label>
	);
};

export default SetPagination;
