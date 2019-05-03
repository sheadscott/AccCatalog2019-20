import React from 'react';
import Link from 'gatsby-link';
import _ from 'lodash';

import { Icon } from 'rmwc/Icon';
import { Drawer, DrawerContent } from 'rmwc/Drawer';
import { List, ListItem, ListItemText, ListItemMeta } from 'rmwc/List';
import { Theme } from 'rmwc/Theme';
import styled from 'styled-components';
import Submenu from './Submenu.js';

import trimpath from '../../trimpath';

import menuData from '../menus/sidebar';

// activated={
//   window.location.pathname.split("/").pop() === url.split("/").pop()
// }

const ContextMenuItem = ({ url, label, className }) => (
  <ListItem className={className} onClick={() => window.scrollTo(0, 0)}>
    <Link to={trimpath(url)}>
      <ListItemText>{label}</ListItemText>
    </Link>
  </ListItem>
);

class ContextMenu extends React.Component {
  state = {
    open: this.props.open,
    isMobile: this.props.mobile,
  };

  printList(arr, sub, slug) {
    if (sub) {
      return (
        <ul className="menu nested">
          {_.map(arr, (item, index) => {
            if (item) {
              return (
                <li key={`${item.object_slug}__${index}`} className={slug === item.object_slug ? 'active' : ''}>
                  <ContextMenuItem label={item.title} url={item.url} slug={item.object_slug} />
                  {item.children && item.children.length > 0 ? this.printList(item.children, true, slug) : null}
                </li>
              );
            }
          })}
        </ul>
      );
    }
    return _.map(arr, (item, index) => {
      if (item) {
        return (
          <li key={`submenuItem_${item.object_slug}_${index}`} className={slug === item.object_slug ? 'active' : ''}>
            <ContextMenuItem label={item.title} url={item.url} slug={item.object_slug} />
            {item.children && item.children.length > 0 ? this.printList(item.children, true, slug) : null}
          </li>
        );
      }
    });
  }

  render() {
    console.log(this.props.items);
    console.log('All Pages: ', this.props.pages);
    return (
      <Drawer id="main-nav">
        <DrawerContent>
          <UnorderedList>
            {menuData.map((item, i) => {
              if (item.children && item.children.length > 0) {
                return (
                  <Submenu
                    text={item.title}
                    key={`submenu_${item.object_slug}_${i}`}
                    slug={item.object_slug}
                    open={this.props.currentSlug === item.object_slug}
                  >
                    {this.printList(
                      item.children,
                      null,
                      this.props.link
                        .slice(0, -1)
                        .split('/')
                        .pop()
                    )}
                  </Submenu>
                );
              }

              return (
                <li
                  key={`contextMenu_${item.slug}_${i}`}
                  className={this.props.currentSlug === item.object_slug ? 'active' : null}
                >
                  <ContextMenuItem
                    label={item.title}
                    url={item.url}
                    className={this.props.currentSlug === item.object_slug ? 'active' : null}
                  />
                </li>
              );
            })}
          </UnorderedList>
        </DrawerContent>
      </Drawer>
    );
  }
}

export default ContextMenu;

const UnorderedList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  color: #535353;

  svg {
    fill: #535353;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-transform: initial;
  }

  a {
    position: relative !important;
    padding: 0 !important;
  }

  .mdc-list-item {
    height: auto;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: flex-start;
  }

  .submenu__children .mdc-list-item {
    height: auto;
  }

  .submenu__children > li > div {
    background: hsla(49, 100%, 80%, 1);
  }

  .submenu__children ul.nested {
    background: hsla(49, 100%, 95%, 1);
  }

  .submenu__children .mdc-list-item__text {
    display: inline-flex;
    text-indent: 0;
    padding-left: 1rem;
  }

  .submenu__children > li > div {
    background: hsla(49, 100%, 80%, 1);
  }

  .submenu__children ul.nested {
    background: hsla(49, 100%, 95%, 1);
  }

  .mdc-list-item__text {
    white-space: normal;
  }

  .active > .mdc-list-item .mdc-list-item__text {
    color: rgb(26, 82, 118);
    font-weight: 800;
  }

  ul.menu.nested .mdc-list-item__text {
    padding-left: 2rem;
    position: relative;
  }

  ul.menu.nested .mdc-list-item__text:before {
    content: '•';
    display: inline-block;
    position: absolute;
    left: 1rem;
  }

  li.submenu.open > .mdc-list-item .mdc-list-item__text {
    color: rgb(26, 82, 118);
    font-weight: 800;
  }
`;
