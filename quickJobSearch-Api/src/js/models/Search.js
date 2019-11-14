import axios from 'axios'
import * as x from '../config.js'
export default class Search{
    constructor(query){
        this.query = query;
    }
    async getResults(){
        try{
            const res= await axios(`${x.proxy}https://authenticjobs.com/api/?api_key=${x.key}&method=aj.jobs.search&keywords=${this.query}&perpage=50&format=json`)
            this.result=res.data.listings.listing;
        }
        catch (error) {
            alert(error);
        }
    }
}