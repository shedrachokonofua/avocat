import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import tw from 'twin.macro';
import {MDXProvider} from '@mdx-js/react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {parseBlogPostMdxData} from '../utils/shared';
import Layout from './layout';

const PostLayout = ({data: {mdx}}) => {
  const {title, description, categories, publishedAt} = parseBlogPostMdxData(
    mdx
  );

  return (
    <Layout>
      <div css={tw`mb-8`}>
        <h2 css={tw`text-5xl`}>{title}</h2>
        <span css={tw`text-gray-500 italic block`}>{description}</span>
        <div css={tw`text-gray-400 text-sm`}>{categories.join(' | ')}</div>
        <span css={tw`text-gray-400 text-sm`}>{publishedAt}</span>
      </div>
      <MDXProvider>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: {eq: $id}) {
      id
      body
      frontmatter {
        title
        description
        publishedAt
      }
      fields {
        slug
        categories
      }
    }
  }
`;

PostLayout.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object
  })
};

export default PostLayout;
