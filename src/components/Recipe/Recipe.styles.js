import styled from 'styled-components';

export const GridWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`

export const GridContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export const Grid = styled.div`
  width: ${({ count }) => count === 4 ? `23.2%` : `31.55%`};
  margin: 0 10px 30px;
  cursor: pointer;

  ${({ count }) => count !== 4 ?
    `
      @media(max-width: 1145px) {
        width: 48%;
      }
      @media(max-width: 1000px) {
        width: 47.5%;
      }
      @media(max-width: 800px) {
        max-width: 100%;
        margin: 0 auto 10px;
        width: 90vw;
      }    
    `
  :
    `@media(max-width: 1110px) {
        width: 47.5%;
      }

      @media(max-width: 800px) {
        max-width: 100%;
        margin: 0 auto 10px;
        width: 90vw;
      }    
    `
  }
`

export const GreyText = styled.p`
  font-size: 40px;
  line-height: 52px;
  text-align: center;
  width: 100%;
  color: rgba(0, 0, 0, 0.2);
  margin-top: 40vh;
`

export const Container = styled.div``