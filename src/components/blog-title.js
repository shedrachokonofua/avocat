import React from 'react';
import tw from 'twin.macro';
import {Link} from 'gatsby';

const BlogTitle = () => (
  <Link to="/">
    <h1 css={tw`text-6xl italic underline text-white`}>avocat</h1>
  </Link>
);

export default BlogTitle;
