import React from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';
import {Link} from 'gatsby';

const BlogTitle = () => (
  <Link to="/">
    <h1 css={tw`text-6xl italic text-black text-right`}>avocat</h1>
  </Link>
);

const Layout = ({children}) => (
  <div css={tw`p-16 min-h-screen bg-white text-black`}>
    <BlogTitle />
    <div css={tw`mt-8`}>{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
