"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ponentes = [
  {
    id: 1,
    nombre: "Dra. Tania",
    imagen: "/Ponentes/Tania.jpg",
    imagenModal: "/Ponentes/Tania2.jpg",
    nombreImagen:"/Ponentes/NombreTania.png",
    descripcion:
      "La Dra. Tania Anduaga es licenciada en odontología, egresada del Instituto Politécnico Nacional (IPN). Su ejercicio profesional se orienta a la odontología estética y a la rehabilitación oral bajo principios de mínima invasión y preservación de la estructura dental, integrando criterios clínicos basados en la evidencia científica. Cuenta con experiencia en la práctica privada en la Ciudad de México y participa de manera constante en actividades de educación continua. Ha colaborado como ponente en cursos, diplomados y congresos odontológicos nacional e internacionalmente, contribuyendo a la actualización académica de profesionales de la salud bucal. Asimismo, desarrolla labores de divulgación académica a través de plataformas digitales, donde difunde casos clínicos y contenidos educativos enfocados en el fortalecimiento de la práctica clínica y la formación continua del cirujano dentista.",
    
    },

  {
    id: 2,
    nombre: "Dr. Noburo",
    imagen: "/Ponentes/Noburo.jpg",
    imagenModal: "/Ponentes/Noburo2.jpg",
    nombreImagen:"/Ponentes/NombreNoburo.png",
    descripcion:
      "El Dr. Noboru Takahashi es cirujano dentista egresado de la Tokyo Medical and Dental University, institución en la que también se desempeña como profesor clínico y speaker certificado. Realiza práctica privada en Tokio, con un enfoque especializado en odontología restauradora y estética, tanto en restauraciones directas como indirectas. Es creador de la resina Palfique Asteria y speaker certificado de Tokuyama Dental, participando activamente en el desarrollo, investigación y difusión de materiales dentales de alta estética. Reconocido como conferencista internacional, es autor de publicaciones clínicas y su trabajo se distingue por la integración precisa de ciencia, técnica y estética, consolidándolo como una referencia en la odontología contemporánea.",
  },

  {
    id: 3,
    nombre: "Dr. Newton",
    imagen: "/Ponentes/Newton.jpg",
    imagenModal: "/Ponentes/Newton2.jpg",
    nombreImagen:"/Ponentes/NombreNewton.png",
    descripcion:
      "El Dr. Newton Fahl, Jr., DDS, MS, es un referente global en odontología estética, reconocido por la creación de la Técnica de Estratificación Policromática (PCL) y por sus innovaciones en carillas e incrustaciones, que han transformado la práctica de las restauraciones directas e indirectas. Es egresado de la Universidad Estatal de Londrina, Brasil (1987), y obtuvo el título de Especialista en Odontología Operativa y el grado de Máster por la Universidad de Iowa, EE. UU. (1989). Cuenta con más de 30 años de trayectoria, durante los cuales ha formado a miles de odontólogos alrededor del mundo, fusionando el rigor científico con una sensibilidad artística única. Es miembro de la Academia Americana de Odontología Estética (AAED) y de la Fundación MCG-Hinman, y se desempeña como profesor adjunto de Odontología Operativa en la Universidad de Carolina del Norte (UNC). Ha sido reconocido con el Premio Presidencial al Mejor Profesor por la AAED en 2008 y con el Premio a la Excelencia en la Educación Dental Cosmética por la AACD en 2011. Es autor de numerosas publicaciones científicas sobre técnicas adhesivas, del libro “Carillas de Resina Compuesta: Técnica Directa-Indirecta” (2020).",
  },

  {
    id: 4,
    nombre: "Dr. Nijitomi",
    imagen: "/Ponentes/Nijitomi.jpg",
    imagenModal: "/Ponentes/Nijitomi2.jpg",
    nombreImagen:"/Ponentes/NombreNijitomi.png",
    descripcion:
      "El Dr. Yoshitaka Nijitomi es cirujano dentista japonés egresado de la Universidad San Francisco con formación internacional y cuenta con una maestría en Prostodoncia-Implantes. Ha desempeñado cargos académicos como profesor asistente en materiales dentales y tiene experiencia clínica hospitalaria. Desde 2004 se ha consolidado como asesor y conferencista internacional, impartiendo cursos y conferencias alrededor del mundo enfocados en odontología restauradora, técnicas con resinas compuestas y enfoques mínimamente invasivos. Actualmente se desempeña como especialista y conferencista en Tokuyama Dental, aportando su experiencia científica y clínica al desarrollo y aplicación de materiales de alta estética.",
  },

  {
    id: 5,
    nombre: "Dr. Hugo",
    imagen: "/Ponentes/Hugo.jpg",
    imagenModal: "/Ponentes/Hugo2.jpg",
    nombreImagen:"/Ponentes/NombreHugo.png",
    descripcion:
      "El T.P.D. y C.D. Hugo Ricardo Cornejo, cirujano dentista egresado de la UNAM y técnico en prótesis dental, es especialista en ortodoncia, con diplomado en Ortodoncia y Ortopedia Dentofacial por el COOD. Cuenta con amplia experiencia en educación y capacitación clínica, destacándose como ponente de cursos para Balsas Dental. Se especializa en la enseñanza de técnicas restauradoras, como estratificación dental, encerado diagnóstico y manejo de resinas compuestas, con un enfoque práctico y aplicable a la clínica diaria. Es speaker nacional e internacional de la marca Renfert y Tokuyama Dental, participa activamente en la formación continua de odontólogos, contribuyendo al fortalecimiento del conocimiento clínico dentro de la comunidad dental.",
  },

];

