// require('normalize.css');
require('./global');

/**
 * Components.
 * Include all css files just if you need
 * to hot reload it. And make sure that you
 * use `webpack.optimize.DedupePlugin`
 */
require('#app/components/app/styles');
require('#app/components/app/components/sidebar/styles');
require('#app/components/pages/dashboard/styles');
require('#app/components/pages/character/styles');
require('#app/components/pages/generator/styles');
require('#app/components/pages/list/styles');
require('#app/components/pages/wiki/styles');
// require('#app/components/usage/styles');
require('#app/components/not-found/styles');
