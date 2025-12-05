import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ExternalLink, User, Menu } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { BoardofDirectors } from '@/entities';

export default function BoardPage() {
  const [boardMembers, setBoardMembers] = useState<BoardofDirectors[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchBoardMembers = async () => {
      try {
        const { items } = await BaseCrudService.getAll<BoardofDirectors>('boardofdirectors');
        setBoardMembers(items);
      } catch (error) {
        console.error('Error fetching board members:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBoardMembers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="font-paragraph text-foreground/80">Loading board members...</p>
        </div>
      </div>
    );
  }

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
            <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground font-paragraph text-sm transition-colors">
              About
            </Link>
            <Link to="/board" className="text-primary-foreground font-paragraph text-sm">
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
                <div className="flex flex-col space-y-6 px-6 pb-8 pt-20">
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
        <div className="max-w-[100rem] mx-auto px-6 text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-primary-foreground mb-6 leading-tight">
            Board of
            <span className="block italic">Directors</span>
          </h1>
          <p className="font-paragraph text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Meet our dedicated leadership team committed to driving positive change and 
            empowering young professionals in the Ikeja community.
          </p>
        </div>
      </section>

      {/* Board Members Grid */}
      <section className="py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          {boardMembers.length === 0 ? (
            <div className="text-center py-16">
              <User className="h-16 w-16 text-foreground/40 mx-auto mb-4" />
              <h3 className="font-heading text-2xl text-foreground mb-2">No Board Members Found</h3>
              <p className="font-paragraph text-foreground/80">
                Board member information will be available soon.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member) => (
                <Card key={member._id} className="bg-secondary border-bordersubtle overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    {member.memberImage ? (
                      <Image 
                        src={member.memberImage}
                        alt={member.memberName || 'Board member'}
                        width={400}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-softaccent flex items-center justify-center">
                        <User className="h-16 w-16 text-secondary-foreground/60" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl text-secondary-foreground mb-2">
                      {member.memberName || 'Board Member'}
                    </h3>
                    <p className="font-paragraph text-lg text-secondary-foreground/80 mb-4">
                      {member.memberRole || 'Position'}
                    </p>
                    {member.memberBio && (
                      <p className="font-paragraph text-secondary-foreground/70 mb-4 leading-relaxed line-clamp-3">
                        {member.memberBio}
                      </p>
                    )}
                    {member.memberPortfolio && (
                      <a 
                        href={member.memberPortfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-paragraph text-sm text-secondary-foreground hover:text-secondary-foreground/80 transition-colors"
                      >
                        View Portfolio
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="bg-secondary py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-secondary-foreground mb-6">
              Our Leadership Philosophy
            </h2>
            <p className="font-paragraph text-xl text-secondary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Our board members embody the values of servant leadership, working collaboratively 
              to create opportunities for growth and positive impact in our community.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">Collaborative</h3>
              <p className="font-paragraph text-secondary-foreground/80 leading-relaxed">
                We believe in the power of teamwork and collective decision-making to achieve 
                our shared goals and vision.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">Innovative</h3>
              <p className="font-paragraph text-secondary-foreground/80 leading-relaxed">
                Our leaders embrace new ideas and creative solutions to address community 
                challenges and opportunities.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">Accountable</h3>
              <p className="font-paragraph text-secondary-foreground/80 leading-relaxed">
                We hold ourselves to the highest standards of integrity and transparency 
                in all our actions and decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-20">
        <div className="max-w-[100rem] mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl text-primary-foreground mb-6">
            Interested in Leadership?
          </h2>
          <p className="font-paragraph text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our local organization and develop your leadership skills while making a positive impact 
            in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join">
              <Button className="bg-buttonbackground text-buttonforeground hover:bg-buttonbackground/90 px-8 py-3">
                Become a Member
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3">
                Learn More
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
              <h3 className="font-heading text-xl text-primary-foreground mb-4">JCI Ikeja</h3>
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
              © 2026 Junior Chamber International Ikeja. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}