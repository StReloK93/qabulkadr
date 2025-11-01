import { InputText, DatePicker, Select, Checkbox } from "primevue";
import type { IEducationLevel, IFormInputs, IOrganization } from "@/Interfaces";
import { selectOption } from "@/helpers/StringFunctions";
import { api } from "@/helpers/useFetch";
import * as yup from "yup";

export async function useEmployeInputs() {
   
   const { data: departments } = await api.get<IOrganization[]>(`crud/organizations`);
   const { data: educations } =  await api.get<IEducationLevel[]>(`crud/education_level`);
   const { data: causes } = await api.get<IEducationLevel[]>(`crud/causes`);
   const { data: works }  = await api.get<IEducationLevel[]>(`crud/work_environment`);
   const { data: disabilities } = await api.get<IEducationLevel[]>(`crud/disability_type`);
   const { data: quots } = await api.get<IEducationLevel[]>(`crud/quot_type`);

   const inputs: IFormInputs[] = [
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
         schema: yup.date().required("Kunni tanlang"),
      },
      {
         is: Select,
         name: "education_level_id",
         placeholder: "Ma'lumoti",
         schema: yup.number().required("Tanlang"),
      },
      {
         is: InputText,
         name: "university",
         placeholder: "Oliy o'quv yurti",
         schema: yup.string().required("To'ldiring"),
      },
      {
         is: Select,
         name: "cause_id",
         placeholder: "Ishga qabul qilish uchun asos",
         schema: yup.number().required("Tanlang"),
      },
      {
         is: Select,
         name: "organization_id",
         placeholder: "Bo'lim",
         schema: yup.number().required("Tanlang"),
      },
      {
         is: InputText,
         name: "division",
         placeholder: "Uchastka nomi",
         schema: yup.string(),
      },
      {
         is: InputText,
         name: "profession",
         placeholder: "Lavozimi",
         schema: yup.string().required("To'ldiring"),
      },
      {
         is: Select,
         name: "work_environment_id",
         placeholder: "Mehnat sharoiti",
         schema: yup.number().required("To'ldiring"),
      },
      {
         is: InputText,
         name: "phone",
         placeholder: "Telefon raqami",
         schema: yup.string(),
      },
      {
         is: Checkbox,
         name: "company",
         placeholder: "Korxona hisobidan",
         schema: yup.boolean(),
         withLabel: true,
      },
      {
         is: Select,
         name: "disability_type_id",
         placeholder: "Nogironlik turlari",
         schema: yup.number().nullable(),
      },
      {
         is: Select,
         name: "quot_type_id",
         placeholder: "Kvota yo'nalishlari",
         schema: yup.number().nullable(),
      },
   ];

   const attributes: any[] = [
      null,
      { showIcon: true, iconDisplay: "input", dateFormat: "dd.mm.yy" },
      selectOption(educations, "name"),
      null,
      selectOption(causes, "name"),
      selectOption(departments, "shortname"),
      null,
      null,
      selectOption(works, "name"),
      null,
      { binary: true },
      selectOption(disabilities, "name"),
      selectOption(quots, "name"),
   ];
   attributes


   function fullInputs() {}

   return inputs;
}
