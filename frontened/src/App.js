
import './App.css';
import react, { useEffect } from "react";
import axios from 'axios'
const baseUrl = "http://localhost:3001"


function App() {
  const [link, setlink] = react.useState("");
  useEffect(async () => {
    await setlink(await GetLink())
  }, []);


  async function GetLink() { // const url = process.env.REACT_APP_VEGAAPI_BASEURL + '/getareas'
    console.log("get link")
    const url = baseUrl + '/getlink'
    try {
      let returnVal = await axios.get(url)
      console.log(returnVal)
      console.log(returnVal.data)
      return returnVal.data.src;
    }
    catch {
      return "https://player.vimeo.com/video/148751763"
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <iframe src={link} width="320" height="240" allowFullScreen allow='autoplay'></iframe>
      </header>
    </div>
  );
}

export default App;

