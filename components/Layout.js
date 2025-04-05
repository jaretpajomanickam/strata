import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Strata Management System</title>
        <meta name="description" content="Effortless Strata Management for Your Community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  )
}

