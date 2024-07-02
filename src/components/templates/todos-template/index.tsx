import { PropsWithChildren } from 'react';
import { Header } from '../../organisms/header';

import './styles.css';
import { Footer } from '../../organisms/footer';

export function TodosTemplate({ children }: PropsWithChildren) {
  return (
    <>
      <Header />

      <main className="page-content">
        {children}
      </main>

      <Footer />
    </>
  );
}
