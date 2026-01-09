import Layout from "@/components/Layout";
import { 
  Thermometer, 
  Shield, 
  Bell, 
  Activity, 
  Wifi, 
  Battery, 
  Monitor, 
  Volume2,
  Zap,
  Clock,
  CheckCircle2
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: Thermometer,
      title: "Closed-loop Thermal Control System",
      description: "The main innovation that our blanket provides is an inexpensive closed-loop thermal control system used to provide a temperature range suitable for newborns. Our design philosophy urges each component to be selected to balance accuracy, safety, and cost-efficiency. This is crucial to protect infants of pre-mature birth, especially in low-income settings where proper incubators are not available in hospitals.",
      highlights: ["Inexpensive", "Portable", "Energy Efficient"],
    },
    {
      icon: Shield,
      title: "Mosfet Transistors",
      description: "In our design, the key temperature-sensing component is the Mosfet Transistors. The advantage of Mosfet Transistors is the fact they provide a cheap, accurate, and rapid response at the cost of a smaller functioning temperature range. Mosfet transistors fit perfectly in our design, having the low-latency and accuracy needed for the PID. The constant flow of temperature data allows NeoTherm to react immediately to changes, such as heat loss to the environment or increased infant movement, ensuring stable thermal conditions without intervention.",
      highlights: ["Low-latency", "Accurate", "Adaptable"],
    },
    {
      icon: Activity,
      title: "PID Controller",
      description: "PIDs are a special type of controller. Unlike On/Off controllers that use negative feedback to a desired target which periodically overshoots and undershoots, PIDs allow a constant temperature to be achieved. The proportional aspect of the PID controller increases the temperature by a magnitude of the difference of the current temperature and the desired temperature. Unfortunately, the closer you get to the set point, the less it pushes. At this point, Integral action comes into play. Integral action not only account for the magnitude of error, but also the duration of the error, or how long there has been error. Derivatives also take in the rate of change of error. In short, Derivative action looks into the future and acts accordingly based on the direction the temperature is leaning towards. In total the 3 works together seamlessly allowing pinpoint precision which is crucial for newborns.",
      highlights: ["Negative Feedback", "Low Error Rate", "Accurate"],
    },
    {
      icon: Wifi,
      title: "Silicone Mat-Heaters",
      description: "Now, onto our heating elements, We decided to use 4 silicone mat-heaters to heat our blanket. Silicone mat-heaters provide many advantages compared to their wire-heating counterparts. First, Silicone heaters offer more uniform heating. This means that the heat is spread out throughout the pad, resulting in a safer heating element where it is harder for the infant to be burned. Secondly, silicone is much more flexible, this means that our blanket can remain both flexible and foldable. Finally, silicone heaters are much less of a fire hazard compared to wire-heating. Not only do silicone heaters keep infants warm, they prevent them from feeling too warm.",
      highlights: ["Uniform Heating", "100% Safe", "Flexible and Foldable"],
    },
  ];

  const additionalFeatures = [
    { icon: Zap, title: "Unreplicable", description: "Goldilocks zone for price and quality deters fakes" },
    { icon: Monitor, title: "LCD Smart Monitor", description: "Intuitive monintor displays key metrics" },
    { icon: Bell, title: "Blood Oxygen Sensor,", description: "Shoots out infrared light and detects the amount of red light produced by red blood cells" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-hero-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Advanced Features for{" "}
              <span className="text-gradient">Critical Care</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Every feature is designed with one goal: providing the safest, 
              most nurturing environment for vulnerable newborns.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {mainFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 animate-fade-in`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex-1">
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">{feature.title}</h2>
                  <p className="text-muted-foreground text-lg mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-3 text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="aspect-square max-w-md mx-auto bg-card border border-border rounded-3xl p-8 flex items-center justify-center shadow-soft">
                    <div className="w-32 h-32 rounded-full bg-accent flex items-center justify-center animate-float">
                      <feature.icon className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              More to Love
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every detail matters when caring for newborns. Here's what else makes NeoNatal exceptional.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-background border border-border rounded-xl p-6 hover:shadow-soft hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs CTA */}
    </Layout>
  );
};

export default Features;
