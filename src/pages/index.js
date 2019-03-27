import React from 'react'
import Link from 'gatsby-link'
import axios from 'axios';
import Parser from 'html-react-parser';
import trimpath from '../../trimpath';
import Img from "../components/Img";
import Helmet from 'react-helmet'

// import { Button, ButtonIcon } from 'rmwc/Button';
import { Grid, GridCell, GridInner } from "rmwc/Grid";
// import { Menu, MenuItem, MenuAnchor } from 'rmwc/Menu';
// import { Icon } from "rmwc/Icon";
import MainMenu from '../components/MainMenu';

import styled from 'styled-components';

import hero from '../assets/hero.jpg';
import president from '../assets/president.jpg';
import signature from '../assets/signature.png';
import students1 from '../assets/students1.jpg';
import students2 from '../assets/students2.jpg';
import students3 from '../assets/students3.jpg';
import students4 from '../assets/students4.jpg';
import students5 from '../assets/students5.jpg';
import students6 from '../assets/students6.jpg';

// const studentImageArray = [
//   students1,
//   students2,
//   students3,
//   students4,
//   students5,
//   students6
// ];

import cardMenu from '../menus/cards';


const HeroImage = styled.div`
  margin: 0 auto;
  postion: relative;
`;

const headerStyle = {
  color: '#1a5276',
  borderBottom: '2px solid #1a52764d'
}

const PageContent = styled.section`
  h1,
  h2,
  h3,
  h4 {
    color: #1a5276;
    border-bottom: 2px solid #1a52764d;
  }
`;

const SectionLink = styled.a`
  display: block;
  background: black;
  height: 0;
  padding-bottom: 66.72%;
  position: relative;
  background-position: center center;
  background-size: cover;
`;

const SectionLinkLabel = styled.div`
  background: rgba(91, 44, 111, 0.75);
  color: white;
  padding: 2rem 1rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
`;

const oddRow = {
  background: 'rgba(91, 44, 111, 0.75)'
}

const evenRow = {
  background: 'rgba(26, 82, 118, 0.75)'
}

class IndexPage extends React.Component {
  state = {
    restData: {},
    heroImage: ''
  }
  componentDidMount() {
    // const _this = this;
    // axios.get('https://devinstruction.austincc.edu/catalog/wp-json/wp/v2/pages/547').then(function (response) {
    //   console.log('axios data', response.data);
    //   _this.setState({
    //     restData: response.data
    //   });

    //   const img = response.data.acf.hero_content[0].image_content
    //   return axios.get(`https://devinstruction.austincc.edu/catalog/wp-json/wp/v2/media/${img}`);
    // }).then(function (response) {
    //   // console.log('image fetch', response.data);
    //   _this.setState({
    //     heroImage: response.data.media_details.sizes.full.source_url
    //   });
    // })
  }
  render() {
    const studentImageArray = [
      this.props.data.students1.sizes,
      this.props.data.students2.sizes,
      this.props.data.students3.sizes,
      this.props.data.students4.sizes,
      this.props.data.students5.sizes,
      this.props.data.students6.sizes
    ]
    return (
      <div>

        <Helmet
          title={`Home | ${this.props.data.site.siteMetadata.title}`}
        />

        <div className="heroImage" style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          margin: '0 auto',
          background: 'rgb(43, 43, 43)'
        }}>

