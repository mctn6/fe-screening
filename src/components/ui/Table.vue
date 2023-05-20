<template>
  <table class="w-full border border-gray-200 table-auto">
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.name"
        :style="{ width: column.width + '%' }"
          class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">{{
            column.name }}</th>
      </tr>
    </thead>
    <tbody v-if="items.length > 0">
      <tr v-for="row in items" :key="row.id" class="bg-white hover:bg-white/80">
        <td v-for="column in columns" :key="column.name"
          class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm">
          <template v-if="column.type === 'text'">
            {{ row[column.valueKey] }}
          </template>
          <template v-else-if="column.type === 'html'">
            <span v-html="row[column.valueKey]"></span>
          </template>
        </td>
      </tr>
    </tbody>
    <tbody v-else>
    <tr class="bg-white">
      <td colspan="100%" class="px-6 py-4 text-center text-sm">
        No items available.
      </td>
    </tr>
  </tbody>
  </table>
</template>
  
<script>
export default {
  name: "Table",
  props: {
    columns: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>