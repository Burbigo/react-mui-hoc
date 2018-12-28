import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { scrollTo } from 'utils/helpers';

export class ScrollToTop extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      if (props.location.hash) {
        const id = props.location.hash.slice(1);
        const domElement = document.getElementById(id);
        if (domElement) {
          domElement.scrollIntoView();
        }
      } else {
        window.scrollTo(0, 0);
      }
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);