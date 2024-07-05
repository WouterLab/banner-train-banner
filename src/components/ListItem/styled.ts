import { css } from "@linaria/core";
import { styled } from "@linaria/react";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100%;
  flex-wrap: wrap;
`;

export const Letter = styled.div`
  background-color: #636f7d;
  min-width: 18px;
  height: 22px;
  position: relative;
  border-radius: 2px;
  background: conic-gradient(from 90deg at 2px 2px, #636f7d 90deg, #0000 0) 4px
    0px/4px 4px;

  span {
    position: absolute;
    top: 0px;
    margin-left: auto;
    margin-right: auto;
    left: 0px;
    right: 0;
    font-size: 26px;
    text-align: center;
  }
`;

export const stylesGreen = css`
  color: #a6e5a8;
`;

export const stylesWithMargin = css`
  margin-right: 8px;
`;
