/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { BackIc, ForwardIc } from "../Icons";
import { menus } from "../../mockData/menuData";
import Card from "../Card";
import { GridWrapper, GridContainer, Grid, GreyText, Container, PaginatioNumber, PaginationWrapper, Icon } from './Menu.styles';

const weekList = Object.keys(menus);
const getMenusList = (count) => {
  let title = '';
  let weeklyMenu = [];
  const dt = new Date();
  var lastday = dt.getDate() - (dt.getDay() - 1) + count;
  const currentDate = dt.setDate(lastday);
  
  weekList.forEach(week => {
    if (menus[week].from <= currentDate && menus[week].end >= currentDate) {
      weeklyMenu = menus[week].data;
      title = menus[week].title;
    }
  });

  return { title, weeklyMenu };
}
  
const Menu = () => {
  const [menuList, setMenuList] = useState([]);
  const [weekTitle, setWeekTitle] = useState('');
  const [weekDaysCount, setWeekDaysCount] = useState(1);
  const [showForwardIc, setShowForwardIc] = useState(1);

  const deleteCard = id => {
    const filteredData = menuList.filter(item => item.id !== id);
    setMenuList(filteredData);
  }

  const getMenusListForCurrentWeek = () => {
    const { title, weeklyMenu } = getMenusList(weekDaysCount);  
    setMenuList(weeklyMenu);
    setWeekTitle(title);
  }

  const onClickPagination = (type) => {
    let count = showForwardIc, daysCount = weekDaysCount;
    if (weekDaysCount >= 1) {
      switch (type) {
        case 'Back':
          count -= 1;
          daysCount -= 6;
          break;
        case 'Forward':
          count += 1;
          daysCount += 6;
          break;
        default:
          break;
      }
    }

    setShowForwardIc(count);
    setWeekDaysCount(daysCount);
    getMenusListForCurrentWeek();
  }

  useEffect(() => {
    getMenusListForCurrentWeek();
  }, []);

  return (
    <Container>
      <PaginationWrapper>
        <Icon onClick={() => onClickPagination('Back')} isIcHidden={weekDaysCount > 1}>
          <BackIc />
        </Icon>
        <PaginatioNumber>{weekTitle}</PaginatioNumber>
        <Icon onClick={() => onClickPagination('Forward')} isIcHidden={showForwardIc <= weekList.length - 1}>
          <ForwardIc />
        </Icon>
      </PaginationWrapper>
      <GridWrapper>
        {
          (menuList && menuList.length > 0) ?
            <GridContainer>
              {menuList.map(({ title, description, img, id }, ind) => (
                <Grid key={`menu-${ind}`}>
                  <Card title={title} description={description} imageSrc={img} id={id} isShadowEnabled showActionIcons onClickDeleteIcon={deleteCard} />
                </Grid>
              ))}
            </GridContainer>
          :
          <GreyText>No Menu Available For This Week</GreyText>
        }
      </GridWrapper>
    </Container>
  )
}

export default Menu