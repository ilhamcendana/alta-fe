/** Libs */

/** Global Components */

/** Local Components */

/** Assets */

/** Utils */

export default function Summary({ selectedIngredients = [] }) {
  const isIngridientsEmpty = selectedIngredients.length === 0;
  // State

  // Hooks

  // Func
  const getTotal = () => {
    const mapPrice = selectedIngredients.map(i => i?.price);
    const total = !isIngridientsEmpty ? mapPrice.reduce((a, b) => a + b) : 0;
    return total;
  }

  // Use Effect

  return (
    <section className='sc-summary'>
      {selectedIngredients.map((item) => (
        <div key={item?.key} className='sc-summary-item'>
          <p>{item?.label}</p>
          <p>Rp {item?.price}</p>
        </div>
      ))}

      {!isIngridientsEmpty &&
        <div className="sc-summary-total">
          <p>TOTAL: Rp {getTotal()}</p>
        </div>
      }
    </section>
  )

}