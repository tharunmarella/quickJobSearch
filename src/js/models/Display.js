import axios from 'axios'
import * as x from '../config.js'
export default class Display {
    constructor(id) {
        this.id = id;
    };

    async getData() {
        try {
            const res = await axios(`${x.proxy}https://authenticjobs.com/api/?api_key=${x.key}&method=aj.jobs.get&id=${this.id}&perpage=50&format=json`);
            this.title=res.data.listing.title;
            this.description=res.data.listing.description
            this.post_date=res.data.listing.post_date
            this.company=res.data.listing.company.name
            this.url=res.data.listing.company.url
            this.type=res.data.listing.type.name;
            this.apply_url=res.data.apply_url;
            this.about=res.data.company.tagline;
            
        } catch (error) {
            console.log(error);
            
        }
        
    };
    
    
}
