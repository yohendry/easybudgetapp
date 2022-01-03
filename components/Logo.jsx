import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <div className={`inline-flex ${className}`}>
      <Link href="/" passHref>
        <a className="inline-flex flex-row items-center text-3xl ">
          <span className="text-budget-green-600 font-bold uppercase">EASY</span>
          <span className="text-budget-green-500 font-bold uppercase">BUDGET</span>
        </a>
      </Link>
    </div>
  );
}
Logo.defaultProps = {
  className: '',
};
Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
