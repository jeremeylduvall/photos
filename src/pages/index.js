import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

class IndexPage extends React.Component {
	render() {
		const photos = this.props.data.allWordpressPost.edges;

		return (
			<div>
				{
					photos.map( photo => {
						if ( photo.node.featured_media ) {
							console.log( photo );
							return (
								<Img src={ photo.node.featured_media.localFile.childImageSharp.sizes.src } sizes={ photo.node.featured_media.localFile.childImageSharp.sizes } key={ photo.node.id } />
							)
						} 
					} )
				}
			</div>
		)
	}
}

export default IndexPage;

export const pageQuery = graphql`
	query IndexQuery {
		allWordpressPost( sort: { fields: [ date ], order: DESC } ) {
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