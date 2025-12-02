import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Target, Globe, Heart, Users, Menu } from 'lucide-react';

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 w-full px-4 md:px-6 py-4 flex justify-between items-center bg-primary shadow-lg z-50">
        <div className="flex items-center space-x-4 md:space-x-8">
          <Link to="/" className="flex items-center">
            <Image 
              src="https://static.wixstatic.com/media/eafe55_e8f605345e954984936715bef05b9357~mv2.png"
              alt="JCI Ikeja Logo"
              width={160}
              className="h-12 md:h-16 w-auto"
            />
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/about" className="text-primary-foreground font-paragraph text-sm">
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
        <div className="flex items-center gap-4">
          <Link to="/join" className="hidden md:block">
            <Button className="bg-buttonbackground text-buttonforeground hover:bg-buttonbackground/90">
              Join Us
            </Button>
          </Link>
          
          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-cyan-400 hover:bg-primary-foreground/10 hover:text-cyan-300 transition-colors">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-primary border-l border-primary-foreground/20 p-0">
              <div className="flex flex-col h-full">
                {/* Menu Items */}
                <div className="flex flex-col space-y-6 px-6 pb-8 pt-4">
                  <Link 
                    to="/" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-primary-foreground/90 hover:text-primary-foreground font-paragraph text-base transition-colors"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/about" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-primary-foreground/90 hover:text-primary-foreground font-paragraph text-base transition-colors"
                  >
                    About
                  </Link>
                  <Link 
                    to="/board" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-primary-foreground/90 hover:text-primary-foreground font-paragraph text-base transition-colors"
                  >
                    Board
                  </Link>
                  <Link 
                    to="/gallery" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-primary-foreground/90 hover:text-primary-foreground font-paragraph text-base transition-colors"
                  >
                    Gallery
                  </Link>
                  <Link 
                    to="/events" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-primary-foreground/90 hover:text-primary-foreground font-paragraph text-base transition-colors"
                  >
                    Events
                  </Link>
                  <Link 
                    to="/newsletter" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-primary-foreground/90 hover:text-primary-foreground font-paragraph text-base transition-colors"
                  >
                    Newsletter
                  </Link>
                  <div className="border-t border-primary-foreground/20 pt-6">
                    <Link 
                      to="/join" 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button className="w-full bg-buttonbackground text-buttonforeground hover:bg-buttonbackground/90">
                        Join Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Add padding to account for fixed navbar */}
      <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-5xl md:text-6xl text-primary-foreground mb-6 leading-tight">
                About
                <span className="block italic">JCI Ikeja</span>
              </h1>
              <p className="font-paragraph text-xl text-primary-foreground/90 leading-relaxed">
                The Junior Chamber International Ikeja, is a vibrant community of young 
                professionals dedicated to creating positive change through leadership development, 
                community service, and international cooperation.
              </p>
            </div>
            <div className="relative">
              <Image 
                src="https://static.wixstatic.com/media/eafe55_72f9aaf32ced4cf888964c0edf963b46~mv2.jpg"
                alt="Historical photo of JCI Ikeja Local Organization founding"
                width={600}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-primary-foreground" />
              </div>
              <h2 className="font-heading text-3xl text-foreground mb-4">Our Mission</h2>
              <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                To provide development opportunities that empower young people to create positive 
                change in their communities through leadership training, community service, and 
                international cooperation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-primary-foreground" />
              </div>
              <h2 className="font-heading text-3xl text-foreground mb-4">Our Vision</h2>
              <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                To be the leading global network of young active citizens, creating sustainable 
                impact in our communities and fostering a generation of responsible leaders 
                committed to positive change.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-primary-foreground" />
              </div>
              <h2 className="font-heading text-3xl text-foreground mb-4">Our Values</h2>
              <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                We believe in leadership through service, fostering international understanding, 
                promoting individual development, and creating opportunities for young people 
                to make a meaningful difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-secondary py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src="https://static.wixstatic.com/media/eafe55_a4bb19ebf3d44db28d46a53366c11f0b~mv2.jpg"
                alt="JCI Ikeja members at a community event"
                width={600}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="font-heading text-4xl text-secondary-foreground mb-6">Our Story</h2>
              <div className="space-y-4 font-paragraph text-lg text-secondary-foreground/90 leading-relaxed">
                <p>
                  Founded as part of the global Junior Chamber International network, the Ikeja Local Organization 
                  has been a cornerstone of youth leadership development in Lagos State for decades.
                </p>
                <p>
                  Our local organization brings together young professionals aged 18-40 who are passionate about 
                  making a difference in their communities. Through our various programs and initiatives, 
                  we have impacted thousands of lives and created lasting positive change.
                </p>
                <p>
                  From community development projects to leadership training programs, we continue to 
                  uphold the JCI tradition of empowering young people to become active citizens and 
                  leaders in their communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-foreground mb-6">What We Do</h2>
            <p className="font-paragraph text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Our local organization focuses on four key areas of development and community impact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-softaccent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-xl text-secondary-foreground mb-4">Leadership Development</h3>
              <p className="font-paragraph text-secondary-foreground/80">
                Training programs and workshops to develop leadership skills and capabilities.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-softaccent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-xl text-secondary-foreground mb-4">Community Service</h3>
              <p className="font-paragraph text-secondary-foreground/80">
                Organizing and participating in projects that address community needs and challenges.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-softaccent rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-xl text-secondary-foreground mb-4">International Cooperation</h3>
              <p className="font-paragraph text-secondary-foreground/80">
                Building bridges across cultures and participating in global JCI initiatives.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-softaccent rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-xl text-secondary-foreground mb-4">Professional Growth</h3>
              <p className="font-paragraph text-secondary-foreground/80">
                Networking opportunities and skill development for career advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-20">
        <div className="max-w-[100rem] mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl text-primary-foreground mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="font-paragraph text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our community of young leaders and help create positive change in JCI Ikeja and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join">
              <Button className="bg-buttonbackground text-buttonforeground hover:bg-buttonbackground/90 px-8 py-3">
                Become a Member
              </Button>
            </Link>
            <Link to="/events">
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3">
                View Our Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-12">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading text-xl text-primary-foreground mb-4">JCI Ikeja Local Organization</h3>
              <p className="font-paragraph text-primary-foreground/80 leading-relaxed">
                Empowering young leaders to create positive change in Ikeja and beyond through 
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
              © 2024 Junior Chamber International, Ikeja Local Organization. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}