import {useStaticQuery, graphql} from 'gatsby';
import {parseBlogPostMdxData} from './shared';

const useBlogPosts = () => {
  const data = useStaticQuery(graphql`
    query BlogPostsQuery {
      allMdx {
        edges {
          node {
            id
            body
            frontmatter {
              title
              description
              publishedAt
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return data.allMdx.edges.map(({node}) => parseBlogPostMdxData(node));
};

export default useBlogPosts;
