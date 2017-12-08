// External
import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

// Internal
import Header from '../components/header';
import Photo from '../components/photo';
import PhotoRow from '../components/row';

class IndexPage extends React.Component {
	render() {
		const photos = this.props.data.allWordpressPost.edges;
		const bio = this.props.data.allWordpressWpMe.edges[0].node.description;
		const username = this.props.data.allWordpressWpMe.edges[0].node.name;
		const avatar = this.props.data.allWordpressWpMe.edges[0].node.avatar_urls.wordpress_96;

		const displayPhotos = () => {
			const photoArray = [];
			let photoRow = [];

			photos.map( photo => {
				if ( photo.node.featured_media ) {
					photoArray.push( photo );
				}
			} );

			return (
				photoArray.map( photo => {
					if ( photoRow.length === 3 ) {
						photoRow = [];
					}

					photoRow.push( photo );

					if ( photoRow.length === 3 ) {
						return returnRow( photoRow );
					}
				} )
			)
		}

		const returnRow = ( photos ) => {
			return (
				<PhotoRow photos={ photos } />
			)
		}

		return (
			<div>
				<div
					style={ {
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						margin: "2em 0",
					} }
      			>
        			<Header bio={ bio } src={ avatar } username={ username } />
      			</div>
      			<div
					style={ {
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					} }
      			>		
					{ displayPhotos() }
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