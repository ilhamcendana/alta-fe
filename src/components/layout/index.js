
// Components
import IngredientButton from "../burgers/tools/ingredient-button";
import Summary from "../burgers/tools/summary";

export default function Layout({ children, allIngredients, pickIngredient, selectedIngredients }) {
  return (
    <main>
      {children}

      <Summary selectedIngredients={selectedIngredients} />

      <IngredientButton
        allIngredients={allIngredients}
        pickIngredient={pickIngredient}
      />
    </main>
  )
}