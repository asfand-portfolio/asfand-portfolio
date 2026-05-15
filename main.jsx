import React from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Star,
  ShoppingBag,
  Palette,
  Globe,
  Mail,
  Briefcase,
  CheckCircle,
  Crown,
  Sparkles,
  ExternalLink,
} from 'lucide-react'
import './style.css'

function Button({ children, variant = 'primary', href }) {
  const className = `btn ${variant === 'outline' ? 'btn-outline' : 'btn-primary'}`
  if (href) {
    return (
      <a className={className} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {children}
      </a>
    )
  }
  return <button className={className}>{children}</button>
}

function App() {
  const projects = [
    {
      title: 'CozyNest Shopify Store',
      category: 'E-commerce Design',
      description: 'A premium home decor Shopify store concept with product pages, homepage sections, branding, and conversion-focused layout.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80',
      icon: ShoppingBag,
    },
    {
      title: 'UaeGrowthPro Content Page',
      category: 'Social Media Growth',
      description: 'Instagram and Pinterest content ideas, carousel concepts, captions, reels, and growth-focused digital marketing assets.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=900&q=80',
      icon: Star,
    },
    {
      title: 'Digital Product Store',
      category: 'AI + Canva Templates',
      description: 'A digital product brand selling ChatGPT prompts, Canva templates, thumbnails, banners, and social media creatives.',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80',
      icon: Palette,
    },
    {
      title: 'Fiverr Gig Designs',
      category: 'Freelance Portfolio',
      description: 'Professional gig images, thumbnails, service descriptions, and portfolio visuals for beginner-friendly freelancing.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
      icon: Briefcase,
    },
  ]

  const services = [
    'Luxury Shopify store setup and product page design',
    'Instagram carousel, reel, and caption creation',
    'Pinterest pin design and product promotion',
    'Canva template and digital product design',
    'Portfolio website and landing page design',
    'Premium logo, banner, and thumbnail design',
  ]

  const fiverrServices = [
    'Shopify store homepage design',
    'Product listing optimization',
    'Instagram carousel design',
    'Pinterest pin design',
    'Canva digital product templates',
    'Portfolio website design',
  ]

  const shopifyScreenshots = [
    {
      title: 'Homepage Design',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Product Page',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Collection Section',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Mobile Store View',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    },
  ]

  return (
    <div className="site">
      <div className="background-glow" />

      <header className="header">
        <div className="container nav">
          <div className="brand">
            <Crown size={21} />
            <span>Asfand Khan</span>
          </div>

          <nav className="nav-links">
            <a href="#work">Work</a>
            <a href="#shopify">Shopify</a>
            <a href="#fiverr">Fiverr</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>

          <Button href="mailto:Asfand.khanappro@gmail.com">Hire Me</Button>
        </div>
      </header>

      <main>
        <section className="container hero">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="pill">
              <Sparkles size={16} />
              Luxury Portfolio Designer
            </div>

            <h1>
              Building premium
              <span>digital brands</span>
              that feel modern.
            </h1>

            <p className="hero-text">
              I design Shopify stores, Fiverr portfolios, Pinterest creatives, Canva templates, and luxury social media branding for modern businesses.
            </p>

            <div className="hero-buttons">
              <Button href="#work">
                View Portfolio <ArrowRight size={17} />
              </Button>
              <Button variant="outline" href="#contact">Contact Me</Button>
            </div>

            <div className="stats">
              <div>
                <strong>4+</strong>
                <p>Brand Projects</p>
              </div>
              <div>
                <strong>6</strong>
                <p>Creative Services</p>
              </div>
              <div>
                <strong>UAE</strong>
                <p>Based Designer</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-card"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80" alt="Luxury workspace" />
            <div className="hero-overlay" />
            <div className="hero-info">
              <div className="icon-box">
                <Crown size={28} />
              </div>
              <div>
                <p>Creative Studio</p>
                <h3>Black & Gold Experience</h3>
              </div>
              <span>
                A luxury portfolio experience designed to showcase Shopify stores, Fiverr work, social media branding, and premium digital products.
              </span>
            </div>
          </motion.div>
        </section>

        <section id="work" className="container section">
          <div className="section-head">
            <div>
              <p className="label">Selected Work</p>
              <h2>Luxury portfolio projects</h2>
            </div>
            <p>Use this section to display your Shopify screenshots, Fiverr gig designs, Instagram work, Pinterest pins, and portfolio designs.</p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  className="project-card"
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <img src={project.image} alt={project.title} />
                  <div className="project-icon">
                    <Icon size={24} />
                  </div>
                  <p className="label">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </motion.div>
              )
            })}
          </div>
        </section>

        <section id="shopify" className="container section">
          <div className="panel">
            <p className="label">Shopify Screenshots</p>
            <h2>CozyNest store showcase</h2>
            <p className="panel-text">Replace these images with your real Shopify screenshots later: homepage, product page, collection section, and mobile view.</p>

            <div className="screenshot-grid">
              {shopifyScreenshots.map((item) => (
                <div className="screenshot-card" key={item.title}>
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>Add your real store screenshot here and write one short result or feature.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="fiverr" className="container section fiverr">
          <div>
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
              alt="Fiverr freelance desk"
              className="fiverr-img"
            />
            <p className="label">Fiverr Section</p>
            <h2>Freelance services I can offer</h2>
            <p>
              This section is made for your Fiverr profile. Add your Fiverr gig link, gig images, reviews, and packages here when ready.
            </p>
            <Button variant="outline" href="#contact">
              View Fiverr Gigs <ExternalLink size={17} />
            </Button>
          </div>

          <div className="service-list">
            {fiverrServices.map((service) => (
              <div key={service}>
                <CheckCircle size={21} />
                <p>{service}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="container section">
          <div className="panel gradient-panel">
            <p className="label">Services</p>
            <h2>What I can help with</h2>
            <div className="services-grid">
              {services.map((service) => (
                <div key={service}>
                  <CheckCircle size={21} />
                  <p>{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container section about">
          <div>
            <p className="label">About Me</p>
            <h2>My creative direction</h2>
          </div>
          <div>
            <p>
              I am building my skills in Shopify, digital product creation, Pinterest marketing, Instagram content, Canva design, and portfolio websites. My focus is creating clean, modern, and premium online brands for small businesses and creators.
            </p>
            <div className="about-grid">
              <div><Globe /><b>Websites</b><span>Portfolio and store pages</span></div>
              <div><Palette /><b>Design</b><span>Logos, banners, pins</span></div>
              <div><ShoppingBag /><b>E-commerce</b><span>Shopify setup assets</span></div>
            </div>
          </div>
        </section>

        <section id="contact" className="container section contact">
          <div>
            <p className="dark-label">Contact</p>
            <h2>Let’s build your next premium digital project.</h2>
            <p>Message me for Shopify design, social media content, Canva templates, Pinterest pins, or a portfolio website.</p>
          </div>
          <div className="contact-buttons">
            <Button href="mailto:Asfand.khanappro@gmail.com">
              <Mail size={17} /> Asfand.khanappro@gmail.com
            </Button>
            <Button variant="outline" href="https://instagram.com/uaegrowthpro">
              @uaegrowthpro
            </Button>
            <Button variant="outline" href="https://cozynest.space">
              cozynest.space
            </Button>
          </div>
        </section>
      </main>

      <footer>
        © 2026 Asfand Khan. Luxury digital portfolio. All rights reserved.
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
