// External
import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

// Internal
import Header from '../components/header';

const SinglePhoto = ( props ) => {
	const bio = props.data.allWordpressWpMe.edges[0].node.description;
	const username = props.data.allWordpressWpMe.edges[0].node.name;
	const avatar = props.data.allWordpressWpMe.edges[0].node.avatar_urls.wordpress_96;
	const photo = props.data.wordpressPost.featured_media.localFile.childImageSharp;

	return (
		<div>
			<Header bio={ bio } src={ avatar } username={ username } />
			<Img
				src={ photo.src }
				sizes={ photo.sizes } 
				style={ {
					maxWidth: '640px',
				} }
			/>
		</div>
	)
}

export default SinglePhoto;

SinglePhoto.PropTypes = {
	data: PropTypes.object
}

export const pageQuery = graphql`
	query PhotoQuery( $slug: String! ) {
		wordpressPost( slug: { eq: $slug } ) {
			id
			title
			featured_media {
				source_url
				localFile {
					childImageSharp {
						sizes( maxWidth: 1000 ) {
							...GatsbyImageSharpSizes
						}
					}
				}
			}
		}
		allWordpressWpMe {
			edges {
				node {
					name
					description
					avatar_urls {
						wordpress_96
					}
				}
			}
		}
	}
`