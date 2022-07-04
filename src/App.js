import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CustomerList from './Pages/CustomerList';
import Invoices from './Pages/Invoices';
import PackageList from './Pages/PackageList';
import Invoice from './Pages/Invoice';
import { useAppContext } from './context/context';

function App() {
  const { fetchData } = useAppContext();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <CustomerList />
        </Route>

        <Route path='/package'>
          <PackageList />
        </Route>

        <Route path='/invoices'>
          <Invoices />
        </Route>

        <Route path='/invoice/:id'>
          <Invoice />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
