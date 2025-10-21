
import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-emerald-600 text-white px-6">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold">
          Está a um passo de mudar sua vida!
        </h2>
        <p className="mt-4 text-lg text-emerald-100">
          Não perca mais tempo com métodos que não funcionam. Junte-se a centenas de mulheres que já transformaram seus corpos e recuperaram a autoestima. A sua vaga no grupo VIP está esperando por você.
        </p>
        <div className="mt-10 flex justify-center">
          <WhatsAppButton text="SIM, EU QUERO MUDAR DE VIDA!" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
