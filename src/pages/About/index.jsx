import React from 'react';
import './styles.scss';
import Layout from '../../components/Layout';

function About() {
  return (
    <Layout>
      <h1 className="title">
        Uma empresa deseja realizar um monitoramento de outros grupos empresariais em um site X para
        analisar seus posts. Sua tarefa é criar uma simples API que captura apenas os usuários
        (http://jsonplaceholder.typicode.com/users) os quais a empresa em que trabalham fazem parte
        de um grupo e exiba seus posts (http://jsonplaceholder.typicode.com/posts) unido do nome do
        funcionário e sua empresa. Além disso criar uma tela para facilitar a leitura desses posts.
      </h1>
    </Layout>
  );
}

export default About;
