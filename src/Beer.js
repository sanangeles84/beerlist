function Beer(props) {
	return (
		<div key={props.id} data-testid="beer" className="accordion-item">
			<h2 className="accordion-header">
				<button
					id={`bt${props.id}`}
					data-testid={`name`}
					className="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target={`#collapse${props.id}`}
					aria-controls={`collapse${props.id}`}
					aria-expanded="false"
				>
					{props.name}
				</button>
			</h2>
			<div
				className="accordion-collapse collapse"
				id={`collapse${props.id}`}
				data-testid={`description`}
				data-bs-parent="#beersList"
			>
				<div className="accordion-body">
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	);
}

export default Beer;
