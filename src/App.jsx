import CharacterList from "./components/CharacterList";

function App() {
  return (
    <div >
      <a href='reload'><img
        src="src\assets\Rick-and-Morty.png"
        style={{ width: "1000px", height: "300px" }}
        class="rounded mx-auto d-block"
        
      ></img></a>
      <CharacterList />
      
    </div>
  );
}

export default App;
