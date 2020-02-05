import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions";

const AdditionalFeature = props => {
  const featureMatch = id => {
    const match = props.car.features.filter(feature => feature.id === id);
    return match.length > 0 ? true : false;
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        disabled={featureMatch(props.feature.id)}
        className="button"
        onClick={() => props.addFeature(props.feature)}
      >
        {featureMatch(props.feature.id) ? `Added` : `Add`}
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  };
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
