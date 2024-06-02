<template>
  <div>
    <h1>Please Submit your Profile</h1>
    <form @submit.prevent="saveProfile">
      <table>
        <tr>
          <td><label for="name">Name:</label></td>
          <td><input id="name" v-model="profile.name" /></td>
        </tr>
        <tr>
          <td><label for="courseYear">Course Year:</label></td>
          <td><input id="courseYear" v-model="profile.courseYear" /></td>
        </tr>
        <tr>
          <td><label for="matricNo">Matric No:</label></td>
          <td><input id="matricNo" v-model="profile.matricNo" /></td>
        </tr>
        <tr>
          <td><label for="address">Address:</label></td>
          <td><input id="address" v-model="profile.address" /></td>
        </tr>
        <tr>
          <td><label for="phoneNumber">Phone Number:</label></td>
          <td><input id="phoneNumber" v-model="profile.phoneNumber" /></td>
        </tr>
      </table>
      <div class="button-container">
        <button type="submit">Save</button>
        <button type="button" @click="resetProfile">Reset</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MyProfilePage',
  computed: {
    ...mapGetters(['getProfile']),
    profile: {
      get() {
        return this.getProfile;
      },
      set(newProfile) {
        this.updateProfile(newProfile);
      }
    }
  },
  methods: {
    ...mapActions(['saveProfile']),
    updateProfile(newProfile) {
      this.saveProfile(newProfile);
    },
    resetProfile() {
      // Reset the profile fields to their initial values
      this.profile = {
        name: '',
        courseYear: '',
        matricNo: '',
        address: '',
        phoneNumber: ''
      };
    }
  }
}
</script>

<style scoped>
h1 {
  color: #00ff7f;
  font-family: Arial, sans-serif; /* Example font family */
  font-size: 24px; /* Example font size */
  text-align: left; /* Align the text to the left */
  margin-top: 20px;
  margin-left: 390px; /* Move the heading to the left */
}

table {
  margin: 20px auto;
  width: 40%;
  background-color: black; /* Set table background color */
  border-collapse: collapse; /* Collapse table borders */
}

td {
  padding: 10px;
  border: 1px solid #ffffff; /* Add cell border */
}

label {
  color: #00ff7f;
  text-align: right; /* Align labels to the right */
  display: block; /* Ensure each label takes up the full width of the cell */
}

input {
  padding: 5px;
  border-radius: 5px;
  border: 3px solid #00ff7f;
  width: 90%; /* Make inputs fill the entire width of the cell */
}

.button-container {
  margin-top: 20px;
  text-align: center; /* Align buttons to the center */
}

button {
  margin-top: 10px;
  margin-left: 10px; /* Add spacing between buttons */
  padding: 10px 20px;
  background-color: #00ff7f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #ffffff;
  color: #00ff7f;
}
</style>
