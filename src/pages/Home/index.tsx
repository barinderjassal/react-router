import { createElement, FC, Fragment } from 'react';
import { Route } from 'react-router-dom';

export const Home: FC = () => {
  return (
    <Fragment>
      Home Component
      {/* 
        Showing Nested Roting
        Nested Routing can be implemented at any stage or in any page of
        your application.
        Structure and idea would be same, implement Route from react-router-dom
      */}
      <Route path="/home/new-user">
        <p>This is a new user from nested route of Home Page</p>
      </Route>
    </Fragment>
  )
}