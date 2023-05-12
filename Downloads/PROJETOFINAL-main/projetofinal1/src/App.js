import logo2 from './logo2.png';
import anual from './anual.png';
import React, { Component } from 'react';
import './App.css';
import api from './Calendar/api';
import { BsPersonHearts, BsHearts } from 'react-icons/bs';
import { ImHome, ImCalendar, ImCreditCard, ImCart } from 'react-icons/im';
import { BiCopyright, BiCalendar } from 'react-icons/bi';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Menu from './Components/Menu/Menu';

class App extends Component {
  state = {
    feriados: [],
  };

  async componentDidMount() {
    const response = await api.get('');
    //console.log(response.data);

    this.setState({ feriados: response.data });
  }

  render() {
    const { feriados } = this.state;

    return (
      
      <Router>  
      <div className="App">
        
                  <header className="App-header">
          <nav>
            <ul>
              <li>
                <br></br>
                <span className="icon">
                  
                  <ImHome size={30} />
                </span>{' '}
                <a>
                  <Link to="/Home">Home</Link>  </a>
              </li>
              <li>
                <br></br>
                <span className="icon">
                  <ImCalendar size={30} />
                </span>{' '}
                <a>
                  <Link to="/Calendario">Calendário</Link>  </a>
              </li>
              <li>
                <br></br>
                <span className="icon">
                  <ImCreditCard size={30} />
                </span>{' '}
                <a>
                  <Link to="/Promocoes">Promoções</Link>  </a>
              </li>
              <li>
                <br></br>
                <span className="icon">
                  <ImCart size={30} />
                </span>{' '}
                <a>
                  <Link to="/Historico">Histórico de Compras</Link>  </a>
              </li>
            </ul>
            <div className='App'>
            <Routes>
      
      <Route path='/#' exact component={<ImHome />} />
      <Route path='/' element={<Menu />} >  
      <Route path='/#' component={<ImCalendar/>} >
      <Route path='/#' component={<ImCart />} >

      </Route> 
        </Route>  
      </Route>
    </Routes>
    
            </div>
          </nav>
          <img src={logo2} className="App-logo2" alt="logo2" />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <h1>
              Atenção! <br></br>Adiante a visita com o seu representante.
              <br></br>Ponto facultativo em: 8 de Junho - CORPUS CHRISTI.
              <br></br> <br></br>
              <br></br>
            </h1>
            <span className="icon">
              <BiCalendar />
            </span>{' '}
            CALENDÁRIO
            {feriados.map((qqq) => (
              <li key={qqq.date}>
                <br />
                {qqq.date} || {qqq.name}
              </li>
            ))}
            <br></br> <br></br>
            <img src={anual} className="App-anual" alt="anual" />
          </div>
          <br></br> <br></br>
          <br></br> <br></br>
          <p>
            <h1>
              <span className="icon">
                <BsPersonHearts />
              </span>{' '}
              O "Dia das Mães" está chegando, <br></br>
              veja nossas indicações e promoções!
              <span className="icon">
                <BsHearts />
              </span>{' '}
            </h1>
          </p>
          <br></br> <br></br> <br></br> <br></br>
          <footer>
            <p>
              <span className="icon">
                <BiCopyright />
              </span>{' '}
              2023 GRUPO 2 S.A. Todos os direitos reservados.
            </p>
            <p>
              Beba com moderação. Não compartilhe este conteúdo com menores de
              idade.
            </p>
          </footer>
        </header>
        
      </div>
      </Router>
    );
  }
}

export default App;
