/** Libs */

/** Global Components */

/** Local Components */

/** Assets */

/** Utils */

export default function IngredientButton({ allIngredients = [], pickIngredient }) {
  // State

  // Hooks

  // Func

  // Use Effect

  return (
    <section className='sc-ingridient-buttons'>
      {allIngredients.map((item) => (
        <button key={item?.key} className="btn" onClick={() => pickIngredient(item)}>
          {item?.label}
        </button>
      ))}
    </section>
  )

}