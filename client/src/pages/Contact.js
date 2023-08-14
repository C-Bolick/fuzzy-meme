import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Contact = () => {

    return (
        <main>
      <Header />
      <div className="flex-row justify-center">
      <div>
    <h1>Contact Us</h1>
    <ContactForm />
    </div>
  </div>
  <Footer />
    </main>

    );
};

export default Contact;