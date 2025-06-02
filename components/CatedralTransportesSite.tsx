"use client";
import React from "react";

export default function CatedralTransportesSite() {
  const whatsapp =
    "https://wa.me/5561981715793?text=Ol%C3%A1%2C+gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o+de+transporte+de+ve%C3%ADculo.";

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#023023] text-[#f3f7f2] p-8 text-center">
      <h1 className="text-4xl font-extrabold mb-4">
        Transporte de veículos com segurança e confiança
      </h1>
      <p className="mb-6 max-w-lg">
        Há mais de 20 anos no setor, com seguro incluso e atendimento
        personalizado em todo o Brasil.
      </p>
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#2aab5c] text-[#023023] px-6 py-3 rounded-full font-bold hover:brightness-110 transition"
      >
        Solicite sua cotação no WhatsApp
      </a>
    </main>
  );
}
