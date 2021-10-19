import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>form test</h2>

      <form className="  p-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="block  p-1"
          type="text"
          placeholder="First Name"
          name="firstName"
          {...register("firstName", {
            required: "First name is a required field my bitches!",
          })}
        />
        {/* errors in the form validation  */}
        {errors.firstName && <p>{errors.firstName.message}</p>}
        <input
          className="block  p-1"
          type="text"
          placeholder="Last Name"
          name="lastName"
          {...register("lastName", { required: true })}
        />

        <input
          className="block  p-1"
          type="text"
          placeholder="Email"
          name="email"
          {...register("email", { required: true })}
        />
        <input
          className="block  p-1"
          type="password"
          placeholder="Password"
          name="password"
          {...register("password", { required: true })}
        />
        <input
          className="block rounded-xl  bg-gray-800 text-white p-4"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Form;
