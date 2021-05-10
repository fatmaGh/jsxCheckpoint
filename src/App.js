import './App.css';
import './style.css';
import image from './imageInSrc.jpg'

function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black',maxWidth: '100vw'}}>
        <div className="header">
          <h1 className="title red">Fatma Gharsallah</h1>
        </div>

        <br />

        <img src="../imageInPublic.jpg" width="300" alt="grafitti1" />

        <br />

        <img src={image} alt="grafitti2"  width="300"/>

      </div>

        <video width="100%" height="240" controls>

          <source src="myVideo.mp4" type="video/mp4" />

        </video>
    </div>
  );
}

export default App;
