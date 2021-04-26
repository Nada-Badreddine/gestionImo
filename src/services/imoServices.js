import api from "./api";

const getAllImo = () => {
  return api.get("/imo");
};

const getImoById = id => {
  return api.get(`/imo/${id}`);
};

const createImo = data => {
  return api.post("/imo", data);
};


const removeImo = id => {
  return api.delete(`/imo/${id}`);
};
const editImo = id => {
  return api.delete(`/imo/${id}`);
};


export {
  getAllImo,
  getImoById,
  createImo,
  removeImo,
  editImo,
};