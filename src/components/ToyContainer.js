import React, {useEffect, useState} from "react";
import ToyCard from "./ToyCard";

function ToyContainer() {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then((r) => r.json())
    .then((toys) => setToys(toys))
  }, [])

  function handleDeleteClick(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => {
      const updatedToys = toys.filter((toy) => toy.id !==id);
      setToys(updatedToys);
    })
  }

  function handleUpdateToy(updatedToy) {
    const updatedToys = toys.map((toy) => 
    toy.id === updatedToy.id ? updatedToy: toy);
    setToys(updatedToys);
  }

  const displayToys = toys.map((toy) => {
    return <ToyCard 
              key={toy.id} 
              toy={toy} 
              onDeleteClick={handleDeleteClick}
              onUpdateToy={handleUpdateToy}
              />
  })


  return (
    <div id="toy-collection">{displayToys}</div>
  );
}

export default ToyContainer;
