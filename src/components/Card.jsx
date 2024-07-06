import PropTypes from "prop-types";

const Card = ({ children, bg = "bg-teal-100" }) => {
  return <div className={`${bg} p-6 rounded-2xl  shadow-2xl `}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
};

export default Card;
