import CharacterList from "./components/CharacterList";
import banner from '../src/Rick-and-Morty.png';

function App() {
  return (
    <div >
       <a >
        <img src={banner}
        style={{ width: "1000px", height: "300px" }}
        className="rounded mx-auto d-block"
        
      ></img></a>
     
      <CharacterList />
      
    </div>
  );
}

export default App;
