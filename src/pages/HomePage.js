import React from 'react';
import Header from '../components/Header';
import ListFilms from '../components/ListFilms';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('emailKey') & !localStorage.getItem('passwordKey') ) {
      navigate('/login');
    }
  }, []);


  

  return (
    <div>
      <Header />
      <ListFilms />
    </div>
  );
};
export default HomePage;




/*useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/login');
    }
  }, []);*/