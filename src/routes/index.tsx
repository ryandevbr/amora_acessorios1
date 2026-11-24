import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, MessageCircle, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";

const WA = "https://wa.me/5531988813158?text=" + encodeURIComponent("Olá, Amora! Vim pelo site e gostaria de saber mais sobre os acessórios.");
const MAPS = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Rua 68, 22, Olaria, Timóteo - MG");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amora Acessórios | Joias e semijoias em Timóteo - MG" },
      { name: "description", content: "Pulseiras, anéis, colares e bolsas na Amora. Visite nossa loja em Olaria, Timóteo - MG, ou fale pelo WhatsApp." },
      { property: "og:title", content: "Amora Acessórios — Timóteo, MG" },
      { property: "og:description", content: "Acessórios que brilham com você. Visite a loja ou chame no WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
  }),
  component: Index,
});

const hours = [
  { d: "Segunda e terça", h: "14h às 18h30" },
  { d: "Quarta a sexta", h: "9h às 18h30" },
  { d: "Sábado", h: "9h às 16h" },
];
const cats = ["Pulseiras", "Anéis", "Colares", "Brincos", "Bolsas"];

function WaButton({ label = "Chamar no WhatsApp", light = false }: { label?: string; light?: boolean }) {
  return (
    <a href={WA} target="_blank" rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-widest transition-transform hover:scale-[1.03] ${light ? "bg-gold-gradient text-accent-foreground" : "bg-primary text-primary-foreground"}`}>
      <MessageCircle className="h-5 w-5" /> {label}
    </a>
  );
}

function Index() {
  return (
    <main className="font-sans">
      <section className="relative overflow-hidden bg-plum text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-10 md:grid-cols-2 md:py-24">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo-diamante.png"
                alt="Amora Acessórios"
                className="h-25 w-25 object-contain"
              />
              <span className="text-gold-gradient font-display text-3xl font-semibold tracking-[0.3em]">AMORA</span>
            </div>
            <h1 className="mt-12 font-display text-5xl leading-[1.05] md:text-7xl">
              Acessórios que <em className="text-gold-gradient">brilham</em> com você
            </h1>
            <p className="mt-6 max-w-md text-primary-foreground/75">
              Pulseiras, anéis, colares e bolsas escolhidos a dedo para completar o seu estilo. Em Timóteo - MG.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <WaButton light />
              <a href="#visite" className="inline-flex items-center justify-center rounded-full border border-gold/50 px-7 py-4 text-sm font-semibold uppercase tracking-widest text-gold">Visite a loja</a>
            </div>
          </div>
          <img src={hero} alt="Mão com pulseiras e anel dourados sobre bolsa de palha" width={1024} height={1536}
            className="aspect-4/5 w-full rounded-t-full object-cover shadow-2xl" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <Sparkles className="mx-auto h-6 w-6 text-gold" />
        <h2 className="mt-4 font-display text-4xl md:text-5xl">Para todos os momentos</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {cats.map((c) => (
            <span key={c} className="rounded-full border border-border bg-card px-6 py-3 font-display text-xl italic">{c}</span>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-lg text-muted-foreground">Viu algo no nosso Instagram? Mande a foto no WhatsApp e a gente separa pra você.</p>
      </section>

      <section id="visite" className="bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-2">
          <div className="rounded-2xl bg-plum p-10 text-primary-foreground">
            <MapPin className="h-8 w-8 text-gold" />
            <h2 className="mt-4 font-display text-5xl text-gold-gradient">Onde estamos</h2>
            <p className="mt-6 text-lg">Rua 68, nº 22<br />Olaria, Timóteo – MG</p>
            <a href={MAPS} target="_blank" rel="noreferrer" className="mt-8 inline-block border-b border-gold pb-1 text-sm uppercase tracking-widest text-gold">Abrir no mapa</a>
          </div>
          <div className="rounded-2xl bg-card p-10">
            <Clock className="h-8 w-8 text-gold" />
            <h2 className="mt-4 font-display text-5xl italic">Nosso horário</h2>
            <ul className="mt-6 divide-y divide-border">
              {hours.map((x) => (
                <li key={x.d} className="flex justify-between py-4">
                  <span className="font-display text-xl italic">{x.d}</span>
                  <span className="text-muted-foreground">{x.h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl">Fale com a gente</h2>
        <p className="mt-4 text-muted-foreground">(31) 98881-3158</p>
        <div className="mt-8"><WaButton /></div>
      </section>

      <footer className="bg-plum px-6 py-8 text-xs uppercase tracking-widest text-primary-foreground/60">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-4 md:grid-cols-3">
          {/* Canto esquerdo: sua assinatura */}
          <a
            href="https://instagram.com/ryan.devbr"
            target="_blank"
            rel="noopener noreferrer"
            className="order-2 justify-self-start text-[10px] opacity-50 transition-opacity hover:opacity-100 md:order-1"
          >
            Feito por{" "}
            <span className="font-medium text-primary-foreground underline decoration-primary-foreground/30 underline-offset-4">
              @ryan.devbr
            </span>
          </a>

          {/* Centro: dados da loja e acesso admin */}
          <div className="order-1 text-center md:order-2">
            <p>© {new Date().getFullYear()} Amora Acessórios · Timóteo – MG</p>
          </div>

          {/* Coluna direita vazia para manter o centro alinhado no desktop */}
          <div className="hidden md:order-3 md:block" />
        </div>
      </footer>

      <a href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp"
        className="bg-gold-gradient fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-accent-foreground shadow-xl">
        <MessageCircle className="h-6 w-6" />
      </a>
    </main>
  );
}
