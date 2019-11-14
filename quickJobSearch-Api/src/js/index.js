// Global app controller
//search controller
import Search from './models/Search'
import  Display from './models/Display'
import * as searchView from './viewes/searchView'
import * as displayView from './viewes/displayView'
import {elements,renderLoader,clearLoader} from './viewes/base'
const state = {};
const controlSearch=async()=>{
    
    //get input
    const query=searchView.getInput();
    if(query){
    state.search = new Search(query);
    //clear feilds
    searchView.clearInputValue();
    searchView.clearResults();
    
     //loader
     renderLoader(elements.searchRes);
    //fetch data
    try{
    await state.search.getResults();
    clearLoader();
    searchView.renderResults(state.search.result);
    
    }
    catch(error){
        
        console.log(error)
    }
   


    }
 

}
const controlRecipe=async()=>{
    const id = window.location.hash.replace('#', '');
    if (id) {
        // Prepare UI for changes
        displayView.clearRecipe();
        renderLoader(elements.recipe);
           // Highlight selected search item
           if (state.search) searchView.highlightSelected(id);

           // Create new recipe object
           state.recipe = new Display(id);
           try {
            // Get recipe data 
            await state.recipe.getData();
            
            // Render recipe
            clearLoader();
            console.log(state.recipe);
            displayView.insertData(
                state.recipe,
                
            );

        } catch (err) {
            console.log(err);
            
        }
    }
};
   
    
    //search button listner
    elements.searchForm.addEventListener('submit', e => {
        e.preventDefault();
        controlSearch();
    });
    //hash chnage listner

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));