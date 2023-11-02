import logo from './logo.png';
import { FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";
import { FaWhatsapp, FaInstagram, FaYoutube, FaTiktok, FaSpotify } from "react-icons/fa6";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          JC Church
        </h1>
        <span className="App-subtitle">
          Tocados para transformar
        </span>
      </header>
      <div className="App-container">
        <a href='tel:(12)99625-7482'><FaPhone size={20} color="#ffffff" /></a>
        <a href='https://maps.app.goo.gl/QzfAxYMNUPuPSNin7'><FaLocationDot size={20} color="#ffffff" /></a>
      </div>
      <div className="App-content">
        <div className="App-box">
          <FaWhatsapp size={35} color="#ffffff" />
          <div className="App-content-box">
            <h2 className="App-box-title">WhatsApp Oficial</h2>
            <span className="App-box-description">
              Contato | Agenda | Informações
            </span>
          </div>
        </div>
        <div className="App-box">
          <FaInstagram size={35} color="#ffffff" />
          <div className="App-content-box">
            <h2 className="App-box-title">Instagram Oficial</h2>
            <span className="App-box-description">
              @jcchurch.br
            </span>
          </div>
        </div>
        <div className="App-box">
          <FaYoutube size={35} color="#ffffff" />
          <div className="App-content-box">
            <h2 className="App-box-title">Canal Oficial YouTube</h2>
            <span className="App-box-description">
              @JCChurchBR
            </span>
          </div>
        </div>
        <div className="App-box">
          <FaTiktok size={35} color="#ffffff" />
          <div className="App-content-box">
            <h2 className="App-box-title">Tiktok JC Oficial</h2>
            <span className="App-box-description">
              jcchurch.br
            </span>
          </div>
        </div>
        <div className="App-box">
          <FaTiktok size={35} color="#ffffff" />
          <div className="App-content-box">
            <h2 className="App-box-title">Tiktok Essence Oficial</h2>
            <span className="App-box-description">
              essence.jc1
            </span>
          </div>
        </div>
        <div className="App-box">
          <FaSpotify size={35} color="#ffffff" />
          <div className="App-content-box">
            <h2 className="App-box-title">Spotify Oficial</h2>
            <span className="App-box-description">
              Playlist
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
