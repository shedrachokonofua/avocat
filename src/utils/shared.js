import PropTypes from 'prop-types';
import {parseISO, formatDistance} from 'date-fns';

export const BlogPostShape = {
  title: PropTypes.string,
  slug: PropTypes.string,
  publishedAt: PropTypes.instanceOf(Date),
  description: PropTypes.string
};

export const parseBlogPostMdxData = mdx => ({
  title: mdx.frontmatter.title,
  description: mdx.frontmatter.description,
  slug: mdx.fields.slug,
  publishedAt: formatDistance(
    parseISO(mdx.frontmatter.publishedAt),
    new Date(),
    {addSuffix: true}
  )
});
