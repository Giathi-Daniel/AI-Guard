import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const RequestAccess = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Access request submitted! We'll review and get back to you within 24 hours.");
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <img src="/logo.jpg" alt="AI-Guard" className="h-12 w-12 rounded-xl object-cover" />
          <span className="text-3xl font-bold">AI-Guard</span>
        </div>

        {/* Request Access Card */}
        <Card className="card-elevated">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Request Access</CardTitle>
            <CardDescription>
              Apply for access to the AI-Guard monitoring platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input 
                    id="firstName" 
                    type="text" 
                    placeholder="John"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input 
                    id="lastName" 
                    type="text" 
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@institution.ke"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+254 700 000 000"
                />
              </div>

              {/* Organization Information */}
              <div className="space-y-2">
                <Label htmlFor="organization">Organization *</Label>
                <Input 
                  id="organization" 
                  type="text" 
                  placeholder="Financial Institution Name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role/Position *</Label>
                <Select required>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="compliance">Compliance Officer</SelectItem>
                    <SelectItem value="risk">Risk Manager</SelectItem>
                    <SelectItem value="data-scientist">Data Scientist</SelectItem>
                    <SelectItem value="it-admin">IT Administrator</SelectItem>
                    <SelectItem value="executive">Executive</SelectItem>
                    <SelectItem value="regulator">Regulator</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="institutionType">Institution Type *</Label>
                <Select required>
                  <SelectTrigger id="institutionType">
                    <SelectValue placeholder="Select institution type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="commercial-bank">Commercial Bank</SelectItem>
                    <SelectItem value="microfinance">Microfinance Institution</SelectItem>
                    <SelectItem value="sacco">SACCO</SelectItem>
                    <SelectItem value="fintech">FinTech Company</SelectItem>
                    <SelectItem value="regulator">Regulatory Body</SelectItem>
                    <SelectItem value="other">Other Financial Institution</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Use Case */}
              <div className="space-y-2">
                <Label htmlFor="useCase">Use Case / Reason for Access *</Label>
                <Textarea 
                  id="useCase" 
                  placeholder="Please describe how you plan to use AI-Guard and what AI systems you want to monitor..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <div className="flex flex-col gap-4 pt-4">
                <Button type="submit" className="w-full" variant="hero">
                  Submit Request
                </Button>
                
                <div className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary hover:underline font-medium">
                    Sign In
                  </Link>
                </div>
              </div>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-center text-muted-foreground">
                Your information will be reviewed by our team. We typically respond within 24-48 hours.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link to="/">
            <Button variant="ghost">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RequestAccess;
