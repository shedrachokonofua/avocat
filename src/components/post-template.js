import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import tw from 'twin.macro';
import {MDXProvider} from '@mdx-js/react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import BlogTitle from './blog-title';
import {parseBlogPostMdxData} from '../utils/shared';

const PostLayout = ({data: {mdx}}) => {
  const blogPost = parseBlogPostMdxData(mdx);
  return (
    <div css={tw`min-h-screen`}>
      <div css={tw`bg-primary p-12 text-right`}>
        <BlogTitle />
      </div>
      <div css={tw`p-8`}>
        <div css={tw`mb-8`}>
          <h2 css={tw`text-5xl`}>{blogPost.title}</h2>
          <span css={tw`text-gray-500 italic block`}>
            {blogPost.description}
          </span>
          <span css={tw`text-gray-400 text-sm`}>{blogPost.publishedAt}</span>
        </div>
        <MDXProvider>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </div>
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
