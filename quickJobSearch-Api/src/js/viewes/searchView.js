import {elements} from './base'

export const getInput=()=>  elements.searchInput.value;

export const clearInputValue =()=>elements.searchInput.value='';
export const clearList=()=>elements.searchResList.value='';

export const clearResults=()=>{
    elements.searchResList.value='';
    elements.searchResPages.value='';
}
export const highlightSelected =(id)=>{
    const resultsArr=Array.from(document.querySelectorAll('.results__link'))
    resultsArr.forEach(el=>{
        el.classList.remove('results__link--active');
    })
    document.querySelector(`.results__link[href*="${id}"]`).classList.add('results__link--active');
}
export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    // render results of currente page
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    recipes.slice(start, end).forEach(renderRecipe);

    

    
};

const renderRecipe = recipe => {
    const markup = `
        <div div class="list-group-item list-group-item-action">
        <div class="row>
        <div class="col-sm-4">
        
        </div>
        <div class="col-sm-8">
        <a class="results__link" href="#${recipe.id}" style="text-decoration:none;">
                
                <div class="results__data">
                    <h6 class="results__name">${recipe.title}</h6>
                    <p class="results__author"><i class="fa fa-university" aria-hidden="true"></i>
                 ${recipe.company.name}</p>
                </div>
            </a>
        </div>
        </div>
            
            
        </div>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
};
