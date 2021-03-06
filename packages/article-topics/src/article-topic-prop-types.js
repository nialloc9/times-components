import PropTypes from "prop-types";

const topicPropTypes = {
  fontSize: PropTypes.number,
  lineHeight: PropTypes.number,
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired
};

export default topicPropTypes;
