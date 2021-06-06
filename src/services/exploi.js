import api from "./api";

const getAllExp = () => {
  return api.get("/exp");
};

const getExpById = id => {
  return api.get(`/exp/${id}`);
};

const createExp = data => {
  return api.post("/exp", data);
};


const removeExp = id => {
  return api.delete(`/exp/${id}`);
};
const editExp = id => {
  return api.delete(`/exp/${id}`);
};


export {
    getAllExp,
    getExpById,
    createExp,
    removeExp,
    editExp,
 
};