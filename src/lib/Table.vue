<template>
  <div class="le-table">
    <table>
      <thead>
        <tr>
          <th v-for="column,index in columns" :key="index">
            <div>{{column.text}}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data,index in dataSource" :key="index">
          <template v-for="column in columns">
            <td :key="column.field">{{data[column.field]}}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup="props, context">
import { ref, computed, SetupContext } from "vue";

declare const props: {
  columns: { text: string; field: string }[];
  dataSource: any;
};
declare const context: SetupContext;

console.log("12331", props);

export default {};
</script>

<style lang="scss">
.le-table {
  table {
    border-collapse: collapse;
    width: 100%;
    border: 1px solid #d9d9d9 !important;
    margin-bottom: 20px;
    th {
      border-collapse: collapse;
      border-right: 1px solid #d9d9d9 !important;
      border-bottom: 1px solid #d9d9d9 !important;
      background: rgba(0, 0, 0, 0.02) !important;
      padding: 8px 16px;
      font-size: 14px;
      font-weight: normal;
      text-align: left;
    }
    td {
      border-collapse: collapse;
      border-right: 1px solid #d9d9d9 !important;
      border-bottom: 1px solid #d9d9d9 !important;
      padding: 8px 16px;
      font-size: 14px;
      font-weight: normal;
      text-align: left;
      word-break: break-all;
    }
    tr {
      &:hover {
        background: rgba(0, 0, 0, 0.02);
      }
    }
  }
}
</style>