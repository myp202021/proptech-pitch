"use client";

import { useEffect, useRef, useState } from "react";

/* ────────────────────────────────────────────
   FADE-IN ON SCROLL
   ──────────────────────────────────────────── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-8");
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Section({
  children,
  className = "",
  id,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}) {
  const ref = useFadeIn();
  return (
    <section
      id={id}
      ref={ref}
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${
        dark ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">{children}</div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-medium tracking-widest uppercase text-zinc-400 mb-4">
      {children}
    </span>
  );
}

function Card({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] bg-zinc-50 border border-zinc-100 hover:border-zinc-200 hover:shadow-lg">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-zinc-900">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-500">{description}</p>
    </div>
  );
}

/* ────────────────────────────────────────────
   MAIN PAGE
   ──────────────────────────────────────────── */
export default function PitchPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* ──── NAV ──── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-zinc-100 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className={`text-xl font-bold tracking-tight ${scrolled ? "text-zinc-900" : "text-white"}`}>nido.</span>
          <div className={`hidden md:flex items-center gap-8 text-sm ${scrolled ? "text-zinc-500" : "text-zinc-400"}`}>
            <a href="#problema" className="hover:text-zinc-900 transition-colors">Problema</a>
            <a href="#solucion" className="hover:text-zinc-900 transition-colors">Solución</a>
            <a href="#producto" className="hover:text-zinc-900 transition-colors">Producto</a>
            <a href="#mercado" className="hover:text-zinc-900 transition-colors">Mercado</a>
            <a href="#modelo" className="hover:text-zinc-900 transition-colors">Modelo</a>
            <a href="#roadmap" className="hover:text-zinc-900 transition-colors">Roadmap</a>
          </div>
        </div>
      </nav>

      {/* ──── HERO ──── */}
      <section className="relative min-h-screen flex items-center justify-center bg-zinc-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(63,63,70,0.4),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(39,39,42,0.3),transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-800/60 border border-zinc-700/50 px-4 py-1.5 text-xs text-zinc-300 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            PropTech de Nueva Generación — Chile 2026
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
            No buscas
            <br />
            propiedades.
            <br />
            <span className="bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">
              Te encuentran.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            La primera plataforma inmobiliaria que conoce al comprador antes de mostrar una sola propiedad.
            Inteligencia artificial, matching bidireccional y datos en tiempo real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#problema"
              className="inline-flex items-center justify-center rounded-full bg-white text-zinc-900 px-8 py-3.5 text-sm font-medium hover:bg-zinc-100 transition-colors"
            >
              Ver la visión completa
            </a>
            <a
              href="#producto"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 text-zinc-300 px-8 py-3.5 text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              Explorar el producto
            </a>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ──── PROBLEMA ──── */}
      <Section id="problema">
        <Badge>El problema</Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl">
          El mercado inmobiliario lleva 20 años sin cambiar.
        </h2>
        <p className="text-lg text-zinc-500 max-w-2xl mb-16 leading-relaxed">
          El modelo actual obliga al comprador a hacer todo el trabajo: buscar, filtrar, comparar, agendar, negociar.
          Los portales son catálogos estáticos. Nadie conecta oferta con demanda de forma inteligente.
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-red-400 mb-6">
              Modelo actual — Portal tradicional
            </h3>
            <div className="space-y-4">
              {[
                "Corredor publica propiedad",
                "Portal la muestra en un listado",
                "Comprador busca con filtros genéricos",
                "Compara manualmente, uno a uno",
                "Agenda visitas sin contexto",
                "Decide sin datos reales",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-50 text-red-400 text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-zinc-600">{step}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 rounded-xl bg-red-50 border border-red-100">
              <p className="text-sm text-red-600">
                El comprador hace el 100% del trabajo. La plataforma no aprende nada.
                Zero inteligencia. Zero personalización.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-emerald-500 mb-6">
              Modelo nido. — Matching inteligente
            </h3>
            <div className="space-y-4">
              {[
                "Comprador crea su perfil en 2 minutos",
                "IA aprende qué busca, cómo vive, qué valora",
                "Propiedades compatibles aparecen automáticamente",
                "Cada interacción mejora las recomendaciones",
                "Match bidireccional: comprador - vendedor",
                "Decisión con datos, comparaciones e inteligencia",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-50 text-emerald-500 text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-zinc-600">{step}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
              <p className="text-sm text-emerald-700">
                La plataforma trabaja para ti. Mientras más la usas, mejor te conoce.
                Como Spotify, pero para propiedades.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ──── INSIGHT ──── */}
      <Section dark>
        <div className="text-center max-w-4xl mx-auto">
          <Badge>El insight</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            El centro del producto no es la propiedad.
            <br />
            <span className="text-zinc-500">Son las personas.</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Los portales muestran propiedades y esperan que alguien haga clic.
            Nido entiende quién eres, cómo vives y qué necesitas.
            Luego conecta oferta con demanda, como Uber conecta conductores con pasajeros.
          </p>
        </div>
      </Section>

      {/* ──── SOLUCION ──── */}
      <Section id="solucion">
        <Badge>La solución</Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl">
          Un sistema inteligente que conecta oferta y demanda.
        </h2>
        <p className="text-lg text-zinc-500 max-w-2xl mb-16 leading-relaxed">
          Nido combina lo mejor de las plataformas que han transformado otras industrias,
          aplicado al mercado inmobiliario chileno.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            icon="&#x1F3E0;"
            title="Experiencia Airbnb"
            description="Cada propiedad se presenta como una historia, no como una ficha técnica. Fotografía inmersiva, narrativa del barrio, emocionalidad."
          />
          <Card
            icon="&#x1F504;"
            title="Matching Uber"
            description="La plataforma conecta comprador y vendedor. No espera. Matchea en tiempo real según compatibilidad, precio y timing."
          />
          <Card
            icon="&#x1F3B5;"
            title="Recomendaciones Spotify"
            description="Cada interacción entrena un modelo. Cuanto más usas Nido, mejor te conoce. Descubres propiedades que no sabías que querías."
          />
          <Card
            icon="&#x1F4CA;"
            title="Inteligencia Zillow"
            description="Estimaciones de valor por IA, historial de precios, comparables automáticos, tendencias de barrio, índices de mercado."
          />
        </div>
      </Section>

      {/* ──── PRODUCTO — ONBOARDING ──── */}
      <Section id="producto" dark>
        <Badge>El producto</Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 max-w-3xl">
          Primero te conocemos.
          <br />
          <span className="text-zinc-500">Después te mostramos.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 rounded-3xl bg-zinc-900 border border-zinc-800 p-10">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-6">
              Onboarding inteligente — 2 minutos
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { q: "Presupuesto", a: "8.000 — 15.000 UF" },
                { q: "Barrios favoritos", a: "San Damián, Lo Curro" },
                { q: "Tipo", a: "Casa" },
                { q: "Dormitorios", a: "4+" },
                { q: "Hijos", a: "2 en edad escolar" },
                { q: "Home office", a: "Sí, necesito escritorio" },
                { q: "Mascotas", a: "2 perros grandes" },
                { q: "Estacionamientos", a: "Mínimo 2" },
                { q: "Jardín", a: "Indispensable" },
                { q: "Tiempo al trabajo", a: "Max 30 min" },
                { q: "Colegios cerca", a: "Muy importante" },
                { q: "Lo más importante", a: "Tranquilidad y verde" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-zinc-800/50 border border-zinc-700/50 p-4">
                  <div className="text-xs text-zinc-500 mb-1">{item.q}</div>
                  <div className="text-sm font-medium text-white">{item.a}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-6">
                La IA construye tu perfil
              </h3>
              <div className="space-y-4">
                <div className="rounded-xl bg-zinc-800/50 p-4 border-l-2 border-emerald-400">
                  <p className="text-sm text-zinc-300">
                    &ldquo;Buscas una casa familiar con jardín en barrios tranquilos del sector oriente.
                    Priorizas colegios y áreas verdes sobre conectividad.&rdquo;
                  </p>
                </div>
                <div className="rounded-xl bg-zinc-800/50 p-4 border-l-2 border-emerald-400">
                  <p className="text-sm text-zinc-300">
                    &ldquo;Tu rango de precio permite acceder al 73% de las propiedades en San Damián
                    y al 45% en Lo Curro.&rdquo;
                  </p>
                </div>
                <div className="rounded-xl bg-zinc-800/50 p-4 border-l-2 border-emerald-400">
                  <p className="text-sm text-zinc-300">
                    &ldquo;Hay 12 propiedades activas que tienen alta compatibilidad contigo.&rdquo;
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <div className="flex-1 text-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-3">
                <div className="text-2xl font-bold text-emerald-400">94%</div>
                <div className="text-xs text-zinc-500">Perfil completo</div>
              </div>
              <div className="flex-1 text-center rounded-xl bg-zinc-800 border border-zinc-700 p-3">
                <div className="text-2xl font-bold text-white">12</div>
                <div className="text-xs text-zinc-500">Matches</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ──── HOME PERSONALIZADA ──── */}
      <Section>
        <Badge>Home personalizada</Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl">
          Sin buscador.
          <br />
          Como Netflix, pero para propiedades.
        </h2>
        <p className="text-lg text-zinc-500 max-w-2xl mb-16 leading-relaxed">
          No hay filtros infinitos. No hay listas interminables. La IA selecciona y ordena todo por ti.
        </p>

        <div className="space-y-6">
          {[
            {
              label: "Alta compatibilidad contigo",
              tag: "IA",
              items: [
                { name: "Casa en San Damián", price: "12.400 UF", match: "96%", sqm: "220 m2", beds: "4", color: "from-zinc-100 to-zinc-200" },
                { name: "Casa en Lo Curro", price: "14.800 UF", match: "93%", sqm: "280 m2", beds: "5", color: "from-stone-100 to-stone-200" },
                { name: "Casa en El Arrayán", price: "11.200 UF", match: "91%", sqm: "200 m2", beds: "4", color: "from-neutral-100 to-neutral-200" },
              ],
            },
            {
              label: "Bajaron de precio esta semana",
              tag: "Oportunidad",
              items: [
                { name: "Depto en El Golf", price: "8.900 UF", match: "87%", sqm: "120 m2", beds: "3", color: "from-zinc-100 to-zinc-50" },
                { name: "Casa en Estoril", price: "16.100 UF", match: "84%", sqm: "310 m2", beds: "5", color: "from-stone-50 to-stone-100" },
                { name: "Casa en La Dehesa", price: "19.500 UF", match: "79%", sqm: "350 m2", beds: "6", color: "from-neutral-50 to-neutral-100" },
              ],
            },
          ].map((row, ri) => (
            <div key={ri}>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-lg font-semibold">{row.label}</h3>
                <span className="text-xs font-medium bg-zinc-100 text-zinc-500 rounded-full px-3 py-1">
                  {row.tag}
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {row.items.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-zinc-100 overflow-hidden hover:shadow-xl hover:scale-[1.01] transition-all duration-300 cursor-pointer group"
                  >
                    <div className={`h-48 bg-gradient-to-br ${item.color} relative`}>
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-emerald-600">
                        {item.match} match
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-semibold mb-1 group-hover:text-zinc-600 transition-colors">{item.name}</h4>
                      <div className="text-xl font-bold mb-3">{item.price}</div>
                      <div className="flex gap-4 text-sm text-zinc-400">
                        <span>{item.sqm}</span>
                        <span>{item.beds} dorm</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ──── DESCUBRIMIENTO ──── */}
      <Section dark>
        <Badge>Descubrimiento</Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl">
          Swipe para descubrir.
          <br />
          <span className="text-zinc-500">Cada acción entrena la IA.</span>
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mb-16 leading-relaxed">
          Inspirado en Tinder. Cada tarjeta es una propiedad. Cada interacción alimenta el algoritmo.
          Mientras más usas Nido, mejores recomendaciones recibes.
        </p>

        <div className="flex justify-center mb-12">
          <div className="w-full max-w-sm rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden">
            <div className="h-72 bg-gradient-to-br from-zinc-800 to-zinc-700 relative">
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white">Casa en San Damián</h3>
                <p className="text-sm text-zinc-400 mt-1">12.400 UF · 220 m2 · 4 dorm · Jardín</p>
                <div className="mt-2 flex gap-2">
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 rounded-full px-2.5 py-0.5">96% compatible</span>
                  <span className="text-xs bg-amber-500/20 text-amber-400 rounded-full px-2.5 py-0.5">8% bajo mercado</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-5 gap-3 text-center">
                {[
                  { icon: "\uD83D\uDC4E", label: "No", color: "text-red-400" },
                  { icon: "\uD83E\uDD14", label: "Después", color: "text-zinc-400" },
                  { icon: "\uD83D\uDCBE", label: "Guardar", color: "text-blue-400" },
                  { icon: "\u2B50", label: "Favorito", color: "text-amber-400" },
                  { icon: "\u2764\uFE0F", label: "Interesa", color: "text-emerald-400" },
                ].map((btn, i) => (
                  <button
                    key={i}
                    className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-zinc-800 transition-colors"
                  >
                    <span className="text-2xl">{btn.icon}</span>
                    <span className={`text-[10px] font-medium ${btn.color}`}>{btn.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
            <div className="text-sm text-zinc-500 mb-2">Después de 30 interacciones, la IA dice:</div>
            <p className="text-sm text-zinc-300 italic">
              &ldquo;Detectamos que prefieres casas mediterráneas con jardín.
              Priorizas colegios sobre conectividad.
              Te gustan barrios tranquilos con áreas verdes.&rdquo;
            </p>
          </div>
          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
            <div className="text-sm text-zinc-500 mb-2">La IA también sugiere:</div>
            <p className="text-sm text-zinc-300 italic">
              &ldquo;Hay 3 propiedades en Lo Curro que no has visto y tienen 90%+
              de compatibilidad. Dos bajaron de precio esta semana.&rdquo;
            </p>
          </div>
        </div>
      </Section>

      {/* ──── MATCH / PREOFERTAS ──── */}
      <Section>
        <Badge>Match inmobiliario</Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl">
          El corazón del producto.
          <br />
          Preofertas + Match bidireccional.
        </h2>
        <p className="text-lg text-zinc-500 max-w-2xl mb-16 leading-relaxed">
          El comprador dice hasta cuánto pagaría. El vendedor define su rango aceptable.
          Cuando se cruzan: Match. Ambos son notificados. Sin intermediarios innecesarios.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="rounded-2xl border border-zinc-100 p-8 text-center">
            <div className="text-4xl mb-4">&#x1F3E0;</div>
            <div className="text-sm text-zinc-400 mb-1">Propiedad publicada</div>
            <div className="text-2xl font-bold">20.000 UF</div>
            <div className="text-xs text-zinc-400 mt-1">Rango vendedor: 18.500 — 20.000</div>
          </div>
          <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-8 text-center flex flex-col items-center justify-center">
            <div className="text-4xl mb-4">&#x2728;</div>
            <div className="text-lg font-bold text-emerald-700">MATCH</div>
            <div className="text-sm text-emerald-600 mt-2">Los rangos se cruzan en 18.500 UF</div>
          </div>
          <div className="rounded-2xl border border-zinc-100 p-8 text-center">
            <div className="text-4xl mb-4">&#x1F464;</div>
            <div className="text-sm text-zinc-400 mb-1">Preoferta del comprador</div>
            <div className="text-2xl font-bold">18.500 UF</div>
            <div className="text-xs text-zinc-400 mt-1">Presupuesto max: 19.000 UF</div>
          </div>
        </div>

        <div className="rounded-3xl bg-zinc-950 text-white p-10 md:p-12">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-6">
            Demand Intelligence — exclusivo para corredores
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "43", label: "familias buscan en San Damián", sub: "15.000 — 18.000 UF" },
              { n: "12", label: "propiedades activas", sub: "Baja oferta" },
              { n: "89%", label: "probabilidad de venta", sub: "en menos de 45 días" },
              { n: "3.2x", label: "demanda vs oferta", sub: "Mercado de vendedores" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-400">{stat.n}</div>
                <div className="text-sm text-zinc-300 mt-2">{stat.label}</div>
                <div className="text-xs text-zinc-500 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ──── INTELIGENCIA DE VALOR ──── */}
      <Section dark>
        <Badge>Inteligencia de valor</Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl">
          Estimación de valor con IA.
          <br />
          <span className="text-zinc-500">Lo mejor de Zillow, adaptado a Chile.</span>
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mb-16 leading-relaxed">
          Cada propiedad tiene una estimación inteligente basada en comparables, historial y tendencias del barrio.
          No es un número mágico: la IA explica por qué.
        </p>

        <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-semibold text-white mb-6">Casa en San Damián — 220 m2</h3>
              <div className="space-y-4">
                {[
                  { label: "Valor publicado", value: "12.400 UF", color: "text-white" },
                  { label: "Estimación IA", value: "13.100 UF", color: "text-emerald-400" },
                  { label: "Rango de confianza", value: "12.400 — 13.800 UF", color: "text-zinc-300" },
                  { label: "UF/m2 barrio", value: "58.2 UF/m2", color: "text-zinc-300" },
                  { label: "UF/m2 propiedad", value: "56.4 UF/m2", color: "text-zinc-300" },
                  { label: "Plusvalía 12 meses", value: "+6.8%", color: "text-emerald-400" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-zinc-800">
                    <span className={i === 1 ? "text-emerald-400" : "text-zinc-400"}>{row.label}</span>
                    <span className={`font-bold ${row.color} ${i < 2 ? "text-lg" : ""}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-6">La IA explica</h3>
              <div className="space-y-3">
                {[
                  { icon: "&#x1F4C9;", text: "Publicada 8% bajo el valor estimado. Oportunidad." },
                  { icon: "&#x1F4CA;", text: "25 m2 más grande que el promedio del barrio." },
                  { icon: "&#x1F3EB;", text: "3 colegios privados en radio de 1 km." },
                  { icon: "&#x1F333;", text: "Índice de áreas verdes superior al promedio." },
                  { icon: "&#x1F4C8;", text: "El barrio ha subido 6.8% en 12 meses." },
                  { icon: "&#x23F1;", text: "Tiempo estimado de venta: 32 días." },
                  { icon: "&#x1F525;", text: "Nivel de oportunidad: Alto." },
                ].map((insight, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-zinc-800/50">
                    <span className="text-lg flex-shrink-0" dangerouslySetInnerHTML={{ __html: insight.icon }} />
                    <span className="text-sm text-zinc-300">{insight.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ──── BARRIOS ──── */}
      <Section>
        <Badge>Inteligencia de barrio</Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl">
          Cada barrio tiene su propia ficha.
          <br />
          Compara barrios, no solo propiedades.
        </h2>
        <p className="text-lg text-zinc-500 max-w-2xl mb-16 leading-relaxed">
          Datos reales, actualizados, visuales. Plusvalía, seguridad, colegios, conectividad, perfil de residentes.
        </p>

        <div className="rounded-3xl border border-zinc-200 overflow-hidden">
          <div className="bg-zinc-50 px-8 py-4 border-b border-zinc-200 flex items-center justify-between">
            <h3 className="font-semibold">Comparador de barrios</h3>
          </div>
          <div className="grid grid-cols-3 divide-x divide-zinc-100 border-b border-zinc-100">
            <div className="p-4 text-center bg-zinc-50">
              <div className="font-semibold text-sm text-zinc-400">Indicador</div>
            </div>
            <div className="p-4 text-center">
              <div className="font-bold">San Damián</div>
            </div>
            <div className="p-4 text-center">
              <div className="font-bold">La Dehesa</div>
            </div>
          </div>
          {[
            { label: "Precio promedio", v1: "13.500 UF", v2: "22.000 UF" },
            { label: "UF/m2", v1: "58 UF", v2: "52 UF" },
            { label: "Plusvalía 12m", v1: "+6.8%", v2: "+4.2%" },
            { label: "Tiempo de venta", v1: "38 días", v2: "62 días" },
            { label: "Colegios (1 km)", v1: "5", v2: "3" },
            { label: "Áreas verdes", v1: "Alto", v2: "Muy alto" },
            { label: "Conectividad", v1: "Excelente", v2: "Media" },
            { label: "Seguridad", v1: "Alta", v2: "Alta" },
            { label: "Walkability", v1: "8.2 / 10", v2: "5.6 / 10" },
            { label: "Perfil principal", v1: "Familias jóvenes", v2: "Familias consolidadas" },
            { label: "Demanda activa", v1: "43 compradores", v2: "28 compradores" },
            { label: "Rentabilidad arriendo", v1: "4.8%", v2: "3.9%" },
          ].map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 divide-x divide-zinc-100 ${
                i % 2 === 0 ? "bg-white" : "bg-zinc-50/50"
              }`}
            >
              <div className="px-6 py-3 text-sm text-zinc-500">{row.label}</div>
              <div className="px-6 py-3 text-sm text-center font-medium">{row.v1}</div>
              <div className="px-6 py-3 text-sm text-center font-medium">{row.v2}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ──── DASHBOARDS ──── */}
      <Section dark>
        <Badge>Dashboards</Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl">
          Tres experiencias.
          <br />
          <span className="text-zinc-500">Tres tipos de usuario.</span>
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mb-16 leading-relaxed">
          Cada usuario ve lo que necesita. Datos relevantes, métricas accionables, recomendaciones de IA.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "&#x1F464;",
              title: "Dashboard Comprador",
              color: "bg-emerald-400",
              items: [
                "Recomendaciones IA personalizadas",
                "Favoritos y comparaciones",
                "Preofertas activas",
                "Alertas de precio y mercado",
                "Simulación hipotecaria",
                "Historial de propiedades vistas",
                "Evolución del mercado",
              ],
            },
            {
              icon: "&#x1F3E0;",
              title: "Dashboard Vendedor",
              color: "bg-blue-400",
              items: [
                "Visitas y favoritos en tiempo real",
                "Compradores compatibles activos",
                "Preofertas recibidas",
                "Precio recomendado por IA",
                "Probabilidad de venta",
                "Mapa de demanda del barrio",
                "Comparables automáticos",
              ],
            },
            {
              icon: "&#x1F4CA;",
              title: "Dashboard Corredor",
              color: "bg-amber-400",
              items: [
                "Analytics premium y embudo",
                "Demanda insatisfecha por barrio",
                "Ranking vs otros corredores",
                "IA recomienda ajustes de precio",
                "IA sugiere barrios para captar",
                "Leads y conversión",
                "Captaciones sugeridas por IA",
              ],
            },
          ].map((dash, di) => (
            <div key={di} className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8">
              <div className="text-3xl mb-4" dangerouslySetInnerHTML={{ __html: dash.icon }} />
              <h3 className="text-lg font-semibold text-white mb-4">{dash.title}</h3>
              <ul className="space-y-2">
                {dash.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-zinc-400">
                    <span className={`w-1.5 h-1.5 rounded-full ${dash.color} flex-shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ──── INNOVACION ──── */}
      <Section>
        <Badge>Funcionalidades únicas</Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl">
          Lo que no existe en ningún portal hoy.
        </h2>
        <p className="text-lg text-zinc-500 max-w-2xl mb-16 leading-relaxed">
          Ventajas competitivas difíciles de copiar. Cada una genera efecto de red y data propietaria.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card icon="&#x1F5FA;" title="Demand Intelligence" description="Mapas de calor de demanda en tiempo real por barrio. Los corredores ven exactamente dónde hay compradores y qué buscan." />
          <Card icon="&#x1F3AF;" title="Score de Compatibilidad" description="Puntaje 0-100 entre comprador y propiedad. Basado en perfil, historial e interacciones. Mejora con el uso." />
          <Card icon="&#x1F4C9;" title="Índice de Negociabilidad" description="Probabilidad de que el vendedor acepte una oferta bajo el precio publicado. Calculado con data histórica." />
          <Card icon="&#x23F1;" title="Tiempo Estimado de Venta" description="Predicción basada en precio, barrio, tipo de propiedad y condiciones de mercado. Actualizado diariamente." />
          <Card icon="&#x1F3D7;" title="ROI de Remodelación" description="Sugerencias de mejoras con retorno estimado. Remodelar la cocina agregaría ~800 UF al valor." />
          <Card icon="&#x1F4C8;" title="Simulación de Valorización" description="Proyección a 1, 3 y 5 años basada en tendencias del barrio, plusvalia histórica y factores macroeconómicos." />
          <Card icon="&#x1F514;" title="Alertas Predictivas" description="Notificación antes de que una propiedad salga al mercado, basada en patrones históricos de venta en el barrio." />
          <Card icon="&#x1F3C6;" title="Ranking de Corredores" description="Score por barrio basado en ventas, tiempo de respuesta, reseñas y conversión. Transparencia total." />
          <Card icon="&#x1F4B0;" title="Costo de Vida por Barrio" description="Comparación automática de gastos comunes, contribuciones, servicios, supermercados y transporte." />
        </div>
      </Section>

      {/* ──── MERCADO ──── */}
      <Section id="mercado" dark>
        <Badge>Mercado</Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 max-w-3xl">
          Sector oriente de Santiago.
          <br />
          <span className="text-zinc-500">El mercado más grande de Chile.</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { n: "USD 45B+", label: "Valor estimado del stock inmobiliario sector oriente" },
            { n: "12", label: "Barrios premium en el foco inicial del MVP" },
            { n: "18.000+", label: "Propiedades activas en sector oriente hoy" },
            { n: "0", label: "Plataformas con matching inteligente en Chile" },
          ].map((stat, i) => (
            <div key={i} className="text-center rounded-2xl bg-zinc-900 border border-zinc-800 p-8">
              <div className="text-3xl font-bold text-white mb-2">{stat.n}</div>
              <div className="text-sm text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {[
            "El Golf", "San Damián", "Sta María de Manquehue", "La Dehesa",
            "Los Dominicos", "Estoril", "San Carlos de Apoquindo", "El Arrayán",
            "Lo Curro", "Jardín del Este", "Ciudad del Niño", "Las Brisas de Chicureo",
          ].map((barrio, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full border border-zinc-800 text-sm text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors cursor-default"
            >
              {barrio}
            </span>
          ))}
        </div>
      </Section>

      {/* ──── MODELO DE NEGOCIO ──── */}
      <Section id="modelo">
        <Badge>Modelo de negocio</Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 max-w-3xl">
          Tres fuentes de ingreso.
          <br />
          Margen alto desde día uno.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border-2 border-zinc-200 p-8">
            <div className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-4">Revenue 1</div>
            <h3 className="text-xl font-bold mb-2">Suscripción Corredor</h3>
            <div className="text-3xl font-bold mb-4">3 — 8 UF<span className="text-base font-normal text-zinc-400">/mes</span></div>
            <p className="text-sm text-zinc-500">
              Acceso a Demand Intelligence, analytics premium, captaciones sugeridas, leads calificados y dashboard avanzado.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-zinc-900 bg-zinc-950 text-white p-8">
            <div className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-4">Revenue 2</div>
            <h3 className="text-xl font-bold mb-2">Comisión por Match</h3>
            <div className="text-3xl font-bold mb-4">0.5%<span className="text-base font-normal text-zinc-400"> del cierre</span></div>
            <p className="text-sm text-zinc-400">
              Fee de éxito cuando una operación se cierra a través de la plataforma.
              Solo cobra cuando genera valor.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-zinc-200 p-8">
            <div className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-4">Revenue 3</div>
            <h3 className="text-xl font-bold mb-2">Data y Analytics</h3>
            <div className="text-3xl font-bold mb-4">API<span className="text-base font-normal text-zinc-400"> + reportes</span></div>
            <p className="text-sm text-zinc-500">
              Venta de data anonimizada de demanda y tendencias a inmobiliarias, bancos, tasadores y fondos de inversión.
            </p>
          </div>
        </div>
      </Section>

      {/* ──── DESAFIOS ──── */}
      <Section dark>
        <Badge>Desafios y soluciónes</Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 max-w-3xl">
          Sabemos dónde están los riesgos.
          <br />
          <span className="text-zinc-500">Y cómo resolverlos.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              challenge: "Chicken-and-egg: sin propiedades no hay compradores",
              solution: "Empezar con scraping de portales existentes (data pública). Los compradores llegan por la experiencia, los corredores por la demanda visible.",
            },
            {
              challenge: "Estimación de valor sin datos de cierre",
              solution: "Usar precios de publicación + historial + comparables + data de tasaciones bancarias. Transparentar el rango de confianza.",
            },
            {
              challenge: "Adopción de corredores tradicionales",
              solution: "Demand Intelligence es el gancho. Mostrarles compradores activos en sus barrios. Gratis al inicio, monetizar después.",
            },
            {
              challenge: "Efecto de red: lleva tiempo construir",
              solution: "Foco en 12 barrios. Densidad antes que cobertura. Mejor ser imprescindible en San Damián que mediocre en todo Santiago.",
            },
            {
              challenge: "Confianza del comprador en preofertas",
              solution: "Las preofertas son privadas y no vinculantes. El sistema solo notifica cuando hay match. Zero riesgo para el comprador.",
            },
            {
              challenge: "Competencia de portales establecidos",
              solution: "Los portales son catálogos. Nido es inteligencia. Diferente categoría. No competimos por listings, competimos por experiencia.",
            },
            {
              challenge: "Regulación y privacidad de datos",
              solution: "Toda la data de demanda es agregada y anonimizada. Cumplimiento total con normativa chilena de protección de datos.",
            },
            {
              challenge: "Monetización temprana vs crecimiento",
              solution: "Compradores: siempre gratis. Corredores: freemium con upgrade a premium. La data es el moat, no el paywall.",
            },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8">
              <div className="flex items-start gap-3 mb-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 text-red-400 text-xs font-bold flex items-center justify-center mt-0.5">!</span>
                <h3 className="font-semibold text-white text-sm">{item.challenge}</h3>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center mt-0.5">&#x2713;</span>
                <p className="text-sm text-zinc-400">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ──── ROADMAP ──── */}
      <Section id="roadmap">
        <Badge>Roadmap</Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 max-w-3xl">
          De MVP a líder del mercado.
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              phase: "Fase 0",
              time: "Mes 1 — 2",
              title: "MVP — Radar",
              items: [
                "Onboarding inteligente",
                "Feed personalizado",
                "Scraping de propiedades",
                "Fichas de barrio",
                "12 barrios sector oriente",
              ],
              active: true,
            },
            {
              phase: "Fase 1",
              time: "Mes 3 — 4",
              title: "Match",
              items: [
                "Sistema de preofertas",
                "Match bidireccional",
                "Dashboard corredor",
                "Demand Intelligence",
                "Alertas inteligentes",
              ],
              active: false,
            },
            {
              phase: "Fase 2",
              time: "Mes 5 — 8",
              title: "Red",
              items: [
                "Corredores publican directo",
                "Analytics premium",
                "Comparador de barrios",
                "IA de descubrimiento",
                "Estimación de valor v2",
              ],
              active: false,
            },
            {
              phase: "Fase 3",
              time: "Mes 9 — 12",
              title: "Escala",
              items: [
                "Toda la RM",
                "API de data",
                "App mobile",
                "Monetización corredores",
                "Preparar expansión LATAM",
              ],
              active: false,
            },
          ].map((phase, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 ${
                phase.active
                  ? "bg-zinc-950 text-white border-2 border-zinc-800"
                  : "bg-zinc-50 border border-zinc-100"
              }`}
            >
              <div className={`text-xs font-semibold tracking-widest uppercase mb-1 ${phase.active ? "text-emerald-400" : "text-zinc-400"}`}>
                {phase.phase}
              </div>
              <div className={`text-xs mb-4 ${phase.active ? "text-zinc-500" : "text-zinc-400"}`}>{phase.time}</div>
              <h3 className={`text-lg font-bold mb-4 ${phase.active ? "text-white" : "text-zinc-900"}`}>{phase.title}</h3>
              <ul className="space-y-2">
                {phase.items.map((item, j) => (
                  <li key={j} className={`flex items-center gap-2 text-sm ${phase.active ? "text-zinc-400" : "text-zinc-500"}`}>
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${phase.active ? "bg-emerald-400" : "bg-zinc-300"}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ──── CTA FINAL ──── */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-zinc-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(63,63,70,0.3),transparent_70%)]" />
        <div className="relative text-center max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            El mercado inmobiliario
            <br />
            necesita un nuevo estándar.
          </h2>
          <p className="text-lg text-zinc-400 mb-4 leading-relaxed">
            nido. no es otro portal.
            <br />
            Es la plataforma que el mercado chileno debería haber tenido hace años.
          </p>
          <div className="text-sm text-zinc-600 mt-12">
            Muller y Pérez · 2026
          </div>
        </div>
      </section>

      <footer className="bg-zinc-950 border-t border-zinc-900 py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-xs text-zinc-600">
          <span>nido. — Documento confidencial</span>
          <span>Santiago, Chile · Junio 2026</span>
        </div>
      </footer>
    </>
  );
}
