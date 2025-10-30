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
            is: InputText,
            name: "name",
            placeholder: "Nomi",
            schema: yup.string().required("To'ldiring"),
         },
         {
            is: InputText,
            name: "shortname",
            placeholder: "Qisqa nomi",
            schema: yup.string(),
         },
      ],
   },
   causes: {
      title: "Asoslar",
      get columns() {
         return this.inputs.map(({ name, placeholder }) => ({ name, placeholder }));
      },
      inputs: <IFormInputs[]>[
         {
            is: InputText,
            name: "name",
            placeholder: "Nomi",
            schema: yup.string().required("To'ldiring"),
         },
      ],
   },
   work_environment: {
      title: "Mehnat sharoitlari",
      get columns() {
         return this.inputs.map(({ name, placeholder }) => ({ name, placeholder }));
      },
      inputs: <IFormInputs[]>[
         {
            is: InputText,
            name: "name",
            placeholder: "Nomi",
            schema: yup.string().required("To'ldiring"),
         },
      ],
   },
   education_level: {
      title: "Ta'lim darajasi",
      get columns() {
         return this.inputs.map(({ name, placeholder }) => ({ name, placeholder }));
      },
      inputs: <IFormInputs[]>[
         {
            is: InputText,
            name: "name",
            placeholder: "Nomi",
            schema: yup.string().required("To'ldiring"),
         },
      ],
   },
   disability_type: {
      title: "Nogironlik turlari",
      get columns() {
         return this.inputs.map(({ name, placeholder }) => ({ name, placeholder }));
      },
      inputs: <IFormInputs[]>[
         {
            is: InputText,
            name: "name",
            placeholder: "Nomi",
            schema: yup.string().required("To'ldiring"),
         },
      ],
   },
   quot_type: {
      title: "Kvota turlari",
      get columns() {
         return this.inputs.map(({ name, placeholder }) => ({ name, placeholder }));
      },
      inputs: <IFormInputs[]>[
         {
            is: InputText,
            name: "name",
            placeholder: "Nomi",
            schema: yup.string().required("To'ldiring"),
         },
      ],
   },
};

export function inputValues(inputs: IFormInputs[], values: object) {
   return inputs.map((item) => ({ ...item, value: values[item.name] }));
}
