import { useState } from 'react';

type SafeImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel: string;
};

export function SafeImage({ src, alt, className, fallbackLabel }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="media-fallback" role="img" aria-label={fallbackLabel}>
        <span>{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}
