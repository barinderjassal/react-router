import { createElement, Fragment, FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { MainHeader } from '../components';
import { Home, Products, ProductDetail } from '../pages';

export const App: FC = () => {
  return (
    <Fragment>
      <MainHeader />
      <Switch>
        {/* The first route is for Redirection */}
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>

        {/* Application Routes */}
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/products" exact>
          {/* exact prop matches the FULL path with the route we are on the browser */}
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
      </Switch>
    </Fragment>
  );
};
