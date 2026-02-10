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
    <div className="min-h-screen bg-background">
      {/* Video Hero - Top of Screen */}
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

      {/* Luxury Navigation */}
      <nav className="sticky top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/dm175CICJyCKctu3wiRCk9/sandbox/OKg6qhkFdz9kD72oDSPBZ8_1770653036118_na1fn_c3luZGljYS1sb2dv.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZG0xNzVDSUNKeUNLY3R1M3dpUkNrOS9zYW5kYm94L09LZzZxaGtGZHo5a0Q3Mm9EU1BCWjhfMTc3MDY1MzAzNjExOF9uYTFmbl9jM2x1WkdsallTMXNiMmR2LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=IvOLbMcUjFhVpQqj4JSuJKZ6TsoWr1-1sjbcIAPsUrXuQPdtlF7LthnqrnNDz7SgJci3dZv-hgLNfDWNcRvAIXqURSsT3j-PI1GUmLaK~UMthRQgz98TBiiAUro21ll7TBxekL5pA9rdz0hy5px31Uuw3ircA3f6abjmx2OLpsUi9d7MaGiA1NDzNeIalZpcuZVKoKCn0W-o7QTm8Atz9GiKTj-YR-8jVC58rE3JKjBU--XNZgnLDz~3q1jtrqJ8vNFuYpxG6jVY5nvDiOdjhfXLc3Wy1oaLHVwXOrs47PkWU0WGMgB9aMnte~YRZ2TsuRSGiLILnTzalsRxPbaCeA__"
                alt="Syndica Concierge Care Logo"
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</a>
              <a href="#insurance" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Insurance</a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</a>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6">
                Schedule Visit
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Luxury Medical Excellence */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 luxury-gradient"></div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <p className="text-sm font-semibold text-primary">Premium Patient-First Care</p>
              </div>
              <h1 className="text-gradient-pink">
                Restoring Your Time, Remodeling Your Care
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Syndica's Concierge Care restores your time with after-hours availability, direct provider access, and a growing network of specialists. You choose your appointment time, visit length, and desired outcomes—discussed first, not last. With 20-minute buffers between visits, we respect everyone's schedule equally. Extended appointments are available at premium rates to honor every patient's time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
                  <Video className="mr-2 h-5 w-5" />
                  Schedule Consult via Telehealth
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold px-8 py-6 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>
              <div className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground">
                  <strong>Important:</strong> Syndica Concierge Care provides complementary healthcare services and is not intended to replace your primary care physician. We work collaboratively to bridge gaps in healthcare access.
                </p>
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

      {/* Services Section - Luxury Cards */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">The Perfect Number</h2>
            <p className="text-lg text-muted-foreground">
              At Syndica, quality trumps quantity. Each provider maintains a carefully limited patient panel—because we believe the patient-provider relationship holds value beyond monetary gain. Provider-led. Patient-led. Outcome-driven.
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
                  <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/zBGpCfrbUIhNlpum.mp4" type="video/mp4" />
                </video>
              </div>
              <h3 className="text-2xl mb-4">Telehealth Consultations</h3>
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
                  <span className="text-sm">Trigger point injections</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Weight loss injections (GLP-1)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">In-home or clinic setting</span>
                </li>
              </ul>
            </Card>



            {/* Weight Loss */}
            <Card className="luxury-card group overflow-hidden">
              <div className="relative h-48 mb-6 -mx-6 -mt-6">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/dm175CICJyCKctu3wiRCk9/sandbox/Reo3OuBW3Vt6ssIDFcjb2G-img-1_1770733128000_na1fn_c2VydmljZS13ZWlnaHQtbG9zcy1zaG9wcGluZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZG0xNzVDSUNKeUNLY3R1M3dpUkNrOS9zYW5kYm94L1JlbzNPdUJXM1Z0NnNzSURGY2piMkctaW1nLTFfMTc3MDczMzEyODAwMF9uYTFmbl9jMlZ5ZG1salpTMTNaV2xuYUhRdGJHOXpjeTF6YUc5d2NHbHVady5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=e6V-s65GkgXev5EotR0i8Ld9OQkS6SZYcWvFZm9O3weHSPs7D35uyfwNf5sod8oODCJDU11uftDPxURwLe678vWxFw6ZK20e3jPHYTNHrMGiHP1wJKFpuurlYVsaivQ3GKHQWyohg5ayfb1goJKpOZFhCYlJBhyIDHiLcfNqVzGFM-OBEusNXeH9QV48ifHVbScSYMNAb6OKCWF5Ws4ke~n7AFdYLlHjeKaUYEhKyxiehoBYgc0URIUDRvStRGtGfLPKJZdRpNwdNQgWrsf0Nb4NojMrom4HJJ04lq6~-ce5D0j7dswvcJyb~M6P8b7SVi~NNigkSQMibhQ5k8vHqQ__"
                  alt="Weight Loss Success - Woman Shopping Smaller Sizes"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl mb-4">Weight Loss Programs</h3>
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

            {/* Men's Health */}
            <Card className="luxury-card group overflow-hidden">
              <div className="relative h-48 mb-6 -mx-6 -mt-6">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/DfpOdaRXuPlbmeiX.jpg"
                  alt="Andrew Bridges, NP - Men's Health Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl mb-4">Men's Health</h3>
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

            {/* Concierge Home Visits */}
            <Card className="luxury-card group overflow-hidden">
              <div className="relative h-48 mb-6 -mx-6 -mt-6">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/jKadmmNLlqNroclT.png"
                  alt="Andrew Bridges, NP - Concierge Care Provider"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl mb-4">Concierge Home Visits</h3>
              <p className="text-muted-foreground mb-6">
                In-person care in Aiken County. We come to you for parties of 3 or more, bringing professional healthcare to your location.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Home visits (3+ patients)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Group wellness events</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Corporate health services</span>
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
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto"
              >
                <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/KADuTeMxltymTloI.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="space-y-6">
              <h2 style={{ fontFamily: 'Playfair Display, serif' }}>Premium Concierge Care</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience healthcare on your terms with our exclusive concierge services. We bring professional medical care directly to your home in Aiken County, creating a spa-like atmosphere of comfort and luxury.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <HomeIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Let Syndica come to you</h4>
                    <p className="text-sm text-muted-foreground">Professional care in the comfort of your own home for parties of 3 or more</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Luxury Experience</h4>
                    <p className="text-sm text-muted-foreground">Premium medical care delivered with the elegance of a high-end spa</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Group Wellness</h4>
                    <p className="text-sm text-muted-foreground">Perfect for families, friends, or corporate wellness events</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                Schedule Concierge Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/bhzsFkprQfPBemlG.png"
                alt="Andrew Bridges, NP - Board-Certified Nurse Practitioner"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="mb-2">Andrew Bridges, NP</h2>
                <p className="text-xl text-primary font-semibold">Board-Certified Nurse Practitioner</p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Andrew Bridges is a board-certified Nurse Practitioner dedicated to bridging gaps in healthcare access throughout South Carolina. With extensive experience in primary care and specialized training in orthopedics and urology, Andrew brings a unique blend of clinical expertise and genuine compassion to every patient interaction.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Throughout his career, Andrew has built a reputation for taking the time to truly listen to his patients, thoroughly explaining conditions and treatment options, and providing consistent follow-up care. His clinical background spans multiple specialties, with a strong foundation in primary care complemented by focused experience in orthopedics—a specialty he particularly loves—and urology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Andrew's approach emphasizes collaboration with your existing healthcare team. Syndica Concierge Care is designed to complement your primary care physician by providing timely access to care when you need it most, specialized procedures, and convenient telehealth services throughout South Carolina.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">SC</p>
                  <p className="text-sm text-muted-foreground">Licensed</p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">NP</p>
                  <p className="text-sm text-muted-foreground">Board Certified</p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">GA</p>
                  <p className="text-sm text-muted-foreground">Spring 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">What Patients Say</h2>
            <p className="text-lg text-muted-foreground">
              Real feedback from verified patients who have experienced our gap-bridging care model
            </p>
          </div>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
            <CarouselItem className="md:basis-1/2">
              <Card className="luxury-card mx-2">
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
            <CarouselItem className="md:basis-1/2">
              <Card className="luxury-card mx-2">
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
            <CarouselItem className="md:basis-1/2">
              <Card className="luxury-card mx-2">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg text-foreground mb-4 italic">
                "What I love most is the consistent follow-up care. Andrew checks in to make sure treatments are working and adjusts as needed. It's refreshing to have a provider who's accessible when you need them."
              </p>
              <p className="text-sm text-muted-foreground font-semibold">Verified Patient, Telehealth</p>
            </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2">
              <Card className="luxury-card mx-2">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg text-foreground mb-4 italic">
                "When I couldn't get an appointment with my regular doctor for weeks, Andrew was able to see me quickly for an urgent issue. He worked with my PCP's office to coordinate care. This is exactly what healthcare should be."
              </p>
              <p className="text-sm text-muted-foreground font-semibold">Verified Patient, Concierge Care</p>
            </Card>
            </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* SimplePractice Platform Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Powered by SimplePractice</h2>
            <p className="text-lg text-muted-foreground">
              Your care is managed through SimplePractice, the industry-leading healthcare platform trusted by thousands of providers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="luxury-card">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">HIPAA-Compliant Security</h3>
              <p className="text-muted-foreground">Bank-level encryption and security protocols protect your sensitive health information at all times</p>
            </Card>
            <Card className="luxury-card">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Video className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Seamless Telehealth</h3>
              <p className="text-muted-foreground">High-quality video consultations with no downloads required - join from any device with one click</p>
            </Card>
            <Card className="luxury-card">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Patient Portal</h3>
              <p className="text-muted-foreground">Access your health records, treatment plans, and appointment history anytime from your secure portal</p>
            </Card>
            <Card className="luxury-card">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Online Scheduling</h3>
              <p className="text-muted-foreground">Book, reschedule, or cancel appointments online at your convenience without phone calls</p>
            </Card>
            <Card className="luxury-card">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Syringe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Digital Prescriptions</h3>
              <p className="text-muted-foreground">E-prescriptions sent directly to your preferred pharmacy for faster, more convenient medication pickup</p>
            </Card>
            <Card className="luxury-card">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Automated Reminders</h3>
              <p className="text-muted-foreground">Text and email appointment reminders ensure you never miss a visit or follow-up</p>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg" asChild>
              <a href="https://syndicasolutions.clientsecure.me" target="_blank" rel="noopener noreferrer">
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
            <h2 className="mb-6">Concierge Membership Tiers</h2>
            <p className="text-lg text-muted-foreground">
              Choose the membership level that fits your healthcare needs. All tiers include priority scheduling and direct provider access.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Essential Tier */}
            <Card className="luxury-card relative">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Essential</h3>
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-5xl font-bold text-primary">$199</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">Perfect for individuals seeking timely care</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Priority scheduling within 48 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Unlimited telehealth consultations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Direct provider messaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Standard appointment times (30 min)</span>
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

            {/* Premium Tier */}
            <Card className="luxury-card relative border-2 border-primary shadow-luxury">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Premium</h3>
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-5xl font-bold text-primary">$399</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">Comprehensive care with extended access</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Same-day or next-day scheduling</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Unlimited telehealth + in-office visits</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">24/7 direct provider access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Extended appointments (up to 60 min)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">After-hours availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Discounted aesthetic procedures (15% off)</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                Get Started
              </Button>
            </Card>

            {/* VIP Tier */}
            <Card className="luxury-card relative">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>VIP</h3>
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-5xl font-bold text-primary">$799</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">Ultimate concierge healthcare experience</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Immediate scheduling (within hours)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Unlimited visits (telehealth, office, home)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">24/7 concierge support line</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Flexible appointment length (your choice)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Priority home visit scheduling</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Complimentary aesthetic consultations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">VIP aesthetic pricing (25% off all procedures)</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                Get Started
              </Button>
            </Card>
          </div>
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-2">
              All memberships are month-to-month with no long-term contracts. Cancel anytime.
            </p>
            <p className="text-sm text-muted-foreground">
              Procedures, medications, and specialized services billed separately at member rates.
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
            {[
              { name: "Blue Cross Blue Shield", subtitle: "All major plans accepted" },
              { name: "Medicare", subtitle: "Medicare & Medicare Advantage" },
              { name: "Medicaid", subtitle: "South Carolina Medicaid" },
              { name: "Aetna", subtitle: "PPO, HMO, Open Choice" },
              { name: "UnitedHealthcare", subtitle: "All major plans" },
              { name: "Humana", subtitle: "PPO, HMO, Medicare" }
            ].map((insurance, idx) => (
              <Card key={idx} className="luxury-card text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{insurance.name}</h4>
                <p className="text-sm text-muted-foreground">{insurance.subtitle}</p>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-2">
              We also accept Cigna, Tricare, Wellcare, Molina, Ambetter, and many other carriers.
            </p>
            <p className="text-sm text-muted-foreground">
              Credentialed through SimplePractice. Please call to verify your specific plan coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Ready to bridge the gap in your healthcare? Contact us today.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="luxury-card">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl mb-2">Administrative</h3>
              <p className="text-muted-foreground mb-4">For scheduling, billing, and general inquiries</p>
              <a href="tel:8645235353" className="text-3xl font-bold text-primary hover:text-primary/80 transition-colors">
                864-523-5353
              </a>
              <p className="text-sm text-muted-foreground mt-2">Syndica Solutions</p>
            </Card>
            <Card className="luxury-card">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl mb-2">Clinical</h3>
              <p className="text-muted-foreground mb-4">Direct line for medical questions</p>
              <a href="tel:8033808893" className="text-3xl font-bold text-primary hover:text-primary/80 transition-colors">
                803-380-8893
              </a>
              <p className="text-sm text-muted-foreground mt-2">Leave a message if with a patient</p>
            </Card>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
              <Video className="mr-2 h-5 w-5" />
              Book Telehealth Visit
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold px-8 py-6 text-lg">
              <HomeIcon className="mr-2 h-5 w-5" />
              Request Home Visit
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about our gap-bridging telehealth and concierge care services
            </p>
          </div>

          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
            <CarouselItem>
              <Card className="p-8 hover:shadow-lg transition-shadow mx-2">
              <h3 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                What is gap-bridging healthcare?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Gap-bridging healthcare provides timely access to medical care when you can't wait weeks for a traditional appointment. We complement your primary care physician by offering same-day or next-day services for urgent needs, specialized procedures, and convenient telehealth consultations. We work collaboratively with your existing healthcare team, not as a replacement.
              </p>
            </Card>

            </CarouselItem>
            <CarouselItem>
              <Card className="p-8 hover:shadow-lg transition-shadow mx-2">
              <h3 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Do you accept my insurance?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We accept most major insurance carriers including Blue Cross Blue Shield, Medicare, Medicaid, Aetna, UnitedHealthcare, Humana, Cigna, Tricare, Wellcare, Molina, and Ambetter. We're credentialed through SimplePractice for two locations. Please call 864-523-5353 to verify your specific plan coverage before your visit.
              </p>
            </Card>

            </CarouselItem>
            <CarouselItem>
              <Card className="p-8 hover:shadow-lg transition-shadow mx-2">
              <h3 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                How does telehealth work?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our telehealth services are available throughout South Carolina (Georgia license coming soon). Schedule a virtual consultation via phone or video call for aesthetic consultations, medication refills, follow-up appointments, and non-urgent medical concerns. After your consultation, prescriptions can be sent directly to your pharmacy, and GLP-1 weight loss medications ship directly to your home.
              </p>
            </Card>

            </CarouselItem>
            <CarouselItem>
              <Card className="p-8 hover:shadow-lg transition-shadow mx-2">
              <h3 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Can you come to my home?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Yes! We provide in-home concierge visits in Aiken County for parties of three or more patients. This is perfect for families, group wellness events, or corporate health services. Home visits allow us to bring professional healthcare directly to your location with flexible scheduling. Call 864-523-5353 to arrange a home visit.
              </p>
            </Card>

            </CarouselItem>
            <CarouselItem>
              <Card className="p-8 hover:shadow-lg transition-shadow mx-2">
              <h3 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                What services do you provide?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We offer a comprehensive range of gap-bridging services:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Urgent Care:</strong> Sinus infections, UTIs, minor acute illnesses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Injections:</strong> Joint injections, trigger point injections, GLP-1 weight loss</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Telehealth:</strong> Virtual consultations, medication refills, follow-ups</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Weight Loss:</strong> Medical-grade GLP-1 programs with direct shipping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Aesthetics:</strong> Injectable treatments and skin rejuvenation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>ED Treatment:</strong> Prescription medications and consultations</span>
                </li>
              </ul>
            </Card>

            </CarouselItem>
            <CarouselItem>
              <Card className="p-8 hover:shadow-lg transition-shadow mx-2">
              <h3 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Will you replace my primary care doctor?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                No. Syndica Concierge Care is designed to complement your existing primary care physician, not replace them. We bridge gaps when you need timely care but can't wait weeks for an appointment. We work collaboratively with your PCP's office to coordinate care and ensure continuity. You should maintain your relationship with your primary care provider for ongoing comprehensive health management.
              </p>
            </Card>

            </CarouselItem>
            <CarouselItem>
              <Card className="p-8 hover:shadow-lg transition-shadow mx-2">
              <h3 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                How do I schedule an appointment?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Call our administrative line at <a href="tel:8645235353" className="text-primary hover:underline font-semibold">864-523-5353</a> (Syndica Solutions) for scheduling, billing, and general inquiries. For urgent medical questions, call our clinical line at <a href="tel:8033808893" className="text-primary hover:underline font-semibold">803-380-8893</a>. You may leave a message if I'm with a patient, and I'll return your call promptly.
              </p>
            </Card>

            </CarouselItem>
            <CarouselItem>
              <Card className="p-8 hover:shadow-lg transition-shadow mx-2">
              <h3 className="text-xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                What are your qualifications?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Andrew Bridges is a board-certified Nurse Practitioner with extensive experience in primary care and specialized training in orthopedics and urology. Licensed in South Carolina with a Georgia license coming soon, Andrew practices under a collaborative physician agreement as required by SC law. He maintains a 5.0 patient rating and is known for taking time to listen, thoroughly explaining conditions, and providing consistent follow-up care.
              </p>
            </Card>
            </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/dm175CICJyCKctu3wiRCk9/sandbox/OKg6qhkFdz9kD72oDSPBZ8_1770653036118_na1fn_c3luZGljYS1sb2dv.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZG0xNzVDSUNKeUNLY3R1M3dpUkNrOS9zYW5kYm94L09LZzZxaGtGZHo5a0Q3Mm9EU1BCWjhfMTc3MDY1MzAzNjExOF9uYTFmbl9jM2x1WkdsallTMXNiMmR2LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=IvOLbMcUjFhVpQqj4JSuJKZ6TsoWr1-1sjbcIAPsUrXuQPdtlF7LthnqrnNDz7SgJci3dZv-hgLNfDWNcRvAIXqURSsT3j-PI1GUmLaK~UMthRQgz98TBiiAUro21ll7TBxekL5pA9rdz0hy5px31Uuw3ircA3f6abjmx2OLpsUi9d7MaGiA1NDzNeIalZpcuZVKoKCn0W-o7QTm8Atz9GiKTj-YR-8jVC58rE3JKjBU--XNZgnLDz~3q1jtrqJ8vNFuYpxG6jVY5nvDiOdjhfXLc3Wy1oaLHVwXOrs47PkWU0WGMgB9aMnte~YRZ2TsuRSGiLILnTzalsRxPbaCeA__"
                alt="Syndica Concierge Care"
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-sm text-background/70">
                Premium telehealth and concierge medical services in South Carolina
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#services" className="hover:text-background transition-colors">Urgent Care</a></li>
                <li><a href="#services" className="hover:text-background transition-colors">Injections</a></li>
                <li><a href="#services" className="hover:text-background transition-colors">Telehealth</a></li>
                <li><a href="#services" className="hover:text-background transition-colors">Weight Loss</a></li>
                <li><a href="#services" className="hover:text-background transition-colors">Aesthetics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">About</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#about" className="hover:text-background transition-colors">Meet the Provider</a></li>
                <li><a href="#insurance" className="hover:text-background transition-colors">Insurance</a></li>
                <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="tel:8645235353" className="hover:text-background transition-colors">864-523-5353</a></li>
                <li><a href="tel:8033808893" className="hover:text-background transition-colors">803-380-8893</a></li>
                <li className="pt-2">Aiken County, SC</li>
                <li>Statewide Telehealth</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
            <p>&copy; 2026 Syndica Concierge Care. All rights reserved. | Andrew Bridges, NP</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
