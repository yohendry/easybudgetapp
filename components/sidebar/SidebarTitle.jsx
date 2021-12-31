import React from 'react';
import PropTypes from 'prop-types';

export default function SidebarTitle({ title }) {
  return (
    <li className="my-px">
      <span className="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase">{title}</span>
    </li>
  );
}

SidebarTitle.defaultProps = {
  title: '',
};

SidebarTitle.propTypes = {
  title: PropTypes.string,
};
