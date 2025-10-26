import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Download } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const incidents = [
  { 
    id: "INC-001", 
    type: "Bias Detection", 
    severity: "high", 
    timestamp: "2025-01-15 14:23", 
    status: "Open",
    description: "Credit scoring model showing bias against specific demographics",
    confidence: 0.89,
    aiExplanation: "Detected statistically significant disparity in credit approval rates across demographic groups. Model shows 34% lower approval rate for Group A compared to Group B with similar financial profiles.",
  },
  { 
    id: "INC-002", 
    type: "Anomalous Transaction", 
    severity: "medium", 
    timestamp: "2025-01-15 13:45", 
    status: "Investigating",
    description: "Unusual pattern detected in loan disbursement flow",
    confidence: 0.72,
    aiExplanation: "Transaction pattern deviates from historical baseline by 3.2 standard deviations. Detected cluster of similar transactions within short time window, suggesting potential system anomaly or coordinated activity.",
  },
  { 
    id: "INC-003", 
    type: "Model Drift", 
    severity: "low", 
    timestamp: "2025-01-15 12:10", 
    status: "Resolved",
    description: "Risk assessment model performance degradation",
    confidence: 0.65,
    aiExplanation: "Model accuracy dropped from 94.2% to 91.8% over past 30 days. Input data distribution has shifted, requiring model retraining with recent data.",
  },
  { 
    id: "INC-004", 
    type: "Data Quality Issue", 
    severity: "medium", 
    timestamp: "2025-01-15 11:30", 
    status: "Open",
    description: "Missing values in customer profile data",
    confidence: 0.95,
    aiExplanation: "15% of recent customer records contain null values in critical fields (income, employment). This impacts model predictions and may lead to biased outcomes.",
  },
  { 
    id: "INC-005", 
    type: "Fraud Alert", 
    severity: "high", 
    timestamp: "2025-01-15 10:15", 
    status: "Resolved",
    description: "Potential fraudulent transaction pattern identified",
    confidence: 0.91,
    aiExplanation: "ML fraud detection model flagged 12 transactions with anomalous velocity patterns and geographic inconsistencies. Manual review confirmed 10 were indeed fraudulent.",
  },
];

const Incidents = () => {
  const [selectedIncident, setSelectedIncident] = useState<typeof incidents[0] | null>(null);

  return (
    <div className="flex min-h-screen w-full bg-background overflow-x-hidden">
      <DashboardSidebar />
      
      <main className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8 w-full min-w-0">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Incident Reports</h1>
            <p className="text-muted-foreground text-sm sm:text-base">Comprehensive log of detected AI system anomalies and alerts</p>
          </div>

          {/* Filters and Search */}
          <Card className="card-elevated mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="relative flex-1 min-w-0">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search incidents..." 
                    className="pl-10 w-full"
                  />
                </div>
                <div className="flex gap-2 shrink-0">
                  <Button variant="outline" className="flex-1 sm:flex-none whitespace-nowrap">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" className="flex-1 sm:flex-none whitespace-nowrap">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Incidents Table */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>All Incidents</CardTitle>
              <CardDescription>Click on any incident to view detailed AI analysis</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px]">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-sm whitespace-nowrap">ID</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm whitespace-nowrap">Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm whitespace-nowrap">Description</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm whitespace-nowrap">Severity</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm whitespace-nowrap">Timestamp</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm whitespace-nowrap">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {incidents.map((incident) => (
                      <Dialog key={incident.id}>
                        <DialogTrigger asChild>
                          <tr 
                            className="border-b border-border hover:bg-muted/50 transition-colors cursor-pointer"
                            onClick={() => setSelectedIncident(incident)}
                          >
                            <td className="py-3 px-4 font-mono text-sm font-semibold whitespace-nowrap">{incident.id}</td>
                            <td className="py-3 px-4 whitespace-nowrap">{incident.type}</td>
                            <td className="py-3 px-4 max-w-xs truncate">{incident.description}</td>
                            <td className="py-3 px-4 whitespace-nowrap">
                              <StatusBadge status={incident.severity as any} />
                            </td>
                            <td className="py-3 px-4 text-sm text-muted-foreground whitespace-nowrap">{incident.timestamp}</td>
                            <td className="py-3 px-4 whitespace-nowrap">
                              <span className="text-sm text-muted-foreground">{incident.status}</span>
                            </td>
                          </tr>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-3">
                              <span>{incident.id}</span>
                              <StatusBadge status={incident.severity as any} />
                            </DialogTitle>
                            <DialogDescription>{incident.type}</DialogDescription>
                          </DialogHeader>
                          
                          <div className="space-y-4 py-4">
                            <div>
                              <h4 className="font-semibold mb-2">Description</h4>
                              <p className="text-muted-foreground">{incident.description}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Timestamp</h4>
                              <p className="text-muted-foreground">{incident.timestamp}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Status</h4>
                              <p className="text-muted-foreground">{incident.status}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Confidence Score</h4>
                              <div className="flex items-center gap-2">
                                <div className="flex-1 bg-secondary rounded-full h-2">
                                  <div 
                                    className="bg-accent h-2 rounded-full transition-all" 
                                    style={{ width: `${incident.confidence * 100}%` }}
                                  />
                                </div>
                                <span className="text-sm font-medium">{(incident.confidence * 100).toFixed(0)}%</span>
                              </div>
                            </div>

                            <div className="bg-muted/50 rounded-lg p-4 border border-border">
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <span className="text-accent">AI</span> Explanation
                              </h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {incident.aiExplanation}
                              </p>
                            </div>

                            <div className="flex gap-2 pt-4">
                              <Button variant="default" className="flex-1">
                                Mark as Resolved
                              </Button>
                              <Button variant="outline" className="flex-1">
                                Escalate
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Incidents;
