import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email adresi giriniz.")
    .required("Email adresi zorunludur."),
  password: yup
    .string()
    .min(8, "Şifre en az 8 karakter olmalıdır.")
    .matches(
      /^(?=.*[A-Z])(?=.*\d).+$/,
      "Şifre en az 1 büyük harf ve sayı içermelidir."
    ),
});
