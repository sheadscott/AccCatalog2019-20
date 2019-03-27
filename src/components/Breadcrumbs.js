import React from 'react';
import Parser from 'html-react-parser';
import axios from 'axios';

import styled from 'styled-components';
import trimpath from '../../trimpath';

const BreadcrumbNav = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    font-size: 0.85rem;
  }

  .divider {
    display: inline-block;
    padding: 0 0.5rem;
  }
`;

class Breadcrumbs extends React.Component {
  state = {};

  componentDidMount() {
    const _this = this;
    axios
      .get(`https://devinstruction.austincc.edu/catalog2019-20/wp-json/bcn/v1/post/${this.props.page}`)
      .then(response => {
        console.log('axios', response.data);
        _this.setState({ breadcrumbs: response.data.itemListElement.slice(1) });
      });
  }

  render() {
    return (
      <BreadcrumbNav>
        <ul>
          {this.state.breadcrumbs &&
            this.state.breadcrumbs.map((crumb, index) => {
              if (index === 0) {
                return (
                  <li key={`crumb${index}`}>
                    <a href="/">Home</a>
                    <span className="divider">/</span>
                  </li>
                );
              }

              if (index === this.state.breadcrumbs.length - 1) {
                return (
                  <li key={`crumb${index}`}>
                    <span>{Parser(crumb.item.name)}</span>
                  </li>
                );
              }

              return (
                <li key={`crumb${index}`}>
                  <a href={trimpath(crumb.item['@id'])}>{Parser(crumb.item.name)}</a>
                  <span className="divider">/</span>
                </li>
              );
            })}
        </ul>
      </BreadcrumbNav>
    );
  }
}

export default Breadcrumbs;
