# WithViewCheck HOC

A HOC implemented with MUI for screen resolution checking

## Usage
```js
import React, { Component } from 'react';
import withViewCheck from 'hoc/withViewCheck';

class MyComponent extends Component {
  render() {
    const {isViewXs} = this.props;

    return (
      <h1>
        {isViewXs ? 'Xs width' : 'Not Xs width' }
      </h1>
    )
  }
}

export default withViewCheck()(MyComponent);
```

## Available props

**isViewXs**, extra-small: `0px` to `599.99px`<br/>
**isViewSm**, small: `600px` to `959.99px`<br/>
**isViewMd**, medium: `960px` to `1279.99px`<br/>
**isViewLg**, large: `1280px to 1919.99px`<br/>
**isViewXl**, extra-large: `1920px` or larger<br/>

**isViewSmDown**, `600px` or smaller<br/>
**isViewLgUp**, `1280px` or larger<br/>
**isViewMdUp**, `960px` or larger<br/>