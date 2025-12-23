import {
   InputText,
   DatePicker,
   Select,
   Checkbox,
   SelectButton,
   InputMask,
   Textarea,
   InputNumber,
} from "primevue";
import type { IEducationLevel, IFormInputs, CrudKey } from "@/Interfaces";
import { api } from "@/helpers/useFetch";
import * as yup from "yup";

export interface ICrudConfig {
   title: string;
   parentTitle?: string;
   createButtonHide?: boolean;
   editButtonHide?: boolean;
   deleteButtonHide?: boolean;
   inputs: IFormInputs[];
}

export const crudConfigs: Record<CrudKey, ICrudConfig> = {
   users: {
      title: "Foydalanuvchilar",
      parentTitle: "Qo'llanmalar",
      deleteButtonHide: true,
      inputs: <IFormInputs[]>[
         {
            is: InputText,
            name: "name",
            placeholder: "Nomi",
            schema: yup.string().required("To'ldiring"),
         },
         {
            is: InputText,
            name: "login",
            placeholder: "Login",
            schema: yup.string(),
         },
         {
            is: Checkbox,
            name: "role",
            placeholder: "Admin",
            schema: yup.boolean(),
            withLabel: true,
            attr: { binary: true },
            notColumn: true,
         },
         {
            is: InputMask,
            name: "phone",
            placeholder: "Telefon raqami",
            schema: yup.string().nullable(),
            attr: { mask: "999-99-99" },
         },
      ],
   },
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
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

   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
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

   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   suhbatsarlavha: {
      title: "Suhbat sarlavhalari",
      parentTitle: "Qo'llanmalar",
      inputs: <IFormInputs[]>[
         {
            is: InputText,
            name: "description",
            placeholder: "Tarkibi",
            schema: yup.string().required("To'ldiring"),
         },
      ],
   },
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
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
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
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

   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
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
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   yoriqnoma: {
      title: "Yo'riqnomalar",
      parentTitle: "Qo'llanmalar",
      inputs: <IFormInputs[]>[
         {
            is: Textarea,
            name: "title",
            placeholder: "Yo'riqnoma o'tiladigan joylar",
            schema: yup.string().required("To'ldiring"),
            attr: { autoResize: true },
            parentClass: "font-[Times_New_Roman]!",
         },
         {
            is: Textarea,
            name: "text",
            placeholder: "Malumot",
            schema: yup.string().nullable(),
            attr: { autoResize: true },
            parentClass: "font-[Times_New_Roman]!",
         },
         {
            is: InputText,
            name: "colspan",
            placeholder: "Kataklar soni",
            schema: yup.string(),
         },
      ],
   },

   rahbar: {
      title: "Rahbarlar",
      parentTitle: "Qo'llanmalar",
      createButtonHide: true,
      deleteButtonHide: true,
      inputs: <IFormInputs[]>[
         {
            is: InputText,
            name: "name",
            placeholder: "F.I.SH",
            schema: yup.string().required("To'ldiring"),
         },
         {
            name: "profession",
            placeholder: "Lavozimi",
            notInput: true,
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

   suhbat: {
      title: "Jarayon turlari",
      parentTitle: "Qo'llanmalar",
      inputs: <IFormInputs[]>[
         {
            is: InputText,
            name: "name",
            placeholder: "F.I.Sh",
            schema: yup.string().required("To'ldiring"),
         },
         {
            is: InputMask,
            name: "phone",
            placeholder: "Telefon raqami",
            schema: yup.string().nullable(),
            notColumn: true,
            attr: { mask: "(99) 999-99-99" },
         },
         {
            is: Textarea,
            name: "profession",
            placeholder: "Lavozim",
            schema: yup.string().required("To'ldiring"),
            attr: { autoResize: true },
         },
         {
            is: Select,
            name: "suhbatsarlavha_id",
            columnName: "suhbatsarlavha.description",
            placeholder: "Sarlavha",
            schema: yup.number().required("Tanlang"),
            generateAttributes: async function () {
               const { data } = await api.get<IEducationLevel[]>(`crud/suhbatsarlavha/all`);
               this.attr = selectOption(data, "description");
            },
         },
         {
            is: Select,
            name: "organization_id",
            columnName: "organization.shortname",
            placeholder: "Bo'lim",
            schema: yup.number().required("Tanlang"),
            generateAttributes: async function () {
               const { data } = await api.get<IEducationLevel[]>(`crud/organization/all`);
               this.attr = selectOption(data, "name");
            },
         },
         {
            name: "creater_id",
            columnName: "creater.name",
            placeholder: "Ijrochi",
            generateAttributes: async function () {
               const { data } = await api.get<IEducationLevel[]>(`crud/organization/all`);
               this.attr = selectOption(data, "name");
            },
            notInput: true,
         },
      ],
   },

   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //

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
            name: "rahbar_id",
            columnName: "rahbar.name",
            placeholder: "Kimni nomiga",
            schema: yup.number().required("Tanlang"),
            generateAttributes: async function () {
               const { data } = await api.get<IEducationLevel[]>(`crud/rahbar/main`);
               this.attr = selectOption(data, "name");
            },
         },
         {
            is: Select,
            name: "education_level_id",
            columnName: "education_level.name",
            placeholder: "Ma'lumoti",
            schema: yup.number().required("Tanlang"),
            generateAttributes: async function () {
               const { data } = await api.get<IEducationLevel[]>(`crud/education_level/all`);
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
               const { data } = await api.get<IEducationLevel[]>(`crud/cause/all`);
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
               const { data } = await api.get<IEducationLevel[]>(`crud/organization/all`);
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
            notColumn: true,
         },
         {
            is: Select,
            name: "work_environment_id",
            placeholder: "Mehnat sharoiti",
            schema: yup.number().required("To'ldiring"),
            generateAttributes: async function () {
               const { data } = await api.get<IEducationLevel[]>(`crud/work_environment/all`);
               this.attr = selectOption(data, "name");
            },
            notColumn: true,
         },
         {
            is: InputMask,
            name: "phone",
            placeholder: "Telefon raqami",
            schema: yup.string().nullable(),
            notColumn: true,
            attr: { mask: "(99) 999-99-99" },
         },
         {
            is: SelectButton,
            name: "status_id",
            columnName: "status.name",
            placeholder: "",
            schema: yup.number().nullable(),
            notColumn: true,
            parentClass: ["mb-1!"],
            value: 1,
            default: 1,
            generateAttributes: async function () {
               const { data } = await api.get<IEducationLevel[]>(`crud/status/all`);
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
               const { data } = await api.get<IEducationLevel[]>(`crud/disability_type/all`);
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
               const { data } = await api.get<IEducationLevel[]>(`crud/quot_type/all`);
               this.attr = selectOption(data, "name", true);
            },
            notColumn: true,
            parentClass: ["mb-0!"],
         },
      ],
   },

   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //

   finished_employes: {
      title: "Ishga qabul qilingan xodimlar",
      parentTitle: "Asosiy bo'lim",
      createButtonHide: true,
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
            name: "rahbar_id",
            columnName: "rahbar.name",
            placeholder: "Kimni nomiga",
            schema: yup.number().required("Tanlang"),
            generateAttributes: async function () {
               const { data } = await api.get<IEducationLevel[]>(`crud/rahbar/main`);
               this.attr = selectOption(data, "name");
            },
         },
         {
            is: Select,
            name: "education_level_id",
            columnName: "education_level.name",
            placeholder: "Ma'lumoti",
            schema: yup.number().required("Tanlang"),
            generateAttributes: async function () {
               const { data } = await api.get<IEducationLevel[]>(`crud/education_level/all`);
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
               const { data } = await api.get<IEducationLevel[]>(`crud/cause/all`);
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
               const { data } = await api.get<IEducationLevel[]>(`crud/organization/all`);
               this.attr = selectOption(data, "name");
            },
         },
         {
            is: InputText,
            name: "division",
            placeholder: "Uchastka",
            schema: yup.string().nullable(),
            notColumn: true,
         },
         {
            is: InputText,
            name: "profession",
            placeholder: "Lavozimi",
            schema: yup.string().required("To'ldiring"),
         },
         //
         //
         //
         {
            is: InputText,
            parentClass: ["mt-4!"],
            name: "buyruq_sanasi",
            placeholder: "B.Sanasi",
            schema: yup.string().required("To'ldiring"),
         },
         {
            is: InputText,
            name: "buyruq_raqami",
            placeholder: "B.Raqami",
            schema: yup.string().required("To'ldiring"),
         },
         {
            is: InputText,
            name: "ishga_qabul_kuni",
            placeholder: "Ishga qabul kuni",
            schema: yup.string().required("To'ldiring"),
            parentClass: ["mb-8!"],
         },
         //
         //
         //
         {
            name: "created_at",
            placeholder: "Kiritilgan sana",
            notInput: true,
            notColumn: true,
         },
         {
            is: Select,
            name: "work_environment_id",
            placeholder: "Mehnat sharoiti",
            schema: yup.number().required("To'ldiring"),
            generateAttributes: async function () {
               const { data } = await api.get<IEducationLevel[]>(`crud/work_environment/all`);
               this.attr = selectOption(data, "name");
            },
            notColumn: true,
         },
         {
            is: InputMask,
            name: "phone",
            placeholder: "Telefon raqami",
            schema: yup.string().nullable(),
            notColumn: true,
            attr: { mask: "(99) 999-99-99" },
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
               const { data } = await api.get<IEducationLevel[]>(`crud/disability_type/all`);
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
               const { data } = await api.get<IEducationLevel[]>(`crud/quot_type/all`);
               this.attr = selectOption(data, "name", true);
            },
            notColumn: true,
            parentClass: ["mb-0!"],
         },
      ],
   },

   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
   //
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

export function selectOption(array: any[], key: string, showClear: boolean = false) {
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

export const qabulFormInputs: IFormInputs[] = [
   {
      is: InputNumber,
      name: "buyruq_raqami",
      placeholder: "Buyruq raqami",
      schema: yup.number().required("To'ldiring"),
   },
   {
      is: DatePicker,
      name: "buyruq_sanasi",
      placeholder: "Buyruq sanasi",
      notColumn: true,
      schema: yup.date().required("Kunni tanlang"),
      attr: { showIcon: true, iconDisplay: "input", dateFormat: "dd.mm.yy" },
   },
   {
      is: DatePicker,
      name: "ishga_qabul_kuni",
      placeholder: "Ishga qabul qilingan kun",
      notColumn: true,
      schema: yup.date().required("Kunni tanlang"),
      attr: {
         showIcon: true,
         iconDisplay: "input",
         dateFormat: "dd.mm.yy",
      },
   },
];
