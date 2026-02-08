import { motion } from "framer-motion";
import { Camera, Heart, Users, Package, Sparkles, Video } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description:
      "Capture every magical moment of your special day with our expert wedding photography services.",
  },
  {
    icon: Camera,
    title: "Portrait Sessions",
    description:
      "Professional portraits that capture your unique personality and style in stunning detail.",
  },
  {
    icon: Users,
    title: "Family Portraits",
    description:
      "Beautiful family photographs that preserve precious memories for generations to come.",
  },
  {
    icon: Package,
    title: "Product Photography",
    description:
      "High-quality product images that showcase your products in the best possible light.",
  },
  {
    icon: Sparkles,
    title: "Event Coverage",
    description:
      "Complete photography coverage for corporate events, parties, and celebrations.",
  },
  {
    icon: Video,
    title: "Photo & Video",
    description:
      "Combined photo and video packages for comprehensive event documentation.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From intimate portraits to grand celebrations, we provide comprehensive
            photography services tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
