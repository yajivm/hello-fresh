import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`

export const Icon = styled.div`
  width: 45px;
  height: 35px;
  background: #eee;
  border-radius: 50%;
  padding-top: 12px;
  visibility: ${({ isIcToBeShown }) => isIcToBeShown ? 'visible' : 'hidden'}
`

export const PaginatioNumber = styled.p`
  margin: 0 20px;
  font-size: 20px;
  font-weight: 900;
`;