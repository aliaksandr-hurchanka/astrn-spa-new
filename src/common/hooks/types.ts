export type UseAuthorizationProps = {
  setAuthorized: () => void;
  setUnauthorized: () => void;
  hasValidSession: (time: number) => boolean;
  detectAuthorizedStatus: () => void;
  fetchRefreshToken: () => void;
  cleanAuthorizedState: () => void;
};

export interface UseRenditionsProps {
  imageSrc: string;
  isImageExists?: boolean;
}
