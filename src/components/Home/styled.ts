import { styled } from "@linaria/react";

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 780px;
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
