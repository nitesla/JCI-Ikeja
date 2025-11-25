import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Camera, Calendar, User } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { GalleryImages } from '@/entities';

export default function GalleryPage() {
  const [galleryImages, setGalleryImages] = useState<GalleryImages[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImages | null>(null);

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
      <nav className="w-full px-6 py-4 flex justify-between items-center bg-primary">
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
            Photo
            <span className="block italic">Gallery</span>
          </h1>
          <p className="font-paragraph text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Explore moments from our events, community service projects, and chapter activities 
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
                        alt={image.title || image.description || 'Gallery image'}
                        width={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-softaccent flex items-center justify-center">
                        <Camera className="h-12 w-12 text-secondary-foreground/60" />
                      </div>
                    )}
                  </div>
                  {(image.title || image.eventName || image.dateTaken) && (
                    <div className="mt-3">
                      {image.title && (
                        <h3 className="font-heading text-lg text-foreground mb-1">
                          {image.title}
                        </h3>
                      )}
                      <div className="flex items-center gap-4 text-sm text-foreground/70">
                        {image.eventName && (
                          <span className="font-paragraph">{image.eventName}</span>
                        )}
                        {image.dateTaken && (
                          <span className="flex items-center gap-1 font-paragraph">
                            <Calendar className="h-3 w-3" />
                            {formatDate(image.dateTaken)}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="max-w-4xl max-h-[90vh] bg-background rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video overflow-hidden">
              {selectedImage.imageFile ? (
                <Image 
                  src={selectedImage.imageFile}
                  alt={selectedImage.title || selectedImage.description || 'Gallery image'}
                  width={800}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-softaccent flex items-center justify-center">
                  <Camera className="h-16 w-16 text-secondary-foreground/60" />
                </div>
              )}
            </div>
            <div className="p-6">
              {selectedImage.title && (
                <h3 className="font-heading text-2xl text-foreground mb-2">
                  {selectedImage.title}
                </h3>
              )}
              {selectedImage.description && (
                <p className="font-paragraph text-foreground/80 mb-4 leading-relaxed">
                  {selectedImage.description}
                </p>
              )}
              <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                {selectedImage.eventName && (
                  <span className="font-paragraph">Event: {selectedImage.eventName}</span>
                )}
                {selectedImage.dateTaken && (
                  <span className="flex items-center gap-1 font-paragraph">
                    <Calendar className="h-3 w-3" />
                    {formatDate(selectedImage.dateTaken)}
                  </span>
                )}
                {selectedImage.photographer && (
                  <span className="flex items-center gap-1 font-paragraph">
                    <User className="h-3 w-3" />
                    {selectedImage.photographer}
                  </span>
                )}
              </div>
              <Button 
                onClick={() => setSelectedImage(null)}
                className="mt-4 bg-buttonbackground text-buttonforeground hover:bg-buttonbackground/90"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="bg-secondary py-20">
        <div className="max-w-[100rem] mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl text-secondary-foreground mb-6">
            Be Part of Our Story
          </h2>
          <p className="font-paragraph text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our chapter and create memories while making a positive impact in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join">
              <Button className="bg-buttonbackground text-buttonforeground hover:bg-buttonbackground/90 px-8 py-3">
                Become a Member
              </Button>
            </Link>
            <Link to="/events">
              <Button variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary px-8 py-3">
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