import type { ReactNode } from 'react';
import './globals.css';
export const metadata = { title: 'VIDA | Seu espaço pessoal', description: 'Cuide de tudo que importa.' };
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
