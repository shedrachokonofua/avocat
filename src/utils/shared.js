import PropTypes from 'prop-types';
import {parseISO, formatDistance} from 'date-fns';

export const BlogPostShape = {
  title: PropTypes.string,
  slug: PropTypes.string,
  publishedAt: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string)
};

const capitalizeFirstLetter = text => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const parseBlogPostMdxData = ({
  frontmatter: {title, description, publishedAt},
  fields: {slug, categories}
}) => ({
  title,
  description,
  slug,
  categories: categories.map(c => capitalizeFirstLetter(c)),
  publishedAt: formatDistance(parseISO(publishedAt), new Date(), {
    addSuffix: true
  })
});
