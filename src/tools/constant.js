export const LANGUANGE = "uz";

export const API_PATH = `http://back.stroytexnika.uz/${
  localStorage.getItem(LANGUANGE) ? localStorage.getItem(LANGUANGE) : "uz"
}/api/v1/`;
