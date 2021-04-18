import axios from "axios";

export default {
  // Gets all saved users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Deletes the saved user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves an user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  getReddit: function() {
    return axios.get("/api/reddit");
  }
};
