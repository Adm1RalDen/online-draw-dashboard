import styled from "styled-components";

const HomeCabinetWrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.greenBackground};
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 10px;
  margin-right: 5px;
`;

export { HomeCabinetWrapper };
