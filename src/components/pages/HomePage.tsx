import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ArrowRight, Users, Calendar, BookOpen, Camera, Award, Users2, CheckCircle2, Heart, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, margin: '-100px' }
} as const;

const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, margin: '-100px' }
} as const;

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: 'easeOut' },
  viewport: { once: true, margin: '-100px' }
} as const;

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: 'easeOut' },
  viewport: { once: true, margin: '-100px' }
} as const;

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true, margin: '-100px' }
} as const;

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  viewport: { once: true, margin: '-100px' }
} as const;

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
} as const;

// Section transition variants
const sectionFadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
  viewport: { once: true, margin: '-80px' }
} as const;

const sectionSlideInLeft = {
  initial: { opacity: 0, x: -80 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
  viewport: { once: true, margin: '-80px' }
} as const;

const sectionSlideInRight = {
  initial: { opacity: 0, x: 80 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
  viewport: { once: true, margin: '-80px' }
} as const;

// Hero image pop animations with continuous loop
const heroImageLoop = (delay: number) => ({
  initial: { opacity: 0, scale: 0 },
  animate: { 
    opacity: [0, 1, 1, 0],
    scale: [0, 1, 1, 0]
  },
  transition: { 
    duration: 4,
    delay,
    repeat: Infinity,
    repeatType: 'loop' as 'loop',
    times: [0, 0.15, 0.85, 1],
    ease: 'easeInOut' as 'easeInOut'
  }
});

export default function HomePage() {
  const [isPresidentDialogOpen, setIsPresidentDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel images for the statistics section
  const carouselImages = [
    'https://static.wixstatic.com/media/eafe55_1ea632cb1c1944dbb32bd7c2ef642d97~mv2.jpg',
    'https://static.wixstatic.com/media/eafe55_ae13cc8628df40f3bbdfd4b4e47ba83b~mv2.jpg',
    'https://static.wixstatic.com/media/eafe55_d8cd599ff59448a5a2d254490dcc17df~mv2.jpg',
    'https://static.wixstatic.com/media/eafe55_9fa5b465b71a408d96d4de6a993b75f5~mv2.jpg'
  ];

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="min-h-screen bg-primary">
      {/* Navigation */}
      <nav className="w-full px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center">
            <Image 
              src="https://static.wixstatic.com/media/eafe55_e8f605345e954984936715bef05b9357~mv2.png"
              alt="JCI Ikeja Logo"
              width={160}
              className="h-16 w-auto"
            />
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground font-paragraph text-sm transition-colors">
              About
            </Link>
            <Link to="/board" className="text-primary-foreground/80 hover:text-primary-foreground font-paragraph text-sm transition-colors">
              Board
            </Link>
            <Link to="/gallery" className="text-primary-foreground/80 hover:text-primary-foreground font-paragraph text-sm transition-colors">
              Gallery
            </Link>
            <Link to="/events" className="text-primary-foreground/80 hover:text-primary-foreground font-paragraph text-sm transition-colors">
              Events
            </Link>
            <Link to="/newsletter" className="text-primary-foreground/80 hover:text-primary-foreground font-paragraph text-sm transition-colors">
              Newsletter
            </Link>
          </div>
        </div>
        <Link to="/join">
          <Button className="bg-buttonbackground text-buttonforeground hover:bg-buttonbackground/90">
            Join Us
          </Button>
        </Link>
      </nav>

      {/* Floating Join Us Button - Bottom Right */}
      <Link to="/join" className="fixed bottom-8 right-8 z-40">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Button className="bg-buttonbackground text-buttonforeground hover:bg-buttonbackground/90 rounded-full px-6 py-3 shadow-lg">
            Join Us
          </Button>
        </motion.div>
      </Link>

      {/* Hero Section - Full Bleed with Asymmetrical Layout */}
      <section className="relative w-full max-w-[120rem] mx-auto px-6 py-20 min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Images - Asymmetrically Placed with Looping Pop Animation */}
        <motion.div 
          className="absolute top-16 left-8 w-32 h-40 rounded-lg overflow-hidden"
          {...heroImageLoop(0)}
        >
          <Image 
            src="https://static.wixstatic.com/media/eafe55_ca25050ab12f4b138cb7be45f0dc0eab~mv2.jpg"
            alt="Leadership meeting"
            width={128}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          className="absolute bottom-20 left-16 w-40 h-48 rounded-lg overflow-hidden"
          {...heroImageLoop(1)}
        >
          <Image 
            src="https://static.wixstatic.com/media/eafe55_02e52875f7d547358cc367dd2aa08285~mv2.jpg"
            alt="Community service project"
            width={160}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          className="absolute top-20 right-12 w-36 h-44 rounded-lg overflow-hidden"
          {...heroImageLoop(2)}
        >
          <Image 
            src="https://static.wixstatic.com/media/eafe55_c68cf69a85424daab3d2714eff1e518a~mv2.jpg"
            alt="Networking event"
            width={144}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          className="absolute bottom-16 right-8 w-44 h-36 rounded-lg overflow-hidden"
          {...heroImageLoop(3)}
        >
          <Image 
            src="https://static.wixstatic.com/media/eafe55_4aa2c82f41984951bccebd97e31e0220~mv2.jpg"
            alt="Youth development program"
            width={176}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Central Content */}
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="font-heading text-6xl md:text-7xl text-primary-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Leadership Excellence
            <motion.span 
              className="block italic text-5xl md:text-6xl mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              in JCI Ikeja
            </motion.span>
          </motion.h1>
          <motion.p 
            className="font-paragraph text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Empowering young leaders to create positive change through community service, 
            professional development, and international collaboration.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/about">
              <Button className="bg-buttonbackground text-buttonforeground hover:bg-buttonbackground/90 px-8 py-3">
                Discover Our Mission
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/join">
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3">
                Become a Member
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Message From Chapter President Section */}
      <motion.section 
        className="bg-secondary py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* President Photo */}
            <motion.div 
              className="flex justify-center md:justify-start"
              {...sectionSlideInLeft}
            >
              <div className="w-80 h-96 rounded-lg overflow-hidden">
                <Image 
                  src="https://static.wixstatic.com/media/eafe55_f8adaa239fcb4c018cfe974cef66844a~mv2.png"
                  alt="Chapter President"
                  width={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* President Message */}
            <motion.div 
              className="flex flex-col justify-center"
              {...sectionSlideInRight}
            >
              <motion.h2 
                className="font-heading text-4xl md:text-5xl text-secondary-foreground mb-4"
                {...fadeInUp}
              >
                Message From Our Chapter President
              </motion.h2>
              <motion.div 
                className="w-16 h-1 bg-primary mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: '-100px' }}
              ></motion.div>
              <motion.p 
                className="font-paragraph text-lg text-secondary-foreground/90 leading-relaxed mb-6"
                {...fadeInUp}
              >
                Welcome to JCI Ikeja, where we believe in the power of young leaders to transform communities. 
                Our chapter is dedicated to fostering excellence, encouraging innovation, and building meaningful 
                connections among our members.
              </motion.p>
              <motion.p 
                className="font-paragraph text-lg text-secondary-foreground/90 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                Whether you're looking to develop your leadership skills, make a positive impact in your community, 
                or connect with like-minded professionals, JCI Ikeja offers the perfect platform. We invite you to 
                join us on this exciting journey of growth, service, and excellence.
              </motion.p>
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <p className="font-heading text-xl text-secondary-foreground mb-1">
                  JCIN Amb. Olubunmi Grace Fadare
                </p>
                <p className="font-paragraph text-secondary-foreground/70">
                  2026 President, JCI Ikeja
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <Button 
                  onClick={() => setIsPresidentDialogOpen(true)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Statistics Section with Sliding Carousel Background */}
      <motion.section 
        className="relative w-full py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Carousel Background */}
        <div className="absolute inset-0 z-0">
          {/* Carousel Images */}
          <div className="relative w-full h-full">
            {carouselImages.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              >
                <Image 
                  src={image}
                  alt={`Statistics background ${index + 1}`}
                  width={1600}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-primary/85"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[100rem] mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            {...fadeInDown}
          >
            <motion.h2 
              className="font-heading text-4xl md:text-5xl text-primary-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              Transforming Communities Through Positive Impact
            </motion.h2>
            <motion.p 
              className="font-paragraph text-lg text-primary-foreground/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              Over 65 years of excellence in developing young leaders and creating lasting impact.
            </motion.p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div 
              className="text-center"
              variants={staggerItem}
            >
              <motion.div 
                className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Award className="h-10 w-10 text-cyan-400" />
              </motion.div>
              <p className="font-heading text-4xl md:text-5xl text-cyan-400 mb-2">65+</p>
              <p className="font-paragraph text-primary-foreground/80">Years of Excellence</p>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={staggerItem}
            >
              <motion.div 
                className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Users2 className="h-10 w-10 text-cyan-400" />
              </motion.div>
              <p className="font-heading text-4xl md:text-5xl text-cyan-400 mb-2">5000+</p>
              <p className="font-paragraph text-primary-foreground/80">Membership</p>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={staggerItem}
            >
              <motion.div 
                className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <CheckCircle2 className="h-10 w-10 text-cyan-400" />
              </motion.div>
              <p className="font-heading text-4xl md:text-5xl text-cyan-400 mb-2">120+</p>
              <p className="font-paragraph text-primary-foreground/80">Projects Completed</p>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={staggerItem}
            >
              <motion.div 
                className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Heart className="h-10 w-10 text-cyan-400" />
              </motion.div>
              <p className="font-heading text-4xl md:text-5xl text-cyan-400 mb-2">10000+</p>
              <p className="font-paragraph text-primary-foreground/80">Lives Impacted</p>
            </motion.div>
          </motion.div>

          {/* Carousel Indicators */}
          <motion.div 
            className="flex justify-center gap-2 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {carouselImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentImageIndex === index 
                    ? 'bg-cyan-400 w-8' 
                    : 'bg-primary-foreground/40 w-2 hover:bg-primary-foreground/60'
                }`}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Statement Section */}
      <motion.section 
        className="bg-secondary py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-[100rem] mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            {...fadeInDown}
          >
            <motion.h2 
              className="font-heading text-4xl md:text-5xl text-secondary-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              Our Mission
            </motion.h2>
            <div className="max-w-4xl mx-auto">
              <motion.p 
                className="font-paragraph text-xl text-secondary-foreground/90 leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                To provide development opportunities that empower young people to create positive change 
                in their communities through leadership training, community service, and international cooperation.
              </motion.p>
              <motion.div 
                className="grid md:grid-cols-3 gap-8 mt-12"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: '-100px' }}
              >
                <motion.div 
                  className="text-center"
                  variants={staggerItem}
                >
                  <motion.div 
                    className="w-16 h-16 bg-softaccent rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Users className="h-8 w-8 text-cyan-400" />
                  </motion.div>
                  <h3 className="font-heading text-xl text-secondary-foreground mb-2">Leadership</h3>
                  <p className="font-paragraph text-secondary-foreground/80">
                    Developing future leaders through training and mentorship programs.
                  </p>
                </motion.div>
                <motion.div 
                  className="text-center"
                  variants={staggerItem}
                >
                  <motion.div 
                    className="w-16 h-16 bg-softaccent rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Calendar className="h-8 w-8 text-cyan-400" />
                  </motion.div>
                  <h3 className="font-heading text-xl text-secondary-foreground mb-2">Community</h3>
                  <p className="font-paragraph text-secondary-foreground/80">
                    Creating positive impact through meaningful community service projects.
                  </p>
                </motion.div>
                <motion.div 
                  className="text-center"
                  variants={staggerItem}
                >
                  <motion.div 
                    className="w-16 h-16 bg-softaccent rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <BookOpen className="h-8 w-8 text-cyan-400" />
                  </motion.div>
                  <h3 className="font-heading text-xl text-secondary-foreground mb-2">Growth</h3>
                  <p className="font-paragraph text-secondary-foreground/80">
                    Fostering personal and professional development opportunities.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Access Section - Explore Our Chapter */}
      <motion.section 
        className="bg-background py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-[100rem] mx-auto px-6">
          <motion.h2 
            className="font-heading text-4xl text-center text-foreground mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            Explore Our Chapter
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={staggerItem}>
              <Link to="/board" className="group">
                <motion.div 
                  className="bg-secondary p-8 rounded-lg hover:bg-softaccent transition-colors"
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Users className="h-12 w-12 text-cyan-400 mb-4 group-hover:text-cyan-400" />
                  </motion.div>
                  <h3 className="font-heading text-xl text-secondary-foreground mb-2">Board of Directors</h3>
                  <p className="font-paragraph text-secondary-foreground/80">
                    Meet our dedicated leadership team and their professional backgrounds.
                  </p>
                </motion.div>
              </Link>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Link to="/events" className="group">
                <motion.div 
                  className="bg-secondary p-8 rounded-lg hover:bg-softaccent transition-colors"
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Calendar className="h-12 w-12 text-cyan-400 mb-4 group-hover:text-cyan-400" />
                  </motion.div>
                  <h3 className="font-heading text-xl text-secondary-foreground mb-2">Events & Projects</h3>
                  <p className="font-paragraph text-secondary-foreground/80">
                    Discover our upcoming events and ongoing community projects.
                  </p>
                </motion.div>
              </Link>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Link to="/gallery" className="group">
                <motion.div 
                  className="bg-secondary p-8 rounded-lg hover:bg-softaccent transition-colors"
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Camera className="h-12 w-12 text-cyan-400 mb-4 group-hover:text-cyan-400" />
                  </motion.div>
                  <h3 className="font-heading text-xl text-secondary-foreground mb-2">Gallery</h3>
                  <p className="font-paragraph text-secondary-foreground/80">
                    View highlights from our events and community service activities.
                  </p>
                </motion.div>
              </Link>
            </motion.div>
            <motion.div variants={staggerItem}>
              <Link to="/newsletter" className="group">
                <motion.div 
                  className="bg-secondary p-8 rounded-lg hover:bg-softaccent transition-colors"
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <BookOpen className="h-12 w-12 text-cyan-400 mb-4 group-hover:text-cyan-400" />
                  </motion.div>
                  <h3 className="font-heading text-xl text-secondary-foreground mb-2">Newsletter</h3>
                  <p className="font-paragraph text-secondary-foreground/80">
                    Stay updated with our latest news and chapter activities.
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Partners Section */}
      <motion.section 
        className="bg-secondary py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-[100rem] mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            {...fadeInDown}
          >
            <motion.h2 
              className="font-heading text-4xl md:text-5xl text-secondary-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              Our Partners
            </motion.h2>
            <motion.div 
              className="w-16 h-1 bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
            ></motion.div>
            <motion.p 
              className="font-paragraph text-lg text-secondary-foreground/90 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              We are proud to collaborate with leading organizations and institutions that share our commitment to developing young leaders and creating positive community impact.
            </motion.p>
          </motion.div>

          {/* Partner Logos Marquee - Horizontal Scrolling */}
          <motion.div 
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div 
              className="flex items-center gap-16 md:gap-24 lg:gap-32"
              animate={{ x: ['0%', '-100%'] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: 'linear',
                repeatType: 'loop'
              }}
            >
              {/* Original set of logos */}
              {[
                {
                  name: 'LSETF',
                  colorLogo: 'https://static.wixstatic.com/media/eafe55_f4c56072981c412d9fab969e9cc05dee~mv2.png?id=partner-lsetf-color',
                  grayscaleLogo: 'https://static.wixstatic.com/media/eafe55_f4c56072981c412d9fab969e9cc05dee~mv2.png?id=partner-lsetf-gray'
                },
                {
                  name: 'Knewrow',
                  colorLogo: 'https://static.wixstatic.com/media/eafe55_f4c56072981c412d9fab969e9cc05dee~mv2.png?id=partner-knewrow-color',
                  grayscaleLogo: 'https://static.wixstatic.com/media/eafe55_f4c56072981c412d9fab969e9cc05dee~mv2.png?id=partner-knewrow-gray'
                },
                {
                  name: 'Seal',
                  colorLogo: 'https://static.wixstatic.com/media/eafe55_f4c56072981c412d9fab969e9cc05dee~mv2.png?id=partner-seal-color',
                  grayscaleLogo: 'https://static.wixstatic.com/media/eafe55_f4c56072981c412d9fab969e9cc05dee~mv2.png?id=partner-seal-gray'
                },
                {
                  name: 'Live Your Dreams Africa',
                  colorLogo: 'https://static.wixstatic.com/media/eafe55_f4c56072981c412d9fab969e9cc05dee~mv2.png?id=partner-lyda-color',
                  grayscaleLogo: 'https://static.wixstatic.com/media/eafe55_f4c56072981c412d9fab969e9cc05dee~mv2.png?id=partner-lyda-gray'
                },
                {
                  name: 'Utiva',
                  colorLogo: 'https://static.wixstatic.com/media/eafe55_f4c56072981c412d9fab969e9cc05dee~mv2.png?id=partner-utiva-color',
                  grayscaleLogo: 'https://static.wixstatic.com/media/eafe55_f4c56072981c412d9fab969e9cc05dee~mv2.png?id=partner-utiva-gray'
                }
              ].map((partner) => (
                <div 
                  key={`${partner.name}-1`}
                  className="relative h-24 flex-shrink-0 flex items-center justify-center cursor-pointer group"
                >
                  {/* Grayscale version (default) */}
                  <Image 
                    src={partner.grayscaleLogo}
                    alt={`${partner.name} logo`}
                    width={140}
                    className="h-24 w-auto object-contain transition-opacity duration-300 group-hover:opacity-0 filter grayscale"
                  />
                  {/* Color version (on hover) */}
                  <Image 
                    src={partner.colorLogo}
                    alt={`${partner.name} logo in color`}
                    width={140}
                    className="h-24 w-auto object-contain absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {[
                {
                  name: 'LSETF',
                  colorLogo: 'https://static.wixstatic.com/media/eafe55_f4c56072981c412d9fab969e9cc05dee~mv2.png?id=partner-lsetf-color',
                  grayscaleLogo: 'https://static.wixstatic.com/media/eafe55_f4c56072981c412d9fab969e9cc05dee~mv2.png?id=partner-lsetf-gray'
                },
                {
                  name: 'Knewrow',
                  colorLogo: 'https://static.wixstatic.com/media/eafe55_f4c56072981c412d9fab969e9cc05dee~mv2.png?id=partner-knewrow-color',
                  grayscaleLogo: 'https://static.wixstatic.com/media/eafe55_f4c56072981c412d9fab969e9cc05dee~mv2.png?id=partner-knewrow-gray'
                },
                {
                  name: 'Seal',
                  colorLogo: 'https://static.wixstatic.com/media/eafe55_f4c56072981c412d9fab969e9cc05dee~mv2.png?id=partner-seal-color',
                  grayscaleLogo: 'https://static.wixstatic.com/media/eafe55_f4c56072981c412d9fab969e9cc05dee~mv2.png?id=partner-seal-gray'
                },
                {
                  name: 'Live Your Dreams Africa',
                  colorLogo: 'https://static.wixstatic.com/media/eafe55_f4c56072981c412d9fab969e9cc05dee~mv2.png?id=partner-lyda-color',
                  grayscaleLogo: 'https://static.wixstatic.com/media/eafe55_f4c56072981c412d9fab969e9cc05dee~mv2.png?id=partner-lyda-gray'
                },
                {
                  name: 'Utiva',
                  colorLogo: 'https://static.wixstatic.com/media/eafe55_f4c56072981c412d9fab969e9cc05dee~mv2.png?id=partner-utiva-color',
                  grayscaleLogo: 'https://static.wixstatic.com/media/eafe55_f4c56072981c412d9fab969e9cc05dee~mv2.png?id=partner-utiva-gray'
                }
              ].map((partner) => (
                <div 
                  key={`${partner.name}-2`}
                  className="relative h-24 flex-shrink-0 flex items-center justify-center cursor-pointer group"
                >
                  {/* Grayscale version (default) */}
                  <Image 
                    src={partner.grayscaleLogo}
                    alt={`${partner.name} logo`}
                    width={140}
                    className="h-24 w-auto object-contain transition-opacity duration-300 group-hover:opacity-0 filter grayscale"
                  />
                  {/* Color version (on hover) */}
                  <Image 
                    src={partner.colorLogo}
                    alt={`${partner.name} logo in color`}
                    width={140}
                    className="h-24 w-auto object-contain absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* President Message Dialog */}
      <Dialog open={isPresidentDialogOpen} onOpenChange={setIsPresidentDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto p-0 border-0">
          <div className="grid md:grid-cols-5 gap-0">
            {/* President Photo - Left Side */}
            <div className="md:col-span-2 bg-gradient-to-b from-primary to-primary/80 flex items-center justify-center min-h-[400px] md:min-h-[600px] p-6">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                  <Image 
                    src="https://static.wixstatic.com/media/eafe55_f8adaa239fcb4c018cfe974cef66844a~mv2.png"
                    alt="Chapter President JCIN Amb. Olubunmi Grace Fadare"
                    width={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Message Content - Right Side */}
            <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <motion.h2 
                  className="font-heading text-3xl md:text-4xl text-foreground mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  Message From Our Chapter President
                </motion.h2>
                
                <motion.div 
                  className="w-12 h-1 bg-primary mb-8"
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                ></motion.div>

                {/* Full Message */}
                <motion.div 
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="font-paragraph text-base md:text-lg text-foreground/90 leading-relaxed">
                    Welcome to JCI Ikeja, where we believe in the power of young leaders to transform communities. 
                    Our chapter is dedicated to fostering excellence, encouraging innovation, and building meaningful 
                    connections among our members.
                  </p>
                  <p className="font-paragraph text-base md:text-lg text-foreground/90 leading-relaxed">
                    Whether you're looking to develop your leadership skills, make a positive impact in your community, 
                    or connect with like-minded professionals, JCI Ikeja offers the perfect platform. We invite you to 
                    join us on this exciting journey of growth, service, and excellence.
                  </p>
                  <p className="font-paragraph text-base md:text-lg text-foreground/90 leading-relaxed">
                    As your chapter president, I am committed to ensuring that every member has the opportunity to grow, 
                    contribute, and make a meaningful difference. Together, we are building a legacy of leadership and 
                    service that will inspire generations to come.
                  </p>
                  <p className="font-paragraph text-base md:text-lg text-foreground/90 leading-relaxed">
                    I look forward to working with you and seeing the incredible impact we can create together. Let's 
                    make JCI Ikeja a beacon of hope and positive change in our community.
                  </p>
                </motion.div>
              </div>

              {/* President Info */}
              <motion.div 
                className="border-t border-border pt-6 mt-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <p className="font-heading text-lg md:text-xl text-foreground mb-1">
                  JCIN Amb. Olubunmi Grace Fadare
                </p>
                <p className="font-paragraph text-sm md:text-base text-foreground/70">
                  2026 President, JCI Ikeja
                </p>
              </motion.div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-primary py-12">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading text-xl text-primary-foreground mb-4">JCI Ikeja Chapter</h3>
              <p className="font-paragraph text-primary-foreground/80 leading-relaxed">
                Empowering young leaders to create positive change in JCI Ikeja and beyond through 
                community service and professional development.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-lg text-primary-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/about" className="block font-paragraph text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
                <Link to="/board" className="block font-paragraph text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Board of Directors
                </Link>
                <Link to="/events" className="block font-paragraph text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Events & Projects
                </Link>
                <Link to="/join" className="block font-paragraph text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Join Us
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-lg text-primary-foreground mb-4">Connect</h4>
              <p className="font-paragraph text-primary-foreground/80">
                Ready to make a difference? Join our community of young leaders today.
              </p>
              <Link to="/join" className="inline-block mt-4">
                <Button className="bg-buttonbackground text-buttonforeground hover:bg-buttonbackground/90">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="font-paragraph text-primary-foreground/60">
              © 2024 Junior Chamber International, Ikeja Chapter. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
