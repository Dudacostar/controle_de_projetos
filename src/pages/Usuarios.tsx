import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users, FolderKanban, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const usuariosMock = [
  { id: 1, nome: "Maria Eduarda", login: "maria.eduarda", perfil: "Administrador" },
  { id: 2, nome: "João Silva", login: "joao.silva", perfil: "Gerente" },
  { id: 3, nome: "Ana Costa", login: "ana.costa", perfil: "Desenvolvedor" },
  { id: 4, nome: "Pedro Souza", login: "pedro.souza", perfil: "Desenvolvedor" },
  { id: 5, nome: "Juliana Lima", login: "juliana.lima", perfil: "Analista" },
];

const Usuarios = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="h-14 flex items-center justify-between border-b px-6 bg-card">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <FolderKanban className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-sm">Controle de Projetos</span>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 w-fit"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o início
          </Button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold font-display flex items-center gap-2">
                <Users className="h-6 w-6" />
                Usuários Cadastrados
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Listagem de todos os usuários do sistema
              </p>
            </div>
            <Button onClick={() => navigate("/cadastro")} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Cadastrar usuário
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Usuários</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Login</TableHead>
                    <TableHead>Perfil</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {usuariosMock.map((usuario) => (
                    <TableRow key={usuario.id}>
                      <TableCell className="font-medium">{usuario.nome}</TableCell>
                      <TableCell>{usuario.login}</TableCell>
                      <TableCell>{usuario.perfil}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Usuarios;