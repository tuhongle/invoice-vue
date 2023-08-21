export interface Address {
    address: string,
    city: string,
    zipCode: number,
    country: string,
}

export interface Client extends Address {
    name: string,
    mail: string,
}

export interface itemList {
    name: string,
    qty: number,
    price: number,
}

export type status = 'Draft' | 'Pending' | 'Paid'

export interface Invoice {
    id: string,
    billFrom: Address,
    billTo: Client,
    status: status,
    invoiceDate: string,
    paymentDue: string,
    description: string,
    itemList: itemList[],
    total: number
}