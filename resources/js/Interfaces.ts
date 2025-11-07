import type { Component } from "vue";
import * as yup from "yup";
export interface IUser {
   name: string;
   login: string;
   role: number;
}

export interface IFormInputs {
   is: Component;
   name: string;
   placeholder: string;
   schema: yup.AnySchema;
   value?: string | number | null | boolean;
   withLabel?: boolean;
   notColumn?: boolean;
   notInput?: boolean;
   columnName?: string;
   parentClass?: string[];
   attr?: Record<string, string | number | boolean | { label: string; value: number }[]>;
   generateAttributes?: () => Promise<void>;
}

export interface IOrganization {
   id: number;
   name: string;
   shortname: string;
}

export interface IQuotType {
   id: number;
   name: string;
}

export type IEducationLevel = IQuotType;

export interface IEmploye {
   id?: string | number;
   full_name: string;
   birth_date: string;
   education_level_id: number;
   education_level: IQuotType;
   university: string;
   cause_id: number;
   cause: IQuotType;
   cause_text: string | null;
   organization_id: number;
   organization: IOrganization;
   division: string | null;
   profession: string;
   work_environment_id: number;
   phone: string | null;
   company: boolean;
   disability_type_id: number | null;
   quot_type_id: number | null;
   status_id: number;
   status: IQuotType;
   created_at: string;
}
