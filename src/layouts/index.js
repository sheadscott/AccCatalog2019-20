import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { RMWCProvider } from 'rmwc/Provider';

import TitleBar from '../components/TitleBar';
import GetStarted from '../components/GetStarted';
import Footer from '../components/Footer';

import { Theme } from "rmwc/Theme";

import "./typography.css";
import "./style.css";
import "./tables.css";

const Layout = ({ children, data }) => {
  return (
    <RMWCProvider listItemDefaultRipple={true}>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'This catalog is in effect for new students entering ACC in the 2018-2019 academic year and for any ACC student returning in the 2018-2019 academic year whose catalog has expired. It was prepared from existing policies and information obtained from the appropriate ACC officials.' },
          { name: 'keywords', content: 'Austin Community College, ACC, Catalog' },
        ]}
      />
      <TitleBar title={data.site.siteMetadata.title} />
      {children()}
      <GetStarted />
      <Footer listItems={data.FootertMenu.items} text={data.about} />
    </RMWCProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout;

export const query = graphql`
  query layoutQuery {
    site {
      siteMetadata {
        title
      }
    }

    FootertMenu: wordpressWpApiMenusMenusItems(name: {eq: "Footer Menu"}) {
      id
      slug
      items {
        title
        url
        wordpress_children {
          title
          url
        }
      }
    }

    about: allWordpressPage(filter: {slug: {eq: "about-the-catalog"}}) {
      edges {
        node {
          id
          slug
          title
          content
        }
      }
    }
  }
`
