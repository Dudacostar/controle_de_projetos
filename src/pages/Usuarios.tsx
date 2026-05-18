import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users, FolderKanban, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Usuarios = () => {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState<any>(null);
  const [editando, setEditando] = useState(false);
  const [nomeEdit, setNomeEdit] = useState("");
  const [loginEdit, setLoginEdit] = useState("");

  useEffect(() => {
    buscarUsuarios();
  }, []);

  const buscarUsuarios = () => {
    fetch(`${import.meta.env.VITE_API_URL}/usuarios`)
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.error("Erro ao buscar usuários:", err));
  };

  const abrirPopup = (usuario: any) => {
    setUsuarioSelecionado(usuario);
    setNomeEdit(usuario.nome);
    setLoginEdit(usuario.login);
    setEditando(false);
  };

  const fecharPopup = () => {
    setUsuarioSelecionado(null);
    setEditando(false);
  };

  const apagar = async () => {
    if (!confirm("Tem certeza que deseja apagar este usuário?")) return;
    await fetch(`${import.meta.env.VITE_API_URL}/usuarios/${usuarioSelecionado.usuario_id}`, {
      method: "DELETE",
    });
    fecharPopup();
    buscarUsuarios();
  };

  const salvarEdicao = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/usuarios/${usuarioSelecionado.usuario_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome: nomeEdit, login: loginEdit }),
    });
    fecharPopup();
    buscarUsuarios();
  };

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
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold font-display flex items-center gap-2">
                <Users className="h-6 w-6" />
                Usuários Cadastrados
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Listagem dos usuários do sistema
              </p>
            </div>
            <button
              onClick={() => navigate("/cadastro", { state: { origem: "/usuarios" } })}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              + Cadastrar Usuário
            </button>
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
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {usuarios.map((usuario: any) => (
                    <TableRow
                      key={usuario.usuario_id}
                      className="cursor-pointer hover:bg-muted"
                      onClick={() => abrirPopup(usuario)}
                    >
                      <TableCell className="font-medium">{usuario.nome}</TableCell>
                      <TableCell>{usuario.login}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* POP-UP */}
      {usuarioSelecionado && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg p-6 w-full max-w-md shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Detalhes do Usuário</h2>
              <button onClick={fecharPopup}>
                <X className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </button>
            </div>

            {!editando ? (
              <>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Nome</p>
                  <p className="font-medium">{usuarioSelecionado.nome}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Login</p>
                  <p className="font-medium">{usuarioSelecionado.login}</p>
                </div>
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => setEditando(true)}
                    className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Editar
                  </button>
                  <button
                    onClick={apagar}
                    className="flex-1 bg-destructive text-destructive-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-destructive/90 transition-colors"
                  >
                    Apagar
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Nome</label>
                  <input
                    className="w-full border rounded-md px-3 py-2 text-sm bg-background"
                    value={nomeEdit}
                    onChange={(e) => setNomeEdit(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Login</label>
                  <input
                    className="w-full border rounded-md px-3 py-2 text-sm bg-background"
                    value={loginEdit}
                    onChange={(e) => setLoginEdit(e.target.value)}
                  />
                </div>
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={salvarEdicao}
                    className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Salvar
                  </button>
                  <button
                    onClick={() => setEditando(false)}
                    className="flex-1 border px-4 py-2 rounded-md text-sm font-medium hover:bg-muted transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Usuarios;
