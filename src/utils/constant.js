const BASE_URL = '/hello-fresh';
const MENU_PATH = `${BASE_URL}/`;
const RCEIPIE_PATH = `${BASE_URL}/recipes-list`;
const RECIPE_DETAILS = `${BASE_URL}/recipe-details`;

const NAV_LIST = [
  {
    title: 'Menu',
    path: MENU_PATH,
  },
  {
    title: 'Recipe',
    path: RCEIPIE_PATH,
  }
];

const DEFAULT_PAGE_NUMBER = 1;

const ITEMS_COUNT_PER_PAGE = 6;


export {
  NAV_LIST,
  MENU_PATH,
  RCEIPIE_PATH,
  RECIPE_DETAILS,
  ITEMS_COUNT_PER_PAGE,
  DEFAULT_PAGE_NUMBER
}