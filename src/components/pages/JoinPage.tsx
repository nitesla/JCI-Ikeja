import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, CheckCircle, Users, Heart, Target } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { NewMemberInterests } from '@/entities';

export default function JoinPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    occupation: '',
    reasonForInterest: '',
    preferredContactMethod: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const newMemberData: NewMemberInterests = {
        _id: crypto.randomUUID(),
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        occupation: formData.occupation,
        reasonForInterest: formData.reasonForInterest,
        preferredContactMethod: formData.preferredContactMethod,
        submissionDate: new Date()
      };

      await BaseCrudService.create('newmemberinterests', newMemberData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="w-full px-6 py-4 flex justify-between items-center bg-primary">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              <Image 
                src="https://static.wixstatic.com/media/eafe55_7d49dbb22ce84b0faaabb2d7bccc253a~mv2.jpg"
                alt="JCI Ikeja Logo"
                width={120}
                className="h-12 w-auto"
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
        </nav>

        {/* Success Message */}
        <div className="min-h-[80vh] flex items-center justify-center px-6">
          <div className="text-center max-w-2xl">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="font-heading text-4xl text-foreground mb-4">Thank You!</h1>
            <p className="font-paragraph text-xl text-foreground/80 mb-8 leading-relaxed">
              Your membership interest has been submitted successfully. Our team will review your 
              application and contact you soon with next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="bg-buttonbackground text-buttonforeground hover:bg-buttonbackground/90 px-8 py-3">
                  Return Home
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-3">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
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
              src="https://static.wixstatic.com/media/eafe55_7d49dbb22ce84b0faaabb2d7bccc253a~mv2.jpg"
              alt="JCI Ikeja Logo"
              width={120}
              className="h-12 w-auto"
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
            Join Our
            <span className="block italic">Chapter</span>
          </h1>
          <p className="font-paragraph text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Become part of a dynamic community of young leaders committed to creating positive 
            change in Ikeja and beyond through service, leadership, and fellowship.
          </p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-foreground mb-6">Why Join JCI Ikeja?</h2>
            <p className="font-paragraph text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Discover the benefits of being part of our vibrant community of young professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-4">Leadership Development</h3>
              <p className="font-paragraph text-foreground/80 leading-relaxed">
                Develop essential leadership skills through training programs, workshops, and 
                hands-on experience in managing projects and events.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-4">Community Impact</h3>
              <p className="font-paragraph text-foreground/80 leading-relaxed">
                Make a meaningful difference in your community through service projects, 
                advocacy initiatives, and social impact programs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-4">Professional Growth</h3>
              <p className="font-paragraph text-foreground/80 leading-relaxed">
                Expand your professional network, gain valuable skills, and access career 
                development opportunities through our global network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="bg-secondary py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl text-secondary-foreground mb-6">
                Express Your Interest
              </h2>
              <p className="font-paragraph text-lg text-secondary-foreground/80 leading-relaxed">
                Fill out the form below to express your interest in joining our chapter. 
                We'll contact you with more information about membership requirements and next steps.
              </p>
            </div>

            <Card className="bg-background border-bordersubtle">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName" className="font-paragraph text-foreground mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        required
                        className="font-paragraph"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-paragraph text-foreground mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="font-paragraph"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phoneNumber" className="font-paragraph text-foreground mb-2 block">
                        Phone Number *
                      </Label>
                      <Input
                        id="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                        required
                        className="font-paragraph"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="occupation" className="font-paragraph text-foreground mb-2 block">
                        Occupation *
                      </Label>
                      <Input
                        id="occupation"
                        type="text"
                        value={formData.occupation}
                        onChange={(e) => handleInputChange('occupation', e.target.value)}
                        required
                        className="font-paragraph"
                        placeholder="Enter your occupation"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="preferredContactMethod" className="font-paragraph text-foreground mb-2 block">
                      Preferred Contact Method *
                    </Label>
                    <Select value={formData.preferredContactMethod} onValueChange={(value) => handleInputChange('preferredContactMethod', value)}>
                      <SelectTrigger className="font-paragraph">
                        <SelectValue placeholder="Select your preferred contact method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="reasonForInterest" className="font-paragraph text-foreground mb-2 block">
                      Why are you interested in joining JCI Ikeja? *
                    </Label>
                    <Textarea
                      id="reasonForInterest"
                      value={formData.reasonForInterest}
                      onChange={(e) => handleInputChange('reasonForInterest', e.target.value)}
                      required
                      className="font-paragraph min-h-[120px]"
                      placeholder="Tell us about your motivation for joining and what you hope to contribute to our chapter..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-buttonbackground text-buttonforeground hover:bg-buttonbackground/90 py-3"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Interest Form'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Requirements */}
      <section className="py-20">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-foreground mb-6">Membership Requirements</h2>
            <p className="font-paragraph text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              To become a member of JCI Ikeja, you must meet the following criteria:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-heading text-xl font-bold">18</span>
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">Age Range</h3>
              <p className="font-paragraph text-foreground/80">
                Between 18 and 40 years old
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">Commitment</h3>
              <p className="font-paragraph text-foreground/80">
                Dedication to community service
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">Leadership</h3>
              <p className="font-paragraph text-foreground/80">
                Desire to develop leadership skills
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">Values</h3>
              <p className="font-paragraph text-foreground/80">
                Alignment with JCI values and mission
              </p>
            </div>
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