import ClipLoader from "react-spinners/ClipLoader";
import PropTypes from "prop-types";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};


const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#00FFFF"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};


Spinner.propTypes = {
    loading: PropTypes.bool
}
export default Spinner;
