import React from 'react';
import {Link} from 'react-router-dom';

const GuestUser = () => {
  return (
    <div className="user-block">
      <Link to="/login" className="user-block__link">Sign in</Link>
    </div>
  );
};

export default GuestUser;
