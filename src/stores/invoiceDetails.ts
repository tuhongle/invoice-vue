import { ref, computed, type Ref, type ComputedRef } from 'vue'
import { defineStore } from 'pinia'

import { uid } from 'uid'
import { type Address, type Client, type itemList, type Invoice } from '../types/invoiceType'

export const useInvoiceDetailsStore = defineStore('invoiceDetail', () => {
  const invoices = ref<Invoice[]>([]);
  const addressFrom : Ref<Address> = ref({address: '', city: '', zipCode: 0, country: ''});
  const client : Ref<Client> = ref({name: '', mail: '', address: '', city: '', zipCode: 0, country: ''});
  const itemList = ref<itemList[]>([]);
  const invoiceDate = ref<string>('');
  const paymentDue = ref<string>('');

  function createItem() {
    const item : Ref<itemList> = ref({name: '', qty: 0, price: 0});
    itemList.value.push(item.value);
  }

  function deleteItem(i:number) {
    itemList.value.splice(i, 1);
  }

  function saveDraft() {
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
  }

  return { invoices, addressFrom, client, itemList, invoiceDate, paymentDue, createItem, deleteItem, saveDraft, createInvoice }
})
