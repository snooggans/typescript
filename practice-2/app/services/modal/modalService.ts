import {ITours} from "../../models/tours";
import {Modal} from "../../classess/modal";
import {toursDataArray} from "../../index";


export function openModal (type: string, i: number) {
	const data: ITours = toursDataArray[i];
	let modalInfo: ITours = <ITours>{};
	switch (type){
		case "order":
			const modalTemplate = `
			<div>
				<div class="modal-close">X</div>
				<p>${data.name}</p>		
				<p>${data.description}</p>		
			</div>
			`
			const modal = new Modal('tour-modal');
			modal.open(modalTemplate);
			modal.close('.modal-close');
			break;
	}
}

