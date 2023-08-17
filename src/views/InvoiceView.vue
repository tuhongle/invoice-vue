<template>
    <div class="container-lg py-5">
        <div class="row">
            <div class="col-12 col-md-10 col-lg-8 mx-auto">
                <div class="row mb-5">
                    <div class="col d-flex align-items-center">
                        <i class="bi bi-chevron-left text-primary fs-5 ms-3"></i>
                        <span class="ms-2">Go Back</span>
                    </div>
                </div>
                <div class="row mb-5 bg-secondary px-5 py-4 rounded-5">
                    <div class="col d-flex align-items-center">
                        <p class="mb-0 me-3">Status</p>
                        <button class="btn btn-warning d-flex align-items-center text-light py-2 px-4">
                            <div class="p-2 bg-white rounded-circle"></div>
                            <span class="ms-2 mb-0">Pending</span>
                        </button>
                    </div>
                    <div class="col text-end">
                        <button class="btn btn-info rounded-pill text-light py-3 px-4 me-2">Edit</button>
                        <button class="btn btn-danger rounded-pill text-light py-3 px-4 me-2">Delete</button>
                        <button class="btn btn-success rounded-pill text-light py-3 px-4">Mask As Paid</button>
                    </div>
                </div>
                <div class="row mb-5 bg-secondary p-5 rounded-5">
                    <div class="col">
                        <div class="row align-items-center mb-5">
                            <div class="col text-start">
                                <p class="lead fw-bold mb-1">
                                    <span class="opacity-50">#</span>
                                    <span>BACA24</span>
                                </p>
                                <p>UX / UI</p>
                            </div>
                            <div class="col text-end">
                                <p class="mb-0 small">123 Testing Ville</p>
                                <p class="mb-0 small">Detroit</p>
                                <p class="mb-0 small">48088</p>
                                <p class="mb-0 small">United States</p>
                            </div>
                        </div>
                        <div class="row align-items-center mb-5">
                            <div class="col-3 mb-4">
                                <p class="small">Invoice Date</p>
                                <p class="fw-bold">Jun 2, 2021</p>
                            </div>
                            <div class="col-3 mb-4">
                                <p class="small">Bill To</p>
                                <p class="fw-bold">Jean Kelly</p>
                            </div>
                            <div class="col-6 mb-4">
                                <p class="small">Sent To</p>
                                <p class="fw-bold">john@johnhenryloserporn.com</p>
                            </div>
                            <div class="col-3 mb-4">
                                <p class="small">Payment Date</p>
                                <p class="fw-bold">August 2, 2021</p>
                            </div>
                            <div class="col-3 mb-4">
                                <p class="mb-0 small">123 Testing Ville</p>
                                <p class="mb-0 small">Detroit</p>
                                <p class="mb-0 small">48088</p>
                                <p class="mb-0 small">United States</p>
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
                                        <div class="row mb-3">
                                            <div class="col-6">
                                                <p>Design</p>
                                            </div>
                                            <div class="col-2 text-end">
                                                <p>5</p>
                                            </div>
                                            <div class="col-2 text-end">
                                                <p>300.00</p>
                                            </div>
                                            <div class="col-2 text-end">
                                                <p>1500</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer bg-black p-5 d-flex justify-content-between align-items-center">
                                <span class="lead">Amount</span>
                                <span class="display-5">1500</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>