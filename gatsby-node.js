/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);
const axios = require('axios');
const https = require('https');
const trimpath = require('./trimpath');

// exports.modifyWepackConfig = function (config) {
//   config.merge({
//     postcss([
//       cssnext({
//         features: {
//           customProperties: false
//         }
//       }),
//     ])
//   );

//   return config;
// }

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                wordpress_id
                title
                slug
                link
                status
                template
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }

      // Create Page pages.
      const pageTemplate = path.resolve('./src/templates/page.js');
      // We want to create a detailed page for each
      // page node. We'll just use the WordPress Slug for the slug.
      // The Page ID is prefixed with 'PAGE_'
      _.each(result.data.allWordpressPage.edges, (edge, index) => {
        // Gatsby uses Redux to manage its internal state.
        // Plugins and sites can use functions like "createPage"
        // to interact with Gatsby.
        // console.log('path', trimpath(edge.node.link));
        // console.log('slug', edge.node.slug);

        const pageData = {
          path: `${trimpath(edge.node.link)}`,
          component: slash(pageTemplate),
          context: {
            id: edge.node.id,
            slug: edge.node.slug,
            // breadcrumbs: breads.data.itemListElement
          },
        };

        // skip the home page because we already have a home page template
        if (edge.node.link !== 'https://devinstruction.austincc.edu/catalog2019-20/') {
          // createPage(pageData);
          // console.log('create page', edge.node.slug, ' ***** ', edge.node.link);

          // axios.get(`https://devinstruction.austincc.edu/catalog2019-20/wp-json/bcn/v1/post/${edge.node.wordpress_id}`).then(response => {
          //   pageData.context.breadcrumbs = response.data.itemListElement;
          //   createPage(pageData);
          // })
          //   .catch(function (error) {
          //     // console.log(error);
          //     console.log('error');
          //   });

          createPage(pageData);
          resolve();

          // https.get(`https://devinstruction.austincc.edu/catalog2019-20/wp-json/bcn/v1/post/${edge.node.wordpress_id}`, (res) => {

          //   res.setEncoding('utf8');
          //   let rawData = '';
          //   res.on('data', (chunk) => { rawData += chunk; });
          //   res.on('end', () => {
          //     try {
          //       const parsedData = JSON.parse(rawData);
          //       pageData.context.breadcrumbs = parsedData.itemListElement;
          //       createPage(pageData);
          //       resolve();
          //     } catch (e) {
          //       console.error(e.message);
          //     }
          //   });
          // }).on('error', (e) => {
          //   console.error(e);
          // });
        } else {
          console.log('page skipped');
        }
      });

      // resolve();
    });
    // ==== END PAGES ====

    // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
    /*
    .then(() => {
      graphql(
        `
        {
              allWordpressPost {
                edges {
                  node {
                    id
                slug
                status
                template
                format
                  }
                }
              }
            }
              `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        const postTemplate = path.resolve('./src/templates/page.js');
        // We want to create a detailed page for each
        // post node. We'll just use the WordPress Slug for the slug.
        // The Post ID is prefixed with 'POST_'
        _.each(result.data.allWordpressPost.edges, edge => {
          createPage({
            path: `/ ${ edge.node.slug } / `,
            component: slash(postTemplate),
            context: {
              id: edge.node.id
            }
          });
        });
        resolve();
      });
    });
    */
    // ==== END POSTS ====
  });
};
