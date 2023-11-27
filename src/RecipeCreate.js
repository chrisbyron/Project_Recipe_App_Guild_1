import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    rating: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({...initialFormData});
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({...initialFormData})
  };
  // const [name, setName] = useState("");
  // const [cuisine, setCuisine] = useState("");
  // const [photo, setPhoto] = useState("");
  // const [rating, setRating] = useState("");
  // const [ingredients, setIngredients] = useState("");
  // const [preparation, setPreparation] = useState("");
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
                required="true"
              />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine"
                required="true"
              />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
              <input
                id="photo"
                type="url"
                name="photo"
                onChange={handleChange}
                value={formData.photo}
                placeholder="Photo URL"
                required="true"
              />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
              <textarea
                id="ingredients"
                type="text"
                name="ingredients"
                onChange={handleChange}
                value={formData.ingredients}
                placeholder="List ingredients"
                required="true"
              />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
              <textarea
                id="preparation"
                type="text"
                name="preparation"
                onChange={handleChange}
                value={formData.preparation}
                placeholder="Provide preparation steps"
                required="true"
              />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
