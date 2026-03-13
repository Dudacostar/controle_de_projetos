import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const members = [
  { name: "Maria Eduarda", role: "Designer Lead", initials: "ME", tasks: 8, completed: 5 },
  { name: "Marciano Rodrigues", role: "Frontend Dev", initials: "MR", tasks: 6, completed: 4 },
  { name: "Mateus da Costa", role: "Backend Dev", initials: "MC", tasks: 10, completed: 7 },
  { name: "Maria Déborah", role: "Product Manager", initials: "MD", tasks: 5, completed: 3 },
];

export function TeamOverview() {
  return (
    <div className="bg-card rounded-xl shadow-card animate-fade-in" style={{ animationDelay: "500ms" }}>
      <div className="p-5 border-b">
        <h3 className="font-display font-semibold text-lg">Equipe</h3>
      </div>
      <div className="p-4 space-y-3">
        {members.map((member) => {
          const pct = Math.round((member.completed / member.tasks) * 100);
          return (
            <div key={member.initials} className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback className="text-xs bg-primary/10 text-primary font-semibold">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{member.name}</p>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-semibold">{member.completed}/{member.tasks}</p>
                <p className="text-[10px] text-muted-foreground">{pct}% concluído</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
