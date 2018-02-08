import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { mobList, mobListItem } from '../../styles';

// export default class MobileNav extends Component {
//   render() {
//     return (
//       <ul id={mobList}>
//         <li className={mobListItem}>
//           <IndexLink to='/'>Dashboard</IndexLink>
//         </li>
  
//         <li className={mobListItem}>
//           <Link to='/generator'>Generator</Link>
//         </li>
  
//         <li className={mobListItem}>
//           <Link to='/character'>Character</Link>
//         </li>
  
//         <li className={mobListItem}>
//           <Link to='/list'>List</Link>
//         </li>
  
//         <li className={mobListItem}>
//           <Link to='/wiki'>Wiki</Link>
//         </li>
  
//         <li className={mobListItem}>Settings</li>
//       </ul>
//     );
//   }
// }

export const MobileNav = () => {
  return (
    <ul id={mobList}>
      <li className={mobListItem}>
        <IndexLink to='/'>Dashboard</IndexLink>
      </li>

      <li className={mobListItem}>
        <Link to='/generator'>Generator</Link>
      </li>

      <li className={mobListItem}>
        <Link to='/character'>Character</Link>
      </li>

      <li className={mobListItem}>
        <Link to='/list'>List</Link>
      </li>

      <li className={mobListItem}>
        <Link to='/wiki'>Wiki</Link>
      </li>

      <li className={mobListItem}>Settings</li>
    </ul>
  );
};