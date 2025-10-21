import React, { useState } from 'react';
import WhatsAppButton from './WhatsAppButton';

const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoId = 'TWOMJggI0LM';
  // A key é usada para forçar o iframe a recarregar quando o estado mudo muda
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&playsinline=1&controls=0&loop=1&playlist=${videoId}&rel=0`;

  return (
    <section className="py-20 px-6 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          <span>Elimine Peso sem dieta e exercícios, com o Grão secreto potente, natural e seguro.</span>
          <br />
          <span className="text-emerald-600">Esqueça as capsulas de farinha inúteis...</span>
        </h1>

        {/* --- Player de Vídeo VSL --- */}
        <div className="relative w-full max-w-sm mx-auto mt-10 aspect-[9/16] overflow-hidden rounded-lg shadow-xl border-4 border-white bg-black">
          <iframe
            key={isMuted ? 'muted' : 'unmuted'}
            className="absolute top-0 left-0 w-full h-full"
            src={videoSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          {isMuted && (
            <div 
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black bg-opacity-40 transition-opacity duration-300 hover:bg-opacity-30"
              onClick={() => setIsMuted(false)}
            >
              <button 
                className="bg-white text-slate-800 font-bold py-3 px-8 rounded-full shadow-lg text-lg flex items-center gap-3 transform transition-transform hover:scale-110"
              >
                <i className="fas fa-volume-high"></i>
                <span>Ativar o Som</span>
              </button>
            </div>
          )}
        </div>
        {/* --- Fim do Player de Vídeo --- */}

        <div className="mt-10 flex justify-center">
          <WhatsAppButton text="QUERO ENTRAR NO GRUPO VIP!" variant="primary" />
        </div>
        
        <p className="mt-10 text-lg text-slate-600 max-w-3xl mx-auto">
          Perca peso de forma natural e surpreendentemente rápida, sem precisar de dietas malucas ou rotinas de exercícios exaustivas. O método que vai mudar sua vida está aqui.
        </p>
        <p className="mt-4 text-sm text-slate-500">
          Vagas limitadas. Garanta a sua agora!
        </p>
      </div>
    </section>
  );
};

export default Hero;