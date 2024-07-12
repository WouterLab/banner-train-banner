import { css } from "@linaria/core";
import { styled } from "@linaria/react";

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  height: 800px;
  transition: all 0.3s;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #fff;
  align-items: center;
  position: relative;
  overflow-y: auto;
`;

export const hiddenClassName = css`
  opacity: 0;
`;

export const Item = styled.div`
  animation-name: "show";
  animation-timing-function: ease-in-out;
  animation-duration: 0.3s;
`;
