import './App.css';
import qr from './images/qr.png';

const App = () => {
  return (
    <>
      <div className="container">
        <img src={qr} className='img-size'/>
      <div>
        <div className='txt'>Improve your front-end skills by building projects</div>
        <div className='txt-content'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>
      </div>
      </div>
    </>
  );
};

export default App;
