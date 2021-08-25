import logo from './static/images/ak.png';
import etsyImg from './static/images/etsy-icon-edited.png';
import tiktokImg from './static/images/tik-tok.png';
import './App.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import ImageWithLink from './components/ImageWithLink';
import IconWithLink from "./components/IconWithLink";


function App() {

  const etsy = {
    link : "https://www.etsy.com/shop/SweetKissBoutique",
    name: "Etsy",
    imgSrc: etsyImg
  }

  const tiktok = {
    link : "https://vm.tiktok.com/ZMRjHLWnX/",
    name: "Tik Tok",
    imgSrc: tiktokImg
  }

  const instaGramIcon = <InstagramIcon style={{ fontSize: 100 }} />
  const instagram = {
    link : "https://www.instagram.com/sweetkissboutique/",
    name: "Instagram",
    imgSrc: instaGramIcon
  }


  const fbIcon = <FacebookIcon style={{ fontSize: 100 }} />
  const fb = {
    link : "https://www.facebook.com/SweetKissBoutique",
    name: "Facebook",
    imgSrc: fbIcon
  }

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h8" >
          Say Hello to your new favorite!
        </Typography>
        <ImageWithLink link={etsy.link} imgSrc={etsy.imgSrc} appName={etsy.name}/>
        <IconWithLink link={fb.link} appName={fb.name} imgSrc={fb.imgSrc}/>
        <IconWithLink link={instagram.link} appName={instagram.name} imgSrc={instagram.imgSrc}/>
        <ImageWithLink link={tiktok.link} imgSrc={tiktok.imgSrc} appName={tiktok.name}/>
      </header>
    </div>
  );
}

export default App;