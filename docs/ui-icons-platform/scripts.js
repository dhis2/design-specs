// expanding content
const toggleVisibility = (trigger) => {
  trigger.nextElementSibling.classList.toggle('show');
};

// search field functions
let search = document.getElementById('search');

// keyboard shortcut to focus search
document.addEventListener('keydown', function (event) {
  if (event.code == 'Slash') {
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
    console.log(warning);
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
    path16: 'icons/Apps/16.svg',
    path24: 'icons/Apps/24.svg',
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
    path16: 'icons/Download/16.svg',
    path24: 'icons/Download/24.svg',
  },
  {
    name: 'Drag handle',
    slug: 'DragHandle',
    path16: 'icons/Drag-handle/16.svg',
    path24: 'icons/Drag-handle/24.svg',
  },
  {
    name: 'Duplicate',
    slug: 'Duplicate',
    path16: 'icons/Duplicate/16.svg',
    path24: 'icons/Duplicate/24.svg',
  },
  {
    name: 'Edit',
    slug: 'Edit',
    path16: 'icons/Edit/16.svg',
    path24: 'icons/Edit/24.svg',
  },
  {
    name: 'Error',
    slug: 'Error',
    path16: 'icons/Error/16.svg',
    path24: 'icons/Error/24.svg',
  },
  {
    name: 'Flag',
    slug: 'Flag',
    path16: 'icons/Flag/16.svg',
    path24: 'icons/Flag/24.svg',
  },
  {
    name: 'Fullscreen',
    slug: 'Fullscreen',
    path16: 'icons/Fullscreen/16.svg',
    path24: 'icons/Fullscreen/24.svg',
  },
  {
    name: 'Link',
    slug: 'Link',
    path16: 'icons/Link/16.svg',
    path24: 'icons/Link/24.svg',
  },
  {
    name: 'Mail',
    slug: 'Mail',
    path16: 'icons/Mail/16.svg',
    path24: 'icons/Mail/24.svg',
  },
  {
    name: 'Queue',
    slug: 'Queue',
    path16: 'icons/Queue/16.svg',
    path24: 'icons/Queue/24.svg',
  },
  {
    name: 'Search',
    slug: 'Search',
    path16: 'icons/Search/16.svg',
    path24: 'icons/Search/24.svg',
  },
  {
    name: 'Sync',
    slug: 'Sync',
    path16: 'icons/Sync/16.svg',
    path24: 'icons/Sync/24.svg',
  },
  {
    name: 'Table',
    slug: 'Table',
    path16: 'icons/Table/16.svg',
    path24: 'icons/Table/24.svg',
  },
  {
    name: 'User',
    slug: 'User',
    path16: 'icons/User/16.svg',
    path24: 'icons/User/24.svg',
  },
  {
    name: 'Window',
    slug: 'Window',
    path16: 'icons/Window/16.svg',
    path24: 'icons/Window/24.svg',
  },
  {
    name: 'World',
    slug: 'World',
    path16: 'icons/World/16.svg',
    path24: 'icons/World/24.svg',
  },
];
