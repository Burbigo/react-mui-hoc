# ScrollToTop HOC

A HOC implemented with MUI for scroll to the top of the selected anchor.

## Usage
For proper work of this HOC in your app follow the next steps:
- Add `your_id` to the DOM element that you want to be in focus.
- Add `your_id` to the url according the pattern `http://your_site_url#your_id`. It could be implemented with React Router (e.g. `history.push(${pathname}#${youd_id}`).

## Example
Add ScrollToTop component as upper as possible in your application structure.
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
