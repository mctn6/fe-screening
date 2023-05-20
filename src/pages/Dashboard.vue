<template lang="">
    <div class="container mx-auto p-8">
      <div class="max-w-sm md:max-w-none">
        <div class="flex justify-end my-4">
        <Button text="Add Order" @button-click="handleAddOrder" type="submit"/>
      </div>

      <Grid :columns="columns" :items="items" class="md:hidden" :measurement="measurement"/>
      <Table :columns="columns" :items="items" class="hidden md:block"/>
 

      </div>
    </div>
</template>
<script>
import Table from "@/components/ui/Table.vue";
import Grid from "@/components/ui/Grid.vue";
import Button from "@/components/ui/Button.vue";
import OrderDataService from "@/services/OrderDataService";

export default {
  name: "DashboardPage",
  components: {
    Table,
    Grid,
    Button,
  },
  data() {
    return {
      columns: [
        { name: "Tracking Number", valueKey: "TrackingNumber", type: "text" },
        { name: "Consignee Name", valueKey: "ConsigneeName", type: "text" },
        { name: "Consignee Address", valueKey: "ConsigneeAddressDisplay", type: "text" },
        { name: "Consignee Number", valueKey: "ConsigneeNumber", type: "text" },
        { name: "Payment Type", valueKey: "PaymentType", type: "text" },
        { name: "Order Details", valueKey: "OrderDetailsDisplay", type: "html" },

      ],
      items: [],
      measurement: ["kg", "m"]
    };
  },
  methods: {
    retrieveOrders() {
      OrderDataService.getAll()
        .then(response => {
          this.items = response.data.data;
          this.items.map((x) => {
            x.ConsigneeAddressDisplay = x.ConsigneeAddress + " " + x.ConsigneeProvince + " " + x.ConsigneeCountry + " " + x.ConsigneeCity + ", " + x.ConsigneePostalCode
            x.OrderDetailsDisplay = "<span> Width : " + x.Width + " " + this.measurement[1] + " </span></br>" +
              "<span> Height : " + x.Height + " " + this.measurement[1] +" </span></br>" +
              "<span> Length : " + x.Length + " " + this.measurement[1] +" </span></br>" +
              "<span> Weight : " + x.Weight + " " + this.measurement[0] +" </span>";
          })
        })
        .catch(e => {
          console.log(e);
        });
    },

    handleAddOrder() {
      this.$router.push("/add-order");
    }
  },
  created() {
    this.retrieveOrders();
  }
};
</script>
<style lang=""></style>
