import Layout from "@/components/Layout";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Avi Sawhney",
      role: "Co-Founder",
      bio: "Passionate about improving neonatal care through innovative technology solutions.",
      image: "AS",
    },
    {
      name: "Ryan Chan",
      role: "Co-Founder",
      bio: "Engineering lead focused on building reliable and safe medical devices.",
      image: "RC",
    },
    {
      name: "Yifan Gao",
      role: "Co-Founder",
      bio: "Product specialist dedicated to creating intuitive healthcare solutions.",
      image: "YG",
    },
    {
      name: "Anthony Yurnets",
      role: "Co-Founder",
      bio: "Operations expert ensuring seamless delivery of life-saving technology.",
      image: "AY",
    },
  ];

  const values = [
    {
      title: "Safety First",
      description: "Every decision we make prioritizes the wellbeing of the infants in our care.",
    },
    {
      title: "Continuous Innovation",
      description: "We never stop improving, driven by feedback from healthcare professionals worldwide.",
    },
    {
      title: "Accessible Care",
      description: "We believe every newborn deserves access to the best neonatal care technology.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-hero-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              The Minds Behind{" "}
              <span className="text-gradient">NeoNatal</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              A passionate team of doctors, engineers, and innovators united by a 
              single mission: giving every newborn the warmth they deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-soft hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-glow">
                    {member.image}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-primary font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex items-center gap-3">
                  <a 
                    href="#" 
                    className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at NeoNatal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold shadow-glow">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Join Our Mission
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                We're always looking for passionate individuals who want to make a 
                difference in neonatal care. Check out our open positions.
              </p>
              <button className="bg-primary-foreground text-primary font-semibold px-8 py-3 rounded-xl hover:bg-primary-foreground/90 transition-colors">
                View Careers
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
