const knex = require("../../knex.js");
const bcrypt = require("bcrypt");

exports.findAll = async () => {
  const results = await knex("users").select("*");

  return results;
};

exports.findById = async (id) => {
  const user = await knex("users").where("id", id).first("*");


  return user;
};

exports.insertUser = async (data) => {

  const createdUser = await knex("users")
    .insert(data)
    .returning(["id", "firstName", "lastName", "email"]);
  return createdUser;
};

exports.destroyUser = async (id) => {
  const deletedUser = await knex("users").delete().where("id", id);
  return deletedUser;
};

exports.modifyUser = async (userData, id) => {
  // Insert the user into the database and return
  console.log(userData)
  return await knex('users').update(userData).where('id', id) // return the data you need excluding the password
}

exports.createUser = async (userData) => {
  const { username, password } = userData;

  // Hash the password with 10 rounds of salt
  const hash = await bcrypt.hash(password, 10);

  // delete plaintext password
  delete userData.password;

  // Insert the user into the database and return
  return await knex("users")
    .insert({
      ...userData,
      username: username,
      password: hash, //store the hash. DO NOT store a plaintext password!
    })
    .returning(["id", "username", "role"]); // return the data you need excluding the password
};

exports.modifyUser = async (userData, id) => {
  // Insert the user into the database and return
  console.log(userData)
  return await knex('users').update(userData).where('id', id) // return the data you need excluding the password
}

exports.findByUsername = async (username) => {
  // Find the first user in the database with the username
  const user = await knex("users").where("username", username).first("*");
  return user;
};
