import './NotFound.scss';

const NotFound = () => {
	return (
		<div className="not-found">
			<span className="not-found__subheadline">
				Error Code · 404 · Page Not Found
			</span>
			<h1 className="not-found__headline">A Minor Discrepancy</h1>
			<span className="not-found__error-code prevent-select">404</span>
			<p className="not-found__description">
				This path does not balance our records. The page you're seeking may have
				been filed elsewhere, archived, or never existed in our ledger.
			</p>
			<button
				className="not-found__button"
				onClick={() => window.history.back()}>
				Return to Previous Page
			</button>
			<div className="not-found__header">
				<span className="not-found__header-coordinates">
					UNKNOWN°N UNKNOWN°W
				</span>
				<span className="not-found__header-time">
					{new Date().toLocaleTimeString('en-US', {
						hour: '2-digit',
						minute: '2-digit',
						second: '2-digit',
					})}{' '}
					{new Date().toLocaleDateString('en-US')}
				</span>
			</div>
			<div className="not-found__footer">
				<span className="not-found__footer-coordinates">REF:404.ERR</span>
				<span className="not-found__footer-time">STATUS:NOT_FOUND</span>
			</div>
		</div>
	);
};

export default NotFound;
