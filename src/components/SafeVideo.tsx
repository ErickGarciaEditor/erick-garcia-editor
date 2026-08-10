import { useState } from 'react';

type SafeVideoProps = {
  src: string;
  label: string;
};

export function SafeVideo({ src, label }: SafeVideoProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="case-video case-video--fallback" role="img" aria-label="Vídeo pendente">
        <span>Vídeo pendente</span>
      </div>
    );
  }

  return (
    <video
      className="case-video"
      src={src}
      controls
      preload="metadata"
      aria-label={label}
      onError={() => setHasError(true)}
    />
  );
}
