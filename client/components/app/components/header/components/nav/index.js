import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { navList, navListItem } from '../../styles';

// export default class Nav extends Component {
//   render() {
//     return (
//       <ul id={navList}>
//         <li className={navListItem}>
//           <IndexLink to='/'>Dashboard</IndexLink>
//         </li>
  
//         <li className={navListItem}>
//           <Link to='/generator'>Generator</Link>
//         </li>
  
//         <li className={navListItem}>
//           <Link to='/character'>Character</Link>
//         </li>
  
//         <li className={navListItem}>
//           <Link to='/list'>List</Link>
//         </li>
  
//         <li className={navListItem}>
//           <Link to='/wiki'>Wiki</Link>
//         </li>
  
//         <li className={navListItem}>Settings</li>
//       </ul>
//     );
//   }
// }

export const Nav = () => {
  return (
    <ul id={navList}>
      <li className={navListItem}>
        <IndexLink to='/'>Dashboard</IndexLink>
      </li>

      <li className={navListItem}>
        <Link to='/generator'>Generator</Link>
      </li>

      <li className={navListItem}>
        <Link to='/character'>Character</Link>
      </li>

      <li className={navListItem}>
        <Link to='/list'>List</Link>
      </li>

      <li className={navListItem}>
        <Link to='/wiki'>Wiki</Link>
      </li>

      <li className={navListItem}>Settings</li>
    </ul>
  );
};