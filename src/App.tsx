/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Shield, 
  Cloud, 
  Cpu, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Globe, 
  Lock, 
  Layers,
  Menu,
  X,
  Loader2
} from "lucide-react";
import { useState, useEffect } from "react";
const logo = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDE2MCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTMwIDUwQzMwIDM1IDQ1IDI1IDYwIDM1TDEwMCA2NUMxMTUgNzUgMTMwIDY1IDEzMCA1MEMxMzAgMzUgMTE1IDI1IDEwMCAzNUw2MCA2NUM0NSA3NSAzMCA2NSAzMCA1MFoiIHN0cm9rZT0idXJsKCNncmFkKSIgc3Ryb2tlLXdpZHRoPSIxMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjUwJSIgeDI9IjEwMCUiIHkyPSI1MCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMDZiNmQ0Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjZmFjYzE1Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2Q5NDZlZiIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+Cjwvc3ZnPg==`;

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<"landing" | "details" | "portal">("landing");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const details = [
    {
      title: "Enterprise Software Architecture Consulting",
      content: "We specialize in designing and consulting on large-scale, enterprise-grade software systems across industries such as FinTech, Healthcare, and eCommerce. Our team brings deep expertise in building highly scalable, secure, and performance-optimized architectures tailored to complex business needs. From microservices to event-driven systems, we help organizations modernize legacy platforms and adopt cloud-native designs. We focus on aligning technology strategies with business goals to ensure long-term sustainability and growth. Our solutions emphasize reliability, compliance, and seamless integration across diverse ecosystems. Whether you're building from scratch or transforming existing systems, we guide you at every architectural decision point."
    },
    {
      title: "Cloud & DevOps Solutions for Business Continuity",
      content: "We provide robust cloud technology solutions designed to ensure Business Continuity Planning (BCP) and operational resilience. Our cloud strategies leverage platforms like AWS, Azure, and Google Cloud to build highly available and fault-tolerant systems. We implement automated DevOps pipelines that accelerate deployment cycles while maintaining stability and quality. From infrastructure as code (IaC) to CI/CD automation, we streamline development and operations workflows. Our solutions include disaster recovery planning, backup strategies, and real-time monitoring to minimize downtime. By integrating DevOps best practices, we help businesses achieve faster releases, improved collaboration, and continuous delivery excellence."
    },
    {
      title: "Cybersecurity & Governance Solutions",
      content: "Security is at the core of everything we design and implement. We offer comprehensive cybersecurity solutions, including cloud security, Governance, Risk, and Compliance (GRC), and advanced security engineering services. Our approach ensures that your systems are protected against evolving threats while meeting regulatory standards such as GDPR, HIPAA, and SOC 2. We implement identity and access management (IAM), data encryption, and threat detection mechanisms to safeguard critical assets. Our GRC solutions help establish strong governance frameworks, risk assessments, and audit readiness. With a proactive and layered security strategy, we enable organizations to operate confidently in a secure digital environment."
    }
  ];

  const services = [
    {
      title: "Technology Consulting",
      icon: <Cpu className="w-8 h-8 text-indigo-400 group-hover:text-white" />,
      description: "Strategic roadmaps and digital transformation architectures tailored for enterprise scale and speed.",
      features: ["AI Integration", "Legacy Modernization", "Data Strategy"]
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="w-8 h-8 text-indigo-400 group-hover:text-white" />,
      description: "Next-generation defense systems, zero-trust implementation, and continuous threat intelligence monitoring.",
      features: ["Penetration Testing", "Security Audits", "Incident Response"]
    },
    {
      title: "Cloud Solutions",
      icon: <Cloud className="w-8 h-8 text-indigo-400 group-hover:text-white" />,
      description: "Resilient cloud-native infrastructure design across AWS, Azure, and Google Cloud ecosystems.",
      features: ["Cloud Migration", "Cost Optimization", "K8s Orchestration"]
    }
  ];

  const stats = [
    { label: "Uptime Guaranteed", value: "99.99%" },
    { label: "Security Incidents", value: "0" },
    { label: "Clients Served", value: "12+" },
    { label: "Global Engagements", value: "500+" }
  ];

  if (view === "portal") {
    return (
      <div className="min-h-screen bg-brand-background flex flex-col items-center justify-center p-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass p-12 rounded-[2rem] max-w-lg w-full relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500" />
          <img src={logo} alt="Itagnok Logo" className="h-16 mx-auto mb-8" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">Something Big is Building</h1>
          <p className="text-slate-400 mb-8 font-medium italic">"Great things take time."</p>
          <div className="flex justify-center gap-2 mb-8">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-0"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-200"></div>
          </div>
          <button 
            onClick={() => setView("landing")}
            className="text-slate-500 hover:text-white text-sm font-mono uppercase tracking-widest transition-colors flex items-center gap-2 mx-auto"
          >
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  if (view === "details") {
    return (
      <div className="min-h-screen bg-brand-background py-20 px-6">
        <div className="mesh-glow top-0 left-0 w-full h-full bg-indigo-600/5 blur-[150px]" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <button 
            onClick={() => setView("landing")}
            className="flex items-center gap-2 text-indigo-400 hover:text-white transition-colors mb-12 font-mono text-sm uppercase tracking-widest"
          >
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <button 
              onClick={() => {
                setView("landing");
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mb-8 hover:scale-105 transition-transform"
            >
              <img src={logo} alt="Itagnok Logo" className="h-12" />
            </button>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">What we do?</h1>
            <div className="w-20 h-1 bg-indigo-600 rounded-full" />
          </motion.div>

          <div className="space-y-12">
            {details.map((item, idx) => (
              <motion.section
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="glass p-8 md:p-12 rounded-[2rem] border-white/10 hover:border-indigo-500/30 transition-all"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                  <span className="text-indigo-400 font-mono text-lg">0{idx + 1}</span>
                  {item.title}
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  {item.content}
                </p>
              </motion.section>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button 
              onClick={() => setView("landing")}
              className="px-10 py-5 glass hover:bg-white/5 rounded-xl transition-all font-bold text-white"
            >
              Explore Our Approach
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen selection:bg-brand-indigo/30">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "py-4 glass shadow-2xl" : "py-8 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <button 
            onClick={() => {
              setView("landing");
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            <img src={logo} alt="Itagnok Logo" className="h-8 md:h-10 group-hover:scale-105 transition-transform" />
            <span className="text-lg md:text-xl font-bold tracking-tight text-white uppercase flex flex-col items-start md:flex-row md:items-center md:gap-2 leading-none md:leading-normal">
              Itagnok <span className="text-indigo-400">Technologies</span>
            </span>
          </button>

          <div className="hidden md:flex gap-10 items-center text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-white transition-colors">Consulting</a>
            <a href="#expertise" className="hover:text-white transition-colors">Security</a>
            <button 
              onClick={() => setView("details")}
              className="text-indigo-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              Client Portal <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <button 
            className="md:hidden text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <motion.div 
          initial={false}
          animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
          className="fixed inset-0 bg-brand-background z-40 md:hidden flex flex-col items-center justify-center gap-8 text-2xl font-bold"
        >
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-indigo-400 transition-colors uppercase tracking-widest text-lg">Consulting</a>
          <a href="#expertise" onClick={() => setIsMenuOpen(false)} className="hover:text-indigo-400 transition-colors uppercase tracking-widest text-lg">Security</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-indigo-400 transition-colors uppercase tracking-widest text-lg">Cloud</a>
          <button 
            onClick={() => {
              setIsMenuOpen(false);
              setView("details");
            }}
            className="px-12 py-4 bg-indigo-600 text-white rounded-xl text-lg font-bold"
          >
            Portal Login
          </button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-background">
        {/* Mesh Gradient Background Elements */}
        <div className="mesh-glow top-[-100px] right-[-100px] w-[600px] h-[600px] bg-indigo-600/20 blur-[120px]" />
        <div className="mesh-glow bottom-[-50px] left-[-50px] w-[500px] h-[500px] bg-cyan-500/10 blur-[100px]" />
        <div className="mesh-glow top-[20%] left-[10%] w-[400px] h-[400px] bg-purple-600/10 blur-[80px]" />

        <div className="container mx-auto px-12 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-indigo-300 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                Enterprise Technology Partners
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-[1.05] tracking-tight uppercase">
                Engineered for <span className="text-gradient">Stability.</span><br/>
                Built for Scale.
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-lg leading-relaxed">
                Bespoke software architecture and cybersecurity resilience for the modern enterprise. We bridge the gap between legacy systems and cloud-native futures.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-20">
                <button 
                  onClick={() => {
                    setIsLoading(true);
                    setTimeout(() => {
                      setIsLoading(false);
                      setView("details");
                    }, 1500);
                  }}
                  disabled={isLoading}
                  className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-xl shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      What we do?
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              {/* Tech Stack Bar */}
              <div className="flex flex-wrap items-center gap-x-12 gap-y-6 opacity-40 grayscale hover:grayscale-0 transition-all">
                <span className="text-xs font-mono tracking-widest text-slate-500 w-full mb-2">PROVEN IN:</span>
                {["AWS", "AZURE", "GCP", "KUBERNETES", "TERRAFORM", "CI/CD"].map(stack => (
                  <span key={stack} className="text-lg font-black tracking-tighter">{stack}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-mono font-bold text-indigo-400 mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-mono font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-brand-background relative">
        <div className="container mx-auto px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl mb-6">Expertise Redefined.</h2>
              <p className="text-slate-400 text-lg">
                High-performance technical advisory across critical domains of modern enterprise engineering.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 glass rounded-2xl glass-hover"
              >
                <div className={`w-12 h-12 mb-6 rounded-xl flex items-center justify-center transition-all ${
                  idx === 0 ? "bg-indigo-500/10 text-indigo-400" : 
                  idx === 1 ? "bg-cyan-500/10 text-cyan-400" : 
                  "bg-purple-500/10 text-purple-400"
                } group-hover:bg-indigo-500 group-hover:text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="text-xs text-slate-500 space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx}>• {feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Detail Section */}
      <section id="expertise" className="py-24 bg-brand-background relative">
        <div className="container mx-auto px-12">
          <div className="glass rounded-[2rem] p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-500/5 blur-[100px]" />
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-4xl font-bold mb-6">Strategic Digital Resilience</h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  We don't just secure your data; we architect your future. Our zero-trust protocols ensure your infrastructure becomes a competitive advantage.
                </p>
                <div className="space-y-4">
                  {[
                    "Standardized Security Lifecycle",
                    "Advanced Threat Modeling",
                    "Elastic Cloud Governance"
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://picsum.photos/seed/tech/600/400?grayscale" 
                  alt="Infrastructure"
                  className="rounded-2xl border border-white/10"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-background relative overflow-hidden">
        <div className="mesh-glow bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 blur-[150px]" />
        <div className="container mx-auto px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">Ready to Scale Safely?</h2>
            <button 
              onClick={() => setView("portal")}
              className="px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-2xl shadow-indigo-600/30 transition-all text-lg"
            >
              Client Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/[0.02] border-t border-white/5 py-12">
        <div className="container mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mt-1"></div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold mb-1">Office Address:</span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest leading-relaxed">
                  831 E King Edward Avenue,<br/>
                  Vancouver, BC, V5V 2E5,<br/>
                  Canada
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
               <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold mb-1">Get in Touch:</span>
               <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">info@itagnok.ca</span>
            </div>
          </div>
          <div className="text-[10px] font-mono text-slate-500 text-center md:text-right uppercase tracking-[0.2em]">
            © 2020 ITAGNOK TECHNOLOGIES SYSTEMS
          </div>
        </div>
      </footer>
    </div>
  );
}
