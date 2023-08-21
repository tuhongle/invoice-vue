<template>
  <nav>
    <div class="container-lg py-5">
      <div class="row">
        <div class="col-12 col-md-10 col-lg-8 mx-auto">
          <div class="row">
            <div class="col d-flex align-items-center">
              <div class="left-nav text-light">
                <h1 class="display-3 fw-bold">Invoices</h1>
                <p class="lead">There are {{ invoicesStore.invoicesArray.length }} total invoices</p>
              </div>
              <div class="right-nav ms-auto d-flex align-items-center">
                <div class="filter dropdown">
                  <button class="btn btn-transparent shadow-none border-0 d-flex align-items-center text-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="me-2">Filter By status</span>
                    <span class="lead" v-if="invoicesStore.filter !== 'all'">{{ invoicesStore.filter }}</span>
                    <i class="bi bi-chevron-down ms-2"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li class="form-check p-0">
                      <label class="form-check-label py-2 ps-3 w-100">
                        <input class="d-none" type="radio" value="Draft" v-model="invoicesStore.filter">
                        Draft
                      </label>
                    </li>
                    <li class="form-check p-0">
                      <label class="form-check-label py-2 ps-3 w-100">
                        <input class="d-none" type="radio" value="Pending" v-model="invoicesStore.filter">
                        Pending
                      </label>
                    </li>
                    <li class="form-check p-0">
                      <label class="form-check-label py-2 ps-3 w-100">
                        <input class="d-none" type="radio" value="Paid" v-model="invoicesStore.filter">
                        Paid
                      </label>
                    </li>
                    <li class="form-check p-0">
                      <label class="form-check-label py-2 ps-3 w-100">
                        <input class="d-none" type="radio" value="all" v-model="invoicesStore.filter">
                        Clear Filter
                      </label>
                    </li>
                  </ul>
                </div>
                <button class="btn btn-primary rounded-pill text-light ms-4 py-2" @click="invoicesStore.openModal = true">
                  <i class="bi bi-plus-circle-fill me-1"></i>
                  New Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <section class="invoice-lists">
    <div class="container-lg">
      <div class="row">
        <div class="col-12 col-md-10 col-lg-8 mx-auto">
          <div class="row align-items-center bg-secondary py-5 px-4 rounded-5 mb-4" v-for="(invoice, index) in invoicesStore.invoicesArray" :key="invoice.id">
            <div class="col text-start">
              <p class="mb-0">#{{ invoice.id }}</p>
            </div>
            <div class="col text-center">
              <p class="mb-0">Due {{ new Date(invoice.paymentDue).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
            </div>
            <div class="col text-center">
              <p class="mb-0">{{ invoice.billTo.name }}</p>
            </div>
            <div class="col text-center">
              <p class="mb-0">$ {{ invoice.total }}</p>
            </div>
            <div class="col text-center d-flex align-items-center">
              <button class="btn d-flex align-items-center text-light" :class="{'btn-info': invoice.status === 'Draft', 'btn-warning': invoice.status === 'Pending', 'btn-success': invoice.status === 'Paid'}" @click="changeStatus(invoice.status, index)">
                <div class="p-2 bg-white rounded-circle"></div>
                <span class="ms-2 mb-0">{{ invoice.status }}</span>
              </button>
              <RouterLink :to="{ name: 'invoice', params: {id: invoice.id} }" class="ms-auto">
                <i class="bi bi-chevron-right text-light fs-5 ms-3"></i>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<!-- Modal -->
  <Teleport to="#modal">
    <div v-if="invoicesStore.openModal">
      <modal />
    </div>
  </Teleport>
<!-- =========== -->
</template>

<script setup lang="ts">
import { watchEffect } from 'vue';
import modal from '../components/modal.vue';
import { useInvoicesStore } from '../stores/invoices';

const invoicesStore = useInvoicesStore();

watchEffect(() => {
  console.log(invoicesStore.filter)
})

const changeStatus = (data : string, index: number) => {
  switch (data) {
    case 'Draft':
    invoicesStore.invoicesArray[index].status = 'Pending';
    break;
    case 'Pending':
    invoicesStore.invoicesArray[index].status = 'Paid';
    break;
    case 'Paid':
    invoicesStore.invoicesArray[index].status = 'Pending';
    break;
  }
}

</script>

<style scoped>
.modal-enter-from {
  left: -100%;
  opacity: 0;
}
.modal-leave-to {
  left: -100%;
  opacity: 0;
}
.modal-enter-active,
.modal-leave-active {
  transition: all 5s linear;
}
</style>