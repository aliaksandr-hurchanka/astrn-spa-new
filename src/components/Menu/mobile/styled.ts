import styled from 'styled-components';

export const MobileMenuStyled = styled.div`
  position: absolute;
  height: calc(100dvh - 105px);
  width: 100%;
  background: #000;
  top: 80px;
  right: 0;
  z-index: 5;
  padding-top: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  -webkit-animation: scale-up-ver-top 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-ver-top 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

  @-webkit-keyframes scale-up-ver-top {
    0% {
      -webkit-transform: scaleY(0.1);
              transform: scaleY(0.1);
      -webkit-transform-origin: 100% 0%;
              transform-origin: 100% 0%;
    }
    100% {
      -webkit-transform: scaleY(1);
              transform: scaleY(1);
      -webkit-transform-origin: 100% 0%;
              transform-origin: 100% 0%;
    }
  }
  @keyframes scale-up-ver-top {
    0% {
      -webkit-transform: scaleY(0.1);
              transform: scaleY(0.1);
      -webkit-transform-origin: 100% 0%;
              transform-origin: 100% 0%;
    }
    100% {
      -webkit-transform: scaleY(1);
              transform: scaleY(1);
      -webkit-transform-origin: 100% 0%;
              transform-origin: 100% 0%;
    }
  }
          
`;

export const MobileMenuButtonStyled = styled.div`
  display: flex;
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  cursor: pointer;

  border-radius: 6px;
  background: #141414;
  box-shadow: 0px 1px 2px 0px rgba(105, 81, 255, 0.05);
`;

export const LanguageSelectorStyled = styled.div`
  position: absolute;
  margin-bottom: 16px;
  bottom: 0;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
