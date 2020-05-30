import React from 'react';
import Layout from '../../components/Layout';
import CardUser from '../../components/CardUser';
import './styles.scss';

function Home() {
  return (
    <Layout>
      <section className="bg-title">
        <h2>User List</h2>
      </section>
      <CardUser />
    </Layout>
  );
}

export default Home;
