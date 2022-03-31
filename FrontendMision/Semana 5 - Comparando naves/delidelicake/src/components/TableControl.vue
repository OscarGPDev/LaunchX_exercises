<script setup>
defineProps({
  id: {
    type: String,
    required: false,
  },
  headers: {
    type: Array, //
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
});
</script>
<script>
const compare = (a, b, asc) => {
  if (asc) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
  } else {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    }
  }

  // a debe ser igual b
  return 0;
};

export default {
  data() {
    const defaultSortingHeader = this.$props.headers.find(
      (element) => element.orderByDefault
    );
    let defaultData = this.$props.data;
    if (defaultSortingHeader) {
      defaultData = defaultData.sort((a, b) =>
        compare(
          a[defaultSortingHeader.dataSource],
          b[defaultSortingHeader.dataSource],
          defaultSortingHeader.ascending
        )
      );
    }

    return {
      tableData: defaultData,
      currentlySorting: defaultSortingHeader?.name || "",
      ascending: defaultSortingHeader?.ascending || false,
    };
  },

  // `mounted` is a lifecycle hook which we will explain later
  mounted() {},
  methods: {
    orderBy(column) {
      this.currentlySorting = column.target.dataset.name;
      this.ascending = !this.ascending;
      const sortingByHeader = this.headers.find(
        (header) => header.name === column.target.dataset.name
      );
      this.tableData = this.tableData?.sort((a, b) =>
        compare(
          a[sortingByHeader.dataSource],
          b[sortingByHeader.dataSource],
          this.ascending
        )
      );
    },
  },
};
</script>

<template>
  <table class="table" :id="id">
    <thead>
      <tr>
        <th
          scope="col"
          class="table-Header"
          v-bind:key="`tbl-header-${header.name}`"
          :data-name="header.name"
          v-for="header in headers"
          @click="orderBy"
        >
          {{ header.name }}
          <i
            v-if="currentlySorting === header.name"
            :class="`fa fa-fw fa-sort-${ascending ? 'asc' : 'desc'}`"
            :data-name="header.name"
          ></i>
        </th>
      </tr>
    </thead>
    <tbody id="tblOrders">
      <tr
        v-bind:key="`tbl-header-${dataRow.id || dataRow.name}`"
        v-for="dataRow in tableData"
      >
        <td v-bind:key="`tbl-header-${header.name}`" v-for="header in headers">
          {{
            header?.drawFunction !== undefined
              ? header?.drawFunction(dataRow)
              : dataRow[header.dataSource]
          }}
        </td>
      </tr>
      <tr v-if="!data || data.length === 0" class="empty">
        <td :colspan="headers.length">Aún no hay datos disponibles.</td>
      </tr>
    </tbody>
  </table>
</template>
<style>
/*tr {*/
/*  border-bottom-width: 1px;*/
/*  !*box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);*!*/
/*}*/
.table {
  caption-side: bottom;
  border-collapse: collapse;
  width: 100%;
}

.table > :not(caption) > * > * {
  padding: 0.5rem 0.5rem;
  /*background-color: var(--bs-table-bg);*/
  border-bottom-width: 1px;
  /*box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);*/
}
tbody,
td,
tfoot,
th,
thead,
tr {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}

.empty {
  text-align: center;
}
.table-Header {
  color: #000000;
  font-weight: 900;
  padding: 0.5rem;
  margin: 0;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}
</style>
