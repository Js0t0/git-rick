import { useEffect, useState } from "react";
import Character from "./Character";


function NavPage(props) {
  return (
    <header className="d-flex justify-content-between align-item-center ">
      <button className="btn btn-primary btn-sm mt-3"  onClick={() => props.setPage(props.page - 1)}  disabled={props.page === 1}   >PREV</button>
      <p className="text-dark align-item-center ">Pagina: {props.page}</p>
      <button
        className="btn btn-primary btn-sm mt-3"
        onClick={() => props.setPage(props.page + 1)}
      >
        NEXT
      </button>
    </header>
  );
}



function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />
      <div className="row">
        {characters.map((character) => {
          return (
            <div className="col-md-4" key={character.id}>
              <Character character={character} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CharacterList;
