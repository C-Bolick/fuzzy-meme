import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  
  return (
    <main>
      <Header />
      <div className="flex-row justify-center">
       <h1>Is this the Krusty Krab?</h1>
      </div>
      <Footer />
    </main>
  );
};

export default Home;


