import { TrendingUp, TrendingDown, FolderKanban, CheckCircle2, Clock, AlertTriangle } from "lucide-react";

const stats = [
  {
    label: "Projetos Ativos",
    value: "12",
    change: "+2 este mês",
    trend: "up" as const,
    icon: FolderKanban,
    color: "text-primary bg-primary/10",
  },
  {
    label: "Tarefas Concluídas",
    value: "84",
    change: "78% do total",
    trend: "up" as const,
    icon: CheckCircle2,
    color: "text-success bg-success/10",
  },
  {
    label: "Em Andamento",
    value: "23",
    change: "5 próximas do prazo",
    trend: "neutral" as const,
    icon: Clock,
    color: "text-warning bg-warning/10",
  },
  {
    label: "Atrasadas",
    value: "3",
    change: "-2 vs semana passada",
    trend: "down" as const,
    icon: AlertTriangle,
    color: "text-destructive bg-destructive/10",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="bg-card rounded-xl p-5 shadow-card hover:shadow-card-hover transition-shadow animate-fade-in"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className={`p-2 rounded-lg ${stat.color}`}>
              <stat.icon className="h-4 w-4" />
            </div>
            {stat.trend === "up" && <TrendingUp className="h-4 w-4 text-success" />}
            {stat.trend === "down" && <TrendingDown className="h-4 w-4 text-success" />}
          </div>
          <p className="text-2xl font-bold font-display">{stat.value}</p>
          <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          <p className="text-xs text-muted-foreground/70 mt-1">{stat.change}</p>
        </div>
      ))}
    </div>
  );
}
