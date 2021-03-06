# ScrollToTop HOC

A HOC implemented with MUI for scrolling to the selected anchor.

## Usage
For proper work of this HOC in your app follow the next steps:
- Add `your_id` to the DOM element that you want to be in focus.
- Add `your_id` to the url according the pattern `http://your_site_url#your_id`. It could be implemented with React Router (e.g. `history.push(${pathname}#${your_id}`).

## Example
Add ScrollToTop component as higher as possible in your application structure.
```js
import React, { Component } from 'react';
import ScrollToTop from 'hoc/ScrollToTop';
import RootComponent from 'containers/RootComponent'

class MyComponent extends Component {
  render() {

    return (
      <ScrollToTop
        behavior={'smooth'}
        block={'start'}
      >
        <RootComponent />
      </ScrollToTop>
    )
  }
}

export default MyComponent;
```

## Available props

**behavior** `(optional)`, Defines the transition animation. One of `auto` or `smooth`. Defaults to `auto`.<br/>
**block** `(optional)`, Defines vertical alignment. One of `start`, `center`, `end`, or `nearest`. Defaults to `center`.<br/>
**inline** `(optional)`, Defines horizontal alignment. One of `start`, `center`, `end`, or `nearest`. Defaults to `nearest`.<br/>