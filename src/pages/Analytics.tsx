import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Calendar } from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { toast } from "sonner";

const monthlyTrends = [
  { month: "Jul", incidents: 45, resolved: 42 },
  { month: "Aug", incidents: 52, resolved: 48 },
  { month: "Sep", incidents: 38, resolved: 36 },
  { month: "Oct", incidents: 61, resolved: 58 },
  { month: "Nov", incidents: 49, resolved: 47 },
  { month: "Dec", incidents: 55, resolved: 52 },
  { month: "Jan", incidents: 47, resolved: 44 },
];

const categoryData = [
  { name: "Bias Detection", value: 35, color: "hsl(var(--destructive))" },
  { name: "Fraud Alert", value: 28, color: "hsl(var(--warning))" },
  { name: "Model Drift", value: 18, color: "hsl(var(--primary))" },
  { name: "Data Quality", value: 12, color: "hsl(var(--accent))" },
  { name: "Other", value: 7, color: "hsl(var(--muted))" },
];

const complianceMetrics = [
  { metric: "Report Completeness", score: 98 },
  { metric: "Response Time", score: 92 },
  { metric: "Resolution Rate", score: 94 },
  { metric: "Documentation Quality", score: 96 },
];

const Analytics = () => {
  const handleExportPDF = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(20);
    doc.setTextColor(6, 182, 212);
    doc.text("AI-Guard Analytics Report", 14, 22);
    
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, 14, 30);
    
    // Monthly Trends Table
    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.text("Monthly Incident Trends", 14, 45);
    
    autoTable(doc, {
      startY: 50,
      head: [['Month', 'Total Incidents', 'Resolved']],
      body: monthlyTrends.map(row => [row.month, row.incidents, row.resolved]),
      theme: 'grid',
      headStyles: { fillColor: [6, 182, 212] },
    });
    
    // Category Distribution
    let finalY = (doc as any).lastAutoTable.finalY + 10;
    doc.setFontSize(14);
    doc.text("Incident Categories", 14, finalY);
    
    autoTable(doc, {
      startY: finalY + 5,
      head: [['Category', 'Percentage']],
      body: categoryData.map(row => [row.name, `${row.value}%`]),
      theme: 'grid',
      headStyles: { fillColor: [6, 182, 212] },
    });
    
    // Compliance Metrics
    finalY = (doc as any).lastAutoTable.finalY + 10;
    doc.setFontSize(14);
    doc.text("Compliance Metrics", 14, finalY);
    
    autoTable(doc, {
      startY: finalY + 5,
      head: [['Metric', 'Score']],
      body: complianceMetrics.map(row => [row.metric, `${row.score}%`]),
      theme: 'grid',
      headStyles: { fillColor: [6, 182, 212] },
    });
    
    // Summary Statistics
    finalY = (doc as any).lastAutoTable.finalY + 10;
    doc.setFontSize(14);
    doc.text("Summary Statistics", 14, finalY);
    
    autoTable(doc, {
      startY: finalY + 5,
      head: [['Metric', 'Value']],
      body: [
        ['Avg Resolution Time', '4.2 hrs'],
        ['False Positive Rate', '8.3%'],
        ['Critical Incidents (30 days)', '12'],
        ['Compliance Score', '95%']
      ],
      theme: 'grid',
      headStyles: { fillColor: [6, 182, 212] },
    });
    
    doc.save(`AI-Guard-Analytics-${new Date().toISOString().split('T')[0]}.pdf`);
    toast.success("Report exported successfully!");
  };

  return (
    <div className="flex min-h-screen w-full bg-background overflow-x-hidden">
      <DashboardSidebar />
      
      <main className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8 w-full min-w-0">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">System Analytics</h1>
              <p className="text-muted-foreground text-sm sm:text-base">Comprehensive insights and compliance metrics</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto">
                <Calendar className="h-4 w-4 mr-2" />
                Date Range
              </Button>
              <Button variant="accent" className="w-full sm:w-auto" onClick={handleExportPDF}>
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>

          {/* Monthly Trends */}
          <Card className="card-elevated mb-8">
            <CardHeader>
              <CardTitle>Incident Trends - Last 7 Months</CardTitle>
              <CardDescription>Total incidents vs resolved incidents over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="incidents" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    name="Total Incidents"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="resolved" 
                    stroke="hsl(var(--success))" 
                    strokeWidth={2}
                    name="Resolved"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Category Distribution & Compliance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Incident Categories</CardTitle>
                <CardDescription>Distribution by incident type</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(entry) => `${entry.name} (${entry.value}%)`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Compliance Metrics</CardTitle>
                <CardDescription>Key performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={complianceMetrics} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis type="number" domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
                    <YAxis dataKey="metric" type="category" width={150} stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))", 
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }} 
                    />
                    <Bar dataKey="score" fill="hsl(var(--accent))" radius={[0, 8, 8, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Summary Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-sm font-medium">Avg Resolution Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">4.2 hrs</div>
                <p className="text-xs text-muted-foreground mt-1">-12% from last period</p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-sm font-medium">False Positive Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-success">8.3%</div>
                <p className="text-xs text-muted-foreground mt-1">Within acceptable range</p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-sm font-medium">Critical Incidents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-warning">12</div>
                <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">95%</div>
                <p className="text-xs text-muted-foreground mt-1">Above industry standard</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
