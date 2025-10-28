import { InputText, DatePicker, Select } from "primevue";
import type { IFormInputs } from "@/Interfaces";
import * as yup from "yup";
import axios from "axios";

export const useEmployeInputs = async () => {
   const departments = await axios.get("http://192.168.14.23:3005/api/organization"); // async chaqiriq

   const employeInputs: IFormInputs[] = [
      {
         is: InputText,
         name: "full_name",
         placeholder: "F.I.SH",
         type: "text",
         schema: yup.string().required("To'ldiring"),
      },
      {
         is: DatePicker,
         name: "birth_date",
         placeholder: "Tug'ilgan sana",
         type: "text",
         schema: yup.string().required("To'ldiring"),
         attr: { showIcon: true, iconDisplay: "input" },
      },
      {
         is: InputText,
         name: "education",
         placeholder: "Ma'lumoti",
         type: "text",
         schema: yup.string().required("To'ldiring"),
      },
      {
         is: InputText,
         name: "university",
         placeholder: "Oliy o'quv yurti",
         type: "text",
         schema: yup.string().required("To'ldiring"),
      },
      {
         is: InputText,
         name: "cause_id",
         placeholder: "Ishga qabul qilish uchun asos",
         type: "text",
         schema: yup.string().required("To'ldiring"),
      },
      {
         is: Select,
         name: "organization_id",
         placeholder: "Bo'lim",
         type: "text",
         schema: yup.number().required("To'ldiring"),
         attr: {
            options: departments.data.map((dept: { id: number; fullname: string, shortname: string }) => ({
               label: dept.shortname,
               value: dept.id,
            })),
            optionLabel: "label",
            optionValue: "value",
            showClear: true,
         },
      },
      {
         is: InputText,
         name: "profession",
         placeholder: "Lavozimi",
         type: "text",
         schema: yup.string().required("To'ldiring"),
      },
      {
         is: InputText,
         name: "work_environment",
         placeholder: "Mehnat sharoiti",
         type: "text",
         schema: yup.string().required("To'ldiring"),
      },
      {
         is: InputText,
         name: "phone",
         placeholder: "Telefon raqami",
         type: "text",
         schema: yup.string(),
      },
   ];

   return employeInputs;
};
