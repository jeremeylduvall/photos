// External
import React from 'react';
import PropTypes from 'prop-types';

const Header = ( props ) => {
	return (
		<div
			style={ {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexWrap: 'wrap',
				margin: '2em 2em',
			} }
		>
			<span
				style={ {
					flexBasis: '120px',
					height: '96px',
				} }
			>
				<img
					src={ props.src }
					alt={ `Jeremey DuVall` }
					style={ {
						marginBottom: 0,
						borderRadius: "50%",
						width: '96px',
					} }
				/>
			</span>
			<span
				style={ {
					flexBasis: '500px',
					flexGrow: 1,
				} }
			>
				<h3
					dangerouslySetInnerHTML={ { __html: ( props.username ) } }
					style={ { marginBottom: "0.2em" } }
				/>
				<p 
					style={ { marginBottom: 0 } }
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
