// External
import React from 'react';
import PropTypes from 'prop-types';

const Header = ( props ) => {
	return (
		<div
			style={ {
				display: 'flex',
				alignItems: 'center',
				maxWidth: "100%",
			} }
		>
			<img
				src={ props.src }
				alt={ `Jeremey DuVall` }
				style={ {
					width: "96px",
					marginBottom: 0,
					borderRadius: "50%",
					marginRight: "20px",
				} }
			/>
			<span>
			<h3
				dangerouslySetInnerHTML={ { __html: ( props.username ) } }
				style={ {
					marginBottom: "10px",
				} }
			/>
			<p
				style={ {
					marginBottom: 0,
				} }
				dangerouslySetInnerHTML={ { __html: ( '<strong>Jeremey DuVall.</strong> ' + props.bio ) } }
			/>
			</span>
		</div>
	)
}

Header.PropTypes = {
	src: PropTypes.string,
	username: PropTypes.string,
	bio: PropTypes.string,
}

export default Header;
