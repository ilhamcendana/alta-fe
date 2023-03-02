/** Libs */
import { useState } from 'react';
/** Global Components */
import Ingredients from '../../components/burgers/ingredients';
import Layout from '../../components/layout';
/** Local Components */

/** Assets */

/** Utils */

export default function BurgerApp() {
  // State
  const [ingredients, ingredientsSet] = useState([]);
  // Hooks

  // Func
  const pickIngredient = item => {
    ingredientsSet(prev => {
      let sample = [...prev];
      sample.push(item);
      return sample;
    });
  }
  // Use Effect

  return (
    <Layout allIngredients={allIngredients} pickIngredient={pickIngredient} selectedIngredients={ingredients} >
      {/* Write your burgers code here */}
      <Ingredients ingredients={ingredients} />            
    </Layout>
  )
}

const allIngredients = [
  {
    label: 'Bread',
    key: 'bread',
    price: 6000
  },
  {
    label: 'Lettuce',
    key: 'lettuce',
    price: 2000
  },
  {
    label: 'Tomato',
    key: 'tomato',
    price: 4000
  },
  {
    label: 'Meat',
    key: 'meat',
    price: 12000
  },
  {
    label: 'Cheese',
    key: 'cheese',
    price: 3000
  },
]