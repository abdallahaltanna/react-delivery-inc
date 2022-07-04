import {
  ADD_PACKAGE,
  FETCH_DATA,
  REMOVE_CUSTOMER,
  REMOVE_PACKAGE,
  DISPLAY_MODAL,
  MOVE_UP,
  MOVE_DOWN,
} from './actions';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case FETCH_DATA:
      return {
        ...state,
        customers: payload.customers,
        packages: payload.packages,
      };
    case REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter((elem) => elem.id !== payload),
      };
    case REMOVE_PACKAGE:
      return {
        ...state,
        packages: state.packages.filter((elem) => elem.id !== payload),
      };
    case ADD_PACKAGE:
      return {
        ...state,
        packages: [...state.packages, payload],
      };
    case DISPLAY_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
      };
    case MOVE_UP:
      return {
        ...state,
        packages: () => {
          let newIndex = payload - 1;
          if (newIndex < 0) {
            newIndex = 0;
          }
          return [...state.packages, state.packages[newIndex]];
        },
      };
    case MOVE_DOWN:
      return {
        ...state,
        packages: () => {
          let newIndex = payload + 1;
          if (newIndex > state.packages.length - 1) {
            newIndex = state.packages.length - 1;
          }
          return [...state.packages, state.packages[newIndex]];
        },
      };

    default:
      return state;
  }
};

export default reducer;
