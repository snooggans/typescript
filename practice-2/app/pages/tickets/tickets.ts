import {getTours} from "../../services/rest/tours";
import {getTicketById, postTicketData} from "../../services/rest/tickets";
import {ITicket, IVipTicket, Ticket} from "../../models/tickets/ticket";
import '@assets/styles/main.scss';
import {initTicketElementTemplate} from "../../templates/ticketInfo";
import {IUser} from "../../models/user/user";
getTours();

let ticketInstance: Ticket;
let ticketPostInstance



const ticketData: Promise<IVipTicket[]> = getTicketById<IVipTicket>('123', 'vip');

ticketData.then((data): void => {
	ticketInstance = data[0];
	const ticketName = ticketInstance?.name || '';
	initHeaderTitle(ticketName);
	initTicketInfo(ticketInstance);
});

function initHeaderTitle(ticketName: string): void {
	const headerElement: HTMLElement = document.querySelector('.ticket-title');
	headerElement.innerText = ticketName
}


function initTicketInfo(ticket: Ticket): void {
	const targetElement: HTMLElement = document.querySelector('.ticket-info');
	const ticketDescription = ticket?.description;
	const ticketOperator = ticket?.tourOperator;
	const vipClientType = (ticket as IVipTicket).vipStatus;

	[ticketDescription, ticketOperator, vipClientType].forEach((el, i) =>{
		targetElement.innerHTML += initTicketElementTemplate(el, i)
	});
}

function initUserData(): IUser {
	const userInfo = document.querySelectorAll('.user-info > p');
	let userInfoObj = <IUser>{};
	userInfo.forEach(el => {
		const inputDataName = el.getAttribute('data-name');
		if (inputDataName) {
			const inputEl = el.querySelector('input');
			userInfoObj[inputDataName] = (inputEl as HTMLInputElement).value;
		}
	})
	return userInfoObj;
}



function initPostData(): void {
	let tourObj = ticketData.then((data): void => {
		ticketInstance = data[0];
	});
	let userObj = initUserData()
	ticketPostInstance = {
		tour: tourObj,
		user: userObj
	}
	console.log(ticketPostInstance)
}

function registerConfirmButton(): void {
	const targetEl = document.getElementById('send-button');
	targetEl.addEventListener('click', () =>{
		initPostData()
	})
}
registerConfirmButton()
