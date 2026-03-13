import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle2, Circle, Clock, AlertCircle } from "lucide-react";

type TaskPriority = "alta" | "media" | "baixa";
type TaskStatus = "concluida" | "em_andamento" | "pendente" | "atrasada";

const priorityColors: Record<TaskPriority, string> = {
  alta: "text-destructive",
  media: "text-warning",
  baixa: "text-success",
};

const statusIcons: Record<TaskStatus, React.ReactNode> = {
  concluida: <CheckCircle2 className="h-4 w-4 text-success" />,
  em_andamento: <Clock className="h-4 w-4 text-primary" />,
  pendente: <Circle className="h-4 w-4 text-muted-foreground" />,
  atrasada: <AlertCircle className="h-4 w-4 text-destructive" />,
};

const tasks = [
  { title: "Revisar wireframes do portal", project: "Redesign do Portal", assignee: "MR", priority: "alta" as TaskPriority, status: "em_andamento" as TaskStatus, due: "Hoje" },
  { title: "Configurar CI/CD pipeline", project: "App Mobile v2", assignee: "JD", priority: "alta" as TaskPriority, status: "atrasada" as TaskStatus, due: "Ontem" },
  { title: "Reunião de kick-off", project: "Dashboard Analytics", assignee: "PT", priority: "media" as TaskPriority, status: "pendente" as TaskStatus, due: "Amanhã" },
  { title: "Testes de integração ERP", project: "Sistema ERP", assignee: "LC", priority: "alta" as TaskPriority, status: "em_andamento" as TaskStatus, due: "14 Mar" },
  { title: "Documentação da API", project: "App Mobile v2", assignee: "AS", priority: "baixa" as TaskPriority, status: "concluida" as TaskStatus, due: "12 Mar" },
  { title: "Deploy ambiente staging", project: "Redesign do Portal", assignee: "JD", priority: "media" as TaskPriority, status: "pendente" as TaskStatus, due: "16 Mar" },
];

export function TasksList() {
  return (
    <div className="bg-card rounded-xl shadow-card animate-fade-in" style={{ animationDelay: "400ms" }}>
      <div className="p-5 border-b">
        <div className="flex items-center justify-between">
          <h3 className="font-display font-semibold text-lg">Tarefas Recentes</h3>
          <button className="text-sm text-primary font-medium hover:underline">Ver todas</button>
        </div>
      </div>
      <div className="divide-y">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="p-4 hover:bg-muted/50 transition-colors cursor-pointer flex items-center gap-3"
          >
            <div className="shrink-0">{statusIcons[task.status]}</div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium truncate ${task.status === "concluida" ? "line-through text-muted-foreground" : ""}`}>
                {task.title}
              </p>
              <p className="text-xs text-muted-foreground">{task.project}</p>
            </div>
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <span className={`text-[10px] font-semibold uppercase ${priorityColors[task.priority]}`}>
                {task.priority}
              </span>
              <Avatar className="h-6 w-6">
                <AvatarFallback className="text-[9px] bg-secondary font-medium">
                  {task.assignee}
                </AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground w-12 text-right">{task.due}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
