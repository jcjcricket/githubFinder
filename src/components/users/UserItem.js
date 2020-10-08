import React from 'react';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  
  return (
      <div className='card' style={{ width: "300px", heightL: "300px"}}>
          <div className='card-image'>
            <img src={avatar_url}></img>
          </div>
          <div className='card-content'>
            <p>
              {login}
            </p>
          </div>
          <div className='card-action'>
            <a href={html_url}>More</a>
      </div>
    </div>
    
  );
};

export default UserItem;
