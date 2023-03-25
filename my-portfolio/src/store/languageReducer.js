const initialState = {
  language: "kur",
};

function languageReducer(state = initialState, action) {
  switch (action.type) {
    case "kur":
      return { language: (state.language = "kur") };
    case "en":
      return { language: (state.language = "en") };
    default:
      return state;
  }
}

export default languageReducer;
