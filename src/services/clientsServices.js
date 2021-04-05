import api from "./api";

const getAllClients = () => {
  return api.get("/clients");
};

const getClientById = (id) => {
  return api.get(`/clients/${id}`);
};

const createClient = (data) => {
  return api.post("/clients", data);
};

const login = (data) => {
  return api.post("/clients/login", data);
};

const removeClient = (id) => {
  return api.delete(`/clients/${id}`);
};

export { getAllClients, getClientById, createClient, removeClient, login };
