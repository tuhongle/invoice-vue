<template>
  <nav>
    <div class="container-lg py-5">
      <div class="row">
        <div class="col-12 col-md-10 col-lg-8 mx-auto">
          <div class="row">
            <div class="col d-flex align-items-center">
              <div class="left-nav text-light">
                <h1 class="display-3 fw-bold">Invoices</h1>
                <p class="lead">There are 4 total invoices</p>
              </div>
              <div class="right-nav ms-auto d-flex align-items-center">
                <div class="filter dropdown">
                  <button class="btn btn-transparent shadow-none border-0 d-flex align-items-center text-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Filter By status
                    <i class="bi bi-chevron-down ms-2"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li class="form-check">
                      <label class="form-check-label py-2">
                        <input class="d-none" type="radio" name="filter">
                        Draft
                      </label>
                    </li>
                    <li class="form-check">
                      <label class="form-check-label py-2">
                        <input class="d-none" type="radio" name="filter">
                        Pending
                      </label>
                    </li>
                    <li class="form-check">
                      <label class="form-check-label py-2">
                        <input class="d-none" type="radio" name="filter">
                        Paid
                      </label>
                    </li>
                    <li class="form-check">
                      <label class="form-check-label py-2">
                        <input class="d-none" type="radio" name="filter">
                        Clear Filter
                      </label>
                    </li>
                  </ul>
                </div>
                <button class="btn btn-primary rounded-pill text-light ms-4 py-2" data-bs-toggle="modal" data-bs-target="#staticModal">
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
          <div class="row align-items-center bg-secondary py-5 px-4 rounded-5">
            <div class="col text-start">
              <p class="mb-0">#093242</p>
            </div>
            <div class="col text-center">
              <p class="mb-0">Due Jul 1, 2021</p>
            </div>
            <div class="col text-center">
              <p class="mb-0">Jean Kelly</p>
            </div>
            <div class="col text-center">
              <p class="mb-0">$999.99</p>
            </div>
            <div class="col text-center d-flex align-items-center">
              <button class="btn btn-warning d-flex align-items-center text-light">
                <div class="p-2 bg-white rounded-circle"></div>
                <span class="ms-2 mb-0">Pending</span>
              </button>
              <RouterLink :to="{name: 'invoice'}">
                <i class="bi bi-chevron-right text-light fs-5 ms-3"></i>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>