import MainLayout from '../layouts/mainLayout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '../components/button'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next Tailwind Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
      <Button variant={'primary'} textSize={'xl'}>asasd</Button>
      </MainLayout>
    </div>
  )
}

export default Home
