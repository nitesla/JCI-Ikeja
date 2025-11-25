import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, MapPin, ExternalLink, Clock } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { EventsandProjects } from '@/entities';

export default function EventsPage() {
  const [events, setEvents] = useState<EventsandProjects[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { items } = await BaseCrudService.getAll<EventsandProjects>('eventsandprojects');
        setEvents(items);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const isUpcoming = (date: Date | string | undefined) => {
    if (!date) return false;
    const eventDate = typeof date === 'string' ? new Date(date) : date;
    return eventDate > new Date();
  };

  const getStatusColor = (status: string | undefined) => {
    switch (status?.toLowerCase()) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'ongoing':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-softaccent text-secondary-foreground';
    }
  };

  const filteredEvents = events.filter(event => {
    if (filter === 'upcoming') return isUpcoming(event.eventDate);
    if (filter === 'past') return !isUpcoming(event.eventDate);
    return true;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="font-paragraph text-foreground/80">Loading events...</p>
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
              src="https://static.wixstatic.com/media/eafe55_01abbdc5107c43a0a940eb3079eff742~mv2.png"
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
            <Link to="/events" className="text-primary-foreground font-paragraph text-sm">
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
            Events &
            <span className="block italic">Projects</span>
          </h1>
          <p className="font-paragraph text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Discover our upcoming events and ongoing projects that create positive impact 
            in the Ikeja community and beyond.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              className={filter === 'all' ? 'bg-buttonbackground text-buttonforeground' : 'border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary'}
            >
              All Events
            </Button>
            <Button
              variant={filter === 'upcoming' ? 'default' : 'outline'}
              onClick={() => setFilter('upcoming')}
              className={filter === 'upcoming' ? 'bg-buttonbackground text-buttonforeground' : 'border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary'}
            >
              Upcoming
            </Button>
            <Button
              variant={filter === 'past' ? 'default' : 'outline'}
              onClick={() => setFilter('past')}
              className={filter === 'past' ? 'bg-buttonbackground text-buttonforeground' : 'border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary'}
            >
              Past Events
            </Button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-16">
              <Calendar className="h-16 w-16 text-foreground/40 mx-auto mb-4" />
              <h3 className="font-heading text-2xl text-foreground mb-2">
                {filter === 'upcoming' ? 'No Upcoming Events' : 
                 filter === 'past' ? 'No Past Events' : 'No Events Found'}
              </h3>
              <p className="font-paragraph text-foreground/80">
                {filter === 'upcoming' 
                  ? 'Check back soon for upcoming events and activities.'
                  : filter === 'past'
                  ? 'Past events will appear here once they are completed.'
                  : 'Events and projects will be available soon.'}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <Card key={event._id} className="bg-secondary border-bordersubtle overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    {event.mainImage ? (
                      <Image 
                        src={event.mainImage}
                        alt={event.eventName || 'Event image'}
                        width={400}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-softaccent flex items-center justify-center">
                        <Calendar className="h-12 w-12 text-secondary-foreground/60" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-heading text-xl text-secondary-foreground">
                        {event.eventName || 'Event'}
                      </h3>
                      {event.status && (
                        <Badge className={`${getStatusColor(event.status)} border-0`}>
                          {event.status}
                        </Badge>
                      )}
                    </div>
                    
                    {event.type && (
                      <p className="font-paragraph text-sm text-secondary-foreground/70 mb-2 uppercase tracking-wide">
                        {event.type}
                      </p>
                    )}
                    
                    {event.description && (
                      <p className="font-paragraph text-secondary-foreground/80 mb-4 leading-relaxed line-clamp-3">
                        {event.description}
                      </p>
                    )}
                    
                    <div className="space-y-2 mb-4">
                      {event.eventDate && (
                        <div className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                          <Clock className="h-4 w-4" />
                          <span className="font-paragraph">{formatDate(event.eventDate)}</span>
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                          <MapPin className="h-4 w-4" />
                          <span className="font-paragraph">{event.location}</span>
                        </div>
                      )}
                    </div>
                    
                    {event.moreInfoUrl && (
                      <a 
                        href={event.moreInfoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-paragraph text-sm text-secondary-foreground hover:text-secondary-foreground/80 transition-colors"
                      >
                        Learn More
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

      {/* Call to Action */}
      <section className="bg-primary py-20">
        <div className="max-w-[100rem] mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl text-primary-foreground mb-6">
            Get Involved
          </h2>
          <p className="font-paragraph text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our chapter and participate in meaningful events and projects that make 
            a difference in our community.
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