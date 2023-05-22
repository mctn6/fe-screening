<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="bg-white p-8 shadow-lg rounded-lg max-w-sm md:max-w-md">
      <h2 class="text-2xl mb-4">Login</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <TextField v-model="username" label="Username" type="text" :is-required="true" />
        </div>
        <div class="mb-4">
          <TextField v-model="password" label="Password" type="password" :is-required="true" />
        </div>
          <Button text="Login" size="full" type="submit" @button-click="handleLoginClick" :is-disabled="isDisabled" />
      </form>
    </div>
  </div>
</template>

<script>
import TextField from "@/components/ui/TextField.vue";
import Button from "@/components/ui/Button.vue";
import AuthDataService from "@/services/AuthDataService";

export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      isDisabled: false,
    };
  },
  components: {
    TextField,
    Button,
  },

  methods: {
    handleLoginClick() {
      if (this.username !== "" && this.password !== "") {
        this.isDisabled = true;

        var data = {
          username: this.username,
          password: this.password,
        };

        AuthDataService.create(data)
          .then((response) => {
            sessionStorage.setItem("session", response.data.session);
            sessionStorage.setItem("user", response.data.user);

            this.$router.push("/dashboard");
          })
          .catch((e) => {
            this.isDisabled = true;
            console.log(e);
          });
      }
    },
  },
};
</script>

<style>
/* Add any custom styles here */
</style>
