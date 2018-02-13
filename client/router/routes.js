import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from '#app/components/app';
import Dashboard from '#app/components/pages/dashboard';
import Generator from '#app/components/pages/generator';
import Character from '#app/components/pages/character';
import List from '#app/components/pages/list';
import Wiki from '#app/components/pages/wiki';
import NotFound from '#app/components/not-found';

/**
 * Returns configured routes for different
 * environments. `w` - wrapper that helps skip
 * data fetching with onEnter hook at first time.
 * @param {Object} - any data for static loaders and first-time-loading marker
 * @returns {Object} - configured routes
 */
export default ({store, first}) => {

  // Make a closure to skip first request
  function w(loader) {
    return (nextState, replaceState, callback) => {
      if (first.time) {
        first.time = false;
        return callback();
      }
      return loader ? loader({store, nextState, replaceState, callback}) : callback();
    };
  }

  return <Route path="/" component={App}>
    <IndexRoute component={Dashboard} onEnter={w(Dashboard.onEnter)}/>
    <Route path="/generator" component={Generator} onEnter={w(Generator.onEnter)}/>
    <Route path="/character" component={Character} onEnter={w(Character.onEnter)}/>
    <Route path="/list" component={List} onEnter={w(List.onEnter)}/>
    <Route path="/wiki" component={Wiki} onEnter={w(Wiki.onEnter)}/>

    {/* <Route path="/usage" component={Usage} onEnter={w(Usage.onEnter)}/> */}
    {/* Server redirect in action */}
    <Redirect from="/docs" to="/usage" />
    <Route path="*" component={NotFound} onEnter={w(NotFound.onEnter)}/>
  </Route>;
};
