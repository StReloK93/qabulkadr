import { Checkbox, SelectButton, MultiSelect, DatePicker } from "primevue";
import type { IEducationLevel, IFilterInputs } from "@/Interfaces";
import { api } from "@/helpers/useFetch";
import * as yup from "yup";
import { selectOption } from "./CrudConfig";

const baseEmployeFilters = <IFilterInputs[]>[
   {
      is: DatePicker,
      name: "created_at",
      placeholder: "Kiritilgan vaqt",
      attr: { view: "month", dateFormat: "mm-yy" },
   },
   {
      is: MultiSelect,
      name: "education_level_id",
      placeholder: "Ma'lumoti",
      generateAttributes: async function () {
         const { data } = await api.get<IEducationLevel[]>(`crud/education_level/all`);
         this.attr = selectOption(data, "name");
      },
   },
   {
      is: MultiSelect,
      name: "cause_id",
      placeholder: "Qabul shakli",
      generateAttributes: async function () {
         const { data } = await api.get<IEducationLevel[]>(`crud/cause/all`);
         this.attr = selectOption(data, "name");
      },
   },
   {
      is: MultiSelect,
      name: "organization_id",
      placeholder: "Bo'lim",
      generateAttributes: async function () {
         const { data } = await api.get<IEducationLevel[]>(`crud/organization/all`);
         this.attr = selectOption(data, "name");
      },
   },
   {
      is: MultiSelect,
      name: "work_environment_id",
      placeholder: "Mehnat sharoiti",
      parentClass: ["mb-1.5!"],
      generateAttributes: async function () {
         const { data } = await api.get<IEducationLevel[]>(`crud/work_environment/all`);
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
   },
   {
      is: MultiSelect,
      name: "disability_type_id",
      placeholder: "Nogironlik turlari",
      generateAttributes: async function () {
         const { data } = await api.get<IEducationLevel[]>(`crud/disability_type/all`);
         this.attr = selectOption(data, "name", true);
      },
   },
   {
      is: MultiSelect,
      name: "quot_type_id",
      placeholder: "Kvota yo'nalishlari",
      generateAttributes: async function () {
         const { data } = await api.get<IEducationLevel[]>(`crud/quot_type/all`);
         this.attr = selectOption(data, "name", true);
      },
   },
];

export const filterConfig = {
   employes: {
      inputs: <IFilterInputs[]>[
         ...baseEmployeFilters,
         {
            is: SelectButton,
            name: "status_id",
            placeholder: "",
            parentClass: ["mb-0!"],
            generateAttributes: async function () {
               const { data } = await api.get<IEducationLevel[]>(`crud/status/all`);
               this.attr = { ...selectOption(data, "name"), multiple: true };
            },
         },
      ],
   },
   finished_employes: {
      inputs: baseEmployeFilters,
   },
};
