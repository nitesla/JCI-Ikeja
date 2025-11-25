import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, BookOpen, ExternalLink, Calendar, Download } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { Newsletters } from '@/entities';

export default function NewsletterPage() {
  const [newsletters, setNewsletters] = useState<Newsletters[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsletters = async () => {
      try {
        const { items } = await BaseCrudService.getAll<Newsletters>('newsletters');
        // Sort by publication date (newest first)
        const sortedItems = items.sort((a, b) => {
          const dateA = a.publicationDate ? new Date(a.publicationDate) : new Date(0);
          const dateB = b.publicationDate ? new Date(b.publicationDate) : new Date(0);
          return dateB.getTime() - dateA.getTime();
        });
        setNewsletters(sortedItems);
      } catch (error) {
        console.error('Error fetching newsletters:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsletters();
  }, []);

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="font-paragraph text-foreground/80">Loading newsletters...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="w-full px-6 py-4 flex justify-between items-center bg-primary">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center">
            <Image 
              src="https://static.wixstatic.com/media/eafe55_b752d28a2040412d889baf70e2818e7a~mv2.png?id=logo-newsletter"
              alt="JCI Ikeja Logo"
              width={140}
              className="h-14 w-auto"
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
            <Link to="/newsletter" className="text-primary-foreground font-paragraph text-sm">
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

      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="max-w-[100rem] mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-secondary-foreground/80 hover:text-secondary-foreground font-paragraph text-sm transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-[100rem] mx-auto px-6 text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-primary-foreground mb-6 leading-tight">
            Chapter
            <span className="block italic">Newsletter</span>
          </h1>
          <p className="font-paragraph text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Stay informed about our latest activities, achievements, and upcoming events 
            through our regular chapter newsletter.
          </p>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl text-secondary-foreground mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
              Get the latest updates about our chapter activities, events, and community impact 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-bordersubtle bg-background text-foreground font-paragraph focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-buttonbackground text-buttonforeground hover:bg-buttonbackground/90 px-6 py-3">
                Subscribe
              </Button>
            </div>
            <p className="font-paragraph text-sm text-secondary-foreground/60 mt-4">
              We respect your privacy and will never share your email address.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Archive */}
      <section className="py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-foreground mb-6">Newsletter Archive</h2>
            <p className="font-paragraph text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Browse through our past newsletters to catch up on chapter news and activities.
            </p>
          </div>

          {newsletters.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="h-16 w-16 text-foreground/40 mx-auto mb-4" />
              <h3 className="font-heading text-2xl text-foreground mb-2">No Newsletters Found</h3>
              <p className="font-paragraph text-foreground/80">
                Newsletter archives will be available soon. Subscribe above to get notified when new issues are published.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsletters.map((newsletter) => (
                <Card key={newsletter._id} className="bg-secondary border-bordersubtle overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[3/4] overflow-hidden">
                    {newsletter.coverImage ? (
                      <Image 
                        src={newsletter.coverImage}
                        alt={newsletter.title || 'Newsletter cover'}
                        width={400}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-softaccent flex items-center justify-center">
                        <BookOpen className="h-16 w-16 text-secondary-foreground/60" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-heading text-xl text-secondary-foreground">
                        {newsletter.title || 'Newsletter'}
                      </h3>
                      {newsletter.issueNumber && (
                        <span className="font-paragraph text-sm text-secondary-foreground/70 bg-softaccent px-2 py-1 rounded">
                          Issue #{newsletter.issueNumber}
                        </span>
                      )}
                    </div>
                    
                    {newsletter.publicationDate && (
                      <div className="flex items-center gap-2 text-sm text-secondary-foreground/70 mb-4">
                        <Calendar className="h-4 w-4" />
                        <span className="font-paragraph">{formatDate(newsletter.publicationDate)}</span>
                      </div>
                    )}
                    
                    {newsletter.summary && (
                      <p className="font-paragraph text-secondary-foreground/80 mb-4 leading-relaxed line-clamp-3">
                        {newsletter.summary}
                      </p>
                    )}
                    
                    {newsletter.newsletterUrl && (
                      <a 
                        href={newsletter.newsletterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-paragraph text-sm text-secondary-foreground hover:text-secondary-foreground/80 transition-colors"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Read Newsletter
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

      {/* Newsletter Benefits */}
      <section className="bg-secondary py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-secondary-foreground mb-6">
              Why Subscribe?
            </h2>
            <p className="font-paragraph text-xl text-secondary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Our newsletter keeps you connected with the JCI Ikeja community and informed about opportunities to get involved.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-softaccent rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-xl text-secondary-foreground mb-4">Event Updates</h3>
              <p className="font-paragraph text-secondary-foreground/80 leading-relaxed">
                Be the first to know about upcoming events, workshops, and community service opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-softaccent rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-xl text-secondary-foreground mb-4">Chapter News</h3>
              <p className="font-paragraph text-secondary-foreground/80 leading-relaxed">
                Stay updated on chapter achievements, member spotlights, and organizational developments.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-softaccent rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-xl text-secondary-foreground mb-4">Opportunities</h3>
              <p className="font-paragraph text-secondary-foreground/80 leading-relaxed">
                Discover leadership development programs, networking events, and volunteer opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-20">
        <div className="max-w-[100rem] mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl text-primary-foreground mb-6">
            Stay Connected
          </h2>
          <p className="font-paragraph text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our chapter and be part of a community that's making a real difference in Ikeja and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join">
              <Button className="bg-buttonbackground text-buttonforeground hover:bg-buttonbackground/90 px-8 py-3">
                Become a Member
              </Button>
            </Link>
            <Link to="/events">
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3">
                View Events
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
              <h3 className="font-heading text-xl text-primary-foreground mb-4">JCI Ikeja Chapter</h3>
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
              © 2024 Junior Chamber International, Ikeja Chapter. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}