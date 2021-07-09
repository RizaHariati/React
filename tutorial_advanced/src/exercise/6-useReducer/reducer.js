export const reducer = (state, action) => {
  if (action.type === "ADD_PERSON") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      showModal: true,
      ModalContent: `${action.payload.name} is added`,
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      showModal: true,
      ModalContent: "Empty Value",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      showModal: false,
    };
  }
  if (action.type === "REMOVE") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
      showModal: true,
      ModalContent: "person is removed",
    };
  }
  return state;
};
