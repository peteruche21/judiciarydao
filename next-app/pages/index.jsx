import Head from "next/head";
import Navbar from "../components/Landing/Navbar";
import Footer from "../components/Landing/Footer";
import Hero from "../components/Landing/Hero";
import Features from "../components/Landing/Features";
import About from "../components/Landing/About";
import Ace from "../components/Landing/Ace";
import Partners from "../components/Landing/Partner";
var Home = function () {
    return (<div>
      <Head>
        <title>judiciaryDao</title>
        <meta name="description" content="high court of ethereum"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Ace />
      <Partners />
      <Footer />
    </div>);
};
export default Home;
