const axios = require('axios')

let pages = []

const getChildren = id => {
  axios
    .get(
      `https://devinstruction.austincc.edu/catalog/wp-json/wp/v2/pages?parent=${id}`
    )
    .catch(function(error) {
      // handle error
      console.error('*** ERROR *** fetching parent: ', error)
    })
    .then(response => {
      response.data.map(page => {
        pages.push({
          order: page.menu_order,
          id: page.id,
          title: page.title.rendered,
          link: page.link,
          children: getGrandChildren(page.id),
        })
      })
    })
}

const getGrandChildren = id => {
  axios
    .get(
      `https://devinstruction.austincc.edu/catalog/wp-json/wp/v2/pages?parent=${id}`
    )
    .catch(function(error) {
      // handle error
      console.error('*** ERROR *** fetching parent: ', error)
    })
    .then(response => {
      response.data.map(page => {
        return {
          order: page.menu_order,
          id: page.id,
          title: page.title.rendered,
          link: page.link,
        }
      })
      console.log(pages)
    })
}

console.log(getChildren(13))

// const topLevelChildren = topLevelCategories.map(cat => {})

const topLevelCategories = [
  {
    id: 13,
    title: 'College Entry',
  },
  {
    id: 60,
    slug: 'About the College',
  },
  {
    id: 98,
    slug: 'Campus Safety and Security',
  },
  {
    id: 201,
    title: 'Academic Planning',
  },
  {
    id: 1517,
    slug: 'Award Plans',
  },
  {
    id: 1515,
    slug: 'Course Descriptions',
  },
  {
    id: 1513,
    slug: 'Support Services & Student Progress',
  },
  {
    id: 1367,
    slug: 'Catalog Archives',
  },
  {
    id: 1369,
    slug: 'Catalog Addendum',
  },
]
