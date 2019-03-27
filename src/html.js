import React from 'react'
import { withPrefix } from 'gatsby-link'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes} lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

          <link
            rel="preload"
            href="https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2"
            as="font"
            crossOrigin="true"
          />

          <link
            rel="preload"
            href="https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2"
            as="font"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="https://fonts.gstatic.com/s/montserrat/v12/JTURjIg1_i6t8kCHKm45_dJE3gnD_vx3rCs.woff2"
            as="font"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="https://fonts.gstatic.com/s/montserrat/v12/JTURjIg1_i6t8kCHKm45_epG3gnD_vx3rCs.woff2"
            as="font"
            crossOrigin="true"
          />

          {/*
          <link rel="preload" href="https://fonts.gstatic.com/s/materialicons/v38/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2" as="font" crossOrigin="true" />
          <link rel="preload" href="https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2" as="font" crossOrigin="true" />
          <link rel="preload" href="https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2" as="font" crossOrigin="true" />
          <link rel="preload" href="https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2" as="font" crossOrigin="true" />
          <link rel="preload" href="https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2" as="font" crossOrigin="true" />
          <link rel="preload" href="https://fonts.gstatic.com/s/montserrat/v12/JTURjIg1_i6t8kCHKm45_epG3gTD_vx3rCubqg.woff2" as="font" crossOrigin="true" />
          <link rel="preload" href="https://fonts.gstatic.com/s/montserrat/v12/JTURjIg1_i6t8kCHKm45_epG3gbD_vx3rCubqg.woff2" as="font" crossOrigin="true" />
          <link rel="preload" href="https://fonts.gstatic.com/s/montserrat/v12/JTURjIg1_i6t8kCHKm45_epG3g3D_vx3rCubqg.woff2" as="font" crossOrigin="true" />
          <link rel="preload" href="https://fonts.gstatic.com/s/montserrat/v12/JTURjIg1_i6t8kCHKm45_epG3gfD_vx3rCubqg.woff2" as="font" crossOrigin="true" />
          */}

          <link rel="stylesheet" href={withPrefix('/fonts.css')} />
          <link
            rel="stylesheet"
            href={withPrefix('/material-components-web.min.css')}
          />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            var name = 'world';
            console.log('Hello ' + name);
        `,
            }}
          />
        </body>
      </html>
    )
  }
}
