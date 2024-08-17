import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useCreateStudentMutation } from '../../api/StudentApiSlice';

export const SignUp = () => {
    const[createStudent] = useCreateStudentMutation()
          
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            class: '',
            level: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, 'Name Must be 15 characters or less').min(3,'Name Must be min 3 characters')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .max(30, 'Must be 20 characters or less')
                .required('Required'),
            class: Yup.string().required('Required'),
            level: Yup.string().required('Required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await createStudent(values).unwrap();
                console.log('Student created successfully:', response);
                resetForm();
            } catch (error) {
                console.error('Failed to create student:', error);
            }
        },
    });

    return (
        <>
            <div className="container-fluid w-full h-screen flex justify-center items-center bg-gray-100">
                <div className="container mx-auto bg-white h-4/5 w-1/3 p-4 rounded-md shadow-xl">
                    <div className="text-center font-bold text-2xl pt-5">Interview Form</div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="flex flex-col mt-5 mx-auto w-2/3 mb-2">
                            <input 
                                className="outline-none  p-2 border" 
                                type="text" 
                                placeholder="Name" 
                                {...formik.getFieldProps('name')}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className=" text-red-500 text-sm mt-1">{formik.errors.name}</div>
                            ) : null}
                        </div>
                        <div className="flex flex-col mt-5 mx-auto w-2/3 mb-2">
                            <input 
                                className="outline-none  p-2  border" 
                                type="email" 
                                placeholder="Email" 
                                {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className="flex flex-col mt-5 mx-auto w-2/3 mb-2">
                            <select 
                                className=" outline-none  p-2 border text-gray-500" 
                                id="class" 
                                name="class" 
                                {...formik.getFieldProps('class')}
                            >
                                <option value="" disabled>Class</option>
                                <option value="1st year">1st Year</option>
                                <option value="2nd year">2nd Year</option>
                                <option value="3rd year">3rd Year</option>
                                <option value="1st year diploma">1st Year Diploma</option>
                                <option value="2nd year diploma">2nd Year Diploma</option>
                            </select>
                            {formik.touched.class && formik.errors.class ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.class}</div>
                            ) : null}
                        </div>
                        <div className="flex flex-col mt-5 mx-auto w-2/3 mb-2">
                            <select 
                                className=" outline-none  p-2 border text-gray-500" 
                                id="level" 
                                name="level" 
                                {...formik.getFieldProps('level')}
                            >
                                <option value="" disabled>Level</option>
                                <option value="1A">1A</option>
                                <option value="1B">1B</option>
                                <option value="1C">1C</option>
                                <option value="2A">2A</option>
                                <option value="2B">2B</option>
                                <option value="2C">2C</option>
                            </select>
                            {formik.touched.level && formik.errors.level ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.level}</div>
                            ) : null}
                        </div>
                        <div className="text-center mx-auto w-2/3">
                            <button className="p-1 block w-full bg-custom-bg rounded-md mt-4 text-white" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
