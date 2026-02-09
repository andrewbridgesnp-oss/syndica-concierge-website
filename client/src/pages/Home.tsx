import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
  Star
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
      {/* Luxury Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
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
                <p className="text-sm font-semibold text-primary">Premium Healthcare When You Need It</p>
              </div>
              <h1 className="text-gradient-pink">
                Bridging Gaps in Your Healthcare
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Professional healthcare services for when you need care now, not in five weeks. Complementing your primary care physician with timely access to treatment, procedures, and specialized services throughout South Carolina.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
                  <Video className="mr-2 h-5 w-5" />
                  Start Telehealth Visit
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
            <h2 className="mb-6">Gap-Bridging Healthcare</h2>
            <p className="text-lg text-muted-foreground">
              Timely access to care when your schedule and health needs don't align with traditional appointment availability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Urgent Care */}
            <Card className="luxury-card group">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:pink-glow transition-all">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl mb-4">Urgent Care Access</h3>
              <p className="text-muted-foreground mb-6">
                When you can't wait weeks for an appointment. Sinus infections, UTIs, minor acute illnesses treated promptly.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Acute illness treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Same-day or next-day availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Antibiotic prescriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Not emergency care (call 911 for emergencies)</span>
                </li>
              </ul>
            </Card>

            {/* Injections & Procedures */}
            <Card className="luxury-card group">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:pink-glow transition-all">
                <Syringe className="h-6 w-6 text-primary" />
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

            {/* Telehealth */}
            <Card className="luxury-card group">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:pink-glow transition-all">
                <Video className="h-6 w-6 text-primary" />
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

            {/* Weight Loss */}
            <Card className="luxury-card group">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:pink-glow transition-all">
                <Heart className="h-6 w-6 text-primary" />
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

            {/* Aesthetics */}
            <Card className="luxury-card group">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:pink-glow transition-all">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl mb-4">Aesthetic Treatments</h3>
              <p className="text-muted-foreground mb-6">
                Medical-grade aesthetic services with professional expertise. Look and feel your best with evidence-based treatments.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Injectable aesthetic treatments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Skin rejuvenation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Personalized treatment plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Medical-grade products</span>
                </li>
              </ul>
            </Card>

            {/* Concierge Home Visits */}
            <Card className="luxury-card group">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:pink-glow transition-all">
                <HomeIcon className="h-6 w-6 text-primary" />
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

      {/* Luxury Image Showcase - GLP-1 */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/dm175CICJyCKctu3wiRCk9/sandbox/TZvTdamDA0BxkgAlgqXvZu-img-3_1770653392000_na1fn_bHV4dXJ5LWluamVjdGlvbi1jbG9zZXVw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZG0xNzVDSUNKeUNLY3R1M3dpUkNrOS9zYW5kYm94L1RadlRkYW1EQTBCeGtnQWxncVh2WnUtaW1nLTNfMTc3MDY1MzM5MjAwMF9uYTFmbl9iSFY0ZFhKNUxXbHVhbVZqZEdsdmJpMWpiRzl6WlhWdy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=bliek9WmZu8RzzC8vjNEOjVsGgeP-ena7ofcBraFdYoesWVyesPHu7FKZzfHI1wuwzlWI65m6nrSJ5KJVNChivMZbvBMfHNSykcXI~X~KN~EjyvgvcY5Dh2JVyMGWoXWNVgK2unhPyANbhv9bQDUy4K6xDZSNyFR3lCs4EwZXx8jz3KVqbOvvtKCyoYpPqw-OKCebqJCfpvcmU1Psqd8-yLWFT9AurnojsGkXEmgfYnAAf~gl3Kz~ChjFtPW2Ee6vDuRu1lcA7UjXkMAA2zXHvhB2wN0~zg4UiHDzXOlOqWM7LZnM0ynnkLfqQ-AdwPdeGp~Gby8~tlnBU0RzcwJsQ__"
                alt="GLP-1 Weight Loss Injection"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2>Medical-Grade Weight Loss</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Access pharmaceutical-grade GLP-1 medications with professional medical oversight. Our weight loss program includes personalized treatment plans, ongoing monitoring, and medications that ship directly to your door.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Direct Shipping</h4>
                    <p className="text-sm text-muted-foreground">GLP-1 medications delivered directly to your home with discreet packaging</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Professional Oversight</h4>
                    <p className="text-sm text-muted-foreground">Board-certified NP monitoring throughout your weight loss journey</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telehealth Convenience</h4>
                    <p className="text-sm text-muted-foreground">Virtual consultations from anywhere in South Carolina</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                Learn More About Weight Loss
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
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
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
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="luxury-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg text-foreground mb-4 italic">
                "Andrew truly takes the time to listen. He doesn't rush through appointments and makes sure I understand everything about my treatment plan. It's rare to find a provider who genuinely cares."
              </p>
              <p className="text-sm text-muted-foreground font-semibold">Verified Patient, Aiken County</p>
            </Card>
            <Card className="luxury-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg text-foreground mb-4 italic">
                "I've been to many providers over the years, and Andrew stands out for his clinical knowledge and attention to detail. He thoroughly explains conditions and treatment options, which I really appreciate."
              </p>
              <p className="text-sm text-muted-foreground font-semibold">Verified Patient, South Carolina</p>
            </Card>
            <Card className="luxury-card">
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
            <Card className="luxury-card">
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
