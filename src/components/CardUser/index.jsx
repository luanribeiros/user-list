import React, { useState, useEffect } from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import API from '../../services/api';

function CardUser() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    API('users').then((res) => {
      setUser(res.data);
    });
  }, []);

  const renderCard = () => {
    return user && user !== 0 ? (
      user.map((u) => (
        <section className="bg-card" key={u._id}>
          <h3>
            <i className="fa fa-user marginIcon"></i>
            {u.name}
          </h3>
          <h4>
            <i className="fa fa-envelope marginIcon"></i>
            {u.email}
          </h4>
          <h4>
            <i className="fa fa-code marginIcon"></i>
            {u.website}
          </h4>
          <h4>
            <i className="fa fa-building marginIcon"></i>
            {u.group.company.name}
          </h4>
          <section className="bg-buttom">
            <button>Complete Profile</button>
            <NavLink to={`/allposts/${u._id}`}>
              <button>See All Posts</button>
            </NavLink>
          </section>
        </section>
      ))
    ) : (
      <span>Without Cards</span>
    );
  };

  return <section className="bg-cards">{renderCard()}</section>;
}

export default CardUser;
