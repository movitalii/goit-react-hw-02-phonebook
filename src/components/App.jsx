import css from './App.module.css';
import React, { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';

class  App extends Component {

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
    <div className={css.wrapper}>
      <Phonebook onSubmit={this.formSubmitHandler} />
    </div>    
  );
  }  
};

export default App;
