# WithViewCheck HOC

A HOC implemented with MUI for scroll to the top of the document.

## Usage
// When the user clicks on the element, page scrolls to the top.

## Example
// Wrap parent container in our HOC as high as possible.
```js
import React, {Component} from 'react';
import ScrollToTop from 'hoc/ScrollToTop';
import RootComponent from 'containers/RootComponent'

class MyComponent extends Component {
  render() {

    return (
      <ScrollToTop>
          <RootComponent />
      </ScrollToTop>
    )
  }
}

export default MyComponent;
```
