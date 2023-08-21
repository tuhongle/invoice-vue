import { computed, ref, type ComputedRef } from 'vue'
import { defineStore } from 'pinia'
import { useInvoiceDetailsStore } from './invoiceDetails';

import { uid } from 'uid'
import { type Invoice, type status } from '../types/invoiceType'

export const useInvoicesStore = defineStore("invoices", () => {
    const invoices = ref<Invoice[]>([]);
    const invoiceDetailsStore = useInvoiceDetailsStore();
    const openModal = ref<boolean>(false);
    const filter = ref<status | 'all'>('all');

    function saveDraft() {
        const id = uid(8).toUpperCase();
        let total: number = 0;
        invoiceDetailsStore.itemList.forEach(item => {
          total += item.qty * item.price;
        });
        const invoice : Invoice = {
          id: id as string,
          status: 'Draft' as status,
          total: total as number,
          billFrom: invoiceDetailsStore.addressFrom,
          billTo: invoiceDetailsStore.client,
          invoiceDate: invoiceDetailsStore.invoiceDate,
          paymentDue: invoiceDetailsStore.paymentDue,
          description: invoiceDetailsStore.description,
          itemList: invoiceDetailsStore.itemList
        };
        invoices.value.push(invoice);
        invoiceDetailsStore.$reset();
        openModal.value = false;
      }
    
      function createInvoice() {
        const id = uid(8).toUpperCase();
        let total: number = 0;
        invoiceDetailsStore.itemList.forEach(item => {
          total += item.qty * item.price;
        });
        const invoice = {
          id,
          status: 'Pending' as status,
          total,
          billFrom: invoiceDetailsStore.addressFrom,
          billTo: invoiceDetailsStore.client,
          invoiceDate: invoiceDetailsStore.invoiceDate,
          paymentDue: invoiceDetailsStore.paymentDue,
          description: invoiceDetailsStore.description,
          itemList: invoiceDetailsStore.itemList
        };
        invoices.value.push(invoice);
        invoiceDetailsStore.$reset();
        openModal.value = false;
      }

      function discard() {
        invoiceDetailsStore.$reset();
        openModal.value = false;
      }

      function deleteInvoice(id: number) {
        invoices.value.splice(id, 1);
      }

      const invoicesArray : ComputedRef<Invoice[]> = computed(() => {
        if (filter.value === 'all') {
          return invoices.value;
        } else {
          return invoices.value.filter(el => el.status === filter.value);
        }
      });

    return { invoices, openModal, invoicesArray, filter, saveDraft, createInvoice, discard, deleteInvoice }
})