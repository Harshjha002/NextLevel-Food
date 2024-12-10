import Link from 'next/link'
import React from 'react'

const MealsPage = () => {
    const meal = {id:1,name:'mealOne'}
  return (
    <div>
      <h1>MealsPage</h1>
      <p>
      <Link href={'/meals/share'}>Share</Link>
      </p>
      <p>
      <Link href={`/meals/${meal.id}`}>{meal.name}</Link>
      </p>
    </div>
  )
}

export default MealsPage
