import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import tw from 'twin.macro';
import {BlogPostShape} from '../utils/shared';
import Layout from '../components/layout';
import useBlogPosts from '../utils/use-blog-posts';

const IndexPage = () => {
  const posts = useBlogPosts();

  return (
    <Layout>
      <BlogPosts posts={posts} />
    </Layout>
  );
};

const BlogPostsGrid = tw.div`
  mt-16
  grid
  lg:grid-flow-row
  lg:grid-cols-4
  gap-12
`;

const BlogPosts = ({posts = []}) => (
  <BlogPostsGrid>
    {posts.map(post => (
      <BlogPostItem {...post} key={post.slug} />
    ))}
  </BlogPostsGrid>
);

BlogPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(BlogPostShape))
};

const BlogPostItem = ({title, slug, publishedAt, description, categories}) => (
  <div>
    <Link to={slug} css={tw`text-3xl font-semibold block hover:underline`}>
      {`> ${title}`}
    </Link>
    <div>{description}</div>
    <div css={tw`text-sm`}>{categories.join(' | ')}</div>
    <div css={tw`text-sm`}>{publishedAt}</div>
  </div>
);
BlogPostItem.propTypes = BlogPostShape;

export default IndexPage;
