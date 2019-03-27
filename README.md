# ACC College Catalog

The ACC Online Catalog is a static website hosted on S3. It's built using Gatsby and pulls data from a [Wordpress site](https://devinstruction.austincc.edu/catalog). Georgia Branch <gbranch@austincc.edu> is responsible for the content.

For an overview of Gatsby, see [Gatsby documentation](https://www.gatsbyjs.org/docs/)

## Hosting
The catalog is hosted in AWS S3 in the catalog.austincc.edu bucket. There is a Cloudfront CDN in front of it that the domain name points to. This improves performance and allows the use of https.

The development bucket is dev.catalog.austincc.edu and the URL is <http://dev.catalog.austincc.edu.s3-website-us-west-2.amazonaws.com/>

## Install

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

## Deploy

Deploy to the development site `npm run devdeploy`

Deploy to the production site `npm run proddeploy`
