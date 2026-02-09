/*
 * Dark Premium Healthcare Design
 * - Deep charcoal backgrounds (#0F0F0F) with electric pink accents (#FF1F8F)
 * - Glassmorphic cards with backdrop blur
 * - Pink neon glow effects on interactive elements
 * - Outfit font for headings (geometric, tech-forward)
 * - Full-bleed sections with asymmetric layouts
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Video, Syringe, Sparkles, Users, MapPin, Shield, Clock, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">S</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Syndica</h1>
                <p className="text-xs text-muted-foreground">Concierge Care</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#insurance" className="text-sm text-muted-foreground hover:text-primary transition-colors">Insurance</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <Button className="neon-glow-hover bg-primary hover:bg-primary/90 text-primary-foreground">
              Book Appointment
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Screen */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 rounded-full glass-card border border-primary/30">
                <span className="text-sm text-primary font-medium">South Carolina's Premier Telehealth Provider</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Healthcare
                <br />
                <span className="text-primary">On Your Terms</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Professional telehealth and concierge care services throughout South Carolina. Personalized healthcare delivered with cutting-edge technology and genuine compassion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="neon-glow-hover bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
                  <Video className="mr-2 h-5 w-5" />
                  Start Telehealth Visit
                </Button>
                <Button size="lg" variant="outline" className="glass-card border-border/50 hover:border-primary/50 text-lg px-8 py-6">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background"></div>
                  <div className="w-10 h-10 rounded-full bg-primary/30 border-2 border-background"></div>
                  <div className="w-10 h-10 rounded-full bg-primary/40 border-2 border-background"></div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">5.0 rating from patients</p>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl"></div>
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/qwMWbEsILvumzJOG.png"
                alt="Andrew Bridges, NP - Syndica Concierge Care"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare solutions tailored to your lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Telehealth */}
            <Card className="glass-card border-border/50 hover:border-primary/50 transition-all duration-500 group">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:neon-glow transition-all duration-500">
                  <Video className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Telehealth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Virtual consultations for most conditions throughout South Carolina. Accessible healthcare from the comfort of your home.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Primary care consultations</li>
                  <li>• Follow-up appointments</li>
                  <li>• Prescription management</li>
                  <li>• No DEA-controlled substances</li>
                </ul>
              </CardContent>
            </Card>

            {/* Weight Loss */}
            <Card className="glass-card border-border/50 hover:border-primary/50 transition-all duration-500 group">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:neon-glow transition-all duration-500">
                  <Syringe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Weight Loss</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Evidence-based weight loss injection therapy with comprehensive support and monitoring.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• GLP-1 medications</li>
                  <li>• Personalized treatment plans</li>
                  <li>• Ongoing monitoring</li>
                  <li>• Lifestyle coaching</li>
                </ul>
              </CardContent>
            </Card>

            {/* Aesthetics */}
            <Card className="glass-card border-border/50 hover:border-primary/50 transition-all duration-500 group">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:neon-glow transition-all duration-500">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Aesthetics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Professional aesthetic services to help you look and feel your best with medical-grade treatments.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Injectable treatments</li>
                  <li>• Skin rejuvenation</li>
                  <li>• Personalized consultations</li>
                  <li>• Medical-grade products</li>
                </ul>
              </CardContent>
            </Card>

            {/* Concierge Care */}
            <Card className="glass-card border-border/50 hover:border-primary/50 transition-all duration-500 group">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:neon-glow transition-all duration-500">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Concierge Care</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In-person care in Aiken County. We travel to you for parties of 3 or more for ultimate convenience.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Home visits (3+ patients)</li>
                  <li>• Group wellness events</li>
                  <li>• Corporate health services</li>
                  <li>• Flexible scheduling</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-3xl"></div>
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663234880535/oxHVtShBwXPoYipD.png"
                alt="Andrew Bridges, NP"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block px-4 py-2 rounded-full glass-card border border-primary/30">
                <span className="text-sm text-primary font-medium">Meet Your Provider</span>
              </div>
              <h2 className="text-5xl font-bold">Andrew Bridges, NP</h2>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-muted-foreground">5.0 Patient Rating</span>
              </div>
              
              <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Andrew Bridges is a board-certified Nurse Practitioner dedicated to providing comprehensive, patient-centered healthcare to the communities of South Carolina. With extensive experience in primary care and specialized training in orthopedics and urology, Andrew brings a unique blend of clinical expertise and genuine compassion to every patient interaction.
                </p>
                <p>
                  Throughout his career, Andrew has built a reputation for taking the time to truly listen to his patients, thoroughly explaining conditions and treatment options, and providing consistent follow-up care. His patients consistently praise his bedside manner, noting that "he's amazing" and "I highly recommend him."
                </p>
                <p>
                  Andrew's clinical background spans multiple specialties, with a strong foundation in primary care complemented by focused experience in orthopedics—a specialty he particularly loves—and urology. This diverse expertise allows him to provide comprehensive care for a wide range of conditions.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <Card className="glass-card border-border/50 p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">5.0</div>
                  <div className="text-xs text-muted-foreground">Patient Rating</div>
                </Card>
                <Card className="glass-card border-border/50 p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">SC</div>
                  <div className="text-xs text-muted-foreground">Licensed State</div>
                </Card>
                <Card className="glass-card border-border/50 p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">GA</div>
                  <div className="text-xs text-muted-foreground">Coming Soon</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold">Serving South Carolina</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Bringing quality healthcare to your community with flexible service options designed for your convenience.
              </p>
              
              <div className="space-y-4">
                <Card className="glass-card border-border/50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Aiken County Concierge</h3>
                      <p className="text-muted-foreground">
                        In-person care throughout Aiken County. We travel to you for parties of 3 or more.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="glass-card border-border/50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Video className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Statewide Telehealth</h3>
                      <p className="text-muted-foreground">
                        Virtual consultations available to all South Carolina residents. Georgia license coming soon.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="relative h-96 lg:h-full min-h-[400px]">
              <div className="absolute inset-0 glass-card rounded-3xl overflow-hidden">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/dm175CICJyCKctu3wiRCk9/sandbox/XbN9PLmm2wpdOY4d5nDlq0-img-1_1770632069000_na1fn_aGVyby10ZWxlaGVhbHRoLWNvbnN1bHRhdGlvbg.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZG0xNzVDSUNKeUNLY3R1M3dpUkNrOS9zYW5kYm94L1hiTjlQTG1tMndwZE9ZNGQ1bkRscTAtaW1nLTFfMTc3MDYzMjA2OTAwMF9uYTFmbl9hR1Z5YnkxMFpXeGxhR1ZoYkhSb0xXTnZibk4xYkhSaGRHbHZiZy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qDN2MrX~TS9TxVPSZxUWBbHJ10NqN4h65u~ggNGg51MdXrD1fEPuKmACa~dQ1CEzsF6Lvu0wHhQZpJuF1uXaTyWaldAT80Hx6JuPFhFjVi~G1A3ctbS2SKtaOpEodKw95AJgaV6QsiWYM-i079dI6hTMUTRa2X~St7NkBOQSz-ZW3k9FhFP1ZpV1Q1DIVTcCSZ9At~2iN0X0TLKyHq8e7sUzhMcmXe9oUoQHPzGRhuhDiomIZyOiIk5L4YHdCdULArqndiYDZbqLXZLMlYSaZ3Mct5aTDT4KlEeAg2409kyXRMjVBILiIxPbK1NgyhxQSfW4kOaCW5Fs5Ee4DiyXaA__"
                  alt="Telehealth consultation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section id="insurance" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Insurance & Payment</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We accept most major insurance carriers and offer flexible payment options
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="glass-card border-border/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Blue Cross Blue Shield</h3>
              </div>
              <p className="text-sm text-muted-foreground">All major plans accepted</p>
            </Card>

            <Card className="glass-card border-border/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Medicare</h3>
              </div>
              <p className="text-sm text-muted-foreground">Medicare & Medicare Advantage</p>
            </Card>

            <Card className="glass-card border-border/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Medicaid</h3>
              </div>
              <p className="text-sm text-muted-foreground">South Carolina Medicaid</p>
            </Card>

            <Card className="glass-card border-border/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Aetna</h3>
              </div>
              <p className="text-sm text-muted-foreground">PPO, HMO, Open Choice</p>
            </Card>

            <Card className="glass-card border-border/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">UnitedHealthcare</h3>
              </div>
              <p className="text-sm text-muted-foreground">All major plans</p>
            </Card>

            <Card className="glass-card border-border/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Humana</h3>
              </div>
              <p className="text-sm text-muted-foreground">PPO, HMO, Medicare</p>
            </Card>
          </div>

          <Card className="glass-card border-primary/30 p-8 text-center">
            <p className="text-muted-foreground mb-4">
              We also accept Cigna, Tricare, Wellcare, Molina, Ambetter, and many other carriers.
            </p>
            <p className="text-sm text-muted-foreground">
              Credentialed through SimplePractice. Please call to verify your specific plan coverage.
            </p>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4">Get In Touch</h2>
              <p className="text-xl text-muted-foreground">
                Ready to experience personalized healthcare? Contact us today.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="glass-card border-border/50 p-8 hover:border-primary/50 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Administrative</h3>
                    <p className="text-muted-foreground mb-4">
                      For scheduling, billing, and general inquiries
                    </p>
                    <a href="tel:864-523-5353" className="text-2xl font-bold text-primary hover:underline">
                      864-523-5353
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">Syndica Solutions</p>
                  </div>
                </div>
              </Card>

              <Card className="glass-card border-border/50 p-8 hover:border-primary/50 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Clinical</h3>
                    <p className="text-muted-foreground mb-4">
                      Direct line for medical questions
                    </p>
                    <a href="tel:803-380-8893" className="text-2xl font-bold text-primary hover:underline">
                      803-380-8893
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">Leave a message if with a patient</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="glass-card border-primary/30 p-8 mt-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
              <p className="text-muted-foreground mb-6">
                Book your telehealth consultation or schedule a concierge visit today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="neon-glow-hover bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Video className="mr-2 h-5 w-5" />
                  Book Telehealth Visit
                </Button>
                <Button size="lg" variant="outline" className="glass-card border-border/50 hover:border-primary/50">
                  <Users className="mr-2 h-5 w-5" />
                  Request Concierge Visit
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">S</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Syndica</h3>
                  <p className="text-xs text-muted-foreground">Concierge Care</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional telehealth and concierge care services in South Carolina.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Telehealth</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Weight Loss</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Aesthetics</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Concierge Care</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#insurance" className="hover:text-primary transition-colors">Insurance</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Admin: <a href="tel:864-523-5353" className="text-primary hover:underline">864-523-5353</a></li>
                <li>Clinical: <a href="tel:803-380-8893" className="text-primary hover:underline">803-380-8893</a></li>
                <li>Aiken County, SC</li>
                <li>Statewide Telehealth</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground space-y-2">
            <p>&copy; 2026 Syndica Concierge Care. All rights reserved.</p>
            <p>Website design, content, and code are the exclusive property of Andrew Bridges, NP.</p>
            <p className="text-xs">Unauthorized reproduction or use is prohibited.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
