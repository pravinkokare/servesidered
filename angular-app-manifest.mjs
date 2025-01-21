
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/signup"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 1250, hash: '45e848f44aa257b536a1179187e0f0a2bd74d0f9dcb81e7bdbf775ad9ce4e42d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1763, hash: 'd9c06bd6b3a05e5812a95660853d488145df01699c7e59be8d938cb2e7b79444', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 3986, hash: '6baef42ec296aed86bc585d272176866c8e1a466ca766363f3ccf56ba68fa1db', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 4056, hash: '125e133b7f0a65645b74185269f2bffb010af1d079d9e86995a88cfa55a16d1c', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 2303, hash: '0dd5bb62ebf564a004a63e75e9604881781dd241d8c8a968447b7c48a43c8aac', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 8961, hash: 'c9a1690ea65bab11f996af9e176dff9c9f6c70fbf0b7c583540febdf8ec0446a', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 4531, hash: 'f626e7c01a0fd67eb7e99484e8f3cf6f121c80b72610c33efe1f4ac7b9e3de55', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
