"use client"
import Footer from "./components/Footer";
import Gallary from "./components/Gallary";
import Header from "./components/Header";
import OurStory from "./components/OurStory";
import Catelog from "./components/Catelog";
import Pricing from "./components/pricing";
import { useSession } from "next-auth/react";

export default function Home() {
  // const { data: session } = useSession();
  // console.log("session", session)
  return (
    <main className="">
      <Header />
      <OurStory />
      {/* <Pricing/> */}
      <Catelog/>
      <Gallary />
      <Footer />
    </main>
  );
}
