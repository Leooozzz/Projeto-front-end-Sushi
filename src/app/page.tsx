"use client";

import { Footer } from "@/components/footer";
import { ToggleTheme } from "@/components/toggle-theme";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div>
      <ToggleTheme/>
      <div
        className="h-[1000px] bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/ImagensSushi/ImageBackgroundSushi.png')",
        }}
      >
        <header className="relative mx-auto container flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <img
              src="/ImagensSushi/ImageLog-removebg-preview.png"
              alt="Logo Sushi Da Vila"
              className="h-20 w-20"
            />
            <h1 className="text-3xl font-bold font-merriweather text-stone-200">
              Sushi Da Vila
            </h1>
          </div>

          <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex gap-8 text-black dark:text-stone-200 font-semibold font-merriweather">
            <li>
              <a
                href="/"
                className="hover:text-red-500 text-white text-lg transition-colors"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-red-500 text-white text-lg transition-colors"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="hover:text-red-500 text-white text-lg transition-colors"
              >
                Produtos
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-red-500 text-white text-lg transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              className="focus:outline-none"
              onClick={() => setMenuAberto(!menuAberto)}
            >
              {menuAberto ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-stone-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-stone-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </Button>

            {menuAberto && (
              <div className="absolute top-full left-0 w-full bg-neutral-900/95 backdrop-blur-sm shadow-lg flex flex-col items-center gap-4 py-4 z-50 transition-all duration-300">
                {["Início", "Sobre", "Produtos", "Contato"].map((item) => (
                  <a
                    key={item}
                    href="/"
                    className="text-stone-200 hover:text-red-400 font-merriweather text-xl transition-colors"
                    onClick={() => setMenuAberto(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </header>

        <section className="mx-auto container mt-5 p-4">
          <h1 className="text-4xl text-stone-200">Sobre Nos</h1>
          <p className="text-stone-200 max-w-lg text-xl p-4 font-bold">
            Bem-vindo(a) ao <strong>Sushi Da Vila</strong>, onde a tradição japonesa
            encontra o sabor e a criatividade! Aqui, cada peça é preparada com
            ingredientes frescos, selecionados com rigor, e com o cuidado
            artesanal que transforma cada refeição em uma experiência única.
            Nosso objetivo é oferecer muito mais do que sushi — queremos
            proporcionar momentos de prazer, cultura e conexão em torno da boa
            comida. Seja no conforto da sua casa, com nossos pedidos delivery,
            ou em nosso espaço acolhedor, garantimos sempre qualidade, sabor e
            autenticidade em cada detalhe.
          </p>
          <button className="mt-4 px-6 py-3 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition">Peça Ja!</button>
        </section>
        <section className="mx-auto container mt-5 p-4">
          <h1 className="text-4xl  text-black font-bold">Em destaque</h1>

        </section>
      </div>
      <Footer/>
    </div>
  );
}
