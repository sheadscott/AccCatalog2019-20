# ACC College Catalog

The ACC Online Catalog is a static website hosted on S3. It's built using Gatsby and pulls data from a [Wordpress site](https://devinstruction.austincc.edu/catalog). Georgia Branch <mailto:gbranch@austincc.edu> is responsible for the content.

For an overview of Gatsby, see [Gatsby documentation](https://www.gatsbyjs.org/docs/)

## Hosting

The catalog is hosted in AWS S3 in the catalog.austincc.edu bucket. There is a Cloudfront CDN in front of it that the domain name points to. This improves performance and allows the use of https.

The development bucket is dev.catalog.austincc.edu and the URL is <http://dev.catalog.austincc.edu.s3-website-us-west-2.amazonaws.com/>

## Install

Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

## Development

Since there are so many pages there are a couple of tools used to make working with the data easier.

These pages us jQuery to process the data and can take quite a while to load without any visual indication.

A menu of all pages with named anchors that navigate to the content. Also used to generate the PDF. [Catalog Content](https://devinstruction.austincc.edu/catalog-test)

A menu of all pages with links to the pages in Wordpress. [Catalog Admin Links](https://devinstruction.austincc.edu/catalog-test/admin/)

## Deploy

Deploy to the development site `npm run devdeploy`

Deploy to the production site `npm run proddeploy`
