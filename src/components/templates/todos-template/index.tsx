import { PropsWithChildren } from 'react';
import { Header } from '../../organisms/header';
import { Footer } from '../../organisms/footer';

import './styles.css';

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
