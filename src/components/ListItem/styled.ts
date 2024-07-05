import { css } from "@linaria/core";
import { styled } from "@linaria/react";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  flex-wrap: wrap;
`;

export const Letter = styled.div`
  background-color: #474f59;
  min-width: 50px;
  /* width: 52px; */
  height: 72px;
  position: relative;
  /* overflow: hidden; */
  border-radius: 2px;
  background: conic-gradient(from 90deg at 2px 2px, #474f59 90deg, #0000 0) 8px
    0px/10px 10px;

  span {
    position: absolute;
    top: -3px;
    margin-left: auto;
    margin-right: auto;
    left: -5px;
    right: 0;
    height: 82px;
    font-size: 98px;
    text-align: center;
  }
`;

export const stylesGreen = css`
  color: #a6e5a8;
`;

export const stylesWithMargin = css`
  margin-right: 36px;
`;
