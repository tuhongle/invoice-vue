import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

import { type Address, type Client, type itemList, type Invoice } from '../types/invoiceType'

export const useInvoiceDetailsStore = defineStore('invoiceDetail', () => {
  const addressFrom : Ref<Address> = ref({address: '', city: '', zipCode: null, country: ''});
  const client : Ref<Client> = ref({name: '', mail: '', address: '', city: '', zipCode: null, country: ''});
  const itemList = ref<itemList[]>([]);
  const invoiceDate = ref<string>('');
  const paymentDue = ref<string>('');
  const description = ref<string>('');
  const total = ref<number>(0);
  const Days = ref<number | null>();

  const tempDay = new Date();
  const year = tempDay.toLocaleString('default', {year: 'numeric'});
  const month = tempDay.toLocaleString('default', { month: '2-digit'});
  const day = tempDay.toLocaleString('default', { day: '2-digit'});
  invoiceDate.value = year + '-' + month + '-' + day;

  function createItem() {
    const item : Ref<itemList> = ref({name: ''});
    itemList.value.push(item.value);
  }

  function deleteItem(i:number) {
    itemList.value.splice(i, 1);
  }

  function $reset() {
    addressFrom.value = {address: '', city: '', zipCode: null, country: ''};
    client.value = {name: '', mail: '', address: '', city: '', zipCode: null, country: ''};
    itemList.value = [];
    invoiceDate.value = year + '-' + month + '-' + day;
    paymentDue.value = '';
    description.value = '';
    total.value = 0;
    Days.value = null;
  }

  return { addressFrom, client, itemList, invoiceDate, paymentDue, description, Days, createItem, deleteItem, $reset }
})
