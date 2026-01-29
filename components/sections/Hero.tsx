"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background */}
      <Image
        src="/Logos/apertura.jpg"
        alt="Tokuyama Fest"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 w-full">
        
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* IMAGEN */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1, y: 40 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -15, 0],
            }}
            transition={{
              opacity: { duration: 1 },
              scale: { duration: 1.5 },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="w-[75%] sm:w-[60%] md:w-[50%] lg:w-[40%]"
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

          {/* TEXTO */}
          <div className="text-white text-center lg:text-left max-w-prose">
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-base sm:text-lg lg:text-xl leading-relaxed"
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
                mt-8 
                px-8 
                py-4 
                border 
                border-white 
                uppercase 
                tracking-wide 
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
      </div>
    </section>
  );
}
