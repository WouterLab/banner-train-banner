import { styled } from "@linaria/react";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;

export const Letter = styled.span`
  position: relative;
  width: 48px;
  min-width: 48px;
  margin: 0 4px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #222;
  color: #fff;
  height: 64px;
  vertical-align: middle;
  font-size: 48px;
  margin-bottom: 16px;
  box-shadow: 0px 5px 5px 0px black;
  border-radius: 4px;
  transition: all 0.3s;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.1), transparent);
    z-index: 1;
    transition: all 0.3s;
    top: 0;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    z-index: 1;
    bottom: 0;
    transition: all 0.3s;
  }
`;

export const Divider = styled.div`
  position: absolute;
  top: 50%;
  height: 1px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 1px 0 #222;
  z-index: 100;
`;
