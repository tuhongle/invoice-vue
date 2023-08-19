import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

import { type Address, type Client, type itemList, type Invoice } from '../types/invoiceType'

export const useInvoiceDetailsStore = defineStore('invoiceDetail', () => {
  const invoices = ref<Invoice[]>([]);
  const addressFrom : Ref<Address> = ref({address: '', city: '', zipCode: 0, country: ''});
  const client : Ref<Client> = ref({name: '', mail: '', address: '', city: '', zipCode: 0, country: ''});
  const itemList = ref<itemList[]>([]);
  const invoiceDate = ref<string>('');
  const paymentDue = ref<string>('');
  const description = ref<string>('');

  function createItem() {
    const item : Ref<itemList> = ref({name: '', qty: 0, price: 0});
    itemList.value.push(item.value);
  }

  function deleteItem(i:number) {
    itemList.value.splice(i, 1);
  }

  const tempDay = new Date();
  const year = tempDay.toLocaleString('default', {year: 'numeric'});
  const month = tempDay.toLocaleString('default', { month: '2-digit'});
  const day = tempDay.toLocaleString('default', { day: '2-digit'});
  invoiceDate.value = year + '-' + month + '-' + day;

  /* function saveDraft() {
    const id = uid(8).toUpperCase();
    let total: number = 0;
    itemList.value.forEach(item => {
      total += item.qty * item.price;
    });
    const invoice = {
      id,
      status: 'draft' as string,
      total,
      billFrom: addressFrom.value,
      billTo: client.value,
      invoiceDate: invoiceDate.value,
      paymentDue: paymentDue.value,
      itemList: itemList.value
    };
    invoices.value.push(invoice);
  }

  function createInvoice() {
    const id = uid(8).toUpperCase();
    let total: number = 0;
    itemList.value.forEach(item => {
      total += item.qty * item.price;
    });
    const invoice = {
      id,
      status: 'pending' as string,
      total,
      billFrom: addressFrom.value,
      billTo: client.value,
      invoiceDate: invoiceDate.value,
      paymentDue: paymentDue.value,
      itemList: itemList.value
    };
    invoices.value.push(invoice);
  } */

  return { invoices, addressFrom, client, itemList, invoiceDate, paymentDue, description, createItem, deleteItem }
})
