import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Promptadores — Arquitetura',
  description: 'Análise de materiais e geração de prompts para renders de arquitetura',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
