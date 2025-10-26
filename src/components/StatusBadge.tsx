import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: "healthy" | "degraded" | "critical" | "low" | "medium" | "high";
  className?: string;
}

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const variants = {
    healthy: "bg-success text-success-foreground",
    degraded: "bg-warning text-warning-foreground",
    critical: "bg-destructive text-destructive-foreground",
    low: "bg-success text-success-foreground",
    medium: "bg-warning text-warning-foreground",
    high: "bg-destructive text-destructive-foreground",
  };

  const labels = {
    healthy: "Healthy",
    degraded: "Degraded",
    critical: "Critical",
    low: "Low",
    medium: "Medium",
    high: "High",
  };

  return (
    <Badge className={cn(variants[status], "font-semibold", className)}>
      {labels[status]}
    </Badge>
  );
};
