function Character({ character }) {
  const episodio = character.episode[0].slice(-2);
  return (
    <div className=" card border-info mb-3 p-3 m-5 " >
      <img
        className="img-fluid card"
        src={character.image}
        alt={character.name}
      />
      <div className="content">
        <div className="fs-4 fw-bold mb-3">{character.name}</div>
        <div className="">
          <div className="fs-6">Ultima Ubicacion: </div>
          <div className="fs-4">{character.location.name}</div>
        </div>
        <div className="">
          <div className="fs-6">First Seen: </div>
          <div className="fs-4">Episodio: {episodio.replace("/", "")}</div>
        </div>
        <div className="">
          <div className="fs-6">Tipo: </div>
          <div className="fs-4">{character.species}</div>
        </div>
        <div className="">
          <div className="fs-6">Estado: </div>
          <div className="fs-4">{character.status}</div>
        </div>
      </div>
    </div>
  );
}

export default Character;
