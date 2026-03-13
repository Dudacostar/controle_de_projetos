import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type ProjectStatus = "em_andamento" | "planejamento" | "concluido" | "atrasado";

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  em_andamento: { label: "Em Andamento", className: "bg-primary/10 text-primary border-primary/20" },
  planejamento: { label: "Planejamento", className: "bg-info/10 text-info border-info/20" },
  concluido: { label: "Concluído", className: "bg-success/10 text-success border-success/20" },
  atrasado: { label: "Atrasado", className: "bg-destructive/10 text-destructive border-destructive/20" },
};

const projects = [
  {
    name: "Redesign do Portal",
    client: "Cliente Alpha",
    status: "em_andamento" as ProjectStatus,
    progress: 72,
    deadline: "15 Abr 2026",
    team: ["MR", "AS", "LC"],
  },
  {
    name: "App Mobile v2",
    client: "Cliente Beta",
    status: "em_andamento" as ProjectStatus,
    progress: 45,
    deadline: "30 Mai 2026",
    team: ["JD", "PT"],
  },
  {
    name: "Sistema ERP",
    client: "Cliente Gamma",
    status: "atrasado" as ProjectStatus,
    progress: 33,
    deadline: "01 Mar 2026",
    team: ["MR", "LC", "JD", "AS"],
  },
  {
    name: "Dashboard Analytics",
    client: "Interno",
    status: "planejamento" as ProjectStatus,
    progress: 10,
    deadline: "20 Jun 2026",
    team: ["PT", "AS"],
  },
  {
    name: "Migração Cloud",
    client: "Cliente Delta",
    status: "concluido" as ProjectStatus,
    progress: 100,
    deadline: "28 Fev 2026",
    team: ["JD", "MR"],
  },
];

export function ProjectsList() {
  return (
    <div className="bg-card rounded-xl shadow-card animate-fade-in" style={{ animationDelay: "300ms" }}>
      <div className="p-5 border-b">
        <div className="flex items-center justify-between">
          <h3 className="font-display font-semibold text-lg">Projetos Recentes</h3>
          <button className="text-sm text-primary font-medium hover:underline">Ver todos</button>
        </div>
      </div>
      <div className="divide-y">
        {projects.map((project) => {
          const status = statusConfig[project.status];
          return (
            <div
              key={project.name}
              className="p-4 hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm truncate">{project.name}</p>
                  <p className="text-xs text-muted-foreground">{project.client}</p>
                </div>
                <Badge variant="outline" className={`shrink-0 text-[10px] ${status.className}`}>
                  {status.label}
                </Badge>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <Progress value={project.progress} className="h-1.5" />
                </div>
                <span className="text-xs font-medium text-muted-foreground w-8 text-right">
                  {project.progress}%
                </span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex -space-x-2">
                  {project.team.map((initials) => (
                    <Avatar key={initials} className="h-6 w-6 border-2 border-card">
                      <AvatarFallback className="text-[9px] bg-secondary font-medium">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{project.deadline}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
