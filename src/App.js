import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ConverterBox from "./components/converter-box/converter-box";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header></Header>
        <ConverterBox></ConverterBox>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
