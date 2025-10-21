
import React from 'react';
import { Testimonial } from '../types';
import WhatsAppButton from './WhatsAppButton';

const testimonialsData: Testimonial[] = [
  {
    name: 'Ivani',
    text: '"Eu estava com muita gordura na barriga, e derreteu tudo com o GK. Estou muito satisfeita!"',
    loss: 20,
  },
  {
    name: 'Maria',
    text: '"Ela ia na praia mas com maiô, e carregando insegurança, porém, Ela hoje usa bikine e se sente segura"',
    loss: 38,
  },
  {
    name: 'Célia',
    text: '"Andava de cadeira de rodas com a ajuda do marido e graças ao Graokiseca eu resolvi meu problema. Esse produto é impressionante, uma bênção!"',
    loss: 35,
  },
];

const TestimonialCard: React.FC<Testimonial> = ({ name, text, loss }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200 flex flex-col h-full">
    <i className="fas fa-quote-left text-emerald-500 text-3xl"></i>
    <blockquote className="mt-4 text-slate-600 flex-grow">
      {text}
    </blockquote>
    <div className="mt-6 flex items-center">
      <p className="font-bold text-slate-800">{name}</p>
      <span className="ml-auto bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full">
        -{loss}kg
      </span>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Nossos depoimentos são reais, nada Comprado!
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          São Mulheres como você, que estavam sem saber o que fazer até conhecer o GraoKiseca!
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <WhatsAppButton text="QUERO ENTRAR NO GRUPO VIP AGORA!" variant="primary" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
