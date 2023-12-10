"use client"
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import AuthContainer from "../containers/AuthContainer"
import Heading from "../general/Heading"
import Input from "../general/Input"
import Button from "../general/Button"
import { FcGoogle } from "react-icons/fc";

const LoginClient = () => {
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
        <Heading text="Login" center />        
        <Input placeholder="Email" type="text" id="email" register={register} errors={errors} required />
        <Input placeholder="Password" type="password" id="password" register={register} errors={errors} required />
        <Button text="Sign in" onClick={handleSubmit(onSubmit)} />
        <div className="text-center my-2 font-bold text-lg">OR</div>
        <Button text="Sign in with Google" icon={FcGoogle} outline onClick={() => { }} />
      </div>
    </AuthContainer>
  )
}

export default LoginClient

