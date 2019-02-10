<template>
  <div class="home container">
    <Table/>
    <!--Pagination v-bind:total-rows="totalRows" v-bind:per-page="10"/-->
  </div>
</template>

<script>
// @ is an alias to /src
import Table from "@/components/Table.vue";
//import Pagination from "@/components/Pagination";

export default {
  name: "Catalog",
  components: {
    Table
  }
}
</script>
