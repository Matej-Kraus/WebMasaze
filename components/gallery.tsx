import Image from "next/image";
import { SectionReveal } from "@/components/section-reveal";

const galleryImages = [
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
];

export function Gallery() {
  return (
    <section id="galerie" className="section-container">
      <SectionReveal>
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[var(--primary)]">Galerie</p>
          <h2 className="text-3xl md:text-4xl">Atmosféra, kde se dobře dýchá</h2>
        </div>
      </SectionReveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((src, index) => (
          <SectionReveal key={src}>
            <div className="group relative h-64 overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={`Masáže Poniklá - galerie ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
