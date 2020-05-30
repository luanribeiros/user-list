import React, { useState, useEffect } from 'react';
import API from '../../services/api';
import { NavLink } from 'react-router-dom';
import Layout from '../../components/Layout';
import './styles.scss';

function AllPosts({ match }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    API(`users/${match.params.posts}`).then((res) => {
      setPost(res.data);
    });
  }, [match.params.posts]);

  const renderCard = () => {
    return post && post !== 0 ? (
      post.map((p) => (
        <section key={p._id} className="bg-allposts">
          <section className="bg-allposts_desc">
            Todos os Posts de <span>{p.name}</span> pela Empresa <span>{p.group.company.name}</span>
          </section>
          <section key={p._id} className="bg-allposts_posts">
            {p.group.posts.map((pos) => (
              <section className="bg-post" key={pos._id}>
                <h3>
                  <i className="fa fa-arrow-circle-right marginIcon"></i>
                  {pos.title}
                </h3>
                <p>
                  <i className="fa fa-arrow-circle-right marginIcon"></i>
                  {pos.body}
                </p>
              </section>
            ))}
          </section>
        </section>
      ))
    ) : (
      <span>Without Posts</span>
    );
  };

  return <Layout>{renderCard()}</Layout>;
}

export default AllPosts;
