
import React, { Suspense } from 'react'
import styles from './page.module.css'
import MealsGrid from '@/components/meals/MealsGrid'
import Link from 'next/link'
import { getMeals } from '@/lib/meals'


async function Meals(){
  const meals = await getMeals()
  return <MealsGrid  meals={meals}/>

}

const MealsPage =() => {
  return (
    <>
    <header className={styles.header}>
      <h1>
        Delicious meals, created{' '} <span className={styles.highlight}>by you</span>
      </h1>
      <p>Choose your favorite recipe and cook it{' '}<span className={styles.highlight}>Yourself</span> . It is easy and <span className={styles.highlight}>Fun !</span>.</p>
      <p className={styles.cta}><Link href="/meals/share">Share Your favorite Recipe</Link></p>

    </header>
    <main className={styles.main}>
      <Suspense fallback={ <p className={styles.loading}>Fetching meals...</p>}>
      <Meals/>
      </Suspense>
    </main>
    </>
  )
}

export default MealsPage
