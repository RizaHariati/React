import {
  SET_LOADING,
  NO_DATA,
  SET_DATA,
  TOGGLE_PAGE,
  REMOVE_ITEM,
  SET_QUERY,
} from "./actions";
export const reducer = (state, action) => {
  if (action.type === SET_LOADING) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === NO_DATA) {
    return {
      ...state,
      loading: false,
      noData: true,
    };
  }
  if (action.type === SET_DATA) {
    const { hits, nbPages } = action.payload;
    return {
      ...state,
      loading: false,
      noData: false,
      hits: hits,
      nbPages: nbPages,
    };
  }
  if (action.type === TOGGLE_PAGE) {
    let pageNow = state.page;
    const toggle = action.payload;
    if (toggle === "increase") {
      pageNow = pageNow + 1;
      if (pageNow >= state.nbPages) {
        pageNow = state.nbPages;
      }
    } else if (toggle === "decrease") {
      pageNow = pageNow - 1;
      if (pageNow < 0) {
        pageNow = 0;
      }
    }

    return {
      ...state,
      page: pageNow,
    };
  }

  if (action.type === REMOVE_ITEM) {
    const newHits = state.hits.filter((hit) => hit.objectID !== action.payload);
    console.log(newHits);
    return {
      ...state,
      loading: false,
      hits: newHits,
    };
  }

  if (action.type === SET_QUERY) {
    return {
      ...state,
      query: action.payload,
    };
  }
  return state;
};
