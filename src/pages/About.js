import React from 'react'; 
import '../css/About.css';

class About extends React.Component{
    render(){
      return (
        <div className='about'>
        <h2>About GercepNews</h2>
          <div className='justify-content-center d-flex pt-5 row'>
            <div id="bulbasaur" class="pokemon col-4"></div>
            <div id="charmander" class="pokemon col-4"></div>
            <div id="squirtle" class="pokemon col-4"></div>
          </div>
        </div>
      );
    }
  }
  export default About;