import { styled } from "@linaria/react";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #fff;
  align-items: center;
`;

export const Divider = styled.div`
  background-color: #222;
  box-shadow: 0 4px 10px 0 rgba(255, 255, 255, 0.2);
  height: 4px;
  margin: 8px 0;
`;
