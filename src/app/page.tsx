'use client'

import Cabecalho from '@/components/Cabecalho'
import Corpo from '@/components/Corpo'
import { useState } from "react";

export default function Home() {
  const [cor, setCor] = useState('#0062be')
  const [lata, setLata] = useState('001')

  function mudarCor(novaCor: string) {
    setCor(novaCor)
  }

  function mudarLata(novalata: string) {
    setLata(novalata)
  }

  return (
<section
      className="flex min-h-screen flex-col px-4 sm:px-24"
      style={{ backgroundColor: cor }} // Usando style para cor dinâmica
    >
      <Cabecalho cor={cor} />
      <Corpo mudarCor={mudarCor} lataAtual={lata} mudaLata={mudarLata} />
    </section>

  )
}
