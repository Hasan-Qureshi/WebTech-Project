<template>
  <div>
    <h1>My Profile</h1>
    <table>
      <tr>
        <td><strong style="color: white;">Name:</strong></td>
        <td style="color: #00ff7f;">{{ profile.name }}</td>
      </tr>
      <tr>
        <td><strong style="color: white;">Course Year:</strong></td>
        <td style="color: #00ff7f;">{{ profile.courseYear }}</td>
      </tr>
      <tr>
        <td><strong style="color: white;">Matric No:</strong></td>
        <td style="color: #00ff7f;">{{ profile.matricNo }}</td>
      </tr>
      <tr>
        <td><strong style="color: white;">Address:</strong></td>
        <td style="color: #00ff7f;">{{ profile.address }}</td>
      </tr>
      <tr>
        <td><strong style="color: white;">Phone Number:</strong></td>
        <td style="color: #00ff7f;">{{ profile.phoneNumber }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AboutPage',
  computed: {
    ...mapGetters(['getProfile']),
    profile() {
      return this.getProfile;
    }
  }
}
</script>

<style scoped>
h1 {
  color: #ffffff;
  text-align: center;
  margin-top: 20px;
}

table {
  margin: 20px auto; /* Center the table */
  border: 2px solid #00ff7f; /* Set outer border color */
  border-collapse: collapse; /* Collapse table borders */
  width: 50%; /* Set table width */
  background-color: black; /* Set table background color */
}

td {
  padding: 10px;
  border: 1px solid #ffffff; /* Add cell border */
  color: #00ff7f; /* Set cell text color */
}

strong {
  color: #ffffff; /* Set label text color */
}
</style>
