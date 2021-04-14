import axios from "axios";

export default {
  // Gets Users from the Google API
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets all saved Users
  getSavedUsers: function() {
    return axios.get("/api/users");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves an book to the database
  saveBook: function(userData) {
    return axios.post("/api/users", userData);
  }
  getReddit: function() {
    return axios.get("/api/reddit");
  }
};
