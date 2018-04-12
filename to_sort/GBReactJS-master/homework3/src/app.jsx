import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './app/components/nav/Nav';
import Content from './app/components/content/Content';
import Jumbotron from './app/components/jumbotron/Jumbotron';
import Tags from './app/components/tags/Tags';
import Modal from './app/components/modal/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const header = document.getElementById('header');
const content = document.getElementById('content');
const jumbotron = document.getElementById('jumbotron');
const sidebar = document.getElementById('sidebar');
const modal = document.getElementById('modal');
const tags = [
    {
      title: 'авто',
      href: '#'
    },
    {
      title: 'мото',
      href: '#'
    },
    {
      title: 'гребля',
      href: '#'
    },
    {
      title: 'фото',
      href: '#'
    },
    {
      title: 'лайфстайл',
      href: '#'
    },
    {
      title: 'кодинг',
      href: '#'
    },
    {
      title: 'reactJS',
      href: '#'
    },
    {
      title: 'frontend',
      href: '#'
    },
    {
      title: 'лухари',
      href: '#'
    },
    {
      title: 'жиза',
      href: '#'
    },
    {
      title: 'щедрооплачено',
      href: '#'
    }
];

ReactDOM.render(
        <Nav/> , header,
        );
ReactDOM.render(
        <Jumbotron/> , jumbotron,
        );         
ReactDOM.render(
        <Content/> , content,
        );
ReactDOM.render(
        <Tags items={tags}/> , sidebar,
        );
ReactDOM.render(
        <Modal/> , modal,
        );        
