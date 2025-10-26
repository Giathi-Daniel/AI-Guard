import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Send } from "lucide-react";
import { toast } from "sonner";

const ManualReport = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Incident report submitted successfully!");
  };

  return (
    <div className="flex min-h-screen w-full bg-background overflow-x-hidden">
      <DashboardSidebar />
      
      <main className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8 w-full min-w-0">
        <div className="max-w-4xl mx-auto w-full">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Manual Incident Report</h1>
            <p className="text-muted-foreground text-sm sm:text-base">Submit a new incident report for review and investigation</p>
          </div>

          {/* Form */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>Report Details</CardTitle>
              <CardDescription>
                Provide detailed information about the AI system incident or anomaly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Incident Type */}
                <div className="space-y-2">
                  <Label htmlFor="type">Incident Type *</Label>
                  <Select required>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select incident type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bias">Bias Detection</SelectItem>
                      <SelectItem value="fraud">Fraud Alert</SelectItem>
                      <SelectItem value="drift">Model Drift</SelectItem>
                      <SelectItem value="anomaly">Anomalous Transaction</SelectItem>
                      <SelectItem value="data">Data Quality Issue</SelectItem>
                      <SelectItem value="performance">Performance Degradation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Severity */}
                <div className="space-y-2">
                  <Label htmlFor="severity">Severity Level *</Label>
                  <Select required>
                    <SelectTrigger id="severity">
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - Minor issue, monitoring required</SelectItem>
                      <SelectItem value="medium">Medium - Significant issue, action needed</SelectItem>
                      <SelectItem value="high">High - Critical issue, immediate attention</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title">Incident Title *</Label>
                  <Input 
                    id="title" 
                    placeholder="Brief description of the incident"
                    required
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description *</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Provide a comprehensive description of the incident, including when it was discovered, what systems are affected, and any observed impacts..."
                    className="min-h-[150px]"
                    required
                  />
                </div>

                {/* Affected System */}
                <div className="space-y-2">
                  <Label htmlFor="system">Affected AI System</Label>
                  <Input 
                    id="system" 
                    placeholder="e.g., Credit Scoring Model v2.3, Fraud Detection Engine"
                  />
                </div>

                {/* Impact Assessment */}
                <div className="space-y-2">
                  <Label htmlFor="impact">Impact Assessment</Label>
                  <Textarea 
                    id="impact" 
                    placeholder="Describe the potential or actual impact on customers, operations, or compliance..."
                    className="min-h-[100px]"
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <Label htmlFor="file">Supporting Documents (Optional)</Label>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
                    <Input 
                      id="file" 
                      type="file"
                      className="flex-1 w-full"
                      accept=".pdf,.doc,.docx,.txt,.csv,.log"
                    />
                    <Button type="button" variant="outline" className="w-full sm:w-auto shrink-0">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Accepted formats: PDF, DOC, TXT, CSV, LOG (Max 10MB)
                  </p>
                </div>

                {/* Reporter Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="reporter">Reporter Name *</Label>
                    <Input 
                      id="reporter" 
                      placeholder="Your full name"
                      required
                    />
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
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <Button type="submit" variant="accent" className="flex-1 w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Submit Report
                  </Button>
                  <Button type="button" variant="outline" className="flex-1 w-full">
                    Save as Draft
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Guidelines Card */}
          <Card className="mt-6 bg-muted/30">
            <CardHeader>
              <CardTitle className="text-lg">Reporting Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Be as specific as possible with incident details and timestamps</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Include evidence such as logs, screenshots, or data samples when available</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Assess severity based on impact: financial loss, regulatory risk, or customer impact</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>All reports are reviewed within 24 hours by the AI Ethics & Compliance team</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ManualReport;
