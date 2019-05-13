import React, { Component } from 'react';

import Header from './header/header';

import SectionHeader from './section header/section header';

import Main1 from './main/main1';
import Main2 from './main/main2';
import Main3 from './main/main3';

import FormSection from './form/form';
import Footer from './footer/footer';



class App extends Component {
  render() {
    return (
      <>
        <Header />

        <SectionHeader />
        <Main1 />

        <SectionHeader />
        <Main2 />

        <SectionHeader />
        <Main3 />

        <FormSection />

        <Footer />

      </>
    );
  }
}

export default App;
