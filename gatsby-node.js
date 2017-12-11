const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ( { graphql, boundActionCreators } ) => {
	const { createPage } = boundActionCreators;
	return new Promise( ( resolve, reject ) => {
		graphql(
			`
				{
					allWordpressPost {
						edges {
							node {
								id
								slug
						  	}
						}
					}
				}
			`
		).then( result => {
			if (result.errors) {
				console.log(result.errors)
				reject(result.errors)
			}
			
			const template = path.resolve(`./src/templates/single-photo.js`);
			_.each( result.data.allWordpressPost.edges, edge => {
				createPage( {
					path: edge.node.slug,
					component: slash( template ),
					context: {
						slug: edge.node.slug
					},
				} )
			} )
		} )
		resolve();
	} )
}
