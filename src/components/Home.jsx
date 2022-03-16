import React from 'react';

const Home = () => {
    return (
        <section id="intro" className="intro">
        <p>Hi, my name is </p>
        <div className="div-name">
        <p className="name">Stephen Corke.</p>
        <p className="element-box"><span className="element">Sc</span></p>
      </div>
        <h2>I teach web development.</h2>
  
        <p>
          I&apos;m an educator specializing in
          JavaScript.
        </p>
  
        <p>
          Currently, I&apos;m working at 
          <a href="http://www.northcoders.com"> Northcoders</a>, mentoring
          entry-level developers.
        </p>
      </section>
    );
};

export default Home;