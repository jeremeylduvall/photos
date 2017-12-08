// External
import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

// Internal
import Header from '../components/header';
import Photo from '../components/photo';

class IndexPage extends React.Component {
	render() {
		const photos = this.props.data.allWordpressPost.edges;
		const bio = this.props.data.allWordpressWpMe.edges[0].node.description;
		const username = this.props.data.allWordpressWpMe.edges[0].node.name;
		const avatar = this.props.data.allWordpressWpMe.edges[0].node.avatar_urls.wordpress_96;

		return (
			<div>
				<div
					style={ {
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						margin: "100px 0",
					} }
      			>
        			<Header bio={ bio } src={ avatar } username={ username } />
      			</div>
				<div
					style={ {
						
						/*display: 'flex',
						gridTemplateColumns: 'repeat(auto-fit, minmax( 300px, 1fr ) )',
						justifyItems: 'center',
						gridGap: "20px 20px",
						*/
						display: 'flex',
						flexDirection: 'column',
						
						
					} }
				>
					{
						photos.map( photo => {
							if ( photo.node.featured_media ) {
								return (
									<Photo
										src={ photo.node.featured_media.localFile.childImageSharp.sizes.src }
										sizes={ photo.node.featured_media.localFile.childImageSharp.sizes }
										key={ photo.node.id }
									/>
								)
							} 
						} )
					}
				</div>
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