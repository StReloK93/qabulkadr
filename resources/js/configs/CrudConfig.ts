import { InputText, DatePicker } from "primevue";
import * as yup from "yup";

export const crudConfigs = {
   organizations: {
      title: "Bo'limlar",
      inputs: [
         {
            is: null,
            name: "id",
            placeholder: "ID",
            type: null,
            schema: null,
         },
         {
            is: InputText,
            name: "name",
            placeholder: "Nomi",
            type: "text",
            schema: yup.string().required("To'ldiring"),
         },
         {
            is: InputText,
            name: "shortname",
            placeholder: "Qisqa nomi",
            type: "text",
            schema: yup.string(),
         },
      ],
   },
   causes: {
      title: "Sabablar",
      columns: [
         { field: "id", label: "ID", readonly: true },
         { field: "name", label: "Nomi", required: true },
      ],
      inputs: [
         {
            is: null,
            name: "id",
            placeholder: "ID",
            type: null,
            schema: null,
         },
         {
            is: InputText,
            name: "name",
            placeholder: "Nomi",
            type: "text",
            schema: yup.string().required("To'ldiring"),
         },
      ],
   },
};
