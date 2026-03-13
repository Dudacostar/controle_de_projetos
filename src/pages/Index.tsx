import { StatsCards } from "@/components/dashboard/StatsCards";
import { ProjectsList } from "@/components/dashboard/ProjectsList";
import { TasksList } from "@/components/dashboard/TasksList";
import { TeamOverview } from "@/components/dashboard/TeamOverview";
import { Bell, Search, FolderKanban } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="h-14 flex items-center justify-between border-b px-6 bg-card">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <FolderKanban className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-sm">ProjectHub</span>
          <div className="hidden sm:flex items-center gap-2 bg-muted rounded-lg px-3 py-1.5 ml-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar projetos, tarefas..."
              className="bg-transparent text-sm outline-none w-64 placeholder:text-muted-foreground"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
            <Bell className="h-4 w-4 text-muted-foreground" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive" />
          </button>
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-xs font-semibold text-primary-foreground">
            JD
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div>
            <h1 className="text-2xl font-bold font-display">Dashboard</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Visão geral dos projetos e atividades da equipe
            </p>
          </div>

          <StatsCards />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <ProjectsList />
              <TasksList />
            </div>
            <div>
              <TeamOverview />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
