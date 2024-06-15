import { producttionHouseList } from "../../constants";

export default function ProductionHouse() {
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {producttionHouseList.map((item) => (
        <div
          className="border-2 shadow-xl shadow-black relative z-0 bg-gray-800 cursor-pointer   hover:scale-110 transition-all duration-200 rounded-lg border-gray-600"
          key={item.id}
        >
          <video
            src={item.video}
            className="absolute top-0 left-0 opacity-0 hover:opacity-60 z-0 rounded-lg"
            autoPlay
            loop
            playsInline
            muted
          ></video>
          <img src={item.image} className="w-full  z-20" alt="productionImg" />
        </div>
      ))}
    </div>
  );
}
