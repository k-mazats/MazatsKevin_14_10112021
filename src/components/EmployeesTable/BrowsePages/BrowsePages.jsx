const BrowsePages = (props) => {
	const {
		canPreviousPage,
		canNextPage,
		pageCount,
		gotoPage,
		previousPage,
		nextPage,
	} = props;
  const pagesLinks = [];
  for(let i = 0; i< pageCount; i++) {
    pagesLinks.push(<button key={`goToPage-${i + 1}`} onClick={(e)=>{gotoPage(i)}}>{i+1}</button>)
  }
	return (
		<div>
			<button
				className="page-link"
				onClick={() => previousPage()}
				disabled={!canPreviousPage}
			>
				Previous
			</button>
      {pagesLinks}
			<button
				className="page-link"
				onClick={() => nextPage()}
				disabled={!canNextPage}
			>
				Next
			</button>
		</div>
	);
};

export default BrowsePages;
