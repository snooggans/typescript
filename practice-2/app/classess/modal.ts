export class Modal  {
	private readonly id: any;

	public static modals: any[] = [];

	constructor(id = null) {
		const findModal = Modal.modals.find(el => el.id === id);
		if (findModal){
			Modal.removeById(this.id);
		}

		Modal.modals.push(this);
		this.id = id || (Math.random() + Modal.modals.length);
	}

	public open(template: string): void{
		const divEl = document.createElement("div");
		divEl.innerHTML = template;
		divEl.id = this.id;
		divEl.setAttribute('modal_id', this.id);
		divEl.classList.add('modal_element');
		const modalClose = document.createElement("div");

		document.body.appendChild(divEl);
	}

	public remove(): void{
		const modalEl = document.getElementById(this.id);
		modalEl.parentNode.removeChild(modalEl);
	}

	public close(closeEl: string = null): void{
		let closeButton = document.querySelector(closeEl);
		closeButton.addEventListener('click', () =>{
			Modal.removeById(this.id)
		})
	}

	public static removeById(id = null): void{
		let modalId = id;
		const findEl = Modal.modals.find(el => el.id === modalId);
		if (findEl) {
			findEl.remove();
			Modal.modals = Modal.modals.filter(el => el.id !== modalId);
		}else{
			if (Array.isArray(Modal.modals)){
				const lastEl = Modal.modals.pop();
				if (lastEl){
					lastEl.remove()
				}
			}
		}
	}

}