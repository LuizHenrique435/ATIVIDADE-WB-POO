import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { AppRoutes } from './rotas';

export class App extends Component {
  render(){

    return (
      <div className="App">
      <AppRoutes/>
    </div>
  );
}
}
