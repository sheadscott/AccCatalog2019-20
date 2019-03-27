import React, { Component } from 'react';
import Parser from 'html-react-parser';
import { Grid, GridCell } from "rmwc/Grid";
import { Helmet } from 'react-helmet';
import axios from 'axios';

import MainMenu from '../components/MainMenu';
import ContextMenu from '../components/ContextMenu';
import Breadcrumbs from '../components/Breadcrumbs';

import styled from 'styled-components';


const headerStyle = {
  color: '#1a5276',
  borderBottom: '2px solid #1a52764d'
}

const PageContent = styled(Grid)`
  max-width: 960px;
`;

const Sidebar = styled(GridCell)`
  background: rgba(0,0,0,0.03);
`;

class SearchPage extends Component {
  state = {}
  componentDidMount() {
    let searchParam = window.location.href.split("=");
    searchParam = searchParam.pop();
    const _this = this;
    let results = [];

    axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyB_RsUE2sfirjPLyMpK8jvYeX45E0tBtvs&cx=012364290968804032782:p0akblpehfs&q=${searchParam}`).then(response => {
      results = response.data.items;
      console.log('results', results, 'data', response.data);
      _this.setState({ searchResults: results });
    })
  }
  render() {
    return (
      <div>
        <Helmet
          title={`Search | ${this.props.data.site.siteMetadata.title}`}
        />
        <MainMenu items={this.props.data.MainMenu.items} />
        <PageContent style={{ maxWidth: '960px' }}>
          <GridCell tag="main" id="main" span="12">
            <h1 style={{
              color: '#1a5276',
              borderBottom: '2px solid #1a52764d'
            }}>Search Results</h1>
            <div id="search_results">
              <ul style={{
                listStyle: 'none',
                margin: 0
              }}>
                {this.state.searchResults && this.state.searchResults.map((data, index) => {
                  return (
                    <li key={`data${index}`}>
                      <h4><a href={data.link}>{data.title}</a></h4>
                      <p>{Parser(data.htmlSnippet)}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </GridCell>
        </PageContent>
      </div>
    )
  }
}

export default SearchPage;

export const searchPageQuery = graphql`
  query searchPageQuery {
    site {
      siteMetadata {
        title
      }
    }

    MainMenu: wordpressWpApiMenusMenusItems(name: {eq: "Main Menu"}) {
      id
      slug
      items {
        title
        url
        order
        wordpress_children {
          order
          title
          url
        }
      }
    }

    ContextMenu: wordpressWpApiMenusMenusItems(name: {eq: "Context Menu"}) {
      id
      slug
      items {
        title
        url
        wordpress_children {
          order
          title
          url
        }
      }
    }
  }
`;