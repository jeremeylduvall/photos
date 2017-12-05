import React from 'react';
import Link from 'gatsby-link';

class IndexPage extends React.Component {
	render() {
		const photos = this.props.data.allWordpressPost.edges;

		return (
			<div>
				{
					photos.map( photo => {
						return (
							<p dangerouslySetInnerHTML={ { __html: photo.node.title } } />
						)
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
					title
				}
			}
		}
	}
`