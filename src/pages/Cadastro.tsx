import { useNavigate, useLocation } from "react-router-dom";
import { FolderKanban } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { FormEvent, useState } from "react";

const Cadastro = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const origem = location.state?.origem || "/";

  const [nome, setNome] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleSalvar = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, login, senha }),
    });

    const data = await response.json();

    if (data.message === "Usuário cadastrado") {
      alert("Usuário cadastrado com sucesso!");
      navigate(origem);
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md p-8 space-y-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="h-12 w-12 rounded-lg bg-primary flex items