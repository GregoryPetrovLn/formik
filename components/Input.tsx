import { Field } from "formik";
import { FC } from "react";

interface Props {
  name: string;
  type: string;
  label: string;
  id: string;
  errors: any;
  touched: any;
}

const Input: FC<Props> = ({ name, type, label, id, errors, touched }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={id}>
        {label}
      </label>

      <Field
        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        name={name}
        id={id}
      />

      {errors[name] && touched[name] && (
        <div className="text-red-500 mt-1">{errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
