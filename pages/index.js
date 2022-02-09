import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import NavBar from 'components/navbar'
import Body from 'components/body'


export default function Home() {
  return (
    <>
      <Head>
        <title>T</title>
        <meta name="Homepage" content="Issue Tracking Tool" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <NavBar/>
      <Body/>
  </>
  )
}
