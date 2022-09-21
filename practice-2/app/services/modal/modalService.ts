import {ITours} from "../../models/tours";
import {Modal} from "../../classess/modal";
import {toursDataArray} from "../../index";


export function openModal (type: string, i: number) {
	const data: ITours = toursDataArray[i];
	let modalInfo: ITours = <ITours>{};
	switch (type){
		case "order":
			console.log(data)
			const modalTemplate = `
			<div>
				<div class="modal-close">X</div>				
				<div class="modal-inner">
					<h3>${data.name}</h3>		
					<p>${data.description}</p>
					<a class="modal-ticket-btn" href="ticket.html" data-tour-item-id="${data.id}">билет</a>
				</div>		
			</div>
			`
			const modal = new Modal('tour-modal');
			modal.open(modalTemplate);
			modal.close('.modal-close');
			break;
	}
}

