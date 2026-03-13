import { DashboardLayout } from "@/components/DashboardLayout";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { ProjectsList } from "@/components/dashboard/ProjectsList";
import { TasksList } from "@/components/dashboard/TasksList";
import { TeamOverview } from "@/components/dashboard/TeamOverview";

const Index = () => {
  return (
    <DashboardLayout>
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
    </DashboardLayout>
  );
};

export default Index;
