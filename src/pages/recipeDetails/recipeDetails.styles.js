import styled from "styled-components";

export const ContentWrapper = styled.div`
  background: #fdfcfa;
  width: 100%;
  overflow: hidden;
`;

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-top: -100px;
  position: relative;


  @media(max-width: 1200px) {
     width: 100%;
  }
`;

export const BannerImageWrapper = styled.div``;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Text = styled.div`
  margin: 0 0 5px;
  padding: 0;
  color: ${({ textColor }) => (textColor ? textColor : `#000`)};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : `24`)}px;
  ${({ textSize }) => textSize && `font-size: ${textSize}px;`}
  ${({ align }) => align && `text-align: ${align};`}
  ${({ bold }) => bold && `font-weight: 900;`}
  ${({ marginVertical }) => marginVertical && `margin-top: ${marginVertical}px; margin-bottom: ${marginVertical}px;`}
  ${({ marginHorizontal }) =>
    marginHorizontal && `margin-left: ${marginHorizontal}px; margin-right: ${marginHorizontal}px;`}
  ${({ paddingVertical }) =>
    paddingVertical && `padding-top: ${paddingVertical}px; padding-bottom: ${paddingVertical}px;`}
  ${({ paddingHorizontal }) =>
    paddingHorizontal && `padding-left: ${paddingHorizontal}px; padding-right: ${paddingHorizontal}px;`}

  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}px;`}
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft}px;`}
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}px;`}
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight}px;`}
  ${({ paddingTop }) => paddingTop && `padding-top: ${paddingTop}px;`}
  ${({ paddingRight }) => paddingRight && `padding-right: ${paddingRight}px;`}
  ${({ paddingBottom }) => paddingBottom && `padding-bottom: ${paddingBottom}px;`}
  ${({ paddingLeft }) => paddingLeft && `padding-left: ${paddingLeft}px;`}
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  margin-left: -20px;
  ${({ listStyle }) => listStyle === 'bullet' && `
    list-style: none;
    & li:not(:first-child):before {
      content: " • ";
      font-size: 20px;
      color: #000;
      margin: 0 10px 0 -10px;
    }
  `}
  ${({ noBullet }) => noBullet && 
    `
      li:before {
        display: none;
      }
    `
  }
  ${({ noPadding }) => noPadding && 'padding-left: 20px;'}
  ${({ flexDirection }) => flexDirection && `justify-content: space-between; list-style: none;` }
  ${({ inlineWithParent }) => inlineWithParent && `display: inline-flex;` }
  ${({ breadCrumbList }) => breadCrumbList &&
    `
      justify-content: flex-start;
      & li:not(:first-child):before {
        content: " > ";
        font-size: 20px;
        color: #000;
        margin: 0 10px 0 -10px;
      }
    `
  }
`;

export const ListItem = styled.li`
  padding-right: 20px;
  line-height: 24px;
  ${({ bold }) => bold && `font-weight: 900;`}
  ${({ clickableItem }) => clickableItem && `cursor: pointer;`}
`;

export const ListWrapper = styled.div``;

export const WhiteBox = styled.div`
  background: #fff;
  border: solid 1px #f7f6f4;
  padding: 20px 30px;
  margin: 20px;
`;

export const TitleWrapper = styled.div`
  padding: 20px 0;
  border-bottom: solid 1px #ebebeb;
`;

export const GridWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  ${({ marginVertical }) => marginVertical && `margin-top: ${marginVertical}px; margin-bottom: ${marginVertical}px;`}
  ${({ borderTop }) => borderTop && `border-top: solid 1px #ebebeb; padding-top: 20px;`}
`;

export const Grid = styled.div`
  flex-direction: row;
  width: ${({ phase }) => phase === 3 ? '70%' : '30%'};
  ${({ textAlign }) => textAlign && `text-align: center;`}

  @media(max-width: 1200px) {
    width: ${({ phase }) => phase === 3 ? '60%' : '40%'};
  }

  @media(max-width: 800px) {
    width: 100%;
  }
`;

export const IngrediantsWrapper = styled.div``;

export const IngrediantsInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Ingrediants = styled.div`
  margin: 20px 0;
  width: 50%;
`;

export const InstructionWrapper = styled.div`
  ${({ paddingRight }) => paddingRight && `padding-right: ${paddingRight}px;`}
  ${({ paddingBottom }) => paddingBottom && `padding-bottom: ${paddingBottom}px;`}
  ${({ paddingLeft }) => paddingLeft && `padding-left: ${paddingLeft}px;`}
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}

  
  @media(max-width: 1200px) {
    padding-left: 0;
    padding-top: 15px;
  }
`
export const BreadCrumbWrapper = styled.div`
  background-color: rgb(238, 238, 238);
  border-bottom: 1px solid rgb(228, 228, 228);
  margin: -20px 0;
  padding: 30px 0;
`;