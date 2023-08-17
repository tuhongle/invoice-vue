import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useInvoiceStore = defineStore('invoice', () => {
  const invoices : Ref<any[]> = ref([]);
  const addressFrom : Ref<string[]> = ref([]);
  const addressTo : Ref<string[]> = ref([]);

  return { invoices}
})
