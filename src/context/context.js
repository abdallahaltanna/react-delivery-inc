import { useReducer } from 'react';
import { useContext, createContext } from 'react';
import reducer from './reducer';
import {
  FETCH_DATA,
  REMOVE_CUSTOMER,
  REMOVE_PACKAGE,
  ADD_PACKAGE,
  DISPLAY_MODAL,
  UPDATE_PACKAGES,
} from './actions';

const initalState = {
  customers: [],
  packages: [],
  showModal: false,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const fetchData = async () => {
    try {
      const res = await fetch('/data.json');
      const { customers, packages } = await res.json();
      dispatch({ type: FETCH_DATA, payload: { customers, packages } });
    } catch (error) {
      console.log(error);
    }
  };

  const removeCustomer = (id) => {
    dispatch({ type: REMOVE_CUSTOMER, payload: id });
  };

  const removePackage = (id) => {
    dispatch({ type: REMOVE_PACKAGE, payload: id });
  };

  const addPackage = (PKG) => {
    dispatch({ type: ADD_PACKAGE, payload: PKG });
  };

  const displayModal = () => {
    dispatch({ type: DISPLAY_MODAL });
  };

  const updatePackages = (PKG) => {
    dispatch({ type: UPDATE_PACKAGES, payload: PKG });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        fetchData,
        removeCustomer,
        removePackage,
        addPackage,
        displayModal,
        updatePackages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
