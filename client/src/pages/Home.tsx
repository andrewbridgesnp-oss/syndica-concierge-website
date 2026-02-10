import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Video, Heart, Award, MapPin, Shield, Home as HomeIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Video Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/KADuTeMxltymTloI.mp4" type="video/mp4" />
        </video>
        
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        
        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Syndica Concierge Care
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8">
              Premium Patient-First Care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                Schedule Consult via Telehealth
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                Call Now: 803-380-8893
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/kBvqzrsHGjtdvJjS.png" 
                alt="Syndica Concierge Care Logo" 
                className="h-10 w-auto"
              />
              <span className="font-semibold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>Syndica Concierge Care</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
              <a href="#insurance" className="text-sm font-medium hover:text-primary transition-colors">Insurance</a>
              <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive healthcare solutions designed to bridge gaps in access and availability. From aesthetic treatments to urgent care, we're here when you need us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Aesthetics (Resting Bliss Face) */}
            <Card className="luxury-card group overflow-hidden">
              <div className="relative h-48 mb-6 -mx-6 -mt-6">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/lRqJMPFLHQksfqsG.png"
                  alt="Andrew Bridges, NP - Aesthetic Injectable Specialist"
                  className="w-full h-full object-cover"
                />
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
                  <span className="text-sm">Strategic injectable placement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Natural, refreshed appearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Personalized treatment protocol</span>
                </li>
              </ul>
            </Card>

            {/* 2. Weight Loss (GLP-1 Programs) */}
            <Card className="luxury-card group overflow-hidden">
              <div className="relative h-48 mb-6 -mx-6 -mt-6">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/WnkPQnEAOylVUJYT.jpg"
                  alt="Weight Loss GLP-1 Programs"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Weight Loss Programs</h3>
              <p className="text-muted-foreground mb-6">
                Medical-grade weight loss treatments including GLP-1 medications that ship directly to you. Professional oversight throughout your journey.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">GLP-1 injections (ships directly)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Personalized treatment plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Ongoing monitoring & support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Telehealth consultations</span>
                </li>
              </ul>
            </Card>

            {/* 3. Men's Health (ED, Testosterone) */}
            <Card className="luxury-card group overflow-hidden">
              <div className="relative h-48 mb-6 -mx-6 -mt-6">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/ptbJszUIxKKgLfAo.jpg"
                  alt="Men's Health Services - Erectile Dysfunction & Testosterone"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Men's Health</h3>
              <p className="text-muted-foreground mb-6">
                Discreet, professional men's health services. Erectile dysfunction treatment, testosterone management, and preventive care.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">ED medication prescriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Testosterone therapy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Confidential telehealth consultations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Preventive health screening</span>
                </li>
              </ul>
            </Card>

            {/* 4. Telehealth (Virtual Consultations) */}
            <Card className="luxury-card group overflow-hidden">
              <div className="relative h-48 mb-6 -mx-6 -mt-6">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/GsyCskLswxaUwPeR.png"
                  alt="Andrew Bridges, NP - Telehealth Provider"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Telehealth Consultations</h3>
              <p className="text-muted-foreground mb-6">
                Virtual visits throughout South Carolina. Convenient access to professional healthcare from your home or office.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Statewide virtual consultations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Aesthetic consultations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Follow-up appointments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Georgia license coming soon</span>
                </li>
              </ul>
            </Card>

            {/* 5. Injections (Non-Aesthetic: Joint/Trigger Point) */}
            <Card className="luxury-card group overflow-hidden">
              <div className="relative h-48 mb-6 -mx-6 -mt-6">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/iyUWaEGpKtxNseST.png"
                  alt="Therapeutic Injections - Joint & Trigger Point"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Therapeutic Injections</h3>
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
                  <span className="text-sm">Trigger point injections</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Pain management therapy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">In-home or clinic setting</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <p className="text-sm font-semibold text-primary">Board-Certified Nurse Practitioner</p>
              </div>
              <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Meet Andrew Bridges, NP</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Andrew Bridges brings extensive clinical experience across primary care, orthopedics, and urology to Syndica Concierge Care. As a board-certified nurse practitioner, he understands the frustration of waiting weeks for appointments when health concerns demand immediate attention.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                His practice philosophy centers on bridging gaps in healthcare access—not replacing your primary care physician, but complementing your existing care team when timing and availability create barriers to treatment.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-semibold">Board Certified</p>
                  <p className="text-sm text-muted-foreground">Nurse Practitioner</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-semibold">SC Licensed</p>
                  <p className="text-sm text-muted-foreground">GA Coming Soon</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-semibold">Patient-First</p>
                  <p className="text-sm text-muted-foreground">Care Philosophy</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-luxury">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/GsyCskLswxaUwPeR.png"
                  alt="Andrew Bridges, NP - Board-Certified Nurse Practitioner"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Service Area</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive telehealth throughout South Carolina, with in-person concierge care in Aiken County
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="luxury-card text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Video className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Statewide Telehealth</h3>
              <p className="text-muted-foreground">
                Virtual consultations available throughout South Carolina. Georgia license coming soon.
              </p>
            </Card>
            <Card className="luxury-card text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <HomeIcon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Aiken County Concierge</h3>
              <p className="text-muted-foreground">
                In-person home visits for parties of 3 or more patients in Aiken County.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section id="insurance" className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Insurance & Payment</h2>
            <p className="text-lg text-muted-foreground">
              We accept most major insurance carriers. SimplePractice will credential us for two locations to maximize your coverage options.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              'Blue Cross Blue Shield',
              'Medicare',
              'Medicaid',
              'Aetna',
              'UnitedHealthcare',
              'Humana',
              'Cigna',
              'Tricare'
            ].map((insurance) => (
              <Card key={insurance} className="luxury-card text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <p className="font-semibold">{insurance}</p>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8">
            Don't see your insurance? Contact us to verify coverage.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our gap-bridging healthcare model
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="luxury-card">
              <div className="flex items-start gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">What is gap-bridging healthcare?</h3>
              </div>
              <p className="text-muted-foreground">
                We provide timely care when your regular doctor's schedule doesn't align with your health needs. We complement—not replace—your primary care physician.
              </p>
            </Card>
            <Card className="luxury-card">
              <div className="flex items-start gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Do you accept insurance?</h3>
              </div>
              <p className="text-muted-foreground">
                Yes! We accept most major insurance carriers including BCBS, Medicare, Medicaid, Aetna, UnitedHealthcare, Humana, Cigna, and Tricare.
              </p>
            </Card>
            <Card className="luxury-card">
              <div className="flex items-start gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">How does telehealth work?</h3>
              </div>
              <p className="text-muted-foreground">
                Schedule a virtual consultation via phone or video. Available statewide in South Carolina for aesthetic consults, follow-ups, and medication management.
              </p>
            </Card>
            <Card className="luxury-card">
              <div className="flex items-start gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Do you make home visits?</h3>
              </div>
              <p className="text-muted-foreground">
                Yes! In Aiken County, we provide in-home concierge care for parties of 3 or more patients. Perfect for families or group wellness events.
              </p>
            </Card>
            <Card className="luxury-card">
              <div className="flex items-start gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">What services do you offer?</h3>
              </div>
              <p className="text-muted-foreground">
                Aesthetic treatments, weight loss programs, men's health, telehealth consultations, therapeutic injections, and urgent care for non-emergency conditions.
              </p>
            </Card>
            <Card className="luxury-card">
              <div className="flex items-start gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Will you work with my PCP?</h3>
              </div>
              <p className="text-muted-foreground">
                Absolutely. We collaborate with your existing care team and can share records with your primary care physician to ensure coordinated care.
              </p>
            </Card>
            <Card className="luxury-card">
              <div className="flex items-start gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">How do I schedule an appointment?</h3>
              </div>
              <p className="text-muted-foreground">
                Call our clinical line at <a href="tel:803-380-8893" className="text-primary hover:underline">803-380-8893</a> or administrative line at <a href="tel:864-523-5353" className="text-primary hover:underline">864-523-5353</a>. You may leave a message if we're with a patient.
              </p>
            </Card>
            <Card className="luxury-card">
              <div className="flex items-start gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">What are your qualifications?</h3>
              </div>
              <p className="text-muted-foreground">
                Andrew Bridges is a board-certified nurse practitioner with extensive experience in primary care, orthopedics, and urology. Licensed in South Carolina with Georgia license coming soon.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Ready to experience premium patient-first care? Contact us today.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="luxury-card text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Phone className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Clinical Line</h3>
              <p className="text-muted-foreground mb-4">
                For medical questions and patient care
              </p>
              <a href="tel:803-380-8893" className="text-2xl font-bold text-primary hover:underline">
                803-380-8893
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                May leave message if with a patient
              </p>
            </Card>
            <Card className="luxury-card text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Phone className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Administrative Line</h3>
              <p className="text-muted-foreground mb-4">
                For scheduling and billing inquiries
              </p>
              <a href="tel:864-523-5353" className="text-2xl font-bold text-primary hover:underline">
                864-523-5353
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Syndica Solutions admin support
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Syndica Concierge Care</h4>
              <p className="text-sm text-muted-foreground">
                Premium patient-first healthcare bridging gaps in access and availability.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                <li><a href="#insurance" className="text-muted-foreground hover:text-primary transition-colors">Insurance</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Clinical: <a href="tel:803-380-8893" className="hover:text-primary transition-colors">803-380-8893</a></li>
                <li>Admin: <a href="tel:864-523-5353" className="hover:text-primary transition-colors">864-523-5353</a></li>
                <li>Serving Aiken County & SC Statewide</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Syndica Concierge Care. All rights reserved. | Licensed in South Carolina</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
