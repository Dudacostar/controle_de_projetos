import { useNavigate } from "react-router-dom";
import { FolderKanban } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { FormEvent } from "react";

const Cadastro = () => {
  const navigate = useNavigate();

  const handleSalvar = (e: FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md p-8 space-y-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
            <FolderKanban className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold font-display">Cadastro</h1>
          <p className="text-sm text-muted-foreground">Crie sua conta</p>
        </div>

        <form onSubmit={handleSalvar} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="usuario">Usuário</Label>
            <Input id="usuario" type="text" placeholder="Escolha um usuário" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="senha">Senha</Label>
            <Input id="senha" type="password" placeholder="Crie uma senha" />
          </div>

          <div className="pt-2">
            <Button type="submit" className="w-full">Salvar</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Cadastro;
