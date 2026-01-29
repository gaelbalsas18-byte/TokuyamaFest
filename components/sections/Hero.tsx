"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start overflow-hidden">

      {/* Background */}
      <Image
        src="/Logos/apertura.jpg"
        alt="Tokuyama Fest"
        fill
        priority
        className="object-cover object-top md:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0" />

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 w-full text-center pt-16 md:pt-24">
        {/* 👆 ESTE pt-16 / pt-24 es el control principal */}

        {/* IMAGEN SUPERIOR */}
        <motion.div
          initial={{ opacity: 0, scale: 1.2, y: 70 }}
          animate={{
            opacity: 1,
            scale: 1.2,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 2 },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            relative 
            mx-auto
            w-[85%] 
            sm:w-[65%] 
            md:w-[55%] 
            lg:w-[50%]
            mt-6
          "
        >
          <Image
            src="/Logos/Logot.png"
            alt="Tokuyama Fest Hero"
            width={1600}
            height={1000}
            priority
            className="w-full h-auto"
          />
        </motion.div>

        {/* TEXTO */}
        <div className="mt-4 max-w-prose mx-auto text-white">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{ duration: 1.5 }}
            className="
              text-base 
              leading-relaxed
            "
          >
            Tokuyama Fest es un encuentro odontológico concebido como un puente entre México y el conocimiento global.
            Un espacio donde ponentes internacionales de alto nivel comparten su experiencia clínica, técnicas avanzadas
            y visión profesional con la comunidad odontológica, fomentando el intercambio de ideas y aprendizajes que
            trascienden la práctica clínica.
            <br /><br />
            Más que un evento, Tokuyama Fest es una plataforma para conectar con líderes internacionales, fortalecer
            relaciones profesionales y abrir oportunidades reales de crecimiento y colaboración más allá de nuestras
            fronteras.
            <br /><br />
            Un punto de encuentro que impulsa una comunidad global guiada por la excelencia, la innovación y la
            evolución constante de la odontología.
          </motion.h2>

          {/* BOTÓN */}
          <motion.a
            href="https://wa.me/5215610115368?text=Hola%20quiero%20información%20sobre%20las%20entradas%20al%20Tokuyama%20Fest"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="
              inline-block 
              mt-4 
              px-8 
              py-4 
              border 
              border-white 
              tracking-wide 
              uppercase 
              text-lg
              hover:bg-white 
              hover:text-black 
              transition-all 
              duration-300
            "
          >
            Entrada
          </motion.a>

        </div>
      </div>
    </section>
  );
}
