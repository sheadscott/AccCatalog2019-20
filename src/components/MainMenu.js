import React from 'react';
import Link from 'gatsby-link'
import { Button, ButtonIcon } from 'rmwc/Button';
import { Grid, GridCell } from "rmwc/Grid";
import { Menu, MenuItem, MenuAnchor } from 'rmwc/Menu';
import { Icon } from "rmwc/Icon";

import styled from 'styled-components';

import menuData from '../menus/main';

const MenuBar = styled.nav`
  background: #1a5276;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  text-transform: uppercase;

  button,
  a {
    margin-right: 2rem;
  }

  a {
    display: inline-flex;
    min-height: 36px;
    justify-content: center;
    align-items: center;
  }
  
  button {
    color: white;
    font-size: 1rem;
    font-family: 'Montserrat';
  }
  
  .mdc-button:before {
    background-color: #00cdee;
  }

  button:hover,
  button:focus,
  button:active,
  button.mdc-ripple-upgraded--background-focused {
    background: #1d5e86 !important;
    --mdc-ripple-fg-opacity: 0;
  }
`;

const MainMenuDropdown = styled(MenuAnchor)`
  display: inline-block;
`;


class MainMenu extends React.Component {
  state = {
    menuIsOpen: false
  }
  render() {
    return (
      <MenuBar>
        <Grid style={{ maxWidth: '960px', paddingTop: '1rem', paddingBottom: '1rem' }}>
          <GridCell span="12">
            {
              menuData.map((item, index) => {
                if (Array.isArray(item)) {
                  return (
                    <MainMenuDropdown key={`mainMenuDropdown_${index}`}>
                      <Menu
                        open={this.state.menuIsOpen}
                        onClose={evt => this.setState({ menuIsOpen: false })}
                      >
                        {item.map(child => (
                          <MenuItem key={child.url}>
                            <Link to={child.url}>{child.title}</Link>
                          </MenuItem>
                        ))}
                      </Menu>

                      <Button
                        onClick={evt => this.setState({ 'menuIsOpen': !this.state.menuIsOpen })}
                        theme="text-primary-on-dark"
                      >
                        Home
                        <Icon tag="span" strategy="component">
                          <svg style={{
                            position: 'relative',
                            top: '2px'
                          }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="white" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                          </svg>
                        </Icon>
                      </Button>
                    </MainMenuDropdown>
                  )
                }

                return (
                  <Link to={item.url} key={item.url + index} style={{ color: 'white' }}>{item.title}</Link>
                )
              })
            }
          </GridCell>
        </Grid>
      </MenuBar>
    );
  }
}

export default MainMenu;
