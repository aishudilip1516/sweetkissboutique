import logo from './static/images/ak.png';
import etsy from './static/images/etsy-icon.png';
import './App.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h8" >
          Say Hello to your new favorite!
        </Typography>
        <br />
        <br />
        <Link href="https://www.etsy.com/shop/SweetKissBoutique" >
          <img src={etsy} className="etsy-logo" alt="logo" />
        </Link>
        <Typography>
          Etsy
        </Typography>
        <br />
        <br />
        <div>
          <Link href="https://www.instagram.com/sweetkissboutique/" underline="none">
            <InstagramIcon style={{ fontSize: 80 }} />
            <Typography>
              Instagram
            </Typography>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default App;