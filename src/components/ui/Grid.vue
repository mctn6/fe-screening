<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="item in items" :key="item.TrackingNumber" class="p-4 bg-white shadow-md" v-if="items.length > 0">
            <h3 class="text-lg font-semibold">{{ item.ConsigneeName }}</h3>
            <p class="text-gray-500">{{ item.ConsigneeAddressDisplay }}</p>
            <p class="text-gray-500">{{ item.ConsigneeNumber }}</p>
            <div class="my-4">
                <p class="text-gray-500 text-sm font-semibold">
                    <span class="text-gray-500">Order Details</span>
                </p>
                <p class="text-gray-500 text-sm">
                    Tracking Number : {{ item.TrackingNumber }}
                </p>
                <p class="text-gray-500 text-sm">
                    Payment Type : {{ item.PaymentType }}
                </p>

                <p class="text-gray-500 text-sm">Width : {{ item.Width }} {{ measurement[1] }}</p>
                <p class="text-gray-500 text-sm">Height : {{ item.Height }} {{ measurement[1] }}</p>
                <p class="text-gray-500 text-sm">Length : {{ item.Length }} {{ measurement[1] }}</p>
                <p class="text-gray-500 text-sm">Weight : {{ item.Weight }} {{ measurement[0] }}</p>
            </div>
        </div>

        <div class="p-4 bg-white shadow-md" v-else>
            <p class="text-gray-500">No items available.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Grid",
    props: {
        items: {
            type: Array,
            required: true,
        },
        measurement: {
            type: Array
        }
    },
};
</script>
