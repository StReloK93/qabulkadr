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
   type: string;
   schema: yup.AnySchema;
   value?: string | number | null;
   attr?: Record<string, string | number | boolean>;
}
