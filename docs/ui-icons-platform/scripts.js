// expanding content
const toggleVisibility = (trigger) => {
  trigger.nextElementSibling.classList.toggle('show');
};

// search field functions
let search = document.getElementById('search');

// keyboard shortcut to focus search
document.addEventListener('keydown', function (event) {
  if (event.code === 'Slash') {
    event.preventDefault();
    search.focus();
    search.select();
  }
});

//Filtering
let items = document.getElementsByClassName('icon');
let count = items.length;
let warning = document.getElementById('warning');
search.addEventListener('keyup', function (event) {
  let value = search.value.toUpperCase();
  warning.style.display = 'none';
  count = 0;
  for (i = 0; i < items.length; i++) {
    var title = items[i].querySelector('.icon-title');
    if (title.innerText.toUpperCase().indexOf(value) > -1) {
      items[i].style.display = '';
      count++;
    } else {
      items[i].style.display = 'none';
    }
  }
  if (count === 0) {
    warning.style.display = 'block';
  }
});

/// Copy to clipboard alert

function showAlert(msg, duration) {
  var wrap = document.getElementById('alerts');
  var el = document.createElement('div');
  el.className = 'alert-info';
  el.innerHTML = msg;
  setTimeout(function () {
    el.parentNode.removeChild(el);
  }, duration);
  wrap.appendChild(el);
}

// Build page
function build() {
  const proto = document.getElementById('prototype');
  let name, path24, path16, slug;
  //loop the source
  for (i = 0; i < sourceIcons.length; i++) {
    let icon = proto.cloneNode(true);
    icon.removeAttribute('id');
    //set values
    name = sourceIcons[i].name;
    slug = sourceIcons[i].slug;
    path16 = sourceIcons[i].path16;
    path24 = sourceIcons[i].path24;

    //set correct title
    let title = icon.querySelector('.icon-title');
    title.innerHTML = name;
    //set correct slugs
    icon.querySelector('.component16').innerHTML = '&lt;Icon' + slug + '16&gt;';
    icon.querySelector('.component24').innerHTML = '&lt;Icon' + slug + '24&gt;';
    icon.querySelector('.import16').innerHTML =
      'import Icon' + slug + "16 from '@dhis2/ui';";
    icon.querySelector('.import24').innerHTML =
      'import Icon' + slug + "24 from '@dhis2/ui';";
    //set icon paths
    icon.querySelector('.main-icon').src = path24;
    icon.querySelector('.icon24').src = path24;
    icon.querySelector('.icon16').src = path16;
    //append and show
    const wrap = document.getElementById('icons-wrapper');
    icon.style.display = '';
    wrap.append(icon);
  }
  //destroy prototype
  proto.parentNode.removeChild(proto);
}
//Array to build from
const sourceIcons = [
  {
    name: 'Apps',
    slug: 'Apps',
    path16: 'icons/apps/16.svg',
    path24: 'icons/apps/24.svg',
  },
  {
    name: 'Copy',
    slug: 'Copy',
    path16: 'icons/copy/16.svg',
    path24: 'icons/copy/24.svg',
  },
  {
    name: 'Download',
    slug: 'Download',
    path16: 'icons/download/16.svg',
    path24: 'icons/download/24.svg',
  },
  {
    name: 'Drag handle',
    slug: 'DragHandle',
    path16: 'icons/drag-handle/16.svg',
    path24: 'icons/drag-handle/24.svg',
  },
  {
    name: 'Duplicate',
    slug: 'Duplicate',
    path16: 'icons/duplicate/16.svg',
    path24: 'icons/duplicate/24.svg',
  },
  {
    name: 'Edit',
    slug: 'Edit',
    path16: 'icons/edit/16.svg',
    path24: 'icons/edit/24.svg',
  },
  {
    name: 'Error',
    slug: 'Error',
    path16: 'icons/error/16.svg',
    path24: 'icons/error/24.svg',
  },
  {
    name: 'Flag',
    slug: 'Flag',
    path16: 'icons/flag/16.svg',
    path24: 'icons/flag/24.svg',
  },
  {
    name: 'Fullscreen',
    slug: 'Fullscreen',
    path16: 'icons/fullscreen/16.svg',
    path24: 'icons/fullscreen/24.svg',
  },
  {
    name: 'Link',
    slug: 'Link',
    path16: 'icons/link/16.svg',
    path24: 'icons/link/24.svg',
  },
  {
    name: 'Mail',
    slug: 'Mail',
    path16: 'icons/mail/16.svg',
    path24: 'icons/mail/24.svg',
  },
  {
    name: 'Queue',
    slug: 'Queue',
    path16: 'icons/queue/16.svg',
    path24: 'icons/queue/24.svg',
  },
  {
    name: 'Search',
    slug: 'Search',
    path16: 'icons/search/16.svg',
    path24: 'icons/search/24.svg',
  },
  {
    name: 'Sync',
    slug: 'Sync',
    path16: 'icons/sync/16.svg',
    path24: 'icons/sync/24.svg',
  },
  {
    name: 'Table',
    slug: 'Table',
    path16: 'icons/table/16.svg',
    path24: 'icons/table/24.svg',
  },
  {
    name: 'User',
    slug: 'User',
    path16: 'icons/user/16.svg',
    path24: 'icons/user/24.svg',
  },
  {
    name: 'Window',
    slug: 'Window',
    path16: 'icons/window/16.svg',
    path24: 'icons/window/24.svg',
  },
  {
    name: 'World',
    slug: 'World',
    path16: 'icons/world/16.svg',
    path24: 'icons/world/24.svg',
  },
];
