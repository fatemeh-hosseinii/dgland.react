import { useForm } from "react-hook-form";
import Icon from "react-icons-kit";
import { phone } from "react-icons-kit/fa/phone";
import { lock } from "react-icons-kit/fa/lock";
import { Link } from "react-router-dom";
const LastLogin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log("Form Data:", data);
    return ( <>
    <div className="flex flex-row justify-center w-[100%] mt-3 ">
        <div className=" w-[35%] flex flex-col items-center justify-center">
            <p className="font-bold text-[20px] text-[#585858] mb-4">ورود</p>
            <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full p-4 rounded-lg" action="">
               
                <div className="bg-[#fffefe] p-2 px-4 flex gap-2 rounded-full shadow-md">
                    <Icon className="text-[#8e8c8c]" size={18} icon={phone} />
                    <input
                    type="text"
                    {...register("phone", { 
                    required: "شماره تلفن همراه خود را وارد کنید", 
                    pattern: {
                        value: /^09[0-9]{9}$/,
                        message: "شماره موبایل معتبر نیست",
                    }
                    })}
                    placeholder="شماره تلفن همراه"
                    className="outline-none w-full text-gray-600 text-sm"
                    />
                </div>
                {errors.phone && <p className="text-[red] text-[12px]">{errors.phone.message}</p>}
                <div className="bg-[#fffefe] p-2 px-4 flex gap-2 rounded-full shadow-md">
                    <Icon className="text-[#8e8c8c]" size={19} icon={lock} />
                    <input
                    type="password"
                    {...register("password", { 
                    required: "کلمه‌ی عبور را وارد کنید", 
                    minLength: { value: 8, message: "رمز عبور باید حداقل ۸ کاراکتر باشد" },
                    pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        message: "رمز عبور باید شامل حروف و اعداد باشد",
                    }
                    })}
                    placeholder="کلمه‌ی عبور"
                    className="outline-none w-full text-gray-600 text-sm"
                    />
                </div>
                {errors.password && <p className="text-red-500 text-[12px]">{errors.password.message}</p>}
                <button type="submit" className="bg-[#f63434] text-white p-2 rounded-full hover:bg-red-700">
                    ورود به حساب    
                </button>
            </form>
            <Link to={'/enter'} className="p-2">
                <p className="text-[12px]">حساب کاربری ندارید ؟<span className="text-[red]"> ایجاد کنید</span></p>
            </Link>
        </div>
    </div>
    </> );
}
 
export default LastLogin;