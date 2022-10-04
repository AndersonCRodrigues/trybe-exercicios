import React, { Component } from "react";

class About extends Component {
  render() {
    const arrHabilidades = ['Git', 'HTML', 'Javascript', 'Jest'];
    return(
      <>
        <h1>Sobre mim!</h1>
        <p>Anderson, Estudande FullStack</p>
        <h2>Minhas habilidades</h2>
        <ul>
          {
          arrHabilidades.map((e, i) => (<li key={i}>{e}</li>))
          }
        </ul>
      </>
    );
  };
};

export default About;