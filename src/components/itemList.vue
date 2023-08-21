<template>
    <div class="col-5">
        <input placeholder=" " type="text" class="form-control bg-secondary border-0 shadow-none" v-model="item.name">
    </div>
    <div class="col-2">
        <input placeholder=" " type="number" class="form-control bg-secondary border-0 shadow-none" v-model="item.qty">
    </div>
    <div class="col-2">
        <input placeholder=" " type="number" class="form-control bg-secondary border-0 shadow-none" v-model="item.price">
    </div>
    <div class="col-2 d-flex align-items-center lead">
        <p class="mb-0 ms-1" v-if="item.qty && item.price">${{ item.qty * item.price }}</p>
    </div>
    <div class="col-1 d-flex align-items-center justify-content-center">
        <button class="btn border-0 shadow-none" @click="invoiceDetailStore.deleteItem(index)"><i class="bi bi-trash3 fs-5 text-light"></i></button>
    </div>
</template>

<script setup lang="ts">
import { type itemList } from '../types/invoiceType';
import { useInvoiceDetailsStore } from '../stores/invoiceDetails';

const props = defineProps<{
    item: itemList,
    index: number
}>();

const invoiceDetailStore = useInvoiceDetailsStore();

</script>