<template>
    <div class="container-lg py-5">
        <div class="row">
            <div class="col-12 col-md-10 col-lg-8 mx-auto">
                <div class="row mb-5">
                    <div class="col d-flex align-items-center">
                        <RouterLink :to="{name: 'home'}">
                            <i class="bi bi-chevron-left text-primary fs-5 ms-3"></i>
                            <span class="ms-2">Go Back</span>
                        </RouterLink>
                    </div>
                </div>
                <div class="row mb-5 bg-secondary px-5 py-4 rounded-5">
                    <div class="col d-flex align-items-center">
                        <p class="mb-0 me-3">Status</p>
                        <button class="btn d-flex align-items-center text-light py-2 px-4" :class="{'btn-info': invoicesStore.invoices[i].status === 'Draft', 'btn-warning': invoicesStore.invoices[i].status === 'Pending', 'btn-success': invoicesStore.invoices[i].status === 'Paid'}">
                            <div class="p-2 bg-white rounded-circle"></div>
                            <span class="ms-2 mb-0">{{ invoicesStore.invoices[i].status }}</span>
                        </button>
                    </div>
                    <div class="col text-end">
                        <button class="btn btn-info rounded-pill text-light py-3 px-4 me-2" data-bs-toggle="modal" data-bs-target="#invoiceModal">Edit</button>
                        <RouterLink :to="{name: 'home'}"><button class="btn btn-danger rounded-pill text-light py-3 px-4 me-2" @click="invoicesStore.deleteInvoice(i)">Delete</button></RouterLink>
                        <button class="btn rounded-pill text-light py-3 px-4" @click="changeStatus" :class="{'btn-warning': !pending, 'btn-success': pending}">
                            <span>Mask As </span>
                            <span v-if="!pending">Pending</span>
                            <span v-else>Paid</span>
                        </button>
                    </div>
                </div>
                <div class="row mb-5 bg-secondary p-5 rounded-5">
                    <div class="col">
                        <div class="row align-items-center mb-5">
                            <div class="col text-start">
                                <p class="lead fw-bold mb-1">
                                    <span class="opacity-50">#</span>
                                    <span>{{ id }}</span>
                                </p>
                                <p>{{ invoicesStore.invoices[i].description }}</p>
                            </div>
                            <div class="col text-end">
                                <p class="mb-0 small">{{ invoicesStore.invoices[i].billFrom.address }}</p>
                                <p class="mb-0 small">{{ invoicesStore.invoices[i].billFrom.city }}</p>
                                <p class="mb-0 small">{{ invoicesStore.invoices[i].billFrom.zipCode }}</p>
                                <p class="mb-0 small">{{ invoicesStore.invoices[i].billFrom.country }}</p>
                            </div>
                        </div>
                        <div class="row align-items-center mb-5">
                            <div class="col-3 mb-4">
                                <p class="small">Invoice Date</p>
                                <p class="fw-bold">{{ new Date(invoicesStore.invoices[i].invoiceDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
                            </div>
                            <div class="col-3 mb-4">
                                <p class="small">Bill To</p>
                                <p class="fw-bold">{{ invoicesStore.invoices[i].billTo.name }}</p>
                            </div>
                            <div class="col-6 mb-4">
                                <p class="small">Sent To</p>
                                <p class="fw-bold">{{ invoicesStore.invoices[i].billTo.mail }}</p>
                            </div>
                            <div class="col-3 mb-4">
                                <p class="small">Payment Date</p>
                                <p class="fw-bold">{{ new Date(invoicesStore.invoices[i].paymentDue).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
                            </div>
                            <div class="col-3 mb-4">
                                <p class="mb-0 small">{{ invoicesStore.invoices[i].billTo.address }}</p>
                                <p class="mb-0 small">{{ invoicesStore.invoices[i].billTo.city }}</p>
                            <p class="mb-0 small">{{ invoicesStore.invoices[i].billTo.zipCode }}</p>
                                <p class="mb-0 small">{{ invoicesStore.invoices[i].billTo.country }}</p>
                            </div>
                        </div>
                        <div class="card rounded-5 overflow-hidden bg-transparent">
                            <div class="card-body bg-info pt-5 px-5">
                                <div class="row">
                                    <div class="col">
                                        <div class="row mb-3">
                                            <div class="col-6">
                                                <p class="small">Item Name</p>
                                            </div>
                                            <div class="col-2 text-end">
                                                <p class="small">QTY.</p>
                                            </div>
                                            <div class="col-2 text-end">
                                                <p class="small">Price</p>
                                            </div>
                                            <div class="col-2 text-end">
                                                <p class="small">Total</p>
                                            </div>
                                        </div>
                                        <div class="row mb-3" v-for="(item, index) in invoicesStore.invoices[i].itemList" :key="index">
                                            <div class="col-6">
                                                <p>{{ item.name }}</p>
                                            </div>
                                            <div class="col-2 text-end">
                                                <p>{{ item.qty }}</p>
                                            </div>
                                            <div class="col-2 text-end">
                                                <p>{{ item.price }}</p>
                                            </div>
                                            <div class="col-2 text-end">
                                                <p>{{ item.qty * item.price }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer bg-black p-5 d-flex justify-content-between align-items-center">
                                <span class="lead">Amount</span>
                                <span class="display-5">${{ invoicesStore.invoices[i].total }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- Modal -->
    <Teleport to="#modal">
        <modalEdit :i="i"/>
    </Teleport>
<!-- =========== -->
</template>

<script setup lang="ts">
// import { type Ref, ref } from 'vue';
import modalEdit from '../components/modalEdit.vue';
import { useRoute } from 'vue-router';
import { useInvoicesStore } from '../stores/invoices';
import { ref, type Ref, watchEffect } from 'vue';
import { type status } from '../types/invoiceType'

const Route = useRoute();
const invoicesStore = useInvoicesStore();

const id : string = Route.params.id;
const idArray = invoicesStore.invoices.map(el => el.id);
const i = idArray.indexOf(id);
const pending : Ref<boolean> = ref();

watchEffect(() => {
    let total : number = 0;
    invoicesStore.invoices[i].itemList.forEach(el => {
        total += +el.qty * +el.price;
    });
    invoicesStore.invoices[i].total = total;
});

const status : status = invoicesStore.invoices[i].status;
if (status === 'Draft' || status === 'Paid') {
    pending.value = false;
} else {
    pending.value = true;
}

const changeStatus = () => {
    if (!pending.value) {
        invoicesStore.invoices[i].status = 'Pending'
        pending.value = true
    } else {
        invoicesStore.invoices[i].status = 'Paid'
        pending.value = false
    }
}

</script>