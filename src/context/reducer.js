import {
  ADD_PACKAGE,
  FETCH_DATA,
  REMOVE_CUSTOMER,
  REMOVE_PACKAGE,
  DISPLAY_MODAL,
  UPDATE_PACKAGES,
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
    case UPDATE_PACKAGES:
      return {
        ...state,
        packages: payload,
      };

    default:
      return state;
  }
};

export default reducer;
