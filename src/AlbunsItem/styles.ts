import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 170px;
  align-items: center;
`;
export const Image = styled.img`
  width: 160px;
  height: 170px;
`;
export const Title = styled.h3`
  display: flex;
  font-size: var(--fontMedium);
  color: var(--terceary);
  margin: 10px;
`;
export const Description = styled.h4`
  display: flex;
  font-size: var(--fontSmall);
  color: var(--secundary);
`;