          {/*<img
            src={this.props.data.home.edges[0].node.featured_media.source_url}
            alt={this.props.data.home.edges[0].node.featured_media.alt_text}
            style={{
              display: 'block',
              margin: '0 auto',
              width: '100%'
            }}
          />*/}
          <div style={{
            display: 'block',
            margin: '0 auto',
            width: '100%'
          }}>
            <Img
              sizes={this.props.data.heroImage.sizes}
              alt='student sitting together around a computer'
              style={{
                display: 'block',
                margin: '0 auto',
                width: '100%'
              }}
            />
          </div>
          <h1 style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            color: 'white',
            fontWeight: 900,
            textTransform: 'uppercase',
            textShadow: '3px 3px 0 rgba(0,0,0,0.5)',
            boxSizing: 'border-box',
            padding: '20px 0',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '100%',
              maxWidth: '960px',
              padding: '0 20px',
              boxSizing: 'border-box'
            }}>
              ACC
            <br />
              {this.props.data.site.siteMetadata.title}
            </div>
          </h1>
        </div>

        <MainMenu items={this.props.data.MainMenu.items} />

        <main id="main">
          <Grid style={{ maxWidth: '960px' }}>
            <GridCell span="12">
              <PageContent>
                {Parser(this.props.data.home.edges[0].node.content)}
              </PageContent>
            </GridCell>



            <GridCell span="12">
              <section className="message">
                <h2 style={headerStyle}>{this.props.data.pres.edges[0].node.title}</h2>
                <GridInner>
                  <GridCell span="9">
                    {Parser(this.props.data.pres.edges[0].node.content)}
                    <GridInner>
                      <GridCell span="8" />
                      <GridCell span="4">
                        <Img sizes={this.props.data.signature.sizes} alt="presidents signature" />
                      </GridCell>
                    </GridInner>
                  </GridCell>
                  <GridCell span="3" align="bottom">
                    <Img sizes={this.props.data.presidentImage.sizes} alt="ACC President Dr. Richard Rhodes" />
                  </GridCell>
                </GridInner>
              </section>
            </GridCell>

            {
              cardMenu.map((item, index) => (
                <GridCell span="4" key={`contextMenuItemmmm_${index}`}>
                  <SectionLink href={item.url}>
                    <Img sizes={studentImageArray[index]} alt="card" />
                    <SectionLinkLabel style={index % 2 === 0 ? evenRow : null}>
                      {item.title}
                    </SectionLinkLabel>
                  </SectionLink>
                </GridCell>
              ))
            }

            <GridCell span="12">
              <section className="howto">
                <h2 style={headerStyle}>{this.props.data.howto.edges[0].node.title}</h2>
                {Parser(this.props.data.howto.edges[0].node.content)}
              </section>
            </GridCell>
          </Grid>
        </main>
      </div>
    )
  }
}

export default IndexPage;

export const pageQuery = graphql`
query indexPageQuery {
  site {
    siteMetadata {
      title
    }
  }

  heroImage: imageSharp(id: { regex: "/hero/" }) {
    sizes(maxWidth: 2000) {
      ...GatsbyImageSharpSizes
    }
  }

  presidentImage: imageSharp(id: { regex: "/president/" }) {
    sizes(maxWidth: 366) {
      ...GatsbyImageSharpSizes_noBase64
    }
  }

  signature: imageSharp(id: { regex: "/signature/" }) {
    sizes(maxWidth: 250) {
      ...GatsbyImageSharpSizes_tracedSVG
    }
  }

  students1: imageSharp(id: { regex: "/students1/" }) {
    sizes(maxWidth: 450) {
      ...GatsbyImageSharpSizes
    }
  }

  students2: imageSharp(id: { regex: "/students2/" }) {
    sizes(maxWidth: 450) {
      ...GatsbyImageSharpSizes
    }
  }

  students3: imageSharp(id: { regex: "/students3/" }) {
    sizes(maxWidth: 450) {
      ...GatsbyImageSharpSizes
    }
  }

  students4: imageSharp(id: { regex: "/students4/" }) {
    sizes(maxWidth: 450) {
      ...GatsbyImageSharpSizes
    }
  }

  students5: imageSharp(id: { regex: "/students5/" }) {
    sizes(maxWidth: 450) {
      ...GatsbyImageSharpSizes
    }
  }

  students6: imageSharp(id: { regex: "/students6/" }) {
    sizes(maxWidth: 450) {
      ...GatsbyImageSharpSizes
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
      order
      wordpress_children {
        order
        title
        url
      }
    }
  }

  home: allWordpressPage(filter: {slug: {eq: "home"}}) {
    edges {
      node {
        id
        slug
        title
        content
      }
    }
  }
  
  pres: allWordpressPage(filter: {slug: {eq: "message-from-president"}}) {
    edges {
      node {
        id
        slug
        title
        content
        acf {
          layouts
          hero_content
        }
      }
    }
  }
  
  howto: allWordpressPage(filter: {slug: {eq: "how-to-use-this-catalog"}}) {
    edges {
      node {
        id
        slug
        title
        content
        acf {
          layouts
          hero_content
        }
      }
    }
  }
}
`;
