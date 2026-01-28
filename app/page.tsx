import Hero from "@/components/sections/Hero";
import Ponentes from "@/components/sections/Ponentes";
import Programa from "@/components/sections/Programa";
import Ubicacion from "@/components/sections/Ubicacion";
import Registro from "@/components/sections/Registro";

export default function Home() {
  return (
    <main>
      {/* Seccion principal*/}
         <Hero />
             {/* Seccion ponentes*/}
                  <Ponentes/>
                      {/*Seccion Programa*/}
                            <Programa/>
                            {/*Seccion Ubicacion*/}
                                  <Ubicacion/>
                                  {/*Seccion Registro*/}
                                        <Registro/>

                      
    </main>
  );
}
