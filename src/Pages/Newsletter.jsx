import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";
export const action = async ({ request }) => {
  const submitData = await request.formData();
  const data = Object.fromEntries(submitData);
  try {
    const response = await axios.post(newsletterUrl, data);

    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const Newsletter = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form className='form' method='POST'>
      <h4 style={{ marginBottom: "2rem", alignItems: "center" }}>
        Our Newsletters
      </h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          Name:
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className='form-input'
          required
        />
      </div>
      <div className='form-row'>
        <label htmlFor='lastName' className='form-label'>
          Last Name:
        </label>
        <input
          type='text'
          name='lastName'
          id='lastName'
          className='form-input'
          required
        />
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          email:
        </label>
        <input
          type='text'
          name='email'
          id='email'
          className='form-input'
          defaultValue='test@test.com'
          required
        />
      </div>
      <button
        className='btn btn-block'
        type='submit'
        style={{ marginTop: "0.5rem" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "submitting" : "submit"}
      </button>
    </Form>
  );
};
export default Newsletter;
