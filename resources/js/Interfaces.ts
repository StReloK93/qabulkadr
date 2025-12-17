import type { Component } from "vue";
import * as yup from "yup";

export type CrudKey =
   | "finished_employes"
   | "employes"
   | "organization"
   | "disability_type"
   | "cause"
   | "work_environment"
   | "education_level"
   | "yoriqnoma"
   | "rahbar"
   | "quot_type"
   | "status"
   | "suhbat";

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

export interface IFilterInputs {
   is: Component;
   name: string;
   placeholder: string;
   schema: yup.AnySchema;
   value?: string | number | null | boolean;
   withLabel?: boolean;
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
   full_name: string;
   birth_date: string;
   education_level: IQuotType;
   university: string;

   organization: IOrganization;
   division: string | null;

   profession: string;
   work_environment: IQuotType;
   phone: string | null;
   created_at: string;
   creater: { id: number; name: string };

   cause: IQuotType;
   cause_text: string | null;
   company: boolean;
   status: IQuotType;
   disability_type: IQuotType;
   quot_type: IQuotType;

   work_environment_id: number;
   organization_id: number;
   education_level_id: number;
   disability_type_id: number | null;
   quot_type_id: number | null;
   status_id: number;
   cause_id: number;
   id?: string | number;

   buyruq_sanasi: string | null;
   buyruq_raqami: string | null;
   ishga_qabul_kuni: string | null;
}

export interface IPaginator {
   current_page: number;
   data: any[];
   first_page_url: URL;
   from: number;
   last_page: number;
   last_page_url: URL;
   next_page_url: URL | null;
   path: URL;
   per_page: number;
   prev_page_url: URL | null;
   to: number;
   total: number;
}

export interface ISuhbat {
   name: string;
   cause: string;
   profession: string;
   organization_id: string;
   organization: IOrganization;
   creater: IUser;
   creater_id: number;
}
