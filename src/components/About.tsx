import { motion } from "framer-motion";
import { Award, Clock, Users, Camera } from "lucide-react";

const stats = [
  { icon: Camera, value: "10+", label: "Years Experience" },
  { icon: Users, value: "5000+", label: "Happy Clients" },
  { icon: Award, value: "50+", label: "Awards Won" },
  { icon: Clock, value: "24/7", label: "Support" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Crafting Visual Stories Since 2014
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At IKON Image Studio, we believe every moment tells a story worth 
              preserving. Located in the heart of Hyderabad, our studio combines 
              artistic vision with technical excellence to create photographs that 
              transcend time.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our team of passionate photographers specializes in capturing the 
              essence of your most treasured moments—from intimate portraits to 
              grand celebrations. We bring creativity, professionalism, and a 
              personal touch to every shoot.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-display text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-card rounded-lg border border-border flex items-center justify-center">
                  <Camera className="h-16 w-16 text-primary/30" />
                </div>
                <div className="h-64 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-primary">IKON</span>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 bg-card rounded-lg border border-border flex items-center justify-center">
                  <Award className="h-16 w-16 text-primary/30" />
                </div>
                <div className="h-48 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-center px-4">
                    Professional Excellence
                  </span>
                </div>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -inset-4 border-2 border-primary/20 rounded-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
