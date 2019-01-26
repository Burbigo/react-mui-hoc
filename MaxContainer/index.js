import React from 'react';

import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import classNames from 'classnames';

const styles = () => ({
  root: {
    maxWidth: 1340
  },
  container: {}
});

const MaxContainer = (props) => {
  const {
    classes,
    children,
    spacing = 0,
    justify = 'flex-start'
  } = props;
  return (
    <div className={classNames('MaxContainer', classes.root)}>
      <Grid
        container
        justify={justify}
        spacing={spacing}
      >
        <Grid
          item
          xs={12}
          className={classes.container}
        >
          {children}
        </Grid>
      </Grid>
    </div>
  );
};


export default withStyles(styles)(MaxContainer);