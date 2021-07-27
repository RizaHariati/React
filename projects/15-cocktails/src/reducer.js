export const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === "DISPLAY_DATA") {
    const newData = action.payload.map((item) => {
      const {
        idDrink,
        strAlcoholic,
        strDrink,
        strGlass,
        strDrinkThumb,
        strInstructions,
        strIngredient1,
        strCategory,
      } = item;
      return {
        id: idDrink,
        alc: strAlcoholic,
        name: strDrink,
        glass: strGlass,
        img: strDrinkThumb,
        instr: strInstructions,
        ingre: strIngredient1,
        category: strCategory,
      };
    });
    return {
      ...state,
      data_cocktails: newData,
      loading: false,
    };
  }
  if (action.type === "NULL_DATA") {
    return {
      ...state,
      data_cocktails: [],
      loading: false,
    };
  }

  return state;
};
