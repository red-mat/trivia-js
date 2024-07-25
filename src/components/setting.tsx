import React from "react";

function Setting() {
  return (
    <div>
      <h1>Preferencias</h1>
      <div>
        <h2>Preguntas:</h2>
        <h2>Dificultad</h2>
        <select name="dificultad" id="">
          <option value="1">dif1</option>
        </select>
        <h2>Categorías</h2>
        <select name="categoria" id="">
          <option value="1">cat1</option>
        </select>
      </div>
      <button>Jugar</button>
    </div>
  );
}

export default Setting;
