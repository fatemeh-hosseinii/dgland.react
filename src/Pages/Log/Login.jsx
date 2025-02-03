import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className="bg-red-500 w-full mt-3 flex justify-center">
            <div className="container bg-slate-600 w-[40%] rounded-lg p-6 flex flex-col items-center">
                <p className="font-bold text-[20px] text-white mb-4">عضویت</p>
                <div className="bg-pink-300 w-full p-4 rounded-lg">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                       

                        <label className="text-black font-semibold">

                        </label>

                        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">
                            ارسال
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
