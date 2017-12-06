import React from 'react';

class Header extends React.Component {
	render() {

		return (
			<div
				style={ {
					display: 'flex',
					alignItems: 'center',
					maxWidth: "80%",
				} }
			>
				<img
					src={ this.props.imgSrc }
					alt={ `Jeremey DuVall` }
					style={ {
						height: "96px",
						width: "96px",
						marginBottom: 0,
						borderRadius: "50%",
						marginRight: "20px",
					} }
				/>
				<span>
				<h3
					dangerouslySetInnerHTML={ { __html: ( this.props.username ) } }
					style={ {
						marginBottom: "10px",
					} }
				/>
				<p
					style={ {
						marginBottom: 0,
					} }
					dangerouslySetInnerHTML={ { __html: ( '<strong>Jeremey DuVall.</strong> ' + this.props.bio ) } }
				/>
				</span>
			</div>
		)
	}
}

export default Header;