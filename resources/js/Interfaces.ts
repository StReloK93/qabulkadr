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
   attr?: Record<string, string | number | boolean | { label: string; value: number }[]>;
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

export type IEducationLevel = IQuotType
