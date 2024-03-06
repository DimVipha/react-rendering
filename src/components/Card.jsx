import { Card } from 'flowbite-react';

function Component() {
  return (
    <div className="flex justify-center">
      <Card className="max-w-sm flex flex-col justify-center w-[95%] ml-5 mb-5 mt-5 mr-5" imgSrc="https://4.imimg.com/data4/GJ/RO/GLADMIN-140939/wireless-computer-250x250.jpg" >
        <h5 className="flex justify-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          PC
        </h5>
        <p className="flex justify-center font-normal text-gray-700 dark:text-gray-400">
          &#11088;&#11088;&#11088;&#11088;&#11088;
        </p>
        <p className="flex justify-center font-normal text-gray-700 dark:text-gray-400">
          Best Computer Ever
        </p>
      </Card>
    </div>
  );
}
export default Component;