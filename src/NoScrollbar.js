import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NoScrollbar extends Component {
  constructor(props) {
    super(props);
    this.mount = false;
    this.state = {
      width: 0
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.mount = true;
    this.handleResize();
  }

  handleResize() {
    if (this.mount && this.node) {
      this.setState({
        width: this.node.offsetWidth
      });
    }
  }

  handleRef(node) {
    this.node = node;
  }

  render() {
    const { scrollWidth, overflowX, children } = this.props;
    const wrapStyle = {
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    };
    const scrollStyle = {
      width: `calc(100% + ${scrollWidth})`,
      height: '100%',
      'overflow-x': overflowX,
      'overflow-y': 'auto'
    };
    const innerStyle = {
      width: `${this.state.width}px`
    };
    return (
      <div ref={(node) => this.handleRef(node)} style={wrapStyle} >
        <div style={scrollStyle} >
          <div style={innerStyle}>
            {this.mount ? children : null}
          </div>
        </div>
      </div>
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  NoScrollbar.propTypes = {
    scrollWidth: PropTypes.string,
    overflowX: PropTypes.string,
    children: PropTypes.node
  };
}

NoScrollbar.defaultProps = {
  scrollWidth: '25px',
  overflowX: 'hidden';
};


export default NoScrollbar;
