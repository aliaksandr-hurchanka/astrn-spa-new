// import { useEffect, useState } from 'react';

// import { ImageErrorPlaceholder } from '../image-error-placeholder';
// import { useImageError } from '../../hooks/index';
// import { buildKey } from '../../utils/common';

// import { getImageSources } from './helpers';
import { ImageStyled, ImageStyledWrapper } from './styled';
import { ImageAtomComponentProps } from './types';

/**
 * @param src - string
 * @param fallbackSrc - string; alternative source of src image
 * @param alt - string | optional prop
 * @param srcSet - object | optional prop
 * @param caption - string | title text
 * @param width - number | optional prop
 * @param height - number | optional prop
 * @param dataTestId - string | prop for automation testing
 * @param maxHeight - number | optional prop
 * @param decorative - boolean | optional prop | default - false
 * @param draggable - boolean | optional prop | default - false
 * @param onError - function | work when image didn't load. Error case is result return default image.
 * @param displayPopupTitle - boolean | When checked, the caption won't be
 * displayed below the image, but as a pop-up displayed by some browsers when hovering over the image.
 * @returns JSX.Element | null
 */
export function Image(props: ImageAtomComponentProps): JSX.Element | null {
  const {
    src = '',
    alt = '',
    // srcSet = [],
    caption = '',
    width = '100%',
    height = 'auto',
    maxHeight = 'none',
    isFullHeight = true,
    decorative = false,
    draggable = false,
    role,
    displayPopupTitle = false,
    aspectRatio,
    objectFit,
    onError,
    placeholderComponent,
    // fallbackSrc = '',
    ...rest
  } = props;

  // const [imageUrl, setImageUrl] = useState('');
  // const [errorOccurred, setErrorOccurred] = useState(false);

  // useEffect(() => {
  //   if (src) {
  //     setImageUrl(src);
  //   }
  // }, [src]);

  // const { onErrorHandler } = useImageError();

  // const handleImageError = useCallback(() => {
  //   if (onError) {
  //     onError();
  //   } else {
  //     if (!errorOccurred) {
  //       setImageUrl(fallbackSrc);
  //       setErrorOccurred(true);
  //     }

  //     if (errorOccurred) {
  //       onErrorHandler();
  //     }
  //   }
  // }, [errorOccurred, fallbackSrc, onError, onErrorHandler]);

  // if (!src || !isImageLoading) {
  //   return placeholderComponent ? (
  //     placeholderComponent
  //   ) : (
  //     <ImageErrorPlaceholder
  //       aspectRatio={aspectRatio}
  //       hasBackground={errorPlaceholderHasBackground}
  //     />
  //   );
  // }

  // const sources = getImageSources(srcSet);
  const titleRole = displayPopupTitle &&
    caption && {
      title: caption,
    };
  // const dataTestIdImage = buildKey(dataTestId, 'image');

  return (
    <ImageStyledWrapper
      isFullHeight={isFullHeight}
      {...rest}
    >
      {/* <picture> */}
        {/* {sources} */}
        <ImageStyled
          {...titleRole}
          {...(role && {
            role,
          })}
          src={src}
          // onError={handleImageError}
          alt={(!decorative && alt) || ''}
          width={width}
          height={height}
          maxHeight={maxHeight}
          draggable={draggable}
          aspectRatio={aspectRatio}
          objectFit={objectFit}
          // data-testid={dataTestIdImage}
        />
      {/* </picture> */}
      {!displayPopupTitle && caption && <p>{caption}</p>}
    </ImageStyledWrapper>
  );
}

Image.displayName = 'Image';
