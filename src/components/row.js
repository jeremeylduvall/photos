// External
import React from 'react';
import PropTypes from 'prop-types';

// Internal
import Photo from './photo';

const PhotoRow = ( props ) => {
	console.log( 'photo row', props.photos );

	return (
		<div
			style={ {
				display: 'flex',
				flexDirection: 'row',
				width: '100%',
			} }
		>
			{
				props.photos.map( photo => {
					return (
						<Photo
							src={ photo.node.featured_media.localFile.childImageSharp.sizes.src }
							sizes={ photo.node.featured_media.localFile.childImageSharp.sizes }
							key={ photo.node.id }
						/>
					)
				} )
			}
		</div>
	)
}

PhotoRow.PropTypes = {
	photos: PropTypes.array,
}

export default PhotoRow;