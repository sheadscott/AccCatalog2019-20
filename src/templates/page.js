import React, { Component } from 'react';
import Parser from 'html-react-parser';
import { Grid, GridCell } from "rmwc/Grid";
import { Helmet } from 'react-helmet';

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

class Page extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={`${Parser(this.props.data.Page.title)} | ${this.props.data.site.siteMetadata.title}`}
        />
        <MainMenu items={this.props.data.MainMenu.items} />
        <PageContent tag="main" id="main" style={{ maxWidth: '960px' }}>
          <GridCell span="12">
            <Breadcrumbs page={this.props.data.Page.wordpress_id} />
            <h1 style={headerStyle}>{Parser(this.props.data.Page.title)}</h1>
          </GridCell>

          <GridCell span="8">
            {Parser(this.props.data.Page.content)}
          </GridCell>

          <Sidebar span="4">
            <ContextMenu items={this.props.data.ContextMenu.items} currentSlug={this.props.data.Page.slug} link={this.props.data.Page.link} />
          </Sidebar>
        </PageContent>
      </div>
    )
  }
}

export default Page;

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    
    Page: wordpressPage(id: { eq: $id }) {
      id
      title
      content
      wordpress_id
      slug
      link
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