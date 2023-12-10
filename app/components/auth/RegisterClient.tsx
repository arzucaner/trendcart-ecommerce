"use client"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import AuthContainer from "../containers/AuthContainer"
import Heading from "../general/Heading"
import Input from "../general/Input"
import Button from "../general/Button"
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const RegisterClient = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>()

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }
  return (
    <AuthContainer>
      <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
        <Heading text="Register" center />
        <Input placeholder="Name" type="text" id="name" register={register} errors={errors} required />
        <Input placeholder="Email" type="text" id="email" register={register} errors={errors} required />
        <Input placeholder="Password" type="password" id="password" register={register} errors={errors} required />
        <Button text="Sign Up" onClick={handleSubmit(onSubmit)} />
        <div className="text-center my-2 text-small text-red-500">If you have registered before <Link className="underline" href="/login">Click here</Link></div>
        <div className="text-center my-2 font-bold text-lg">OR</div>
        <Button text="Sign Up with Google" icon={FcGoogle} outline onClick={() => { }} />
      </div>
    </AuthContainer>
  )
}

export default RegisterClient
