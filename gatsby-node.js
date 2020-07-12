const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

const getPostCategories = path => {
  // Get portions of path, filter off empty strings
  const pathArray = path.split('/').filter(Boolean);
  // Exclude last item - file name
  const categories = pathArray.slice(0, -1);

  return categories;
};

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;
  if (node.internal.type === 'Mdx') {
    const path = createFilePath({node, getNode});

    createNodeField({
      name: 'slug',
      node,
      value: `/posts${path}`
    });

    createNodeField({
      name: 'categories',
      node,
      value: getPostCategories(path)
    });
  }
};

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const posts = result.data.allMdx.edges;

  posts.forEach(({node}) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/components/post-template.js'),
      context: {id: node.id}
    });
  });
};
