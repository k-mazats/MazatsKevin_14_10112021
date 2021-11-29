const BrowsePages = (props) => {
	
	const {
		canPreviousPage,
		canNextPage,
		pageCount,
		gotoPage,
		previousPage,
		nextPage,
		pageIndex,
	} = props;
	const pagesLinks = [];
	for (let i = 0; i < pageCount; i++) {
		(pageIndex === i &&
			pagesLinks.push(
				<button
					className="page-link--current"
					key={`goToPage-${i + 1}`}
					onClick={(e) => {
						gotoPage(i);
					}}
				>
					{i + 1}
				</button>
			) ===
				i + 1) ||
			pagesLinks.push(
				<button
					className="page-link"
					key={`goToPage-${i + 1}`}
					onClick={(e) => {
						gotoPage(i);
					}}
				>
					{i + 1}
				</button>
			);
	}
	return (
		<div>
			<button
				className="page-link--previous"
				onClick={() => previousPage()}
				disabled={!canPreviousPage}
			>
				Previous
			</button>
			{pagesLinks}
			<button
				className="page-link--next"
				onClick={() => nextPage()}
				disabled={!canNextPage}
			>
				Next
			</button>
		</div>
	);
};

export default BrowsePages;
