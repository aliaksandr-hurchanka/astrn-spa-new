import { useState } from 'react';

export const useImageError = () => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  const onErrorHandler = () => {
    setIsImageLoading(false);
  };

  return {
    isImageLoading,
    onErrorHandler,
  };
};
