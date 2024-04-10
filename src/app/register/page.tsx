import TeamForm from "@/components/TeamForm";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Registro de equipos'
}

export default function RegisterPage() {
  return (
    <>
      <h1
        className="text-4xl md:text-5xl font-bold text-center mt-8 mb-4 flex gap-2 justify-center flex-col md:flex-row">
        <p className="text-brandPrimary">MF Pádel</p>
        <p className="text-brandSecondary">Torneo Open</p>
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">Inscripciones abiertas</h2>
      <h3 className="text-lg md:text-xl font-medium text-center mb-6">Fecha límite: 26/04/2024</h3>

      <TeamForm/>
    </>
  );
}