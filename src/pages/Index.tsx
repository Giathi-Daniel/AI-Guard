import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, AlertTriangle, FileText, BarChart3, CheckCircle2, Target, Users, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-0" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-secondary-foreground">
                CBK AI Hackathon 2025 - Ethical AI in Finance
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Ensuring Trust in{" "}
              <span className="text-gradient">AI Systems</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Detect, Report, and Respond Ethically to AI Incidents in Kenya's Financial Sector
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button variant="hero" size="lg" className="text-lg px-8 w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
              <a href="#features">
                <Button variant="outline" size="lg" className="text-lg px-8 w-full sm:w-auto">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-muted-foreground">
              As AI and ML systems become integral to financial services, detecting and managing anomalies, 
              bias, fraud, and system failures is critical for maintaining trust, compliance, and ethical standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="card-elevated hover:card-glow transition-all duration-300">
              <CardContent className="pt-6">
                <div className="bg-destructive/10 text-destructive p-3 rounded-lg w-fit mb-4">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Bias Detection</h3>
                <p className="text-muted-foreground">
                  AI models can perpetuate bias in credit scoring, loan approvals, and risk assessment.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated hover:card-glow transition-all duration-300">
              <CardContent className="pt-6">
                <div className="bg-warning/10 text-warning p-3 rounded-lg w-fit mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fraud Prevention</h3>
                <p className="text-muted-foreground">
                  Automated systems need robust monitoring to detect fraudulent patterns early.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated hover:card-glow transition-all duration-300">
              <CardContent className="pt-6">
                <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Compliance</h3>
                <p className="text-muted-foreground">
                  Regulatory bodies require transparent reporting of AI system incidents and failures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Solution</h2>
            <p className="text-lg text-muted-foreground">
              AI-Guard provides an intelligent platform for automated anomaly detection, ethical reporting, 
              and compliance management in financial AI systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="card-elevated">
              <CardContent className="pt-6">
                <div className="bg-accent/10 text-accent p-3 rounded-lg w-fit mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-Time Monitoring</h3>
                <p className="text-muted-foreground">
                  Continuous monitoring of AI systems with intelligent anomaly detection algorithms.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="pt-6">
                <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Automated Reporting</h3>
                <p className="text-muted-foreground">
                  Generate compliance reports automatically with AI-powered incident classification.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="pt-6">
                <div className="bg-success/10 text-success p-3 rounded-lg w-fit mb-4">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
                <p className="text-muted-foreground">
                  Visualize trends, severity levels, and system health through interactive dashboards.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="pt-6">
                <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ethical AI Standards</h3>
                <p className="text-muted-foreground">
                  Built with transparency, accountability, and fairness at its core.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Features</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to maintain trust and compliance in AI-powered financial systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: AlertTriangle, title: "Anomaly Detection", desc: "AI-powered detection of unusual patterns" },
              { icon: FileText, title: "Incident Reporting", desc: "Comprehensive logging and documentation" },
              { icon: BarChart3, title: "Data Visualization", desc: "Interactive charts and insights" },
              { icon: Users, title: "Multi-User Access", desc: "Role-based permissions for teams" },
            ].map((feature, idx) => (
              <Card key={idx} className="card-elevated hover:card-glow transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <div className="bg-accent/10 text-accent p-4 rounded-lg w-fit mx-auto mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto bg-card border-2 border-primary card-elevated">
            <CardContent className="py-12 px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Enhance AI Trust in Your Organization?
              </h2>
              <p className="text-lg mb-8 text-muted-foreground">
                Join financial institutions across Kenya in promoting ethical AI practices
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/login">
                  <Button variant="default" size="lg" className="text-lg px-8 w-full sm:w-auto">
                    Get Started Now
                  </Button>
                </Link>
                <Link to="/request-access">
                  <Button variant="outline" size="lg" className="text-lg px-8 w-full sm:w-auto">
                    Request Access
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
