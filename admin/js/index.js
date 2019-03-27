let allPosts = [];

function retrievePosts(opt) {
  if (typeof opt === 'undefined') opt = {};

  let options = $.extend(
    {
      per_page: 20,
      page: 1,
    },
    opt
  );
  let url = 'https://devinstruction.austincc.edu/catalog2019-20/wp-json/wp/v2/pages';
  let uri = `${url  }?per_page=${  options.per_page  }&page=${  options.page}`;

  $.getJSON(uri, function(data, status, jqXHR) {
    let totalpages = jqXHR.getResponseHeader('x-wp-totalpages');

    allPosts = allPosts.concat(data);

    // here the magic happens
    // if we are not done
    if (options.page < totalpages) {
      // request again, but for the next page
      retrievePosts({
        per_page: options.per_page,
        page: options.page + 1,
      });
    } else {
      // WE ARE DONE
      // posts are in allPosts
      console.log(allPosts);
      $(document).ready(function() {
        renderMenu(
          allPosts.sort(function(a, b) {
            return a.parent - b.parent;
          })
        );
      });
    }
  });
}

retrievePosts();

function renderMenu(pages) {
  // Make an array called menus with indices that
  // are the menu item's Parent ID
  // ie. menus[13] = [obj, obj, ...]

  let menus = [];
  let mainNav = [];

  $.each(pages, function(index, obj) {
    // Add all top level objects to mainNav array

    if (obj.parent == 0) {
      mainNav.push(obj);
    }

    if (!menus[obj.parent]) {
      menus[obj.parent] = [];
      menus[obj.parent].push(obj);
    } else {
      menus[obj.parent].push(obj);
    }
  });

  $.each(pages, function(index, obj) {
    // If the menus array contains an index of the current object's ID
    // then add that submenu to the object

    if (menus[obj.id]) {
      obj.submenu = menus[obj.id];
    }
  });

  // Sort mainNav by menu_order
  mainNav = mainNav.sort(function(a, b) {
    return a.menu_order - b.menu_order;
  });

  // Sort all menus

  $.each(menus, function(index, array) {
    if (array) {
      array.sort(function(a, b) {
        return a.menu_order - b.menu_order;
      });
    }
  });

  // console.log(mainNav);

  $.each(mainNav, function(index, obj) {
    // Append Top Level list items to the #links ul
    var menuID = 'menu' + obj.id;
    $('#links').append("<li id='" + menuID + "'><a href='" + obj.link + "'>" + obj.title.rendered + '</a></li>');

    let {submenu} = obj;
    if (submenu) {
      createSubMenu(menuID, submenu, 'submenu', obj.slug);
    }
  });
}

function createSubMenu(menuID, submenu, className, slug) {
  // Add a ul to each submenu parent
  $('#' + menuID).append($('<ul/>').addClass(className));

  var tag = className == 'submenu' ? '<h2/>' : '<h3/>';
  // console.log(tag);

  $.each(submenu, function(index, obj) {
    $('#' + menuID + ' ul.' + className).append(
      $('<li/>')
        .attr('id', 'menu' + obj.id)
        .append(
          $('<a/>')
            .html(obj.title.rendered)
            .attr('href', obj.link)
        )
    );

    if (obj.submenu) {
      // console.log(obj.slug);
      createSubMenu('menu' + obj.id, obj.submenu, 'subsubmenu', obj.slug);
    }
  });
}
