import { Rating } from 'flowbite-react';

function Component() {
  return (
    <>
      <div className="bg-blue-500 p-10 flex flex-col justify-center pl-[30vw]">
        <div className="flex flex-col">
          <Rating className="mb-2">
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
            <p className="ml-2 text-sm font-medium text-black dark:text-gray-400">4.95 out of 5</p>
          </Rating>
          <p className="mb-4 text-sm font-medium text-black dark:text-gray-400">1,745 global ratings</p>
        </div>
        
        <Rating.Advanced percentFilled={70} className="mb-2">
          5 star
        </Rating.Advanced>
        <Rating.Advanced percentFilled={17} className="mb-2">
          4 star
        </Rating.Advanced>
        <Rating.Advanced percentFilled={8} className="mb-2">
          3 star
        </Rating.Advanced>
        <Rating.Advanced percentFilled={4} className="mb-2">
          2 star
        </Rating.Advanced>
        <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
      </div>
    </>
  );
}
export default Component;