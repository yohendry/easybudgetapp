import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useApp } from '../../contexts/app';

export default function SidebarItem({
  label, svgIcon, count, onClick, href, active, color, className,
}) {
  const { setIsSidebarOpen } = useApp();

  const handleOnClick = () => {
    setIsSidebarOpen(false);
    if (onClick) onClick();
  };

  const innerElement = (
    <span className={`flex items-center w-full text-lg  text-${color}-300 ${className}`}>
      {svgIcon && (
      <svg
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
      >
        {svgIcon}
      </svg>
      )}
      <span className="ml-3  text-gray-300 w-full">{label}</span>
      {count && (
      <span
        className="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto "
      >
        {count}
      </span>
      )}
    </span>
  );

  const wrapperClassName = `flex flex-row items-center h-10 px-3 rounded-lg  hover:bg-budget-purple-500 hover:text-gray-800 ${className} ${active ? 'bg-budget-purple-500 text-gray-700' : 'text-gray-300'}`;

  return (
    <li className="my-px">
      {href ? (
        <Link href={href} passHref>
          <a
            className={wrapperClassName}
          >
            {innerElement}
          </a>
        </Link>
      ) : (
        <button
          type="button"
          className={`w-full ${wrapperClassName} text-left`}
          onClick={handleOnClick}
        >
          {innerElement}
        </button>
      )}
    </li>
  );
}

SidebarItem.propTypes = {
  label: PropTypes.string.isRequired,
  svgIcon: PropTypes.any,
  color: PropTypes.string,
  active: PropTypes.bool,
  count: PropTypes.number,
  onClick: PropTypes.func,
  href: PropTypes.string,
  className: PropTypes.string,
};
SidebarItem.defaultProps = {
  svgIcon: null,
  color: 'gray',
  active: false,
  count: null,
  onClick: null,
  href: null,
  className: '',
};
