"use client";

import { motion } from "framer-motion";

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-2xl font-bold text-center text-purple-800"
        >
          Ubicación.
        </motion.h2>

        {/* CONTENIDO */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* MAPA – IZQUIERDA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-purple-200 shadow-lg"
          >
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-99.18148308992387%2C19.362712961598092%2C-99.17968064546587%2C19.36417811427046&amp;layer=mapnik"
              className="w-full h-[420px]"
              loading="lazy"
            />
          </motion.div>

          {/* TEXTO – DERECHA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-purple-800"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Centro Libanés
            </h3>

            <p className="text-base md:text-base leading-relaxed text-purple-800 mb-6">
              El Tokuyama Fest se llevará a cabo en el <strong>Centro Libanés</strong>,
              uno de los recintos más prestigiosos de la Ciudad de México.
            </p>

            <p className="text-base md:text-base leading-relaxed text-purple-800 mb-10">
              Vive una experiencia académica y profesional en un entorno diseñado
              para el aprendizaje, la innovación y el networking con especialistas
              internacionales.
            </p>

            <a
              href="https://www.google.com/maps?sca_esv=0b64f9733fed06e0&rlz=1C5CHFA_enMX1169MX1169&output=search&q=centro+libanes+hermes&source=lnms&fbs=ADc_l-bpk8W4E-qsVlOvbGJcDwpn60DczFdcvPnuv8WQohHLTVlJczjYHjSUbzKnD50j85o9uqNQ6Ddau7Ovlhim7v363JyIeYJw9z5jZg9KJr0EUYgIwGa4uK1TVT3EDeE6595ypyjaKmarHgR6lwGkESOvwbWMWb3z79CHH-5BAF7NRngpFgvb_xzykrlTeyHklYG11-wobGRDyCI8_Fj4tZl6sD58Op4r2iC_QWDX5yTq1jMs-wQ&entry=mc&ved=1t:200715&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border-2 border-purple-800 text-purple-800 text-base uppercase tracking-wide rounded-xl hover:bg-purple-800 hover:text-white transition-all duration-300"
            >
              Ver ubicación del evento
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
