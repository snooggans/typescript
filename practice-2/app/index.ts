import {openModal} from "./services/modal/modalService";
import {ITours} from "./models/tours";
import {getTours} from "./services/rest/tours";
import {getTourTemplate} from "./templates/tours";
import '@assets/styles/main.scss';
import {images} from "./services/img/img";

export let tourData: Promise<ITours[]> = getTours();
export let toursDataArray: ITours[] = [];

const imagesStore = images;
console.log(imagesStore)

tourData.then((data): void =>{
	toursDataArray = data;
	initToursDivElements(data);
});

function initToursDivElements(data: ITours[]){
	if (Array.isArray(data)){
		const rootElement = document.querySelector('.main-app');
		const tourWrap = document.createElement('div');

		tourWrap.classList.add('tour-wrap');

		tourWrap.addEventListener('click', ev =>{
			const targetItem = ev.target as HTMLBRElement;
			const parentItem = (targetItem.parentNode as HTMLBRElement);
			const rootItem = (parentItem.parentNode as HTMLBRElement);
			let realTarget;

			if (targetItem.hasAttribute('data-tour-item-index')) {
				realTarget = targetItem;
			}else if (parentItem.hasAttribute('data-tour-item-index')){
				realTarget = parentItem;
			}else if(rootItem.hasAttribute('data-tour-item-index')){
				realTarget = rootItem
			}

			if (realTarget){
				const dataIndex = realTarget.getAttribute('data-tour-item-index');
				openModal('order', Number(dataIndex));
			}
		});

		let rootElementData = '';
		data.forEach((el, i) =>{
			rootElementData += getTourTemplate(el, i);
		})

		tourWrap.innerHTML = rootElementData;
		rootElement.appendChild(tourWrap);
	}
}