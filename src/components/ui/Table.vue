<template>
  <table class="min-w-full border border-gray-200">
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.name"
          class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">{{
            column.name }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in items" :key="row.id">
        <td v-for="column in columns" :key="column.name"
          class="px-6 py-4 bg-white whitespace-no-wrap border-b border-gray-200 text-sm">
          <template v-if="column.type === 'text'">
            {{ row[column.valueKey] }}
          </template>
          <template v-else-if="column.type === 'html'">
            <span v-html="row[column.valueKey]"></span>
          </template>
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