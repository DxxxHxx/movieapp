import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { menu } from "../../constants";
import MenuItems from "./MenuItems";
import { HiDotsVertical } from "react-icons/hi";
export default function Header() {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => setToggle((prev) => !prev);
  return (
    <div className="flex justify-between items-center p-5">
      <div className="flex items-center gap-8">
        <img
          src={logo}
          alt="logo img"
          className="w-[80px] md:w-[115px] object-cover"
        />
        <div className=" gap-8 hidden lg:flex">
          {menu.map((item) => (
            <MenuItems key={item.name} name={""} Icon={item.Icon} />
          ))}
        </div>
        <div className=" gap-8 flex lg:hidden">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <MenuItems key={item.name} name={""} Icon={item.Icon} />
              )
          )}
          <div className="lg:hidden" onClick={handleChangeToggle}>
            <MenuItems name="" Icon={HiDotsVertical} />
            {toggle && (
              <div className="absolute flex flex-col gap-y-2 rounded-lg mt-3 border-gray-600 bg-black border p-3 px-5">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <MenuItems
                        key={item.name}
                        name={item.name}
                        Icon={item.Icon}
                      />
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-10 h-10 bg-white hidden lg:block rounded-full"></div>
    </div>
  );
}
