"use client"

import AuthContainer from "../containers/AuthContainer"
import Heading from "../general/Heading"
import Input from "../general/Input"
import Button from "../general/Button"

const RegisterClient = () => {
  return (
    <AuthContainer>
      <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
        <Heading text="Register" center />
        <Input placeholder="Name" type="text" id="name" register={register} errors={errors} required />
        <Input placeholder="Email" type="text" id="email" register={register} errors={errors} required />
        <Input placeholder="Password" type="password" id="password" register={register} errors={errors} required />
        <div>OR</div>
        <Button text="Sign up with Google" outline onClick={() => { }} />
      </div>
    </AuthContainer>
  )
}

export default RegisterClient
