import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, ShoppingBag, Palette, Globe, Mail, Briefcase, CheckCircle, Crown, Sparkles, Camera, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PortfolioWebsite() {
  const projects = [
    {
      title: "CozyNest Shopify Store",
      category: "E-commerce Design",
      description: "A premium home decor Shopify store concept with product pages, homepage sections, branding, and conversion-focused layout.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
      icon: ShoppingBag,
    },
    {
      title: "UaeGrowthPro Content Page",
      category: "Social Media Growth",
      description: "Instagram and Pinterest content ideas, carousel concepts, captions, reels, and growth-focused digital marketing assets.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=900&q=80",
      icon: Star,
    },
    {
      title: "Digital Product Store",
      category: "AI + Canva Templates",
      description: "A digital product brand selling ChatGPT prompts, Canva templates, thumbnails, banners, and social media creatives.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
      icon: Palette,
    },
    {
      title: "Fiverr Gig Designs",
      category: "Freelance Portfolio",
      description: "Professional gig images, thumbnails, service descriptions, and portfolio visuals for beginner-friendly freelancing.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
      icon: Briefcase,
    },
  ];

  const services = [
    "Luxury Shopify store setup and product page design",
    "Instagram carousel, reel, and caption creation",
    "Pinterest pin design and product promotion",
    "Canva template and digital product design",
    "Portfolio website and landing page design",
    "Premium logo, banner, and thumbnail design",
  ];

  const fiverrServices = [
    "Shopify store homepage design",
    "Product listing optimization",
    "Instagram carousel design",
    "Pinterest pin design",
    "Canva digital product templates",
    "Portfolio website design",
  ];

  const shopifyScreenshots = [
    {
      title: "Homepage Design",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Product Page",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Collection Section",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Mobile Store View",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,197,66,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(180,120,20,0.12),transparent_40%)]" />

      <header className="sticky top-0 z-50 border-b border-yellow-500/20 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
          <div className="flex items-center gap-2 text-lg font-bold tracking-tight text-yellow-300 sm:text-xl">
            <Crown className="h-5 w-5" /> Asfand Khan
          </div>
          <nav className="hidden gap-8 text-sm text-zinc-300 md:flex">
            <a href="#work" className="hover:text-yellow-300">Work</a>
            <a href="#shopify" className="hover:text-yellow-300">Shopify</a>
            <a href="#fiverr" className="hover:text-yellow-300">Fiverr</a>
            <a href="#services" className="hover:text-yellow-300">Services</a>
            <a href="#contact" className="hover:text-yellow-300">Contact</a>
          </nav>
          <Button className="rounded-2xl bg-yellow-400 text-black hover:bg-yellow-300">Hire Me</Button>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-200">
                <Sparkles className="h-4 w-4" /> Luxury Portfolio Designer
              </div>

              <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Building premium
                <span className="block text-yellow-300">digital brands</span>
                that feel modern.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-300">
                I design Shopify stores, Fiverr portfolios, Pinterest creatives, Canva templates, and luxury social media branding for modern businesses.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="rounded-2xl bg-yellow-400 px-8 text-black hover:bg-yellow-300">
                  View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button size="lg" variant="outline" className="rounded-2xl border-yellow-400/40 bg-transparent px-8 text-yellow-200 hover:bg-yellow-400 hover:text-black">
                  Contact Me
                </Button>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-yellow-400/20 bg-zinc-950/80 p-5">
                  <p className="text-3xl font-black text-yellow-300">4+</p>
                  <p className="mt-1 text-sm text-zinc-400">Brand Projects</p>
                </div>

                <div className="rounded-3xl border border-yellow-400/20 bg-zinc-950/80 p-5">
                  <p className="text-3xl font-black text-yellow-300">6</p>
                  <p className="mt-1 text-sm text-zinc-400">Creative Services</p>
                </div>

                <div className="rounded-3xl border border-yellow-400/20 bg-zinc-950/80 p-5">
                  <p className="text-3xl font-black text-yellow-300">UAE</p>
                  <p className="mt-1 text-sm text-zinc-400">Based Designer</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-yellow-500/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-yellow-400/20 bg-zinc-950 shadow-2xl shadow-yellow-900/20">
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80"
                  alt="Luxury workspace"
                  className="h-[520px] w-full object-cover opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="rounded-3xl border border-yellow-400/20 bg-black/70 p-6 backdrop-blur-xl">
                    <div className="mb-5 flex items-center gap-4">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-yellow-400 text-black shadow-lg shadow-yellow-500/30">
                        <Crown className="h-7 w-7" />
                      </div>

                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">Creative Studio</p>
                        <h3 className="text-2xl font-bold text-white">Black & Gold Experience</h3>
                      </div>
                    </div>

                    <p className="leading-7 text-zinc-300">
                      A luxury portfolio experience designed to showcase Shopify stores, Fiverr work, social media branding, and premium digital products.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:py-16">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-yellow-300">Selected Work</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Luxury portfolio projects</h2>
            </div>
            <p className="max-w-xl text-zinc-300">Use this section to display your Shopify screenshots, Fiverr gig designs, Instagram work, Pinterest pins, and portfolio designs.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full rounded-3xl border-yellow-400/20 bg-zinc-950/80 transition hover:border-yellow-300/50 hover:bg-zinc-900">
                    <CardContent className="p-6">
                      <div className="mb-5 overflow-hidden rounded-2xl border border-yellow-400/20">
                        <img src={project.image} alt={project.title} className="h-48 w-full object-cover transition duration-500 hover:scale-105" />
                      </div>
                      <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-yellow-400 text-black">
                        <Icon className="h-6 w-6" />
                      </div>
                      <p className="text-sm text-yellow-300">{project.category}</p>
                      <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
                      <p className="mt-3 leading-7 text-zinc-300">{project.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="shopify" className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:py-16">
          <div className="rounded-[2rem] border border-yellow-400/20 bg-zinc-950/80 p-6 sm:p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-300">Shopify Screenshots</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">CozyNest store showcase</h2>
            <p className="mt-4 max-w-2xl text-zinc-300">Replace these boxes with your real Shopify screenshots: homepage, product page, collection section, and mobile view.</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {shopifyScreenshots.map((item) => (
                <div key={item.title} className="group min-h-[260px] rounded-3xl border border-yellow-400/20 bg-black/60 p-4 transition hover:border-yellow-300/70">
                  <div className="overflow-hidden rounded-2xl">
                    <img src={item.image} alt={item.title} className="h-36 w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <h3 className="mt-5 font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">Add screenshot image here and write one short result or feature.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="fiverr" className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-6 overflow-hidden rounded-3xl border border-yellow-400/20">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
                  alt="Fiverr freelance work desk"
                  className="h-64 w-full object-cover"
                />
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-yellow-300">Fiverr Section</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Freelance services I can offer</h2>
              <p className="mt-4 leading-8 text-zinc-300">This section is made for your Fiverr profile. Add your Fiverr gig link, gig images, reviews, and packages here when ready.</p>
              <Button className="mt-7 rounded-2xl bg-yellow-400 text-black hover:bg-yellow-300">
                View Fiverr Gigs <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <Card className="rounded-[2rem] border-yellow-400/20 bg-zinc-950/80">
              <CardContent className="p-6 sm:p-8">
                <div className="grid gap-4">
                  {fiverrServices.map((service) => (
                    <div key={service} className="flex items-start gap-3 rounded-2xl border border-yellow-400/10 bg-black/50 p-4">
                      <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-yellow-300" />
                      <p className="text-zinc-200">{service}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:py-16">
          <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-zinc-950 to-yellow-950/20 p-6 sm:p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-300">Services</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">What I can help with</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {services.map((service) => (
                <div key={service} className="flex items-start gap-3 rounded-2xl bg-black/60 p-4">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-yellow-300" />
                  <p className="text-zinc-200">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-6 md:grid-cols-3 md:py-16">
          <div className="md:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-300">About Me</p>
            <h2 className="mt-3 text-3xl font-bold">My creative direction</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg leading-8 text-zinc-300">
              I am building my skills in Shopify, digital product creation, Pinterest marketing, Instagram content, Canva design, and portfolio websites. My focus is creating clean, modern, and premium online brands for small businesses and creators.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-yellow-400/20 bg-zinc-950 p-5">
                <Globe className="mb-3 h-6 w-6 text-yellow-300" />
                <p className="font-bold">Websites</p>
                <p className="mt-1 text-sm text-zinc-400">Portfolio and store pages</p>
              </div>
              <div className="rounded-3xl border border-yellow-400/20 bg-zinc-950 p-5">
                <Palette className="mb-3 h-6 w-6 text-yellow-300" />
                <p className="font-bold">Design</p>
                <p className="mt-1 text-sm text-zinc-400">Logos, banners, pins</p>
              </div>
              <div className="rounded-3xl border border-yellow-400/20 bg-zinc-950 p-5">
                <ShoppingBag className="mb-3 h-6 w-6 text-yellow-300" />
                <p className="font-bold">E-commerce</p>
                <p className="mt-1 text-sm text-zinc-400">Shopify setup assets</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-20">
          <div className="rounded-[2rem] border border-yellow-400/30 bg-yellow-400 p-6 text-black sm:p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-black/60">Contact</p>
                <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Let’s build your next premium digital project.</h2>
                <p className="mt-5 text-lg text-black/70">Message me for Shopify design, social media content, Canva templates, Pinterest pins, or a portfolio website.</p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <a href="mailto:Asfand.khanappro@gmail.com">
                  <Button size="lg" className="w-full rounded-2xl bg-black text-yellow-300 hover:bg-zinc-900 md:w-auto">
                    <Mail className="mr-2 h-4 w-4" /> Asfand.khanappro@gmail.com
                  </Button>
                </a>
                <a href="https://instagram.com/uaegrowthpro" target="_blank">
                  <Button size="lg" variant="outline" className="w-full rounded-2xl border-black/30 bg-transparent text-black hover:bg-black hover:text-yellow-300 md:w-auto">
                    @uaegrowthpro
                  </Button>
                </a>
                <a href="https://cozynest.space" target="_blank">
                  <Button size="lg" variant="outline" className="w-full rounded-2xl border-black/30 bg-transparent text-black hover:bg-black hover:text-yellow-300 md:w-auto">
                    cozynest.space
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-yellow-400/20 px-6 py-8 text-center text-sm text-zinc-500">
        © 2026 Asfand Khan. Luxury digital portfolio. All rights reserved.
      </footer>
    </div>
  );
}
