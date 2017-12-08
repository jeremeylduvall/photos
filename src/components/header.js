// External
import React from 'react';
import PropTypes from 'prop-types';

const Header = ( props ) => {
	return (
		<div
			style={ {
				display: 'flex',
				alignItems: 'center',
				maxWidth: "90%",
				flexWrap: 'wrap',
				flexGrow: 1,
			} }
		>
			<span
				style={ {
					display: 'flex',
					height: '120px',
					flexGrow: 1,
					flexBasis: '96px',
					alignItems: 'center',
					justifyContent: 'center',
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
					flexBasis: '600px',
					flexGrow: 1,
				} }
			>
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
