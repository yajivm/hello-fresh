import styled from 'styled-components';

export const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`

export const CardContent = styled.div`
  padding: 10px 10px 20px;
`

export const CardTitle = styled.h3`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 5px 0 10px;
`

export const CardDescription = styled.div``

export const FloatIcons = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  display: none;
`

export const Icon = styled.div`
  background: #fffefe75;
  border-radius: 30px;
  height: 25px;
  width: 30px;
  text-align: center;
  padding-top: 1px;
  transition: 0.3s;
  margin: 0 5px;
`

export const CardWrapper = styled.div`
  overflow: hidden;
  text-align: left;
  position: relative;
  ${({ isShadowEnabled }) => isShadowEnabled ?
    `
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
      background: #fff;
    `
  :
    `
      > img {
        border-radius: 8px;
      }
      > div {
        padding-left: 0;
      }
    `
  }

  &:hover > ${FloatIcons} {
    display: flex;
  }
`

export const CardInnerWrapper = styled.div``