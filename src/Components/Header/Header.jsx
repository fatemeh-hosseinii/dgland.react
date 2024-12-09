import Header_imge from "../../assets/Media/header_imge.png"
import Navbar from "./Navbar";
import dgland_main_logo from "../../assets/Media/dgland_main_logo.png"
import {search} from 'react-icons-kit/fa/search'
import Icon from "react-icons-kit";
import {ic_login} from 'react-icons-kit/md/ic_login'
import {ic_add_shopping_cart} from 'react-icons-kit/md/ic_add_shopping_cart'
import { Link } from "react-router-dom";
const Header = () => {
    return ( <>
        <div className=" flex flex-col">
        <img src={Header_imge} alt="" />

            <div className="flex lg:flex-col flex-row">
                <div className="flex flex-row  justify-between mt-2 p-4 w-[100%]">
                    <div className="flex flex-row justify-around gap-2 right lg:w-[65%] w-[96%] bg-slate-700  p-2">
                    <Link className="lg:block hidden mt-3 bg-stone-600 lg:bg-black" to={'/'}>
                        <img src={dgland_main_logo} alt="" />
                    </Link>

                        <div class=" lg:w-[75%] w-[90%] bg-[red] p-1 rounded-full  shadow flex  gap-3" >
                            <div class=" lg:w-[52px] lg:h-[32px] w-[40px]  bg-white flex flex-row justify-center items-center rounded-full mt-1 lg:p-2">
                                <Icon className="text-[red] lg:text-[25px] text-[20px]" icon={search}/>
                            </div>
                            <input type="text" class="lg:w-[80%] w-[20%] bg-slate-900 outline-none mt-2 rounded-md "  placeholder="جستوجو..."/>
                            <div class="w-[90%] ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="lg:hidden block mt-3" width="78" height="19" viewBox="0 0 78 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.7065 12.1219V8.65406L23.7003 7.84204V5.01429C23.7003 4.83915 23.6224 4.67993 23.5008 4.57166C23.242 4.34557 22.6465 4.46976 22.316 4.53663C20.6543 4.87418 20.913 6.00464 20.913 8.61903V8.65406V12.0232C20.913 13.1409 21.1032 13.9497 21.4586 14.4242C21.7767 14.8477 22.2661 15.1152 22.9271 15.2267C23.1952 15.2712 23.3636 15.2617 23.6442 15.2617H35.1518C35.4636 15.2617 35.7193 15.0006 35.7193 14.6821V12.1919C35.7193 11.0742 35.5291 10.294 35.1737 9.79089C34.7372 9.26228 33.9983 8.98205 32.9601 8.98205H29.7924C29.7394 8.98205 29.6833 8.98205 29.6022 8.98205C29.5212 8.98205 29.465 8.98205 29.412 8.98205C28.8914 8.98205 28.564 8.89926 28.3738 8.78781C28.0995 8.61903 27.9654 8.25601 27.9654 7.69874C27.9654 7.03002 28.1306 6.60968 28.458 6.38677C28.7043 6.24665 29.1408 6.16386 29.7955 6.16386H33.7676C34.7434 6.16386 34.6655 6.0938 35.0552 6.81348C36.4675 9.41195 37.8518 12.0263 39.3203 14.593C39.7505 15.3445 39.6508 15.2617 40.6703 15.2617H46.7624C47.8006 15.2617 48.5395 14.9815 48.976 14.4242C49.3314 13.9497 49.4967 13.1409 49.4967 12.0232V7.72422C49.4967 6.58102 49.3314 5.79765 48.976 5.32318C48.5395 4.76591 47.8006 4.48568 46.7624 4.48568H43.4295H43.3859H43.3422H43.2986H43.2549H43.2113H43.1676H43.124H43.0803H43.0367H42.993H42.9494H42.9057H42.8621H42.8184H42.7748H42.7311H42.6875H42.6438H42.6002H42.5565H42.5129H42.4692H42.4256H42.3819H42.3383H42.2946H42.251H42.2073H42.1637H42.12H42.0889H42.0452H42.0016H41.9579H41.9143H41.8706H41.827H41.7833H41.7397H41.696H41.6524H41.6087H41.5651H41.5214H41.4778H41.4341H41.3905H41.3468H41.3032H41.2595H41.2221C40.9104 4.48568 40.6547 4.7468 40.6547 5.06524V5.07161V5.1544V5.2372V5.31999V5.40279V5.48558V5.56838V5.65117V5.73397V5.81676V5.89955V5.98235V6.06514V6.0938V9.25273C40.6547 9.90872 41.3157 9.83229 41.7553 9.79089C43.5947 9.61575 43.4139 8.91837 43.4139 7.60321V6.09699H44.9167C45.5714 6.09699 46.011 6.17978 46.2293 6.34855C46.5847 6.5428 46.7468 6.9918 46.7468 7.63187V12.2079C46.7468 12.7938 46.5816 13.1855 46.2293 13.3797C45.983 13.5198 45.5465 13.6026 44.9167 13.6026L41.2065 13.5963C40.636 13.5963 40.6672 13.5676 40.3959 13.0708C38.9368 10.3927 37.5494 7.84204 36.0934 5.16396C35.7598 4.55255 35.6881 4.50479 34.9897 4.50479C34.5532 4.50479 34.2352 4.50479 33.7956 4.50479C31.847 4.50479 29.8984 4.50479 27.9498 4.50479C26.8835 4.50479 26.1478 4.81049 25.7362 5.37094C25.3808 5.84542 25.1906 6.65426 25.1906 7.79746C25.1906 8.88652 25.3808 9.63804 25.7643 10.0297C26.1478 10.3927 26.8835 10.587 27.9498 10.587H31.1206C31.8844 10.587 32.4051 10.7271 32.6233 10.9787C32.8416 11.2016 32.9507 11.7334 32.9507 12.5422V13.0231C32.9507 13.3415 32.6951 13.6026 32.3833 13.6026H25.2031C24.5483 13.6026 24.0776 13.4721 23.8437 13.0358C23.6754 12.7301 23.7065 12.4658 23.7065 12.1219ZM69.2134 15.2076H74.7381C75.8043 15.2076 76.5401 14.9273 76.9517 14.3701C77.3071 13.8956 77.4973 13.0867 77.4973 11.969V7.7274C77.4973 6.5842 77.3071 5.80084 76.9517 5.32636C76.5433 4.76909 75.8043 4.48886 74.7381 4.48886H69.2134C68.9016 4.48886 68.646 4.74999 68.646 5.06843V5.52379C68.646 5.84223 68.9016 6.10336 69.2134 6.10336H72.9079C73.5627 6.10336 74.0023 6.18615 74.2455 6.35492C74.5728 6.54917 74.7381 6.99817 74.7381 7.63824V12.1601C74.7381 12.746 74.5728 13.1377 74.2455 13.3319C73.9992 13.4721 73.5346 13.5549 72.9079 13.5549H69.2134C68.9016 13.5549 68.646 13.816 68.646 14.1344V14.6184C68.646 14.9433 68.9016 15.2044 69.2134 15.2076ZM43.5916 19.0002H43.5043C43.1926 19.0002 42.9369 18.7391 42.9369 18.4206V16.8189C42.9369 16.5004 43.1926 16.2393 43.5043 16.2393H45.0726C45.3843 16.2393 45.64 16.5004 45.64 16.8189V16.908C45.64 18.0512 44.7109 19.0002 43.5916 19.0002ZM63.9693 12.9785V12.988V12.9944C63.96 13.3065 63.7074 13.558 63.4019 13.558H57.0354C56.3495 13.558 55.673 13.6663 55.1772 13.3351C54.8499 13.1409 54.6846 12.7779 54.6846 12.1919V5.01429C54.6846 4.83915 54.6067 4.67993 54.4851 4.57166C54.2263 4.34557 53.6308 4.46976 53.3003 4.53663C51.6386 4.87418 51.8973 6.00464 51.8973 8.61903V11.969C51.8973 13.1122 52.0875 13.8956 52.471 14.3701C52.7984 14.8445 53.372 15.1502 54.192 15.2076H54.6566H57.0323H66.1642C66.476 15.2076 66.7317 14.9464 66.7317 14.628V12.1633C66.7317 11.0455 66.5415 10.2367 66.186 9.76223C65.7496 9.20496 65.0107 8.92473 63.9444 8.92473H60.8017C60.7456 8.92473 60.6926 8.92473 60.6115 8.92473C60.5304 8.92473 60.4462 8.92473 60.4213 8.92473C59.9006 8.92473 59.5483 8.86742 59.3831 8.75596C59.1087 8.56171 58.9747 8.19869 58.9747 7.63824C58.9747 6.99499 59.1399 6.54917 59.4673 6.35492C59.7136 6.18615 60.1501 6.10336 60.8048 6.10336H63.6669H65.6249C65.9366 6.10336 66.1923 5.84223 66.1923 5.52379V5.06843C66.1923 4.74999 65.9366 4.48886 65.6249 4.48886H63.6669H58.9747C57.9084 4.48886 57.1726 4.76909 56.7611 5.32636C56.4056 5.80084 56.2154 6.60967 56.2154 7.75288C56.2154 8.8706 56.4056 9.62212 56.7891 9.98514C57.1726 10.3768 57.9084 10.5711 58.9747 10.5711H62.1454C62.9093 10.5711 63.4019 10.6825 63.6482 10.9341C63.8664 11.1857 63.9756 11.6888 63.9756 12.4976C63.9724 12.6505 63.9724 12.8065 63.9693 12.9785Z" fill="#E10A0A"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.051 0.024679H13.1382C13.45 0.024679 13.7057 0.2858 13.7057 0.60424V2.20599C13.7057 2.52444 13.45 2.78556 13.1382 2.78556H11.57C11.2582 2.78556 11.0026 2.52444 11.0026 2.20599V2.11683C11.0026 0.973631 11.9317 0.024679 13.051 0.024679ZM0.567433 15.262H3.69143H6.09211H7.41716C7.90353 15.262 8.03759 15.2143 8.2683 14.7971C8.38054 14.5933 8.3899 14.5519 8.47719 14.3354C8.52396 14.2176 8.53955 14.5296 8.5489 14.8258C8.56137 15.1729 8.61749 15.2461 8.81079 15.2589H9.11322H9.66194H10.9745C11.1117 15.2589 11.2208 15.262 11.3299 15.2589H14.0736H14.5475H15.3862C15.6636 15.2589 15.8351 15.2684 16.1032 15.2238C16.7673 15.1124 17.2568 14.8449 17.5717 14.4214C17.9271 13.9469 18.1173 13.138 18.1173 12.0203V5.31079V4.57519V3.80775L18.1111 3.40333V0.572396C18.1111 0.397254 18.0331 0.238034 17.9115 0.129764C17.6528 -0.0963284 17.0573 0.0278635 16.7268 0.0947359C15.065 0.432283 15.3238 1.15514 15.3238 3.76954V3.80456V4.57201V5.3076V12.119C15.3238 12.463 15.355 12.7273 15.1866 13.0457C14.984 13.4278 14.6005 13.5743 14.0705 13.6062V13.6125H13.5248C13.6402 13.1826 13.7026 12.6508 13.7026 12.0203V10.1988V9.94728V8.69581L13.6963 7.88378V5.0624C13.6963 4.88726 13.6184 4.72804 13.4968 4.61977C13.238 4.39368 12.6425 4.51787 12.312 4.58474C10.6503 4.92229 10.909 6.05275 10.909 8.66715V8.70218V9.95365V10.2052V12.1222C10.909 12.4661 10.9402 12.7304 10.7719 13.0489C10.5692 13.431 10.1857 13.5775 9.65571 13.6093V13.6157H8.6705C8.78585 13.1858 8.84821 12.654 8.84821 12.0235V7.72456C8.84821 6.58136 8.65802 5.798 8.3026 5.32352C7.89417 4.76625 7.15526 4.48603 6.08899 4.48603H0.567433C0.255656 4.48603 0 4.74715 0 5.06559V5.52096C0 5.8394 0.255656 6.10052 0.567433 6.10052H4.26198C4.91671 6.10052 5.35631 6.18331 5.5995 6.35209C5.92686 6.54634 6.09211 6.99534 6.09211 7.6354V12.2114C6.09211 12.7973 5.92686 13.189 5.5995 13.3832C5.3532 13.5234 4.88865 13.6062 4.26198 13.6062H3.69143H0.567433C0.255656 13.6062 0 13.8673 0 14.1857V14.6697C0 15.0009 0.255656 15.262 0.567433 15.262Z" fill="#E10A0A"></path></svg>
        
                            </div>
                        </div>   
                    </div>
                    <div class="left lg:w-[35%] w-[30%]  lg:flex hidden flex-row lg:justify-end  gap-3 items-center">
                        <div class="flex flex-row lg:w-[53%] w-[100%] justify-around ">
                            <button class=" border-2 border-solid border-[#f0f0f0] py-1 w-[55%] rounded-md flex justify-between items-center gap-2">
                                <div class="bg-white flex mt-1">
                                <Icon icon={ic_login} size={"25px"} className="text-[red]"/>
                                <span class="text-[13px] font-bold text-[red] mt-1">ورود</span>
                                </div>  
                                            
                                <div class="w-[1%] h-[17px] bg-[red]"></div>
                                <div class="w-[43%] mt-1">
                                <span class="text-[13px] font-bold text-[red] text-bold">ثبت نام</span>
                                </div>
                            </button>
                            <button class="bg-white px-2 rounded-lg border-2 border-solid border-[#dbdbdb]">
                            
                                <Icon className="text-[red]" icon={ic_add_shopping_cart} size={22}/>
                
                            </button>
                        </div>
                    
                        
                    </div>
                    
                </div>
                <div className="flex flex-row justify-between  relative">
                    <Navbar/>
                </div>
            </div>
          
            
        </div>
    </> );
}
 
export default Header;