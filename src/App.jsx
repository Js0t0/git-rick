import CharacterList from "./components/CharacterList";

function App() {
  return (
    <div >
       <a >
        <img src="src\assets\Rick-and-Morty.png"
        style={{ width: "1000px", height: "300px" }}
        className="rounded mx-auto d-block"
        
      ></img></a>
     
      <CharacterList />
      
    </div>
  );
}

export default App;
