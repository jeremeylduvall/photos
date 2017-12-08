// External
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Photo = ( props ) => {
	return (
		<div className="photo">
			<Img
				src={ props.src }
				sizes={ props.sizes }
				style={ {
					width: "300px",
				} }
			/>
		</div>
	)
}

Photo.PropTypes = {
	src: PropTypes.string,
	sizes: PropTypes.object,
}

export default Photo;