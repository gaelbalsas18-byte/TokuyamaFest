"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[120vh] relative flex items-center overflow-hidden">

      {/* Background */}
      <Image
        src="/Logos/Apertura.jpg"
        alt="Tokuyama Fest"
        fill
        priority
        className="object-cover object-top scale-150"
      />

      {/* Overlay */}
      <div className="absolute inset-0" />

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* IMAGEN IZQUIERDA */}
        <motion.div
          initial={{ opacity: 0, scale: 1.2, y: 70 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [1, -20, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 3 },
            y: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative w-[280px] md:w-[420px] lg:w-[920px] -ml-10 lg:-ml-24 left-45 top-20"
        >
          <Image
            src="/Logos/Logot.png"
            alt="Tokuyama Fest Hero"
            width={1500}
            height={500}
            priority
            className="w-full h-auto"
          />
        </motion.div>

        {/* */}
        <div className="mt-10 max-w-6xl md:text-2xl text-center text-white mx-auto text-xl">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              scale: 0.95,
              y: [0, -15, 0],
            }}
            transition={{ duration: 1.5 }}
            className="mt-10 md:text-xl text-center text-white mx-auto text-lg leading-[1.6]"
          >
            Tokuyama Fest es un encuentro odontológico concebido como un puente entre México y el conocimiento global. Un espacio donde ponentes internacionales de alto nivel comparten su experiencia clínica, técnicas avanzadas y visión profesional con la comunidad odontológica, fomentando el intercambio de ideas y 
            aprendizajes que trascienden la práctica clínica.
            Más que un evento, 
            Tokuyama Fest es una plataforma para conectar con líderes internacionales, fortalecer relaciones profesionales y abrir oportunidades reales de crecimiento y colaboración más allá de nuestras fronteras.
            Un punto de encuentro que impulsa una comunidad global guiada por la excelencia,
            la innovación y la evolución constante de la odontología.
          </motion.h2>

          {/* BOTÓN WHATSAPP */}
          <motion.a
            href="https://wa.me/5215610115368?text=Hola%20quiero%20información%20sobre%20las%20entradas%20al%20Tokuyama%20Fest"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="inline-block mt-5 px-8 py-4 border border-white tracking-wide uppercase hover:bg-white hover:text-black transition-all duration-300 text-xl"
          >
            Entrada
          </motion.a>
        </div>
      </div>
    </section>
  );
}
