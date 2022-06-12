import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { recipes } from "../../mockData/recipeData";
import { ContentWrapper, Container, BannerImageWrapper, Image, Text, ListWrapper, List, ListItem, WhiteBox, TitleWrapper, GridWrapper, Grid, IngrediantsWrapper, InstructionWrapper, Ingrediants, IngrediantsInnerWrapper, BreadCrumbWrapper } from './recipeDetails.styles'

const RecipeDetails = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [recipeDetails, setRecipeDetails] = useState({});

  useEffect(() => {
    const id = new URLSearchParams(search).get('id');
    const details = recipes.filter(item => {
      return item?.id === parseInt(id)
    });

    console.log(details)
    setRecipeDetails(details[0]);
  }, [search]);

  const navigateToRecipe = () => navigate("/hello-fresh/recipes-list");
  
  return (
    <ContentWrapper>
      <BreadCrumbWrapper>
        <List flexDirection breadCrumbList>
          <ListItem bold onClick={navigateToRecipe} clickableItem data-testid='recipe-bread-crumb'>Recipies</ListItem>
          <ListItem>{recipeDetails.title}</ListItem>
        </List>
      </BreadCrumbWrapper>
      <BannerImageWrapper>
        <Image src={recipeDetails.img} alt='recipe-banner-image' data-testid='banner-image' height={300}/>
      </BannerImageWrapper>
      <Container>
        <WhiteBox>
          <TitleWrapper>
            <Text as='h2' data-testid='title'>{recipeDetails.title}</Text>
            <Text as='p' data-testid='description'>{recipeDetails.description}</Text>
          </TitleWrapper>
          <GridWrapper>
            <Grid phase={3}>
              <Text as='p' data-testid='longDescription' marginVertical={20} css={{ display: 'flex'}}>{recipeDetails.longDescription}</Text>
              <ListWrapper>
                <Text as='span' bold data-testid=''>Tags:</Text>
                {recipeDetails?.tags &&
                  <List listStyle='bullet' inlineWithParent removeFirstBullet>
                    {recipeDetails.tags.map((tag, ind) => (
                      <ListItem key={ind}>{tag}</ListItem>
                    ))} 
                  </List>
                }
              </ListWrapper>
            </Grid>
            <Grid phase={1}>
              {recipeDetails?.preparationTime &&
                <List flexDirection>
                  <ListItem bold>Preparation Time</ListItem>
                  <ListItem>{recipeDetails.preparationTime}</ListItem>
                </List>
              }
              {recipeDetails?.type &&
                <List flexDirection>
                  <ListItem bold>Cooking difficulty</ListItem>
                  <ListItem>{recipeDetails.type}</ListItem>
                </List>
              }
            </Grid>
          </GridWrapper>
        </WhiteBox>

        <GridWrapper>
          <Grid phase={3}>
            <WhiteBox>
              {recipeDetails?.ingredients &&
                <IngrediantsWrapper>
                  <Text as='h2' data-testid='ingrediants-title' fontSize={28}>Ingredients</Text>
                  <IngrediantsInnerWrapper>
                    {recipeDetails.ingredients.map((ingredient, ind) => (
                      <Ingrediants key={ind}>
                        <Text as='p' data-testid={`ingrediant-name-${ind}-quantity`}>{ingredient.quantity}</Text>
                        <Text as='p' data-testid={`ingrediant-name-${ind}`}>{ingredient.name}</Text>
                      </Ingrediants>
                    ))}
                  </IngrediantsInnerWrapper>
                </IngrediantsWrapper>
              }
            </WhiteBox>
          </Grid>
          <Grid phase={1}>
            <WhiteBox>
              <IngrediantsWrapper>
                <ListWrapper>
                  <Text as='h3' bold data-testid=''>Nutritional Values</Text>
                  {recipeDetails?.nutritionalData &&
                    <>
                      {recipeDetails.nutritionalData.map((nutrition, ind) => (
                        <List flexDirection noBullet noPadding>
                          <ListItem key={ind} bold>{nutrition.name}</ListItem>
                          <ListItem key={ind}>{nutrition.quantity}</ListItem>
                        </List>
                      ))} 
                    </>
                  }
                </ListWrapper>
              </IngrediantsWrapper>
            </WhiteBox>
          </Grid>
        </GridWrapper>
        
        <WhiteBox>
          <ListWrapper>
            <Text as='h3' bold data-testid='' fontSize={28}>Utensils</Text>
            {recipeDetails?.utensils &&
              <List>
                {recipeDetails.utensils.map((utensil, ind) => (
                  <>
                    <ListItem key={ind}>{utensil}</ListItem>
                  </>
                ))} 
              </List>
            }
          </ListWrapper>
        </WhiteBox>

        {recipeDetails?.instructions &&
          <WhiteBox>
            <ListWrapper>
              <Text as='h3' bold data-testid='' fontSize={28}>Instructions</Text>
              {recipeDetails?.instructions.map((instruction, ind) => (
                <GridWrapper key={ind} marginVertical={15} borderTop>
                  <Grid phase={1} textAlign={'center'}>
                    <Image src={instruction.imgSrc} alt='' data-testid="" />
                  </Grid>
                  <Grid phase={3}>
                    <InstructionWrapper paddingLeft={30}>
                        <Text as='p' data-testid=''>{instruction.desc}</Text>
                        {instruction?.additionalContent &&
                          <Text as='p' data-testid=''>Tips: {instruction.additionalContent}</Text>
                        }
                    </InstructionWrapper>
                  </Grid>
                </GridWrapper>
              ))} 
            </ListWrapper>
          </WhiteBox>
        }
      </Container>
    </ContentWrapper>
  )
}

export default RecipeDetails;