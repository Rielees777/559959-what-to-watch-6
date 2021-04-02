import React from 'react';
import {Link} from 'react-router-dom';
const AuthorizedUser = () => {
  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <Link to={`/mylist`}>
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </Link>
      </div>
    </div>
  );
};

export default AuthorizedUser;
