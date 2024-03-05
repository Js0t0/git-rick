import CharacterList from "./components/CharacterList";

function App() {
  return (
    <div >
      <img src="src\assets\Rick-and-Morty.png" style={{ width: '1000px', height:'300px' }} class="rounded mx-auto d-block"></img>

      <CharacterList />
      
    </div>
  );
}

export default App;
