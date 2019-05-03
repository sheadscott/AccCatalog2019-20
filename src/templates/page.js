import React, { Component } from 'react';
import Parser from 'html-react-parser';
import { Grid, GridCell } from 'rmwc/Grid';
import { Helmet } from 'react-helmet';

import styled from 'styled-components';
import MainMenu from '../components/MainMenu';
import ContextMenu from '../components/ContextMenu';
import Breadcrumbs from '../components/Breadcrumbs';

const headerStyle = {
  color: '#1a5276',
  borderBottom: '2px solid #1a52764d',
};

const PageContent = styled(Grid)`
  max-width: 960px;
`;

const Sidebar = styled(GridCell)`
  background: rgba(0, 0, 0, 0.03);
`;

class Page extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <Helmet title={`${Parser(data.Page.title)} | ${data.site.siteMetadata.title}`} />
        <MainMenu items={data.MainMenu.items} />
        <PageContent tag="main" id="main" style={{ maxWidth: '960px' }}>
          <GridCell span="12">
            <Breadcrumbs page={data.Page.wordpress_id} />
            <h1 style={headerStyle}>{Parser(data.Page.title)}</h1>
          </GridCell>

          <GridCell span="8">{Parser(data.Page.content)}</GridCell>

          <Sidebar span="4">
            <ContextMenu items={data.ContextMenu.items} currentSlug={data.Page.slug} link={data.Page.link} />
          </Sidebar>
        </PageContent>
      </div>
    );
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

    TopLevelPages: allWordpressPage(filter: { wordpress_parent: { eq: 0 } }) {
      edges {
        node {
          wordpress_id
          title
        }
      }
    }

    MainMenu: wordpressWpApiMenusMenusItems(name: { eq: "Main Menu" }) {
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

    ContextMenu: wordpressWpApiMenusMenusItems(name: { eq: "Context Menu" }) {
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
