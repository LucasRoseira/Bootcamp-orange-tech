import React, { Component } from "react"; //Importar o react e o componente

//Criar uma class extendendo os componentes
//Passar propriedades - poderia passar o nome no App.js e depois passar no index

export default class AppClass extends Component {
    //construtor pegando a props e passando para o supoer
  constructor(props) {
    super(props);
    //Vai sofrer ações conforme o usuário ou função, era bem custoso de implementar, muito verboso utilizar class componentes
    this.handleClick = this.handleClick.bind(this);
    this.state = { counter: 0 }; 
  }
  handleClick() {
    // TODO
  }
  render() {
    return <div>AppClass</div>;
  }
}
