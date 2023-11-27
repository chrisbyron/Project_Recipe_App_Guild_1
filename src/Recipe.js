import React from "react";

function Recipe(recipeDatum, index, {deleteRecipe}) {
    return (
        <tr>
            <td>{recipeDatum.name}</td>
            <td>{recipeDatum.cuisine}</td>
            <td><img src={recipeDatum.photo}/></td>
            <td className="content_td"><p>{recipeDatum.ingredients}</p></td>
            <td className="content_td"><p>{recipeDatum.preparation}</p></td>
            <td><button name="delete" onClick={() => deleteRecipe(index)}>Delete</button></td>
        </tr>
    );
}

export default Recipe;