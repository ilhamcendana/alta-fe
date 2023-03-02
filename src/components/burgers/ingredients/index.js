/** Libs */

/** Global Components */

/** Local Components */

/** Assets */

/** Utils */

export default function Ingredients({ ingredients = [] }) {
  // State

  // Hooks

  // Func

  // Use Effect

  return (
    <section className="ingredient-container">
      {ingredients.map((item) => <div key={item?.key} className={`ingredient-item ingredient-${item?.key}`} />)}
    </section>
  )

}