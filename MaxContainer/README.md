# MaxContainer HOC

A HOC implemented with MUI for determining page max width

## Usage
```js
import React, {Component} from 'react';
import MaxContainer from 'hoc/MaxContainer';
import YourComponent from 'components/YourComponent';

class MyComponent extends Component {
  render() {

    return (
      <MaxContainer
        justify={'center'}
        spacing={24}
        classes={{container: {/* your styles for container */}}}
      >
        <Grid container>
          <YourComponent />
        </Grid>
      </MaxContainer>
    )
  }
}

export default MyComponent;
```

## Available props

**classes**, accept `root` and `container` classNames<br/>
**children**, any valid JSX<br/>
**spacing**, material design margins and columns follow an `8dp` square baseline grid. Spacing can be `8, 16, 24, 32 or 40dp` wide.<br/>
**justify**, defines the justify-content style property. It is applied for all screen sizes. Justify can be `flex-start, center, flex-end, space-between, space-around, space-evenly`<br/>
