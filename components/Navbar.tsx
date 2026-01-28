"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {motion} from "framer-motion";

export default function Navbar(){
    const [visible, setVisible] =useState(true);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () =>{
            const currentScroll = window.scrollY;

            if (currentScroll > lastScroll && currentScroll > 80){

                setVisible(true);
            }else{
                setVisible(false);
            }

            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    return (
        <motion.nav
        initial={{y: -100}}
        animate={{ y: visible ? 0 : -100}}
        transition={{ duration: 0.3, ease: "easeOut"}}
         className="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b border-white/20 overflow-hidden"
    >
            {/* GRADIENTE ANIMADO */}
      <motion.div
        className="absolute inset-0 opacity-95"
        style={{
          background:
            "linear-gradient(270deg, #0f172a, #1d4ed8, #6366f1, #7c3aed)",
          backgroundSize: "600% 600%",
        }}
        animate={{
          backgroundPosition: ["10% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      />
            <div className="relative max-w-7xl mx-auto px-10 h-20 flex items-center">
                <div className="flex items-center gap-2 top-10">
                      <Image
                        src="/Logos/BalsasTrans.png"
                        alt="Tokuyama Fest"
                        width={70}
                        height={50}
                        priority
                    />
                </div>
                <div className="flex items-center gap-2 top-20">
                    <Image
                        src="/Logos/Tokuyamat.png"
                        alt="Tokuyama Fest"
                        width={160}
                        height={100}
                        priority
                    />
                </div>
                <div className="hidden md:flex gap-20 text-xl font-medium absolute left-1/2 -translate-x-1/2 text-white">
                    <a href="#ponentes" className="hover:text-white text-xl font-semibold">PONENTES</a>
                    <a href="#programa" className="hover:text-white text-xl font-semibold">PROGRAMA</a>
                    <a href="#ubicacion" className="hover:text-white text-xl font-semibold">UBICACIÓN</a>
                    <a href="#registro" className="hover:text-white text-xl font-semibold">REGISTRO</a>
                </div>
            </div>
        </motion.nav>
    )
}
