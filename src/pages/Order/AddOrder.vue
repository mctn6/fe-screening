<template lang="">
  <div>
    <form @submit.prevent="submitForm" class="max-w-xs md:max-w-md mx-auto py-8">
      <LabelHeader label="Consignee" />

      <TextField label="Name" :is-required="true" v-model="this.consigneeName" type="text" />
      <TextField label="Address" :is-required="true" v-model="this.consigneeAddress" />
      <div class="grid grid-cols-2 gap-4">
        <Dropdown label="City" :options="cityOptions" v-model="this.consigneeCity" />
        <TextField label="Country" :is-required="true" v-model="this.consigneeCountry" />
      </div>
      <div class="flex space-x-4">
        <TextField label="Postal Code" :is-required="true" v-model="this.consigneePostalCode" type="numeric" />
        <TextField label="Province" :is-required="true" v-model="this.consigneeProvince" />
      </div>
      <TextField label="Number" :is-required="true" v-model="this.consigneeNumber" type="numeric" />

      <LabelHeader label="Order Details" class="mt-8" />

      <div class="flex space-x-4">
        <TextField label="Height (m)" v-model="this.height" :is-required="true" type="numeric" />
        <TextField label="Weight (kg)" v-model="this.weight" :is-required="true" type="numeric" />
      </div>
      <div class="flex space-x-4">
        <TextField label="Length (m)" v-model="this.length" :is-required="true" type="numeric" />
        <TextField label="Width (m)" v-model="this.width" :is-required="true" type="numeric" />
      </div>

      <Dropdown label="Payment Type" :options="paymentTypeOptions" v-model="this.paymentType" />

      <div class="flex justify-end h-32 items-end space-x-4">
        <Button text="Cancel" type="cancel" @button-click="handleCancelClick" size="small" />
        <Button text="Submit" type="submit" size="small" />
      </div>
    </form>
  </div>
</template>
<script>
import Dropdown from "@/components/ui/Dropdown.vue";
import Button from "@/components/ui/Button.vue";
import TextField from "@/components/ui/TextField.vue";
import LabelHeader from "@/components/ui/LabelHeader.vue";
import OrderDataService from "@/services/OrderDataService";

export default {
  name: "AddOrder",
  components: {
    TextField,
    LabelHeader,
    Button,
    Dropdown,
  },
  data() {
    return {
      paymentTypeOptions: ["cod", "prepaid"],
      cityOptions: ["Singapore", "Indonesia"],
      consigneeName: "",
      consigneeAddress: "",
      consigneeCity: "Singapore",
      consigneeCountry: "",
      consigneePostalCode: "",
      consigneeProvince: "",
      consigneeNumber: "",
      height: "0",
      weight: "0",
      length: "0",
      width: "0",
      paymentType: "cod",
    };
  },
  methods: {
    submitForm() {
      var data = {
        consigneeName: this.consigneeName,
        consigneeAddress: this.consigneeAddress,
        consigneeCity: this.consigneeCity,
        consigneeCountry: this.consigneeCountry,
        consigneePostalCode: this.consigneePostalCode,
        consigneeProvince: this.consigneeProvince,
        consigneeNumber: this.consigneeNumber,
        height: parseInt(this.height),
        weight: parseInt(this.weight),
        length: parseInt(this.length),
        width: parseInt(this.width),
        paymentType: this.paymentType,
      };

      OrderDataService.create(data)
        .then((response) => {
          this.$router.push("/dashboard");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    handleCancelClick() {
      this.$router.push("/dashboard");
    },
  },
};
</script>
<style lang=""></style>
