import { useForm } from "react-hook-form";
import { Icon } from "react-icons-kit";
import { user } from "react-icons-kit/ikons/user";
import { phone } from "react-icons-kit/fa/phone";
import { envelopeO } from "react-icons-kit/fa/envelopeO";
import { lock } from "react-icons-kit/fa/lock";
import { Link } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log("Form Data:", data);
    
    return (
        <div className="bg-[#F6F5F5] w-full mt-3 flex justify-center">
            <div className="w-[35%] rounded-lg p-6 flex flex-col items-center">
                <p className="font-bold text-[20px] text-[#585858] mb-4">عضویت</p>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full p-4 rounded-lg">
                    {/* نام و نام خانوادگی */}
                    <div className="bg-[#fffefe] p-2 px-4 flex gap-2 rounded-full shadow-md">
                        <Icon className="text-[#8e8c8c]" size={18} icon={user} />
                        <input
                            type="text"
                            {...register("username", { 
                                required: "نام و خانوادگی خود را وارد کنید", 
                                maxLength: { value: 20, message: "حداکثر ۲۰ کاراکتر مجاز است" } 
                            })}
                            placeholder="نام و نام خانوادگی"
                            className="outline-none w-full text-gray-600 text-sm"
                        />
                    </div>
                    {errors.username && <p className="text-red-500 text-[12px]">{errors.username.message}</p>}

                    {/* شماره تلفن همراه */}
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
                    {errors.phone && <p className="text-red-500 text-[12px]">{errors.phone.message}</p>}

                    {/* ایمیل */}
                    <div className="bg-[#fffefe] p-2 px-4 flex gap-2 rounded-full shadow-md">
                        <Icon className="text-[#8e8c8c]" size={18} icon={envelopeO} />
                        <input
                            type="text"
                            {...register("email", { 
                                required: "ایمیل خود را وارد کنید", 
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "ایمیل معتبر نیست",
                                }
                            })}
                            placeholder="ایمیل"
                            className="outline-none w-full text-gray-600 text-sm"
                        />
                    </div>
                    {errors.email && <p className="text-red-500 text-[12px]">{errors.email.message}</p>}

                    {/* کلمه‌ی عبور */}
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

                    {/* تکرار کلمه‌ی عبور */}
                    <div className="bg-[#fffefe] p-2 px-4 flex gap-2 rounded-full shadow-md">
                        <Icon className="text-[#8e8c8c]" size={19} icon={lock} />
                        <input
                            type="password"
                            {...register("confirmPassword", {
                                required: "تکرار رمز عبور را وارد کنید",
                                validate: (value) =>
                                    value === watch("password") || "رمز عبور و تکرار آن یکسان نیستند",
                            })}
                            placeholder="تکرار کلمه‌ی عبور"
                            className="outline-none w-full text-gray-600 text-sm"
                        />
                    </div>
                    {errors.confirmPassword && <p className="text-red-500 text-[12px]">{errors.confirmPassword.message}</p>}
                    <div className="p-2">
                        <p className="text-[12px] text-[#BBBBBB]">حداقل 8 کاراکتر، شامل حروف بزرگ، حروف کوچک و عدد باشد</p>

                    </div>
                    {/* دکمه ارسال */}
                    <button type="submit" className="bg-[#f63434] text-white p-2 rounded-full hover:bg-red-700">
                        ارسال
                    </button>
                    <Link to={'/auth/enter'} className="p-2">
                        <p className="text-[12px]">قبلا عضو شده اید ؟ <span className="text-[red]">وارد شوید</span></p>
                    </Link>
                   
                </form>
            </div>
        </div>
    );
};

export default Login;
