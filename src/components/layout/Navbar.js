import React from 'react';
import GitHubIcon from '../assets/GitHubIcon';

const Navbar = ({title}) => {
    return (
      <nav>
        <div className='nav-wrapper'>
          <a href='#!' className='brand-logo left'>
            <i className='material-icons'>
              <GitHubIcon />
            </i>
            <span>{title}</span>
          </a>
          
        </div>
      </nav>
    );
  }


export default Navbar;
