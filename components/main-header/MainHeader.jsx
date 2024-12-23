
import Link from 'next/link'
import React from 'react'
import logoImg from '@/assets/logo.png'
import styles from './main-header.module.css'
import Image from 'next/image'
import MainHeaderBackground from './MainHeaderBackground'
import NavLink from './NavLink'


const MainHeader = () => {
  return (
    <>
    <MainHeaderBackground/>
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
      <Image src={logoImg} alt="Logo" priority/>
      NextLevel Food
      </Link>

      <nav className={styles.nav}>
        <ul>
            <li>
              <NavLink href='/meals'>Browse Meals</NavLink>
            </li>
            <li>
            <NavLink href="/community">Join Community</NavLink>
            </li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default MainHeader