// 🔥 Variants de animación
      const overlayVariants = {
        hidden: { x: -70, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.8,
            staggerChildren: 0.25,
            delayChildren: 0.3,
          },
        },
      exit: {
          x: -60,
          opacity: 0,
          transition: { duration: 0.4 },
        },
      };

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export default function Ponentes() {
  const [activo, setActivo] = useState<(typeof ponentes)[0] | null>(null);

  return (
    <section id="ponentes" className="py-32 px-10 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-purple-800 text-center"
        >
          Ponentes
        </motion.h2>

        {/* GRID */}
        <div className="mt-20 grid grid-cols-3 md:grid-cols-5 gap-6">
          {ponentes.map((ponente) => (
            <motion.div
              key={ponente.id}
              whileHover={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() => setActivo(ponente)}
              className="cursor-pointer rounded-3xl overflow-hidden bg-gradient-to-b from-purple-500 to-blue-600"
            >
              <div className="relative aspect-[4/7] w-full">
                <img
                  src={ponente.imagen}
                  alt={ponente.nombre}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* TEXTO INFERIOR */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center text-purple-900 max-w-7xl mx-auto text-base md:text-base"
        >
          Aprende de expertos internacionales y eleva tu práctica profesional al
          siguiente nivel a través de conferencias, demostraciones y experiencias
          diseñadas para compartir conocimiento de vanguardia, combinando
          innovación, tecnología avanzada y materiales de clase mundial aplicados
          a la odontología moderna.
        </motion.p>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activo && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setActivo(null)}
            />

            {/* MODAL */}
            <motion.div
              initial={{ scale: 0.90, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center px-[6vw]"
            >
              <div className="relative rounded-3xl overflow-hidden max-w-4xl w-full">

                {/**/}
                <button
                  onClick={() => setActivo(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition"
                >
                  ✕
                </button>

                {/**/}
                <img
                  src={activo.imagenModal}
                  alt={activo.nombre}
                  className="w-full h-auto object-cover"
                />

                {/* OVERLAY TEXTO ANIMADO */}
                <motion.div
                  variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="
                    absolute inset-x-0 bottom-0
                    md:inset-y-0 md:right-20 md:left-auto md:w-[45%]
                    bg-gradient-to-t md:bg-gradient-to-l
                    p-6 md:p-8
                    flex flex-col justify-center
                    text-white
                  "
                >
                  {/* IMAGEN NOMBRE DEL PONENTE */}
                  <motion.img
                    variants={itemVariants}
                    src={activo.nombreImagen}
                    alt={activo.nombre}
                    className="
                      mb-4
                      w-[220px] md:w-[260px]
                      object-contain
                    "
                  />
                  <motion.p
                      variants={itemVariants}
                      className="
                        text-sm
                        sm:text-base
                        md:text-xs
                        lg:text-sm
                        leading-relaxed
                        opacity-95
                        max-h-[40vh]
                        md:max-h-none
                        overflow-y-auto
                        pr-2
                      "
                    >
                      {activo.descripcion}
                    </motion.p>

                </motion.div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
