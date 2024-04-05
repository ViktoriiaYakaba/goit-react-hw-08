import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

export default function DocumentTitle({ children }) {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
}

DocumentTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

