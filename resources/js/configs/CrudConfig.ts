import type { IFormInputs } from "@/Interfaces";
import { InputText } from "primevue";
import * as yup from "yup";

export const crudConfigs = {
   organizations: {
      title: "Bo'limlar",
      inputs: async function () {
         return <IFormInputs[]>[
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
         ];
      },
   },

   causes: {
      title: "Asoslar",
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
      inputs: <IFormInputs[]>[
         {
            is: InputText,
            name: "name",
            placeholder: "Nomi",
            schema: yup.string().required("To'ldiring"),
         },
      ],
   },

}

export function inputValues(inputs: IFormInputs[], values: object) {
   return inputs.map((item) => ({ ...item, value: values[item.name] }));
}
