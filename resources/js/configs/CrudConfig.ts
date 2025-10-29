import type { IFormInputs } from "@/Interfaces";
import { InputText } from "primevue";
import * as yup from "yup";

export const crudConfigs = {
   organizations: {
      title: "Bo'limlar",
      get columns() {
         return this.inputs.map(({ name, placeholder }) => ({ name, placeholder }));
      },
      inputs: <IFormInputs[]>[
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
      get columns() {
         return this.inputs.map(({ name, placeholder }) => ({ name, placeholder }));
      },
      inputs: <IFormInputs[]>[
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

export function inputValues(inputs: IFormInputs[], values: object) {
   return inputs.map((item) => ({ ...item, value: values[item.name] }));
}
