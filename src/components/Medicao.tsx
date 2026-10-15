"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { nomeDoClique, registrar } from "@/lib/medicao";

/* Mede páginas vistas e cliques importantes. Fica no layout, não renderiza nada. */
export function Medicao() {
  const caminho = usePathname();

  useEffect(() => {
    registrar("pagina");
  }, [caminho]);

  useEffect(() => {
    function aoClicar(e: MouseEvent) {
      const alvo = e.target as Element | null;
      if (!alvo) return;
      const nome = nomeDoClique(alvo);
      if (nome) registrar("clique", nome);
    }
    document.addEventListener("click", aoClicar, { capture: true });
    return () => document.removeEventListener("click", aoClicar, { capture: true });
  }, []);

  return null;
}
