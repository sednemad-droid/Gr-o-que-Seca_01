
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-800 text-slate-400">
      <div className="container mx-auto px-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Segredo do Emagrecimento. Todos os direitos reservados.</p>
        <p className="mt-4 max-w-2xl mx-auto">
          Aviso Legal: Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados. Os resultados podem variar de pessoa para pessoa.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
