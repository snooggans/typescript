import {ITours} from "../models/tours";


export function getTourTemplate(obj: ITours, i: any): string {
    const tmpl = `
       <div data-tour-item-index=${i} class="tour-block">
            <div class="tour-block__inner">
	           <h2>${obj.name}</h2>
	           <div>${obj.description}</div>
	           <p>${obj.price}</p>
           </div>
       </div>
    `
   return tmpl;
}