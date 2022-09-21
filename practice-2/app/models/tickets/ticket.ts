export interface ITicket {
	description: string,
	name: string,
	price: string,
	tourOperator: string,
	location:{
		x: '30.4044',
		y: '50.5456'
	},
	hotel: string
}

export interface IVipTicket extends ITicket{
	vipNumber: number,
	vipStatus: string
}

export type Ticket = ITicket | IVipTicket

export interface ITicketPostData {

}