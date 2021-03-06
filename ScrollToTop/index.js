import { Component } from 'react';
import { withRouter } from 'react-router-dom';

export class ScrollToTop extends Component {

  componentDidUpdate(prevProps) {
    const {
      location,
      behavior = 'auto',
      block = 'center',
      inline = 'nearest'
    } = this.props;
    
    if (location !== prevProps.location) {
      if (location.hash) {
        const id = location.hash.slice(1);
        const domElement = document.getElementById(id);
        if (domElement) {
          domElement.scrollIntoView({
            behavior,
            block,
            inline
          });
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