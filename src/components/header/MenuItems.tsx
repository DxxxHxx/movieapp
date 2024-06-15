import { IMenu } from "../../types/interface";

export default function MenuItems({ name, Icon }: IMenu) {
  return (
    <div
      className="flex items-center shrink-0 gap-x-1 text-[18px] cursor-pointer font-semibold hover:underline
    underline-offset-8"
    >
      <Icon />
      <h2>{name}</h2>
    </div>
  );
}
