import { data } from '../const/data';

const CommonProducts = () => {
  return (
    <div className="flex flex-wrap justify-center">
        {data.map((elem, id) => (
          <div
            key={id}
            className="relative w-[340px] h-[340px] mx-2 mb-6 hover:text-white"
          >
            <div className="absolute w-full flex justify-center items-center top-4  ">
              <p className="logo font-semibold z-50 ">{elem.name}</p>
            </div>
            <img
              src={elem.src}
              alt={elem.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => navigate(elem.to)}
              className="absolute inset-0 flex items-center justify-center
              bg-gray-800 text-white opacity-0 hover:opacity-80 transition-opacity duration-200"
            >
              Explore →
            </button>
          </div>
        ))}
      </div>
  )
}

export default CommonProducts