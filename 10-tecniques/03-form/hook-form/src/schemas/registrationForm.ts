import * as yup from "yup";
import type { InferType } from "yup";
import { genderCode } from "./constants";

export const regFormSchema = yup.object({
  username: yup.string().required("必須項目です"),

  zipcode: yup
    .string()
    .max(7, "7桁以下で入力してください")
    .matches(/^\d{7}$/, "7桁の数字で入力してください")
    .transform((value) => (value === "" ? undefined : value))
    .notRequired(),

  gender: yup
    .mixed()
    .oneOf([...Object.keys(genderCode), ""], "性別を選択してください")
    .transform((value) => (value === "" ? undefined : value))
    .notRequired(),

  isAgreed: yup.boolean().oneOf([true], "同意が必要です").required(),
});

export type RegFormSchema = InferType<typeof regFormSchema>;
