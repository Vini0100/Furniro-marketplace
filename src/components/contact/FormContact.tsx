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
        subject: formattedErrors.subject?._errors[0],
        message: formattedErrors.message?._errors[0],
      });
    }
  };

  return (
    <form
      className="font-poppins px-[3.25rem] py-16 text-base w-full flex flex-col gap-9"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-5">
        <label htmlFor="name" className="font-medium">
          Your name
        </label>
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
      </div>
      <div className="flex flex-col gap-5">
        <label htmlFor="email" className="font-medium">
          Email address
        </label>
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
      </div>
      <div className="flex flex-col gap-5">
        <label htmlFor="subject" className="font-medium">
          Subject
        </label>
        <input
          type="text"
          className="border border-customGray outline-none rounded-md py-4 px-8"
          name="subject"
          id="subject"
          placeholder="This is optional"
          value={formData.subject}
          onChange={handleChange}
        />
        {errors.subject && <p className="text-customRed">{errors.subject}</p>}
      </div>
      <div className="flex flex-col gap-5">
        <label htmlFor="message" className="font-medium">
          Message
        </label>
        <textarea
          className="border border-customGray outline-none rounded-md py-4 px-8"
          name="message"
          id="message"
          placeholder="Hi! I'd like to ask about"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="text-customRed">{errors.message}</p>}
      </div>
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
