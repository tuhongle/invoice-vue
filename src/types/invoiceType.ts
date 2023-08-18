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

export interface Invoice {
    id: string,
    billFrom: Address,
    billTo: Client,
    status: string,
    invoiceDate: string,
    paymentDue: string,
    itemList: itemList,
    total: number
}