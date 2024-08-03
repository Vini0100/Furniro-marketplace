import { z } from "zod";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(5, "Name must be at least 5 characters"),
  email: z.string().email("Invalid email format"),
  subject: z.string().optional(),
  message: z.string().min(8, "Message must contain at least 8 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const FormContact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (result.success) {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      const formattedErrors = result.error.format();
      setErrors({
        name: formattedErrors.name?._errors[0],
        email: formattedErrors.email?._errors[0],
        message: formattedErrors.message?._errors[0],
      });
    }
  };

  return (
    <form
      className="font-poppins px-[3.25rem] md:py-16 text-base w-full flex flex-col gap-9"
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="font-medium flex flex-col gap-5">
        Your name
        <input
          type="text"
          className="border border-customGray outline-none rounded-md py-4 px-8"
          name="name"
          id="name"
          placeholder="Abc"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-customRed">{errors.name}</p>}
      </label>

      <label htmlFor="email" className="font-medium flex flex-col gap-5">
        Email address
        <input
          type="email"
          className="border border-customGray outline-none rounded-md py-4 px-8"
          name="email"
          id="email"
          placeholder="Abc@def.com"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-customRed">{errors.email}</p>}
      </label>
      <label htmlFor="subject" className="font-medium flex flex-col gap-5">
        Subject
        <input
          type="text"
          className="border border-customGray outline-none rounded-md py-4 px-8"
          name="subject"
          id="subject"
          placeholder="This is optional"
          value={formData.subject}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="message" className="font-medium flex flex-col gap-5">
        Message
        <textarea
          className="border border-customGray outline-none rounded-md py-4 px-8"
          name="message"
          id="message"
          placeholder="Hi! I'd like to ask about"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="text-customRed">{errors.message}</p>}
      </label>
      <button
        className="bg-customGold self-start px-[5.625rem] py-[0.875rem] rounded-md text-white font-normal text-base"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default FormContact;
