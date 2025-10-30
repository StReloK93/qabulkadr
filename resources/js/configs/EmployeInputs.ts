import { InputText, DatePicker, Select, Checkbox } from "primevue";
import type { IEducationLevel, IFormInputs, IOrganization } from "@/Interfaces";
import * as yup from "yup";
import CrudRepo from "@/repositories/CrudRepo";

export async function useEmployeInputs() {
   const organizationRepo = new CrudRepo("organizations");
   const educationRepo = new CrudRepo("education_level");
   const causeRepo = new CrudRepo("causes");
   const workRepo = new CrudRepo("work_environment");
   const disabilityRepo = new CrudRepo("disability_type");
   const quotRepo = new CrudRepo("quot_type");


   const departments = await organizationRepo.index<IOrganization[]>();
   const educations = await educationRepo.index<IEducationLevel[]>();
   const causes = await causeRepo.index<IEducationLevel[]>();
   const works = await workRepo.index<IEducationLevel[]>();
   const disabilities = await disabilityRepo.index<IEducationLevel[]>();
   const quots = await quotRepo.index<IEducationLevel[]>();

   const employeInputs: IFormInputs[] = [
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
         schema: yup.string().required("Kunni tanlang"),
         attr: { showIcon: true, iconDisplay: "input", dateFormat:"dd.mm.yy" },
      },
      {
         is: Select,
         name: "education",
         placeholder: "Ma'lumoti",
         schema: yup.number().required("Tanlang"),
         attr: {
            options: educations.map((dept: IEducationLevel) => ({
               label: dept.name,
               value: dept.id,
            })),
            optionLabel: "label",
            optionValue: "value",
         },
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
         attr: {
            options: causes.map((dept: IEducationLevel) => ({
               label: dept.name,
               value: dept.id,
            })),
            optionLabel: "label",
            optionValue: "value",
         },
      },
      {
         is: Select,
         name: "organization_id",
         placeholder: "Bo'lim",
         schema: yup.number().required("Tanlang"),
         attr: {
            options: departments.map(
               (dept: { id: number; name: string; shortname: string }) => ({
                  label: dept.shortname,
                  value: dept.id,
               })
            ),
            optionLabel: "label",
            optionValue: "value",
         },
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
         name: "work_environment",
         placeholder: "Mehnat sharoiti",
         schema: yup.number().required("To'ldiring"),
         attr: {
            options: works.map((dept: { id: number; name: string }) => ({
               label: dept.name,
               value: dept.id,
            })),
            optionLabel: "label",
            optionValue: "value",
         },
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
         value: false,
         attr: {
            binary: true
         }
      },
      {
         is: Select,
         name: "disability_type",
         placeholder: "Nogironlik turlari",
         schema: yup.number().nullable(),
         value: null,
         attr: {
            options: disabilities.map((dept: { id: number; name: string }) => ({
               label: dept.name,
               value: dept.id,
            })),
            optionLabel: "label",
            optionValue: "value",
         },
      },
      {
         is: Select,
         name: "quot_type",
         placeholder: "Kvota yo'nalishlari",
         schema: yup.number().nullable(),
         value: null,
         attr: {
            options: quots.map((dept: { id: number; name: string }) => ({
               label: dept.name,
               value: dept.id,
            })),
            optionLabel: "label",
            optionValue: "value",
            showClear: true
         },
      },
   ];

   return employeInputs;
}
