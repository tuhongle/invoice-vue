import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useInvoicesStore = defineStore("invoices", () => {
    const invoices = ref([]);

    return { invoices }
})