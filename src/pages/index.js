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
			let count = 0;

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
					count++;

					if ( photoRow.length === 3 ) {
						return returnRow( photoRow, count );
					} else if ( photoArray.length - count === 0 ) {
						return returnRow( photoRow, count );	
					}
				} )
			)
		}

		const returnRow = ( photos, count ) => {
			return (
				<PhotoRow photos={ photos } key={ count } />
			)
		}

		return (
			<div>
    			<Header bio={ bio } src={ avatar } username={ username } />
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