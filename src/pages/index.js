import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import tw, {styled} from 'twin.macro';
import BlogTitle from '../components/blog-title';
import {BlogPostShape} from '../utils/shared';
import PageSEO from '../components/seo';
import Layout from '../components/layout';
import useBlogPosts from '../utils/use-blog-posts';

const IndexPage = () => {
  const posts = useBlogPosts();

  return (
    <Layout>
      <PageSEO title="Home" />
      <BlogTitle />
      <BlogPosts posts={posts} />
    </Layout>
  );
};

const BlogPosts = ({posts = []}) => (
  <div css={tw`mt-6`}>
    {posts.map(post => (
      <BlogPostItem {...post} key={post.slug} />
    ))}
  </div>
);

BlogPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(BlogPostShape))
};

const BlogPostLink = styled(Link)`
  ${tw`block hover:underline mb-8`}
  width: fit-content;
`;
const BlogPostItem = ({title, slug, publishedAt, description}) => (
  <BlogPostLink to={slug}>
    <div css={tw`text-2xl font-semibold`}> {`>> ${title}`}</div>
    <div>{description}</div>
    <div css={tw`text-sm`}>{publishedAt}</div>
  </BlogPostLink>
);
BlogPostItem.propTypes = BlogPostShape;

export default IndexPage;
