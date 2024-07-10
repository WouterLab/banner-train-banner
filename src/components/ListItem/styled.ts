import { css } from "@linaria/core";
import { styled } from "@linaria/react";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100%;
  flex-wrap: wrap;
  opacity: 0;
  transition: all 0.3s;
`;

export const Letter = styled.div`
  background-color: #58626e;
  min-width: 18px;
  width: 18px;
  height: 26px;
  position: relative;
  background: conic-gradient(from 90deg at 2px 2px, #58626e 90deg, #0000 0) 2px
    2px/4px 4px;

  span {
    position: absolute;
    top: -2px;
    margin-left: auto;
    margin-right: auto;
    left: -2px;
    right: 0;
    font-size: 37px;
    text-align: center;
  }
`;

export const stylesGreen = css`
  color: #a6e5a8;
`;

export const stylesWithMargin = css`
  margin-right: 8px;
`;

export const stylesVisible = css`
  opacity: 1;
`;
