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
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col-4">
                                    <label class="form-label">City</label>
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none">
                                </div>
                                <div class="col-4">
                                    <label class="form-label">Zip Code</label>
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none">
                                </div>
                                <div class="col-4">
                                    <label class="form-label">Country</label>
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none">
                                </div>
                            </div>
                        </div>
                        <div class="container bill-to mb-5">
                            <p class="text-primary lead">Bill To</p>
                            <div class="row mb-4">
                                <div class="col">
                                    <label class="form-label">Client's Name</label>
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col">
                                    <label class="form-label">Client's Email</label>
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col">
                                    <label class="form-label">Street Address</label>
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col-4">
                                    <label class="form-label">City</label>
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none">
                                </div>
                                <div class="col-4">
                                    <label class="form-label">Zip Code</label>
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none">
                                </div>
                                <div class="col-4">
                                    <label class="form-label">Country</label>
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none">
                                </div>
                            </div>
                        </div>
                        <div class="container mb-5">
                            <div class="row mb-4">
                                <div class="col-6">
                                    <label class="form-label">Invoice Date</label>
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none">
                                </div>
                                <div class="col-6">
                                    <label class="form-label">Payment Due</label>
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col">
                                    <label class="form-label">Payment Terms</label>
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none">
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
                            <p class="opacity-50 fw-bold lead">Item List</p>
                            <div class="row">
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
                            <div class="row mb-4">
                                <div class="col-5">
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none">
                                </div>
                                <div class="col-2">
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none">
                                </div>
                                <div class="col-2">
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none">
                                </div>
                                <div class="col-2">
                                    <input type="text" class="form-control bg-secondary border-0 shadow-none">
                                </div>
                                <div class="col-1 d-flex align-items-center justify-content-center">
                                    <i class="bi bi-trash3 fs-5 text-light"></i>
                                </div>
                            </div>
                            <div class="row mb-4">
                                <button class="btn btn-secondary">
                                    <i class="bi bi-plus text-primary"></i>
                                    Add New Item
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger text-light" data-bs-dismiss="modal">Discard</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Save Draft</button>
                        <button type="button" class="btn btn-primary text-light">Create Invoice</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">

</script>