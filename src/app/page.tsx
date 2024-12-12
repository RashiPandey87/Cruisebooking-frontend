"use client"
import Image from "next/image";
import styles from "./page.module.css";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import CruiseCarousel from "@/components/CruiseCarousel/CruiseCarousel";

export default function Home() {
  return (
      <main className={styles.main}>
        
      
<HomeSlider/>
<CruiseCarousel/>
       
      </main>
      
  );
}
