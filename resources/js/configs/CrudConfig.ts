import { InputText, DatePicker, Select, Checkbox, SelectButton } from "primevue";
import type { IEducationLevel, IFormInputs } from "@/Interfaces";
import { api } from "@/helpers/useFetch";
import * as yup from "yup";

export const crudConfigs = {
   organization: {
      title: "Bo'limlar",
      parentTitle: "Qo'llanmalar",
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
         {
            is: InputText,
            name: "bossname",
            placeholder: "Bo'lim rahbari",
            schema: yup.string(),
         },
      ],
   },
   cause: {
      title: "Qabul shakllari",
      parentTitle: "Qo'llanmalar",
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
      parentTitle: "Qo'llanmalar",
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
      parentTitle: "Qo'llanmalar",
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
      parentTitle: "Qo'llanmalar",
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
      parentTitle: "Qo'llanmalar",
      inputs: <IFormInputs[]>[
         {
            is: InputText,
            name: "name",
            placeholder: "Nomi",
            schema: yup.string().required("To'ldiring"),
         },
      ],
   },

   status: {
      title: "Jarayon turlari",
      parentTitle: "Qo'llanmalar",
      inputs: <IFormInputs[]>[
         {
            is: InputText,
            name: "name",
            placeholder: "Nomi",
            schema: yup.string().required("To'ldiring"),
         },
      ],
   },

   employes: {
      title: "Xodimlar",
      parentTitle: "Asosiy bo'lim",
      inputs: <IFormInputs[]>[
         {
            is: InputText,
            name: "full_name",
            placeholder: "F.I.SH",
            schema: yup.string().required("To'ldiring"),
         },
         {
            is: DatePicker,
            name: "birth_date",
            placeholder: "Tug'ilgan sana",
            notColumn: true,
            schema: yup.date().required("Kunni tanlang"),
            attr: { showIcon: true, iconDisplay: "input", dateFormat: "dd.mm.yy" },
         },
         {
            is: Select,
            name: "education_level_id",
            columnName: "education_level.name",
            placeholder: "Ma'lumoti",
            schema: yup.number().required("Tanlang"),
            generateAttributes: async function () {
               const { data } = await api.get<IEducationLevel[]>(`crud/education_level`);
               this.attr = selectOption(data, "name");
            },
         },
         {
            is: InputText,
            name: "university",
            placeholder: "Oliy o'quv yurti",
            schema: yup.string().required("To'ldiring"),
            notColumn: true,
         },
         {
            is: Select,
            name: "cause_id",
            columnName: "cause.name",
            placeholder: "Qabul shakli",
            schema: yup.number().required("Tanlang"),
            generateAttributes: async function () {
               const { data } = await api.get<IEducationLevel[]>(`crud/cause`);
               this.attr = selectOption(data, "name");
            },
         },
         {
            is: InputText,
            name: "cause_text",
            placeholder: "Asos",
            schema: yup.string().nullable(),
         },
         {
            is: Select,
            name: "organization_id",
            columnName: "organization.shortname",
            placeholder: "Bo'lim",
            schema: yup.number().required("Tanlang"),
            generateAttributes: async function () {
               const { data } = await api.get<IEducationLevel[]>(`crud/organization`);
               this.attr = selectOption(data, "name");
            },
         },
         {
            is: InputText,
            name: "division",
            placeholder: "Uchastka nomi",
            schema: yup.string().nullable(),
            notColumn: true,
         },
         {
            is: InputText,
            name: "profession",
            placeholder: "Lavozimi",
            schema: yup.string().required("To'ldiring"),
         },
         {
            name: "created_at",
            placeholder: "Kiritilgan sana",
            notInput: true,
         },
         {
            is: Select,
            name: "work_environment_id",
            placeholder: "Mehnat sharoiti",
            schema: yup.number().required("To'ldiring"),
            generateAttributes: async function () {
               const { data } = await api.get<IEducationLevel[]>(`crud/work_environment`);
               this.attr = selectOption(data, "name");
            },
            notColumn: true,
         },
         {
            is: InputText,
            name: "phone",
            placeholder: "Telefon raqami",
            schema: yup.string().nullable(),
            notColumn: true,
         },
         {
            is: SelectButton,
            name: "status_id",
            columnName: "status.name",
            placeholder: "",
            schema: yup.number().nullable(),
            notColumn: true,
            value: 1,
            generateAttributes: async function () {
               const { data } = await api.get<IEducationLevel[]>(`crud/status`);
               this.attr = selectOption(data, "name");
            },
         },
         {
            is: Checkbox,
            name: "company",
            placeholder: "Korxona hisobidan",
            schema: yup.boolean(),
            withLabel: true,
            attr: { binary: true },
            notColumn: true,
         },
         {
            is: Select,
            name: "disability_type_id",
            columnName: "disability_type.name",
            placeholder: "Nogironlik turlari",
            schema: yup.number().nullable(),
            generateAttributes: async function () {
               const { data } = await api.get<IEducationLevel[]>(`crud/disability_type`);
               this.attr = selectOption(data, "name", true);
            },
            notColumn: true,
         },
         {
            is: Select,
            name: "quot_type_id",
            placeholder: "Kvota yo'nalishlari",
            schema: yup.number().nullable(),
            generateAttributes: async function () {
               const { data } = await api.get<IEducationLevel[]>(`crud/quot_type`);
               this.attr = selectOption(data, "name", true);
            },
            notColumn: true,
         },
      ],
   },
};

export function inputValues(inputs: IFormInputs[], values: object) {
   return inputs.map((item) => {
      let value = values[item.name];
      if (item.is?.name === "DatePicker" && typeof value === "string") {
         value = new Date(value);
      }
      return { ...item, value };
   });
}

export function columns(inputs: IFormInputs[]) {
   return inputs
      .filter((i) => !i.notColumn)
      .map(({ name, columnName, placeholder }) => ({
         name: columnName ? columnName : name,
         placeholder,
      }));
}

export async function generateAttributes(inputs: IFormInputs[]) {
   return await Promise.all(
      inputs.map(async (input) => {
         if (input.generateAttributes) {
            await input.generateAttributes();
         }
         return input;
      })
   );
}

function selectOption(array: any[], key: string, showClear: boolean = false) {
   return {
      options: array.map((dept: { id: number }) => ({
         label: dept[key],
         value: dept.id,
      })),
      optionLabel: "label",
      optionValue: "value",
      showClear: showClear,
   };
}
