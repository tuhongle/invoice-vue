<template>
    <!-- Modal -->
    <div class="modal fade" id="invoiceModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                                <input type="text" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetail.billFrom.address">
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-4">
                                <label class="form-label">City</label>
                                <input type="text" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetail.billFrom.city">
                            </div>
                            <div class="col-4">
                                <label class="form-label">Zip Code</label>
                                <input type="number" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetail.billFrom.zipCode">
                            </div>
                            <div class="col-4">
                                <label class="form-label">Country</label>
                                <input type="text" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetail.billFrom.country">
                            </div>
                        </div>
                    </div>
                    <div class="container bill-to mb-5">
                        <p class="text-primary lead">Bill To</p>
                        <div class="row mb-4">
                            <div class="col">
                                <label class="form-label">Client's Name</label>
                                <input type="text" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetail.billTo.name">
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col">
                                <label class="form-label">Client's Email</label>
                                <input type="email" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetail.billTo.mail">
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col">
                                <label class="form-label">Street Address</label>
                                <input type="text" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetail.billTo.address">
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-4">
                                <label class="form-label">City</label>
                                <input type="text" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetail.billTo.city">
                            </div>
                            <div class="col-4">
                                <label class="form-label">Zip Code</label>
                                <input type="number" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetail.billTo.zipCode">
                            </div>
                            <div class="col-4">
                                <label class="form-label">Country</label>
                                <input type="text" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetail.billTo.country">
                            </div>
                        </div>
                    </div>
                    <div class="container mb-5">
                        <div class="row mb-4">
                            <div class="col-6">
                                <label class="form-label">Invoice Date</label>
                                <input type="date" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetail.invoiceDate">
                            </div>
                            <div class="col-6">
                                <label class="form-label">Payment Due</label>
                                <input type="date" class="form-control bg-secondary border-0 shadow-none" v-model="invoiceDetail.paymentDue" disabled>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col">
                                <label class="form-label">Payment Terms</label>
                                <select class="form-select bg-secondary text-light border-0 shadow-none py-2" v-model="days">
                                    <option value='30' class="form-control">Net 30 days</option>
                                    <option value='60' class="form-control">Net 60 days</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col">
                                <label class="form-label">Product Description</label>
                                <textarea type="text" class="form-control bg-secondary border-0 shadow-none" row mb-4s="2" v-model="invoiceDetail.description"></textarea>
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
                        <div class="row mb-4" v-for="(item, index) in invoiceDetail.itemList" :key="index">
                            <itemList :item="item" :index="index"/>
                        </div>
                    <!-- ===== -->
                        <div class="row mb-4">
                            <button class="btn btn-secondary py-2 rounded-5 d-flex align-items-center justify-content-center" @click="createItem">
                                <i class="bi bi-plus text-primary fs-3 me-2"></i>
                                <span class="lead">Add New Item</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-between py-4 px-5">
                    <button type="button" class="btn btn-danger py-2 text-light" data-bs-dismiss="modal">Cancel</button>
                    <div>
                        <button type="button" class="btn btn-primary py-2 text-light" data-bs-dismiss="modal" @click="updateEdit">Update Invoice</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import itemList from './itemList.vue';
import { type Invoice} from '../types/invoiceType'

const props = defineProps<{
    invoice: Invoice
}>();

const emit = defineEmits<{
    updateEdit: [value : Invoice]
}>();

const days = ref<number>(0);
const invoiceDetail = ref<Invoice>();
invoiceDetail.value = props.invoice;

const updateEdit = () => {
    emit('updateEdit', invoiceDetail.value);
}
</script>