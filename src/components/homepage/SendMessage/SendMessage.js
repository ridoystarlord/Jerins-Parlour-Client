import React from "react";
import { Container } from "react-bootstrap";
import "./SendMessage.css";
import { useForm } from "react-hook-form";

const SendMessage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Container fluid className="bg-hero-banner py-5">
      <h1 className="text-center mb-5 fw-bold">
        Let us handle your
        <br />
        project, professionally.
      </h1>
      <div className="w-75 mx-auto d-flex justify-content-center send-message-body">
        <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-100">
            <input
              className="mx-2 p-3 border-0 send-message-input rounded"
              placeholder="First Name"
              {...register("firstname", { required: true })}
            />
            {errors.exampleRequired && <span>First Name is required</span>}
            <input
              className="mx-2 p-3 border-0 mt-md-0 mt-3 send-message-input rounded"
              placeholder="Last Name"
              {...register("lastname", { required: true })}
            />
            {errors.exampleRequired && <span>Last Name is required</span>}
          </div>
          <div className="mt-3 w-100">
            <input
              className="mx-2 p-3 border-0 send-message-input rounded"
              placeholder="Email Address"
              {...register("email", { required: true })}
            />
            {errors.exampleRequired && <span>Email Address is required</span>}
            <input
              className="mx-2 p-3 border-0 mt-md-0 mt-3 send-message-input rounded"
              placeholder="Phone Number"
              {...register("phone", { required: true })}
            />
            {errors.exampleRequired && <span>Phone Number is required</span>}
          </div>
          <div className="mt-3 text-area">
            <textarea
              placeholder="Your Message"
              className="border-0 p-3 w-100 mx-2 rounded"
              id="w3review"
              name="w3review"
              rows="10"
              cols="50"
            ></textarea>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <input
              className="bg-button border-0 py-1 rounded px-3 text-white"
              value="Send Message"
              type="submit"
            />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default SendMessage;
