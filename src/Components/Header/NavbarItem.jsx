import { spinner9 } from "react-icons-kit/icomoon/spinner9";
import { ic_qr_code_twotone } from "react-icons-kit/md/ic_qr_code_twotone";
import { creditCard } from "react-icons-kit/fa/creditCard";
import { book_2 } from "react-icons-kit/ikons/book_2";
import { percent } from "react-icons-kit/fa/percent";
import { location } from "react-icons-kit/oct/location";
import Icon from "react-icons-kit";

const NavbarIteme = ({ navbar }) => {
  const iconMapping = {
    part: <Icon className="text-[#cecece]" icon={ic_qr_code_twotone} size={"26px"} />,
    Installment: <Icon className="text-[#cecece]" icon={creditCard} size={"20px"} />,
    magazine: <Icon className="text-[#cecece]" icon={book_2} size={"20px"} />,
    goldsujest: <Icon className="text-[#cecece]" icon={percent} size={"20px"} />,
    location: <Icon className="text-[#cecece]" icon={location} size={"20px"} />,
    company: <Icon className="text-[#cecece]" icon={spinner9} size={"22px"} />,
  };

  return (
    <div className="flex flex-row justify-around  w-[100%] p-3">
      {navbar?.map((elem) => {
        if (elem.part_navbar) {
    
          return elem.part_navbar.map((item) => (
            <div key={item.id} className=" flex flex-row items-center p-3 gap-3">
              {iconMapping[item.icon] && 
                <span className="w-8 flex justify-center text-[#6B6B6B]">{iconMapping[item.icon]}</span>}
              <p className="text-[#6B6B6B]">{item.name}</p>
            </div>
          ));
        }

        const SelectedIcon = elem.icon ? iconMapping[elem.icon] : null;
        return (
          <div key={elem.id} className=" flex flex-row items-center p-2">
            {SelectedIcon && <span className="w-8 flex justify-center text-[#6B6B6B]">{SelectedIcon}</span>}
            <p className="text-[#6B6B6B]">{elem.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NavbarIteme;
