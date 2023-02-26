import SearchNews from './js/fetchAPI';

const newsAPI = new SearchNews();
const categoriesDiv = document.querySelector('.categories');
const wrap = document.querySelector('.categories__wrap');
const overflowed = document.querySelector('.overflowed')
// async function viewFunc() {
//   console.log(newsAPI.content);
//   newsAPI.getnews().then(pagemark);
// }

// viewFunc();

function pagemark(arr) {
  console.log('ARR', arr);
}
function getCategories() {}
function byCategory() {}

async function responsiveInsert() {

  newsAPI.getnews().then(categs => {
      const catsMarkup = categs.map(
        element =>
          `<button type="button" data-cat="${element.section}">${element.display_name}</button>`
      ).join('');
     categoriesDiv.insertAdjacentHTML('beforeend', catsMarkup)}).then(setTimeout(() => { IsDivOverFlow(categoriesDiv)
      
     }, 1000));
  
  }
  
responsiveInsert();


async function IsDivOverFlow(div)
{
  let rect = div.getBoundingClientRect();
  console.log('rect', rect)
  
}
// IsDivOverFlow(categoriesDiv)