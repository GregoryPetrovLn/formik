import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "./Input";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  newsletter: boolean;
  gender: string;
  age: number;
}

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  newsletter: false,
  gender: "",
  age: 18,
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be at least 8 characters"),
  newsletter: Yup.boolean(),
  gender: Yup.string().required("Required"),
  age: Yup.number()
    .required("Required")
    .min(18, "Must be at least 18 years old"),
});

const FormComponent = () => {
  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <Form>
          <Input
            name="firstName"
            type="text"
            label="First Name"
            id="firstName"
            errors={errors}
            touched={touched}
          />

          <Input
            name="lastName"
            type="text"
            label="Last Name"
            id="lastName"
            errors={errors}
            touched={touched}
          />

          <Input
            name="email"
            type="email"
            label="Email Address"
            id="email"
            errors={errors}
            touched={touched}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            id="password"
            errors={errors}
            touched={touched}
          />

          <Input
            name="newsletter"
            type="checkbox"
            label="Sign up for our newsletter"
            id="newsletter"
            errors={errors}
            touched={touched}
          />

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Gender</label>
            <div className="flex items-center">
              <div className="mr-4">
                <Field type="radio" name="gender" id="male" value="male" />
                <label htmlFor="male" className="block text-gray-700 font-bold">
                  Male
                </label>
              </div>
              <div>
                <Field type="radio" name="gender" id="female" value="female" />
                <label
                  htmlFor="female"
                  className="block text-gray-700 font-bold"
                >
                  Female
                </label>
              </div>
            </div>
            {errors.gender && touched.gender && (
              <div className="text-red-500 mt-1">{errors.gender}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
              Age
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="range"
              min="18"
              max="100"
              name="age"
              id="age"
              value={values.age}
              onChange={(event) =>
                setFieldValue("age", parseInt(event.target.value))
              }
            />
            <div className="text-gray-700">{values.age} years old</div>
            {errors.age && touched.age && (
              <div className="text-red-500 mt-1">{errors.age}</div>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
