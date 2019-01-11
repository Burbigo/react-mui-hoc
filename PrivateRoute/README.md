# PrivateRoute HOC

A HOC implemented with React Router for creating protected routes.

## Usage
```js
import React, {Component} from 'react';
import PrivateRoute from 'hoc/PrivateRoute';
import {Switch, Route, withRouter} from 'react-router-dom';
import PrivatePage from 'components/PrivatePage';
import PublicPage from 'components/PublicPage';

class MyComponent extends Component {
  render() {

    return (
      <Switch>
        // You can access this page only after authorization
        <PrivateRoute path={'/private-route'} component={PrivatePage}/>
        // This page is accessible without authorization
        <Route path={'/public-route'} component={PublicPage}/>
      </Switch>
    )
  }
}

export default withRouter(MyComponent);
```

## Available props

**component**, component which should be accessible only for authorized user.<br/>
**rest.accessToken**, security token.
