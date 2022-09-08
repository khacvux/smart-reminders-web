import {
  ICreateNote,
  IQuickNote,
  IUpdateCategoryNote,
  IUpdateNecessityNote,
  IUpdateNote,
} from "../redux/notes/interfaces";
import AXIOS from "./axiosClient";

const subdirectory = "/notes";

export const create = async ({
  token,
  data,
}: {
  token: string;
  data: ICreateNote;
}) => {
  try {
    return await AXIOS.post(`${subdirectory}/add`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    return error;
  }
};

export const update = async ({
  token,
  data,
}: {
  token: string;
  data: IUpdateNote;
}) => {
  try {
    return await AXIOS.post(`${subdirectory}/update`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    return error;
  }
};

export const updateNecessity = async ({
  token,
  data,
}: {
  token: string;
  data: IUpdateNecessityNote;
}) => {
  try {
    return await AXIOS.post(`${subdirectory}/update-necessity`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    return error;
  }
};

export const createQuickNote = async ({
  token,
  data,
}: {
  token: string;
  data: IQuickNote;
}) => {
  try {
    return await AXIOS.post(`${subdirectory}/quick/add`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    return error;
  }
};

export const updateCategoryNote = async ({
  token,
  data,
}: {
  token: string;
  data: IUpdateCategoryNote;
}) => {
  try {
    return await AXIOS.post(`${subdirectory}/update-category`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    return error;
  }
};

export const listByCategory = async ({
  token,
  idCategory,
}: {
  token: string;
  idCategory: string;
}) => {
  try {
    return await AXIOS.get(`${subdirectory}/list/${idCategory}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    return error;
  }
};

export const listAll = async (token: string) => {
  try {
    return await AXIOS.get(`${subdirectory}/list/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    return error;
  }
};

export const quicklist = async (token: string) => {
  try {
    return await AXIOS.get(`${subdirectory}/quick/list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    return error;
  }
};

export const remove = async ({
  token,
  idNote,
}: {
  token: string;
  idNote: string;
}) => {
  try {
    return await AXIOS.delete(`${subdirectory}/${idNote}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    return error;
  }
};
