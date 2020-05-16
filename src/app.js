import React, { Component } from 'react';
import RandomCat from './RandomCat.js';

class BooksApp extends Component {
  
  render() {
    
    
    return (
      <div className="app">

        
            <button className="catButton">
                <RandomCat/>
            </button>
          
        
            
          
        
      </div>
    );
  }
}
export default BooksApp;