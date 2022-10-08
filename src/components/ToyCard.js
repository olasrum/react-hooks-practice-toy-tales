import React from "react";

function ToyCard({toy: {id, name, image, likes}, onDeleteClick, onUpdateToy}) {

  function handleDeleteClick() {
    onDeleteClick(id);
  }

  function handleLikeClick() {
    const updateLikeCount = {
      likes: likes + 1,
    };
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateLikeCount),
    })
    .then((r) => r.json())
    .then(onUpdateToy);
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikeClick} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDeleteClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
