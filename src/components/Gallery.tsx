import { motion } from "framer-motion";
import galleryWedding from "@/assets/gallery-wedding.jpg";
import galleryPortrait from "@/assets/gallery-portrait.jpg";
import galleryFamily from "@/assets/gallery-family.jpg";
import galleryProduct from "@/assets/gallery-product.jpg";
import galleryEvent from "@/assets/gallery-event.jpg";

const galleryImages = [
  {
    src: galleryWedding,
    alt: "Wedding photography",
    category: "Wedding",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: galleryPortrait,
    alt: "Portrait photography",
    category: "Portrait",
    span: "",
  },
  {
    src: galleryFamily,
    alt: "Family photography",
    category: "Family",
    span: "",
  },
  {
    src: galleryProduct,
    alt: "Product photography",
    category: "Product",
    span: "",
  },
  {
    src: galleryEvent,
    alt: "Event photography",
    category: "Event",
    span: "",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Our Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Featured Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A glimpse into our portfolio showcasing the diverse range of photography
            we specialize in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-lg ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
