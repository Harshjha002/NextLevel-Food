import React from 'react'

const MealDetailPage = ({params}) => {
    const { mealSlug } = params
  return (
    <div>
      Meal id is {mealSlug}
    </div>
  )
}

export default MealDetailPage
