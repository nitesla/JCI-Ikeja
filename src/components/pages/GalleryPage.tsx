import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Camera, Calendar, User, Menu, X, ExternalLink } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { GalleryImages } from '@/entities';

export default function GalleryPage() {
  const [galleryImages, setGalleryImages] = useState<GalleryImages[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImages | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const { items } = await BaseCrudService.getAll<GalleryImages>('galleryimages');
        setGalleryImages(items);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
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
          <p className="font-paragraph text-foreground/80">Loading gallery...</p>
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
            <Link to="/board" className="text-primary-foreground/80 hover:text-primary-foreground font-paragraph text-sm transition-colors">
              Board
            </Link>
            <Link to="/gallery" className="text-primary-foreground font-paragraph text-sm">
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
              Photo
              <span className="block italic">Gallery</span>
            </h1>
            <p className="font-paragraph text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Explore moments from our events, community service projects, and local organization activities 
              that showcase our commitment to positive change.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="max-w-[100rem] mx-auto px-6">
            {galleryImages.length === 0 ? (
              <div className="text-center py-16">
                <Camera className="h-16 w-16 text-foreground/40 mx-auto mb-4" />
                <h3 className="font-heading text-2xl text-foreground mb-2">No Images Found</h3>
                <p className="font-paragraph text-foreground/80">
                  Gallery images will be available soon. Check back later to see our latest activities!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {galleryImages.map((image) => (
                  <div 
                    key={image._id} 
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="aspect-square overflow-hidden rounded-lg bg-secondary">
                      {image.imageFile ? (
                        <Image 
                          src={image.imageFile}
                          alt={image.title || 'Gallery image'}
                          width={400}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-softaccent">
                          <Camera className="h-12 w-12 text-secondary-foreground/60" />
                        </div>
                      )}
                    </div>
                    {image.title && (
                      <p className="font-heading text-lg text-foreground mt-3 group-hover:text-primary transition-colors">
                        {image.title}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Image Detail Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-40 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="font-heading text-2xl text-foreground">
                    {selectedImage.title || 'Image'}
                  </h2>
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="text-foreground/60 hover:text-foreground transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {selectedImage.imageFile && (
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <Image 
                      src={selectedImage.imageFile}
                      alt={selectedImage.title || 'Gallery image'}
                      width={600}
                      className="w-full h-auto"
                    />
                  </div>
                )}

                <div className="space-y-4">
                  {selectedImage.description && (
                    <div>
                      <h3 className="font-heading text-lg text-foreground mb-2">Description</h3>
                      <p className="font-paragraph text-foreground/80 leading-relaxed">
                        {selectedImage.description}
                      </p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedImage.dateTaken && (
                      <div>
                        <h4 className="font-heading text-sm text-foreground/60 mb-1">Date Taken</h4>
                        <p className="font-paragraph text-foreground flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {formatDate(selectedImage.dateTaken)}
                        </p>
                      </div>
                    )}
                    {selectedImage.eventName && (
                      <div>
                        <h4 className="font-heading text-sm text-foreground/60 mb-1">Event</h4>
                        <div className="flex flex-col gap-3">
                          <p className="font-paragraph text-foreground">
                            {selectedImage.eventName}
                          </p>
                          <a 
                            href="https://tspimages.pixieset.com/41stconventionandinvestitureof42ndpresident/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="bg-buttonbackground text-buttonforeground hover:bg-buttonbackground/90 flex items-center gap-2 h-9 px-3">
                              View Gallery
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </a>
                        </div>
                      </div>
                    )}
                    {selectedImage.photographer && (
                      <div>
                        <h4 className="font-heading text-sm text-foreground/60 mb-1">Photographer</h4>
                        <p className="font-paragraph text-foreground flex items-center gap-2">
                          <User className="h-4 w-4" />
                          {selectedImage.photographer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <section className="bg-primary py-20">
          <div className="max-w-[100rem] mx-auto px-6 text-center">
            <h2 className="font-heading text-4xl text-primary-foreground mb-6">
              Join Our Community
            </h2>
            <p className="font-paragraph text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Be part of the moments that matter. Join JCI Ikeja and create lasting memories while 
              making a positive impact in your community.
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
