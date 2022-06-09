import React, { useState, useEffect } from "react";
import Card from '../../components/Card';
import { recipes } from "../../mockData/data";
import { useNavigateParams } from "../../utils/helper";
import { DEFAULT_PAGE_NUMBER, ITEMS_COUNT_PER_PAGE } from '../../utils/constant';
import { BackIc, ForwardIc } from "../Icons";
import { GridWrapper, GridContainer, Grid, GreyText, Container, PaginatioNumber, PaginationWrapper, Icon } from './Recipe.styles';

const Recipe = () => {
  const navigate = useNavigateParams();
  const [recipeList, setRecipeList] = useState([]);
  const [pageNumber, setPageNumber] = useState(DEFAULT_PAGE_NUMBER);
  const [showPagination, setShowPagination] = useState(false);
  const [showBackIc, setShowBackIc] = useState(false);
  const [showForwardIc, setShowForwardIc] = useState(!(recipeList.length > ITEMS_COUNT_PER_PAGE));

  const onClickCard = id => {
    navigate(`/recipe-details`, `id=${id}`);
  }

  const deleteCard = id => {
    const filteredData = recipeList.filter(item => item.id !== id);
    setRecipeList(filteredData);
  }

  const editCard = id => {
    console.log('====>', id)
  }

  const filteredItemsForPage = () => {
    let recipesData = [];
    let paginationStaus = false;
    if (recipes.length > ITEMS_COUNT_PER_PAGE) {
      const filteredData = recipes.filter((item, ind) => ind < ITEMS_COUNT_PER_PAGE - 1);
      recipesData = filteredData;
      paginationStaus = true;
    } else {
      recipesData = recipes;
    }
    console.log('=====>', recipesData.length)
    setRecipeList(recipesData);
    setShowPagination(paginationStaus);
  }

  useEffect(() => {
    filteredItemsForPage();
  }, []);

  const numPages = () => {
    return Math.ceil(recipes.length / ITEMS_COUNT_PER_PAGE);
  }

  const onChangePage = page => {
    let recipesData = [];
    if (page < 1) {
      page = 1;
    }
    if (page > numPages()) page = numPages();

    for (var i = (page-1) * ITEMS_COUNT_PER_PAGE; i < (page * ITEMS_COUNT_PER_PAGE) && i < recipes.length; i++) {
      recipesData.push(recipes[i]);
    }
    
    if (page === 1) {
      setShowBackIc(false)
    } else setShowBackIc(true)

    console.log(page === numPages())
    if (page === numPages()) {
      setShowForwardIc(false)
    } else setShowForwardIc(true)

    setRecipeList(recipesData);
    setPageNumber(page);
  }

  const onClickPagination = type => {
    let number = pageNumber;
    switch (type) {
      case 'Back':
        number--;
        break;
      case 'Forward':
        number++;
        break;
      default:
        break;
    }
    onChangePage(number);
  }

  return (
    <Container>
      <GridWrapper>
        <GridContainer>
          {
            (recipeList && recipeList.length > 0) ?
              recipeList.map(({ title, description, img, id }, ind) => (
                <Grid key={`receipie-${ind}`} count={4}>
                  <Card title={title} description={description} imageSrc={img} id={id} onClickCard={onClickCard} showActionIcons onClickDeleteIcon={deleteCard} onClickEditIcon={editCard} />
                </Grid>
              ))
            :
              <GreyText>No Recipe Available</GreyText>
          }
        </GridContainer>
      </GridWrapper>
      {showPagination && (
        <PaginationWrapper>
          <Icon onClick={() => onClickPagination('Back')} isIcHidden={showBackIc}>
            <BackIc />
          </Icon>
          <PaginatioNumber>{pageNumber}</PaginatioNumber>
          <Icon onClick={() => onClickPagination('Forward')} isIcHidden={showForwardIc}>
            <ForwardIc />
          </Icon>
        </PaginationWrapper>
      )}
    </Container>
  )
}

export default Recipe;