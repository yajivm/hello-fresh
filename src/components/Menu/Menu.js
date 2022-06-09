import { useEffect, useState } from 'react';
import Moment from 'moment';
import Card from "../Card";
import { recipes } from "../../mockData/data";
import { GridWrapper, GridContainer, Grid, GreyText } from './Menu.styles';

const Menu = () => {
  const [recipeList, setRecipeList] = useState(recipes);

  const deleteCard = id => {
    const filteredData = recipeList.filter(item => item.id !== id);
    setRecipeList(filteredData);
  }

  useEffect(() => {
    const groupedData = recipes.reduce((acc, date) => {
      const yearWeek = `${Moment(date).week()}`;
      if (!acc[yearWeek]) {
        acc[yearWeek] = [];
      }
      acc[yearWeek].push(date);

      return acc;

    }, {});
    console.log(groupedData);
  }, );

  return (
    <GridWrapper>
      <GridContainer>
        {
          (recipeList && recipeList.length > 0) ?
          recipeList.map(({ title, description, img, id }, ind) => (
            <Grid key={`receipie-${ind}`}>
              <Card title={title} description={description} imageSrc={img} id={id} isShadowEnabled showActionIcons onClickDeleteIcon={deleteCard} />
            </Grid>
          ))
          :
          <GreyText>No Menu Available For This Week</GreyText>
        }
      </GridContainer>
    </GridWrapper>
  )
}

export default Menu