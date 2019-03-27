import React from "react";
import { ListItem, ListItemMeta, ListItemText } from "rmwc/List";
import { Icon } from "rmwc/Icon";
import PropTypes from 'prop-types';
// import { TweenMax } from "gsap/TweenMax";

import styled from "styled-components";

const ulStyle = {
  listStyle: "none",
  margin: 0,
  padding: 0
};

class Submenu extends React.Component {
  constructor(props) {
    super(props);
    this.submenu = React.createRef();
  }

  state = {
    open: this.props.open
  };

  handleClick = () => {
    this.setState(
      prevState => {
        return { open: !prevState.open };
      },
      () => {
        if (this.state.open) {
          TweenMax.set(this.submenu.current, { height: "auto" });
          TweenMax.from(this.submenu.current, 0.25, { height: 0 });
        } else {
          TweenMax.to(this.submenu.current, 0.25, { height: 0 });
        }
      }
    );
  };

  componentDidMount() {
    const currentList = document.getElementById(this.props.slug);
    const activeElements = currentList.querySelectorAll('.active');

    if (activeElements.length > 0) {
      this.setState({ open: true });
    }
  }

  render() {
    return (
      <li className={this.state.open ? 'submenu open' : 'submenu'}>
        <ListItem onClick={this.handleClick}>
          <ListItemText>{this.props.text}</ListItemText>
          <ListItemMeta tag="span">
            <Icon
              tag="span"
              strategy="component"
              className={
                this.state.open
                  ? "submenu__icon submenu__icon--open"
                  : "submenu__icon"
              }
            >

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </Icon>
          </ListItemMeta>
        </ListItem>
        <ul
          ref={this.submenu}
          style={ulStyle}
          id={this.props.slug}
          className={
            this.state.open
              ? "submenu__children submenu__children--open"
              : "submenu__children"
          }
        >
          {this.props.children}
        </ul>
      </li>
    );
  }
}

export default Submenu;

Submenu.defaultProps = {
  open: false
};

Submenu.propTypes = {
  open: PropTypes.bool
};