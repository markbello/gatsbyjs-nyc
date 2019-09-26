const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode, basePath: `pages` })
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
		createNodeField({
			node,
			name: `pageType`,
			value: slug.includes("/blog/") ? `blog-post` : `markdown-page`,
		})
	}
}

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	return graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
              pageType
            }
          }
        }
      }
    }
  `).then(result => {
		const {
			blogPosts,
			otherPages,
		} = result.data.allMarkdownRemark.edges.reduce(
			(acc, edge) => {
				if (edge.node.fields.pageType === "blog-post") {
					acc.blogPosts.push(edge)
				} else {
					acc.otherPages.push(edge)
				}
				return acc
			},
			{ blogPosts: [], otherPages: [] }
		)

		// Create feature-requests page and any other markdown files in the pages directory
		otherPages.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
				component: path.resolve(`./src/templates/markdown-page.js`),
				context: {
					// Data passed to context is available
					// in page queries as GraphQL variables.
					slug: node.fields.slug,
				},
			})
		})

		// Create blog post pages and define pagination rules
		const postsPerPage = 6
		const numPages = Math.ceil(blogPosts.length / postsPerPage)

		blogPosts.forEach(({ node }, index) => {
			const next =
				index === blogPosts.length - 1 ? null : blogPosts[index + 1].node
			const previous = index === 0 ? null : blogPosts[index - 1].node

			createPage({
				path: node.fields.slug,
				component: path.resolve(`./src/templates/blog-post.js`),
				context: {
					// Data passed to context is available
					// in page queries as GraphQL variables.
					slug: node.fields.slug,
					// give each page it's context in the paginitation
					previous,
					next,
					index,
					numPages,
					postsPerPage,
				},
			})
		})

		// create blog list pages
		Array.from({ length: numPages }).forEach((_, i) => {
			createPage({
				path: i === 0 ? `/blog` : `/blog/${i + 1}`,
				component: path.resolve(`./src/templates/blog-index.js`),
				context: {
					limit: postsPerPage,
					skip: i * postsPerPage,
					numPages,
					currentPage: i + 1,
				},
			})
		})
	})
}
