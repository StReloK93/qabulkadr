import { Checkbox, SelectButton, MultiSelect } from "primevue";
import type { IEducationLevel, IFilterInputs } from "@/Interfaces";
import { api } from "@/helpers/useFetch";
import * as yup from "yup";
import { selectOption } from "./CrudConfig";

const baseEmployeFilters = <IFilterInputs[]>[
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
      generateAttributes: async function () {
         const { data } = await api.get<IEducationLevel[]>(`crud/work_environment/all`);
         this.attr = selectOption(data, "name");
      },
   },
   {
      is: SelectButton,
      name: "status_id",
      placeholder: "",
      parentClass: ["mb-1!"],
      value: 1,
      generateAttributes: async function () {
         const { data } = await api.get<IEducationLevel[]>(`crud/status/all`);
         this.attr = { ...selectOption(data, "name"), multiple: true };
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
      schema: yup.number().nullable(),
      generateAttributes: async function () {
         const { data } = await api.get<IEducationLevel[]>(`crud/disability_type/all`);
         this.attr = selectOption(data, "name", true);
      },
   },
   {
      is: MultiSelect,
      name: "quot_type_id",
      placeholder: "Kvota yo'nalishlari",
      schema: yup.number().nullable(),
      generateAttributes: async function () {
         const { data } = await api.get<IEducationLevel[]>(`crud/quot_type/all`);
         this.attr = selectOption(data, "name", true);
      },
      parentClass: ["mb-0!"],
   },
];

export const filterConfig = {
   employes: {
      inputs: baseEmployeFilters,
   },
   finished_employes: {
      inputs: baseEmployeFilters,
   },
};
