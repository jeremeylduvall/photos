// External
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

// Internal
import Photo from '../components/photo';

const SinglePhoto = ( props ) => {
	return (
		<div>Sup</div>
	)
}

export default SinglePhoto;

/*
return (
	<Photo src={ props.src } sizes={ props.sizes } />
)


export const pageQuery = graphql`
	query PhotoQuery {
		wordpressPost( filter: { } ) {
			edges {
				node {
					id
					title
					featured_media {
           				localFile {
              				childImageSharp {
								sizes( maxWidth:500 ) {
									...GatsbyImageSharpSizes
				                }
							}
						}
					}
				}
			}
		}
	}
`
*/