import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={(props) => (
      !!rest.accessToken
        ? <Component {...props} />
        : <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }}/>
    )}/>
  )
};

const mapStateToProps = (state) => ({
  accessToken: state.auth.accessToken
});

export default connect(mapStateToProps, null)(withRouter(PrivateRoute));

