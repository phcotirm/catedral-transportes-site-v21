"use client";
import React from "react";
import { Truck, MapPin, ShieldCheck } from "lucide-react";

export default function CatedralTransportesSite() {
  const whatsapp =
    "https://wa.me/5561981715793?text=Ol%C3%A1%2C+gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o+de+transporte+de+ve%C3%ADculo.";

  return (
    <div className="bg-[#023023] text-[#f3f7f2] font-sans relative">
      {/* Botão flutuante WhatsApp */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-[#2aab5c] text-[#023023] p-4 rounded-full shadow-lg hover:scale-110 transition md:bottom-6 md:right-6"
        aria-label="WhatsApp"
      >
        <img
          src="https://icongr.am/fontawesome/whatsapp.svg?size=24&color=023023"
          alt="Ícone WhatsApp"
          className="w-6 h-6"
        />
      </a>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden px-4">
        <img
          src="https://i.ibb.co/jvstXYpF/Chat-GPT-Image-29-de-mai-de-2025-20-47-47.png"
          alt="Cegonha transportando carros"
          className="absolute w-full h-full object-cover opacity-20 z-0"
          loading="eager"
        />
        <header className="absolute top-0 left-0 w-full px-4 py-4 flex flex-wrap justify-between items-center z-10 bg-[#023023]/90 backdrop-blur-md md:px-8">
          <img
            src="https://i.ibb.co/ZpWpLJBs/logo-capital.png"
            alt="Logo Catedral Transportes"
            className="h-10"
            loading="lazy"
          />
          <nav className="w-full mt-2 flex justify-center gap-4 text-sm font-semibold md:w-auto md:mt-0">
            <a href="#servicos" className="hover:text-[#2aab5c] transition">
              Serviços
            </a>
            <a href="#sobre" className="hover:text-[#2aab5c] transition">
              Sobre
            </a>
            <a href="#contato" className="hover:text-[#2aab5c] transition">
              Contato
            </a>
          </nav>
        </header>
        <div className="relative z-10 px-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-md">
            Transporte de veículos com segurança e confiança
          </h1>
          <p className="text-base md:text-lg text-[#f3f7f2]/80 mb-6">
            Há mais de 20 anos no setor, com seguro incluso e atendimento
            personalizado em todo o Brasil.
          </p>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2aab5c] text-[#023023] px-5 py-3 rounded-full font-bold hover:brightness-110 transition"
          >
            Solicite sua cotação agora
          </a>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section
        id="servicos"
        className="bg-[#1a6c58] px-4 md:px-6 py-20 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Serviços de Transporte de Veículos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: <Truck size={48} className="text-[#2aab5c] mb-4 mx-auto" />,
              title: "Transporte de Veículos",
              desc: "Veículos leves e pesados, suporte completo e atendimento próximo.",
            },
            {
              icon: <MapPin size={48} className="text-[#2aab5c] mb-4 mx-auto" />,
              title: "Atendimento Personalizado",
              desc: "Equipe especializada pronta para atender com agilidade.",
            },
            {
              icon: (
                <ShieldCheck size={48} className="text-[#2aab5c] mb-4 mx-auto" />
              ),
              title: "Segurança Garantida",
              desc: "Transporte com seguro incluso e registro ANTT.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#023023] p-6 md:p-8 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              <div>{item.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-[#f3f7f2]/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="px-4 md:px-6 py-20 bg-[#023023] flex flex-col lg:flex-row items-center gap-10 max-w-6xl mx-auto"
      >
        <div className="flex-1">
          <img
            src="https://i.ibb.co/ns7Wx9hb/Chat-GPT-Image-29-de-mai-de-2025-21-15-40.png"
            alt="Equipe Catedral Transportes"
            className="rounded-xl shadow-md w-full"
            loading="lazy"
          />
        </div>
        <div className="flex-1 text-[#f3f7f2]/90">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Experiência e Compromisso
          </h2>
          <p className="mb-4">
            Soluções logísticas com responsabilidade, atuando em parceria com
            profissionais de confiança em todo o Brasil.
          </p>
          <p>
            Registro na ANTT, seguro incluso e atenção em cada etapa do
            transporte.
          </p>
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="bg-[#1a6c58] px-4 md:px-6 py-20 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Solicite uma cotação agora
        </h2>
        <div className="max-w-2xl mx-auto space-y-4 text-base md:text-lg mb-10">
          <p>
            WhatsApp:{" "}
            <a href={whatsapp} className="text-[#2aab5c] hover:underline">
              (61) 98171-5793
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:catedraltransportedeveiculos@gmail.com"
              className="text-[#2aab5c] hover:underline"
            >
              catedraltransportedeveiculos@gmail.com
            </a>
          </p>
          <p>
            Instagram:{" "}
            <a
              href="https://instagram.com/catedraltransportes"
              className="text-[#2aab5c] hover:underline"
            >
              @catedraltransportes
            </a>
          </p>
        </div>
        <form
          action="https://formsubmit.co/catedraltransportedeveiculos@gmail.com"
          method="POST"
          className="bg-[#023023] p-6 rounded-xl space-y-4 max-w-xl mx-auto text-left"
        >
          <input type="hidden" name="_subject" value="Nova solicitação de cotação" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            name="nome"
            placeholder="Seu nome"
            required
            className="w-full p-3 rounded bg-[#1a6c58] placeholder:text-[#f3f7f2]/60"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
            className="w-full p-3 rounded bg-[#1a6c58] placeholder:text-[#f3f7f2]/60"
          />
          <textarea
            name="mensagem"
            rows={4}
            placeholder="Detalhes da cotação"
            required
            className="w-full p-3 rounded bg-[#1a6c58] placeholder:text-[#f3f7f2]/60"
          />
          <button
            type="submit"
            className="bg-[#2aab5c] text-[#023023] px-6 py-3 rounded-full font-bold hover:brightness-110 transition w-full"
          >
            Enviar solicitação
          </button>
        </form>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#023023] text-center py-6 text-sm text-[#f3f7f2]/70 border-t border-[#1a6c58] px-4">
        <a href="https://www.transportedeveiculos.com.br" title="Portal Transporte de Veículos">Portal Transporte de Veiculos</a>
        © {new Date().getFullYear()} Catedral Transportes — Transporte de
        veículos com segurança, experiência e confiança.
      </footer>
    </div>
  );
}
