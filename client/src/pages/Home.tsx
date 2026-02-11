import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { 
  Phone, 
  Video, 
  Home as HomeIcon, 
  Syringe, 
  Sparkles, 
  Heart, 
  CheckCircle2,
  Shield,
  Clock,
  Award,
  MapPin,
  Star,
  Check
} from "lucide-react";

/**
 * SYNDICA CONCIERGE CARE - LUXURY MEDICAL WEBSITE
 * 
 * Design Philosophy: Million-Dollar Medical Excellence
 * - Silver/White backgrounds for pristine elegance
 * - Black text for maximum sophistication
 * - Electric Pink accents for premium brand identity
 * - Playfair Display luxury serif headings
 * - Hyper-realistic professional photography
 * - NO EMOJIS - Icons and imagery only
 */

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative w-full h-screen">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/dpSDawtGmtTQDwuv.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        
        {/* Logo in upper left */}
        <div className="absolute top-8 left-8 z-20">
          <h1 className="text-4xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Syndica</h1>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="flex flex-col sm:flex-row gap-4 mt-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-7 text-lg shadow-2xl" asChild>
              <a href="https://syndicasolutions.clientsecure.me" target="_blank" rel="noopener noreferrer">
                <Video className="mr-2 h-6 w-6" />
                Schedule Consult via Telehealth
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-10 py-7 text-lg shadow-2xl backdrop-blur-sm" asChild>
              <a href="tel:8033808893">
                <Phone className="mr-2 h-6 w-6" />
                Call Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-10 py-7 text-lg shadow-2xl backdrop-blur-sm" asChild>
              <a href="https://app.syndicasolutions.com" target="_blank" rel="noopener noreferrer">
                Patient Portal
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                Bridging Gaps in Your Healthcare
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Syndica's Concierge Care aims to restore your time. With after-hours availability for members, a direct line to your provider, and more specialists joining each month, we aim to remodel the healthcare experience. You pick your time and day, you pick the length of visit, and your desired outcome is the first thing discussed. There is a 20-minute window between visits for each provider. Patients who elect to go over their chosen time will pay a premium rate by the minute—because we value everyone's time equally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
                  Book Appointment
                </Button>
                <Button size="lg" variant="outline" className="border-2 font-semibold px-8 py-6 text-lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-luxury">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" 
                alt="Modern medical facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">The Perfect Number</h2>
            <p className="text-lg text-muted-foreground">
              Syndica cares more about you than the numbers. Each provider is capped at a number of members pre-agreed upon. We believe there is value in the patient-provider relationship that exceeds that of monetary gain. Provider-led. Patient-led. Outcome-driven.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Resting Bliss Face - Signature Service */}
            <Card className="luxury-card group overflow-hidden">
              <div className="relative h-48 mb-6 -mx-6 -mt-6">
                <video 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/iBekSUnWPGXzTNTY.mp4" type="video/mp4" />
                </video>
              </div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Resting Bliss Face</h3>
              <p className="text-muted-foreground mb-6">
                Our signature full-face aesthetic treatment. Achieve that serene, blissful expression that radiates confidence and tranquility.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Comprehensive facial rejuvenation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Natural, balanced results</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Expert injection techniques</span>
                </li>
              </ul>
            </Card>

            {/* Telehealth */}
            <Card className="luxury-card group overflow-hidden">
              <div className="relative h-48 mb-6 -mx-6 -mt-6">
                <video 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/bBHWoJXPVzgIFYfh.mp4" type="video/mp4" />
                </video>
              </div>
              <h3 className="text-2xl mb-4">Telehealth</h3>
              <p className="text-muted-foreground mb-6">
                Virtual consultations from the comfort of your home. Professional care without the commute.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Convenient video appointments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Same-day availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">South Carolina licensed (Spring 2026)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Georgia license coming soon</span>
                </li>
              </ul>
            </Card>

            {/* Injections & Procedures */}
            <Card className="luxury-card group overflow-hidden">
              <div className="relative h-48 mb-6 -mx-6 -mt-6">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/vyfaqFIbFdyHKwPv.png"
                  alt="Professional Aesthetic Injection Treatment"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl mb-4">Injections & Procedures</h3>
              <p className="text-muted-foreground mb-6">
                Specialized procedures without the specialist wait time. Professional treatment for pain management and therapeutic needs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Joint injections</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Trigger point therapy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Therapeutic procedures</span>
                </li>
              </ul>
            </Card>

            {/* Weight Loss */}
            <Card className="luxury-card group overflow-hidden">
              <div className="relative h-48 mb-6 -mx-6 -mt-6">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/ZCfYqRCNYlGZLbON.png"
                  alt="Weight Loss Success"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl mb-4">Weight Loss (GLP-1)</h3>
              <p className="text-muted-foreground mb-6">
                Medical weight management with proven GLP-1 medications. Sustainable results with professional guidance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Semaglutide & Tirzepatide programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Personalized treatment plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Ongoing support & monitoring</span>
                </li>
              </ul>
            </Card>

            {/* Men's Health */}
            <Card className="luxury-card group overflow-hidden">
              <div className="relative h-48 mb-6 -mx-6 -mt-6">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/DfJqKkJnqYOtTkRk.png"
                  alt="Men's Health Consultation"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl mb-4">Men's Health</h3>
              <p className="text-muted-foreground mb-6">
                Confidential treatment for ED, testosterone optimization, and men's wellness concerns.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Erectile dysfunction treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Testosterone therapy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Discreet, professional care</span>
                </li>
              </ul>
            </Card>

            {/* Concierge Home Visits */}
            <Card className="luxury-card group overflow-hidden">
              <div className="relative h-48 mb-6 -mx-6 -mt-6">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/lqCTNXTqKVsZRWzk.png"
                  alt="Concierge Home Visit"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl mb-4">Concierge Home Visits</h3>
              <p className="text-muted-foreground mb-6">
                Premium in-home healthcare services. We bring the clinic to you for ultimate convenience.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Private in-home consultations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Group services (parties of 3+)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Flexible scheduling</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Concierge Video Showcase */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-luxury">
              <video 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/qGGKdWZnxJBLCPDN.mp4" type="video/mp4" />
              </video>
            </div>
            <div>
              <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Experience Concierge Care</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Syndica brings premium healthcare directly to your home. Whether you're hosting a wellness party or prefer the privacy of in-home consultations, our concierge service delivers the same exceptional care you'd receive in our clinic—in the comfort of your own space.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <HomeIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Let Syndica come to you</h4>
                    <p className="text-sm text-muted-foreground">Professional care in the comfort of your own home for parties of 3 or more</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Aesthetic Parties</h4>
                    <p className="text-sm text-muted-foreground">Host a wellness event with friends and receive exclusive group pricing</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Personalized Attention</h4>
                    <p className="text-sm text-muted-foreground">Dedicated time with your provider in a private, relaxed setting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Provider Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-luxury">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/lqCTNXTqKVsZRWzk.png"
                alt="Andrew Bridges, NP"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Meet Andrew Bridges, NP</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Andrew Bridges is a board-certified Nurse Practitioner dedicated to providing personalized, patient-first healthcare. With extensive experience in aesthetic medicine, men's health, and comprehensive primary care, Andrew founded Syndica to bridge the gaps in traditional healthcare delivery.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                His philosophy is simple: quality over quantity. By limiting patient panels and prioritizing meaningful provider-patient relationships, Syndica delivers the attentive care you deserve—when you need it, not weeks from now.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Board Certified</h4>
                    <p className="text-sm text-muted-foreground">Licensed Nurse Practitioner</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Multi-State Licensed</h4>
                    <p className="text-sm text-muted-foreground">SC & GA (Spring 2026)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SimplePractice Platform Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Powered by SimplePractice</h2>
            <p className="text-lg text-muted-foreground">
              Your healthcare experience is streamlined through our secure, HIPAA-compliant patient portal. Everything you need in one place.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="luxury-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">HIPAA-Secure Platform</h3>
                  <p className="text-muted-foreground">Your health information is protected with bank-level encryption and security</p>
                </div>
              </div>
            </Card>
            <Card className="luxury-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Seamless Telehealth</h3>
                  <p className="text-muted-foreground">High-quality video consultations directly through your patient portal</p>
                </div>
              </div>
            </Card>
            <Card className="luxury-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Portal Access</h3>
                  <p className="text-muted-foreground">View records, message your provider, and manage appointments anytime</p>
                </div>
              </div>
            </Card>
            <Card className="luxury-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Online Scheduling</h3>
                  <p className="text-muted-foreground">Book, reschedule, or cancel appointments with just a few clicks</p>
                </div>
              </div>
            </Card>
            <Card className="luxury-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Syringe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Digital Prescriptions</h3>
                  <p className="text-muted-foreground">E-prescriptions sent directly to your preferred pharmacy</p>
                </div>
              </div>
            </Card>
            <Card className="luxury-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Automated Reminders</h3>
                  <p className="text-muted-foreground">Never miss an appointment with text and email notifications</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-lg" asChild>
              <a href="https://app.syndicasolutions.com" target="_blank" rel="noopener noreferrer">
                Access Patient Portal
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Membership Pricing Section */}
      <section id="pricing" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Affordable Concierge Membership Tiers</h2>
            <p className="text-lg text-muted-foreground">
              Quality healthcare shouldn't be out of reach. Choose the membership level that fits your needs and budget.
            </p>
          </div>
          
          {/* Basic Health Tiers */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Basic Health Memberships</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Essential - $29 */}
              <Card className="luxury-card relative">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Essential</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-5xl font-bold text-primary">$29</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Perfect for basic healthcare needs</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">2 telehealth visits per month (15 min each)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Scheduling within 5 business days</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Portal messaging (48hr response)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Insurance accepted for services</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                  Get Started
                </Button>
              </Card>

              {/* Premium - $49 */}
              <Card className="luxury-card relative border-2 border-primary shadow-luxury">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Premium</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-5xl font-bold text-primary">$49</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Enhanced care with priority access</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">4 visits per month (telehealth or office, 20 min each)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Priority scheduling within 48 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Direct provider messaging (24hr response)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">After-hours texting (urgent matters)</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                  Get Started
                </Button>
              </Card>

              {/* VIP - $99 */}
              <Card className="luxury-card relative">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>VIP</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-5xl font-bold text-primary">$99</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Unlimited basic healthcare access</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Unlimited telehealth & office visits (30 min each)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Same-day or next-day scheduling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">24/7 direct provider access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">After-hours availability</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                  Get Started
                </Button>
              </Card>
            </div>
          </div>

          {/* Health + Aesthetics Tiers */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Health + Aesthetics Memberships</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Essential Plus - $99 */}
              <Card className="luxury-card relative">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Essential Plus</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-5xl font-bold text-primary">$99</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Basic health + aesthetic perks</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">All Essential Health benefits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">15% off all aesthetic procedures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Complimentary aesthetic consultations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Priority aesthetic booking</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                  Get Started
                </Button>
              </Card>

              {/* Premium Plus - $299 */}
              <Card className="luxury-card relative border-2 border-primary shadow-luxury">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-sm font-semibold">
                  Best Value
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Premium Plus</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-5xl font-bold text-primary">$299</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Comprehensive care + aesthetic treatments</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">All Premium Health benefits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">$200 monthly aesthetic credit included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">25% off additional aesthetic procedures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Same-day aesthetic appointments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Extended appointment times (45 min)</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                  Get Started
                </Button>
              </Card>

              {/* VIP Plus - $479 */}
              <Card className="luxury-card relative">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>VIP Plus</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-5xl font-bold text-primary">$479</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Ultimate concierge experience</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">All VIP Health benefits (unlimited visits)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">$400 monthly aesthetic credit included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">30% off all aesthetic procedures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Priority home visit scheduling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Flexible appointment length (your choice)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Complimentary quarterly aesthetic treatments</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                  Get Started
                </Button>
              </Card>
            </div>
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-2">
              All memberships are month-to-month with no long-term contracts. Cancel anytime.
            </p>
            <p className="text-sm text-muted-foreground">
              Additional services, procedures, and medications billed separately at member rates. Overtime charges apply at $2/minute beyond scheduled appointment time.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section id="insurance" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Insurance & Payment</h2>
            <p className="text-lg text-muted-foreground">
              We accept most major insurance carriers and offer flexible payment options
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Card className="luxury-card flex items-center justify-center p-6">
              <p className="font-semibold text-center">Blue Cross Blue Shield</p>
            </Card>
            <Card className="luxury-card flex items-center justify-center p-6">
              <p className="font-semibold text-center">Aetna</p>
            </Card>
            <Card className="luxury-card flex items-center justify-center p-6">
              <p className="font-semibold text-center">Cigna</p>
            </Card>
            <Card className="luxury-card flex items-center justify-center p-6">
              <p className="font-semibold text-center">UnitedHealthcare</p>
            </Card>
            <Card className="luxury-card flex items-center justify-center p-6">
              <p className="font-semibold text-center">Humana</p>
            </Card>
            <Card className="luxury-card flex items-center justify-center p-6">
              <p className="font-semibold text-center">Medicare</p>
            </Card>
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Don't see your insurance? Contact us to verify coverage.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about Syndica Concierge Care
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <Card className="luxury-card">
                    <h3 className="text-xl font-semibold mb-4">What makes Syndica different from traditional healthcare?</h3>
                    <p className="text-muted-foreground">
                      Syndica prioritizes quality over quantity. We limit patient panels to ensure you receive personalized attention and timely care. No more waiting weeks for appointments—we're here when you need us, with direct provider access and flexible scheduling.
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="luxury-card">
                    <h3 className="text-xl font-semibold mb-4">Do you accept insurance?</h3>
                    <p className="text-muted-foreground">
                      Yes! We accept most major insurance carriers including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, Humana, and Medicare. Your membership fee covers concierge services, while medical services are billed through insurance.
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="luxury-card">
                    <h3 className="text-xl font-semibold mb-4">Can I cancel my membership anytime?</h3>
                    <p className="text-muted-foreground">
                      Absolutely. All memberships are month-to-month with no long-term contracts. You can cancel anytime with no penalties or fees. We believe in earning your trust every month.
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="luxury-card">
                    <h3 className="text-xl font-semibold mb-4">What happens if I go over my appointment time?</h3>
                    <p className="text-muted-foreground">
                      We respect everyone's time equally. If you choose to extend your appointment beyond the scheduled time, there's a $2 per minute charge. This ensures fairness for all patients and helps us maintain our commitment to punctual, quality care.
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="luxury-card">
                    <h3 className="text-xl font-semibold mb-4">Are aesthetic procedures included in my membership?</h3>
                    <p className="text-muted-foreground">
                      It depends on your tier. Essential Plus members receive 15% off procedures. Premium Plus members get $200 monthly credit plus 25% off additional treatments. VIP Plus members receive $400 monthly credit, 30% off all procedures, and complimentary quarterly treatments.
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="luxury-card">
                    <h3 className="text-xl font-semibold mb-4">Do you offer home visits?</h3>
                    <p className="text-muted-foreground">
                      Yes! Our concierge home visit service brings professional healthcare to your location. Perfect for aesthetic parties (groups of 3+), private consultations, or when you prefer the comfort of your own space. Available for Premium and VIP tier members.
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="luxury-card">
                    <h3 className="text-xl font-semibold mb-4">What areas do you serve?</h3>
                    <p className="text-muted-foreground">
                      We currently serve patients throughout South Carolina with telehealth and in-person services. Georgia licensure is coming Spring 2026. Concierge home visits are available within our service radius—contact us to confirm your location.
                    </p>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="luxury-card">
                    <h3 className="text-xl font-semibold mb-4">How quickly can I get an appointment?</h3>
                    <p className="text-muted-foreground">
                      It depends on your membership tier. Essential members are seen within 5 business days. Premium members get priority scheduling within 48 hours. VIP members receive same-day or next-day appointments. Emergency situations are always prioritized.
                    </p>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">What Our Patients Say</h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from real patients
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <Card className="luxury-card">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-lg text-foreground mb-4 italic">
                      "Andrew talks fast but he truly takes the time to listen. He doesn't rush through appointments and makes sure I understand everything about my treatment plan. It's rare to find a provider who genuinely cares."
                    </p>
                    <p className="text-sm text-muted-foreground font-semibold">Verified Patient, Aiken County</p>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="luxury-card">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-lg text-foreground mb-4 italic">
                      "I've been to many providers over the years, and Andy stands out for his clinical knowledge and attention to detail. He thoroughly explains conditions and treatment options, which I really appreciate."
                    </p>
                    <p className="text-sm text-muted-foreground font-semibold">Verified Patient, South Carolina</p>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="luxury-card">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-lg text-foreground mb-4 italic">
                      "The aesthetic results are exactly what I wanted—natural and subtle. Andrew has an artistic eye and really understands facial proportions. I finally found someone I trust completely."
                    </p>
                    <p className="text-sm text-muted-foreground font-semibold">Verified Patient, Columbia Area</p>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="luxury-card">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-lg text-foreground mb-4 italic">
                      "The convenience of telehealth combined with the option for in-person visits when needed is perfect. And knowing I can reach my provider directly instead of going through layers of staff is invaluable."
                    </p>
                    <p className="text-sm text-muted-foreground font-semibold">Verified Patient, Charleston</p>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">
              Ready to experience healthcare done differently? Contact us today.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="luxury-card text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground mb-4">Call us directly</p>
              <a href="tel:8033808893" className="text-primary hover:underline font-semibold">
                (803) 380-8893
              </a>
            </Card>
            <Card className="luxury-card text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Video className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Schedule Online</h3>
              <p className="text-muted-foreground mb-4">Book your appointment</p>
              <a href="https://syndicasolutions.clientsecure.me" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                SimplePractice Portal
              </a>
            </Card>
            <Card className="luxury-card text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground mb-4">Serving South Carolina</p>
              <p className="text-primary font-semibold">
                Telehealth & Home Visits
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Syndica</h2>
            <p className="text-muted-foreground mb-6">
              Concierge Care • South Carolina
            </p>
            <div className="flex justify-center gap-8 mb-8">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
              <a href="#insurance" className="text-muted-foreground hover:text-primary transition-colors">Insurance</a>
              <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 Syndica Concierge Care. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
