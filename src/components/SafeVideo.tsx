import { useState } from 'react';

type SafeVideoProps = {
  src: string;
  label: string;
  poster?: string;
};

export function SafeVideo({ src, label, poster }: SafeVideoProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div className="case-video case-video--fallback" role="img" aria-label="Vídeo indisponível">
        <span>Vídeo indisponível</span>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <button
        className="video-loader"
        type="button"
        onClick={() => setIsLoaded(true)}
        aria-label={`Carregar vídeo: ${label}`}
      >
        {poster ? <img src={poster} alt="" loading="lazy" decoding="async" /> : null}
        <span>Carregar vídeo</span>
      </button>
    );
  }

  return (
    <video
      className="case-video"
      src={src}
      poster={poster}
      controls
      playsInline
      preload="none"
      aria-label={label}
      onError={() => setHasError(true)}
    />
  );
}
