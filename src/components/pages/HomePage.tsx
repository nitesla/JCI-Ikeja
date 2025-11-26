import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ArrowRight, Users, Calendar, BookOpen, Camera, Award, Users2, CheckCircle2, Heart, X } from 'lucide-react';

export default function HomePage() {
  const [isPresidentDialogOpen, setIsPresidentDialogOpen] = useState(false);
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

      {/* Hero Section - Full Bleed with Asymmetrical Layout */}
      <section className="relative w-full max-w-[120rem] mx-auto px-6 py-20 min-h-[80vh] flex items-center">
        {/* Background Images - Asymmetrically Placed */}
        <div className="absolute top-16 left-8 w-32 h-40 rounded-lg overflow-hidden">
          <Image 
            src="https://static.wixstatic.com/media/eafe55_ca25050ab12f4b138cb7be45f0dc0eab~mv2.jpg"
            alt="Leadership meeting"
            width={128}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-20 left-16 w-40 h-48 rounded-lg overflow-hidden">
          <Image 
            src="https://static.wixstatic.com/media/eafe55_02e52875f7d547358cc367dd2aa08285~mv2.jpg"
            alt="Community service project"
            width={160}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-20 right-12 w-36 h-44 rounded-lg overflow-hidden">
          <Image 
            src="https://static.wixstatic.com/media/eafe55_c68cf69a85424daab3d2714eff1e518a~mv2.jpg"
            alt="Networking event"
            width={144}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-16 right-8 w-44 h-36 rounded-lg overflow-hidden">
          <Image 
            src="https://static.wixstatic.com/media/eafe55_4aa2c82f41984951bccebd97e31e0220~mv2.jpg"
            alt="Youth development program"
            width={176}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Central Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="font-heading text-6xl md:text-7xl text-primary-foreground mb-6 leading-tight">
            Leadership Excellence
            <span className="block italic text-5xl md:text-6xl mt-2">in JCI Ikeja</span>
          </h1>
          <p className="font-paragraph text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Empowering young leaders to create positive change through community service, 
            professional development, and international collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </section>

      {/* Message From Chapter President Section */}
      <section className="bg-secondary py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* President Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="w-80 h-96 rounded-lg overflow-hidden">
                <Image 
                  src="https://static.wixstatic.com/media/eafe55_ca25050ab12f4b138cb7be45f0dc0eab~mv2.jpg"
                  alt="Chapter President"
                  width={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* President Message */}
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-4xl md:text-5xl text-secondary-foreground mb-4">
                Message From Our Chapter President
              </h2>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <p className="font-paragraph text-lg text-secondary-foreground/90 leading-relaxed mb-6">
                Welcome to JCI Ikeja, where we believe in the power of young leaders to transform communities. 
                Our chapter is dedicated to fostering excellence, encouraging innovation, and building meaningful 
                connections among our members.
              </p>
              <p className="font-paragraph text-lg text-secondary-foreground/90 leading-relaxed mb-8">
                Whether you're looking to develop your leadership skills, make a positive impact in your community, 
                or connect with like-minded professionals, JCI Ikeja offers the perfect platform. We invite you to 
                join us on this exciting journey of growth, service, and excellence.
              </p>
              <div className="mb-8">
                <p className="font-heading text-xl text-secondary-foreground mb-1">
                  Chapter President Name
                </p>
                <p className="font-paragraph text-secondary-foreground/70">
                  President, JCI Ikeja Chapter
                </p>
              </div>
              <Button 
                onClick={() => setIsPresidentDialogOpen(true)}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit"
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section with Background Image */}
      <section className="relative w-full py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://static.wixstatic.com/media/eafe55_ca25050ab12f4b138cb7be45f0dc0eab~mv2.jpg"
            alt="Statistics background"
            width={1600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[100rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground mb-4">
              Transforming Communities Through Leadership
            </h2>
            <p className="font-paragraph text-lg text-primary-foreground/80">
              Over 65 years of excellence in developing young leaders and creating lasting impact.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-cyan-400" />
              </div>
              <p className="font-heading text-4xl md:text-5xl text-cyan-400 mb-2">65+</p>
              <p className="font-paragraph text-primary-foreground/80">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users2 className="h-10 w-10 text-cyan-400" />
              </div>
              <p className="font-heading text-4xl md:text-5xl text-cyan-400 mb-2">5000+</p>
              <p className="font-paragraph text-primary-foreground/80">Membership</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-cyan-400" />
              </div>
              <p className="font-heading text-4xl md:text-5xl text-cyan-400 mb-2">120+</p>
              <p className="font-paragraph text-primary-foreground/80">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-cyan-400" />
              </div>
              <p className="font-heading text-4xl md:text-5xl text-cyan-400 mb-2">10000+</p>
              <p className="font-paragraph text-primary-foreground/80">Lives Impacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="bg-secondary py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-secondary-foreground mb-6">
              Our Mission
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="font-paragraph text-xl text-secondary-foreground/90 leading-relaxed mb-8">
                To provide development opportunities that empower young people to create positive change 
                in their communities through leadership training, community service, and international cooperation.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-softaccent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl text-secondary-foreground mb-2">Leadership</h3>
                  <p className="font-paragraph text-secondary-foreground/80">
                    Developing future leaders through training and mentorship programs.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-softaccent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl text-secondary-foreground mb-2">Community</h3>
                  <p className="font-paragraph text-secondary-foreground/80">
                    Creating positive impact through meaningful community service projects.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-softaccent rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl text-secondary-foreground mb-2">Growth</h3>
                  <p className="font-paragraph text-secondary-foreground/80">
                    Fostering personal and professional development opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="bg-background py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <h2 className="font-heading text-4xl text-center text-foreground mb-12">
            Explore Our Chapter
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/board" className="group">
              <div className="bg-secondary p-8 rounded-lg hover:bg-softaccent transition-colors">
                <Users className="h-12 w-12 text-secondary-foreground mb-4 group-hover:text-secondary-foreground" />
                <h3 className="font-heading text-xl text-secondary-foreground mb-2">Board of Directors</h3>
                <p className="font-paragraph text-secondary-foreground/80">
                  Meet our dedicated leadership team and their professional backgrounds.
                </p>
              </div>
            </Link>
            <Link to="/events" className="group">
              <div className="bg-secondary p-8 rounded-lg hover:bg-softaccent transition-colors">
                <Calendar className="h-12 w-12 text-secondary-foreground mb-4 group-hover:text-secondary-foreground" />
                <h3 className="font-heading text-xl text-secondary-foreground mb-2">Events & Projects</h3>
                <p className="font-paragraph text-secondary-foreground/80">
                  Discover our upcoming events and ongoing community projects.
                </p>
              </div>
            </Link>
            <Link to="/gallery" className="group">
              <div className="bg-secondary p-8 rounded-lg hover:bg-softaccent transition-colors">
                <Camera className="h-12 w-12 text-secondary-foreground mb-4 group-hover:text-secondary-foreground" />
                <h3 className="font-heading text-xl text-secondary-foreground mb-2">Gallery</h3>
                <p className="font-paragraph text-secondary-foreground/80">
                  View highlights from our events and community service activities.
                </p>
              </div>
            </Link>
            <Link to="/newsletter" className="group">
              <div className="bg-secondary p-8 rounded-lg hover:bg-softaccent transition-colors">
                <BookOpen className="h-12 w-12 text-secondary-foreground mb-4 group-hover:text-secondary-foreground" />
                <h3 className="font-heading text-xl text-secondary-foreground mb-2">Newsletter</h3>
                <p className="font-paragraph text-secondary-foreground/80">
                  Stay updated with our latest news and chapter activities.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* President Message Dialog */}
      <Dialog open={isPresidentDialogOpen} onOpenChange={setIsPresidentDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-3xl text-foreground">
              Message From Our Chapter President
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            {/* President Photo */}
            <div className="w-full h-80 rounded-lg overflow-hidden">
              <Image 
                src="https://static.wixstatic.com/media/eafe55_ca25050ab12f4b138cb7be45f0dc0eab~mv2.jpg"
                alt="Chapter President"
                width={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Full Message */}
            <div className="space-y-4">
              <p className="font-paragraph text-lg text-foreground/90 leading-relaxed">
                Welcome to JCI Ikeja, where we believe in the power of young leaders to transform communities. 
                Our chapter is dedicated to fostering excellence, encouraging innovation, and building meaningful 
                connections among our members.
              </p>
              <p className="font-paragraph text-lg text-foreground/90 leading-relaxed">
                Whether you're looking to develop your leadership skills, make a positive impact in your community, 
                or connect with like-minded professionals, JCI Ikeja offers the perfect platform. We invite you to 
                join us on this exciting journey of growth, service, and excellence.
              </p>
              <p className="font-paragraph text-lg text-foreground/90 leading-relaxed">
                As your chapter president, I am committed to ensuring that every member has the opportunity to grow, 
                contribute, and make a meaningful difference. Together, we are building a legacy of leadership and 
                service that will inspire generations to come.
              </p>
              <p className="font-paragraph text-lg text-foreground/90 leading-relaxed">
                I look forward to working with you and seeing the incredible impact we can create together. Let's 
                make JCI Ikeja a beacon of hope and positive change in our community.
              </p>
            </div>

            {/* President Info */}
            <div className="border-t border-border pt-4">
              <p className="font-heading text-xl text-foreground mb-1">
                Chapter President Name
              </p>
              <p className="font-paragraph text-foreground/70">
                President, JCI Ikeja Chapter
              </p>
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