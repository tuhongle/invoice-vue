<template>
    <!-- Modal -->
    <transition name="modal">
        <div class="modal left fade" id="staticModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog vh-100 m-0">
                <div class="modal-content bg-dark">
                    <div class="modal-body small">
                        <div class="container mb-5">
                            <h1 class="modal-title display-5 fw-bold" id="staticBackdropLabel">New Invoice</h1>
                        </div>
                        <div class="container bill-from mb-5">
                            <p class="text-primary lead">Bill From</p>
                            <div class="row mb-4">
                                <div class="col">
                                    <label class="form-label">Street Address</label>
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetailStore.addressFrom.address">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col-4">
                                    <label class="form-label">City</label>
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetailStore.addressFrom.city">
                                </div>
                                <div class="col-4">
                                    <label class="form-label">Zip Code</label>
                                    <input type="number" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetailStore.addressFrom.zipCode">
                                </div>
                                <div class="col-4">
                                    <label class="form-label">Country</label>
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetailStore.addressFrom.country">
                                </div>
                            </div>
                        </div>
                        <div class="container bill-to mb-5">
                            <p class="text-primary lead">Bill To</p>
                            <div class="row mb-4">
                                <div class="col">
                                    <label class="form-label">Client's Name</label>
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetailStore.client.name">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col">
                                    <label class="form-label">Client's Email</label>
                                    <input type="email" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetailStore.client.mail">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col">
                                    <label class="form-label">Street Address</label>
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetailStore.client.address">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col-4">
                                    <label class="form-label">City</label>
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetailStore.client.city">
                                </div>
                                <div class="col-4">
                                    <label class="form-label">Zip Code</label>
                                    <input type="number" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetailStore.client.zipCode">
                                </div>
                                <div class="col-4">
                                    <label class="form-label">Country</label>
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetailStore.client.country">
                                </div>
                            </div>
                        </div>
                        <div class="container mb-5">
                            <div class="row mb-4">
                                <div class="col-6">
                                    <label class="form-label">Invoice Date</label>
                                    <input type="date" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetailStore.invoiceDate">
                                </div>
                                <div class="col-6">
                                    <label class="form-label">Payment Due</label>
                                    <input type="date" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetailStore.paymentDue" disabled>
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col">
                                    <label class="form-label">Payment Terms</label>
                                    <select class="form-select bg-secondary text-light border-0 shadow-none py-2" v-model="days">
                                        <option value=30 class="form-control">Net 30 days</option>
                                        <option value=60 class="form-control">Net 60 days</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col">
                                    <label class="form-label">Product Description</label>
                                    <textarea type="text" class="form-control bg-secondary border-0 shadow-none" row mb-4s="2"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="container mb-5">
                            <h2 class="opacity-50 fw-bold text-light mb-4">Item List</h2>
                            <div class="row mb-2">
                                <div class="col-5">
                                    <label class="form-label">Item Name</label>
                                </div>
                                <div class="col-2">
                                    <label class="form-label">Qty</label>
                                </div>
                                <div class="col-2">
                                    <label class="form-label">Price</label>
                                </div>
                                <div class="col-2">
                                    <label class="form-label">Total</label>
                                </div>
                                <div class="col-1"></div>
                            </div>
                        <!-- Create item -->
                            <div class="row mb-4" v-for="(item, index) in invoiceDetailStore.itemList" :key="index">
                                <itemList :item="item" :index="index"/>
                            </div>
                        <!-- ===== -->
                            <div class="row mb-4">
                                <button class="btn btn-secondary py-2 rounded-5 d-flex align-items-center justify-content-center" @click="invoiceDetailStore.createItem">
                                    <i class="bi bi-plus text-primary fs-3 me-2"></i>
                                    <span class="lead">Add New Item</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer d-flex justify-content-between py-4 px-5">
                        <button type="button" class="btn btn-danger py-2 text-light" data-bs-dismiss="modal">Discard</button>
                        <div>
                            <button type="button" class="btn btn-info py-2 me-3" data-bs-dismiss="modal" @click="invoiceDetailStore.saveDraft">Save Draft</button>
                            <button type="button" class="btn btn-primary py-2 text-light" data-bs-dismiss="modal" @click="invoiceDetailStore.createInvoice">Create Invoice</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue';
import { useInvoiceDetailsStore } from '../stores/invoiceDetails'
import itemList from './itemList.vue';

const invoiceDetailStore = useInvoiceDetailsStore();

const days = ref<number>();
watch(days, () => {
    const dateArray = invoiceDetailStore.invoiceDate.split('-');
    const dueDay = new Date(+dateArray[0], +dateArray[1] -1, +dateArray[2] + +days.value);
    const year = dueDay.toLocaleString('default', {year: 'numeric'});
    const month = dueDay.toLocaleString('default', { month: '2-digit'});
    const day = dueDay.toLocaleString('default', { day: '2-digit'});
    invoiceDetailStore.paymentDue = year + '-' + month + '-' + day;
})
</script>