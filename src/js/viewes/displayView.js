import {elements} from './base';

export const clearRecipe = () => {
    elements.recipe.innerHTML = '';
};
export const insertData= data=>{
    const markup = `
    <div>
    <h2>${data.title}</h2>
    <a href="${data.url}" style="text-decoration: none;"><h3>${data.company}</h3></a>
    <a href='${data.apply_url}'><button class="btn btn-warning">Apply now!</button></a>
    <p>${data.about}</p>
    <br/>
    <hr>
    <p>${data.description}</p>
    <hr>
    <p>post Date: ${data.post_date}</p>
    <p>Job Type: ${data.type}</p>
    
    
    </div>
    `;
    elements.recipe.insertAdjacentHTML('beforeend', markup);
}   