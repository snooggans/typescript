import {ITours} from "../models/tours";


export function getTourTemplate(obj: ITours, i: any): string {
    const tmpl = `
       <div data-tour-item-index=${i} class="tour-block">
            <div class="tour-block__inner">
	           <div class="tour-header"><h2>${obj.name}</h2></div>
	           <div class="tour-pic" style="background: url('${obj.img}'"><h3 class="tour-price">${obj.price}</h3></div>
	           <div class="tour-description">${obj.description}</div>
           </div>
       </div>
    `
   return tmpl;
}