import React from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';

const Layout = ({children}) => (
  <div css={tw`p-16 min-h-screen bg-primary text-white`}>{children}</div>
);

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
