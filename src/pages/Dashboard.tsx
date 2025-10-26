import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/StatusBadge";
import { AlertTriangle, TrendingUp, Activity, Shield } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const anomalyData = [
  { time: "00:00", incidents: 2 },
  { time: "04:00", incidents: 1 },
  { time: "08:00", incidents: 5 },
  { time: "12:00", incidents: 8 },
  { time: "16:00", incidents: 3 },
  { time: "20:00", incidents: 4 },
];

const recentIncidents = [
  { id: "INC-001", type: "Bias Detection", severity: "high", timestamp: "2025-01-15 14:23", status: "Open" },
  { id: "INC-002", type: "Anomalous Transaction", severity: "medium", timestamp: "2025-01-15 13:45", status: "Investigating" },
  { id: "INC-003", type: "Model Drift", severity: "low", timestamp: "2025-01-15 12:10", status: "Resolved" },
  { id: "INC-004", type: "Data Quality Issue", severity: "medium", timestamp: "2025-01-15 11:30", status: "Open" },
];

const Dashboard = () => {
  return (
    <div className="flex min-h-screen w-full bg-background overflow-x-hidden">
      <DashboardSidebar />
      
      <main className="flex-1 lg:ml-64 p-4 sm:p-6 lg:p-8 pt-20 lg:pt-8 w-full min-w-0">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground text-sm sm:text-base">Real-time AI system monitoring and incident overview</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="card-elevated">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Incidents</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">247</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">Requires attention</p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94.2%</div>
                <p className="text-xs text-muted-foreground">+2.5% from last month</p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">System Health</CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <StatusBadge status="healthy" />
                <p className="text-xs text-muted-foreground mt-2">All systems operational</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Anomaly Detection - Last 24h</CardTitle>
                <CardDescription>Real-time incident detection trends</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={anomalyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))", 
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="incidents" 
                      stroke="hsl(var(--accent))" 
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--accent))" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Severity Distribution</CardTitle>
                <CardDescription>Current incident severity breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={[
                    { severity: "Low", count: 12 },
                    { severity: "Medium", count: 5 },
                    { severity: "High", count: 1 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="severity" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))", 
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }} 
                    />
                    <Bar dataKey="count" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Recent Incidents Table */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>Recent Incidents</CardTitle>
              <CardDescription>Latest AI system anomalies and alerts</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-sm whitespace-nowrap">ID</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm whitespace-nowrap">Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm whitespace-nowrap">Severity</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm whitespace-nowrap">Timestamp</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm whitespace-nowrap">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentIncidents.map((incident) => (
                      <tr key={incident.id} className="border-b border-border hover:bg-muted/50 transition-colors cursor-pointer">
                        <td className="py-3 px-4 font-mono text-sm whitespace-nowrap">{incident.id}</td>
                        <td className="py-3 px-4 whitespace-nowrap">{incident.type}</td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <StatusBadge status={incident.severity as any} />
                        </td>
                        <td className="py-3 px-4 text-sm text-muted-foreground whitespace-nowrap">{incident.timestamp}</td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className="text-sm text-muted-foreground">{incident.status}</span>
                        </td>
                      </tr>
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

export default Dashboard;
