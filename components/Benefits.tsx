
import React from 'react';
import { Benefit } from '../types';

const benefitsData: Benefit[] = [
  {
    icon: 'fa-utensils',
    title: 'Sem Dietas Restritivas',
    description: 'Coma o que você gosta sem culpa. Nosso segredo atua independentemente da sua alimentação.',
  },
  {
    icon: 'fa-bed',
    title: 'Sem Exercícios Cansativos',
    description: 'Conquiste o corpo dos seus sonhos sem passar horas na academia. Ideal para quem tem uma rotina corrida.',
  },
  {
    icon: 'fa-rocket',
    title: 'Resultados Rápidos',
    description: 'Veja as primeiras mudanças no seu corpo e na balança em questão de dias, não meses.',
  },
  {
    icon: 'fa-leaf',
    title: 'Componente Secreto 100% Natural',
    description: 'Uma fórmula segura, baseada em ingredientes naturais, sem efeitos colaterais perigosos.',
  },
];

const BenefitCard: React.FC<Benefit> = ({ icon, title, description }) => (
  <div className="bg-white p-8 text-center rounded-xl shadow-md transition-transform duration-300 hover:-translate-y-2 border border-slate-100">
    <div className="flex items-center justify-center h-16 w-16 mx-auto bg-emerald-100 rounded-full">
      <i className={`fas ${icon} text-3xl text-emerald-600`}></i>
    </div>
    <h3 className="mt-6 text-xl font-bold text-slate-900">{title}</h3>
    <p className="mt-2 text-slate-600">{description}</p>
  </div>
);

const Benefits: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Por Que Nosso Método é Diferente?
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Chega de soluções que não funcionam. Nós focamos no que realmente importa para você ter resultados de verdade.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefitsData.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
