export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = feature => {
  return {
    type: ADD_FEATURE,
    payload: feature
  };
};

export const removeFeature = index => {
  return {
    type: REMOVE_FEATURE,
    payload: index
  };
};
