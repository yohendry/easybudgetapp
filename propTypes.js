import PropTypes from 'prop-types';

export const propReactElement = PropTypes.oneOfType([
  PropTypes.func.isRequired,
  PropTypes.element,
  PropTypes.arrayOf(PropTypes.element),
]);

export const propUser = PropTypes.shape({
  uid: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
});

export const propAccount = PropTypes.shape({
  uid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cleared_balance: PropTypes.number.isRequired,
  working_balance: PropTypes.number.isRequired,
  uncleared_balance: PropTypes.number.isRequired,
});
