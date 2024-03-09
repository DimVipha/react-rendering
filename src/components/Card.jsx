import { Card } from 'flowbite-react';

function Component() {
  return (
    <div className="flex justify-center">
      <Card className="max-w-sm flex flex-col justify-center w-[95%] ml-5 mb-5 mt-5 mr-5" imgSrc="https://i.pinimg.com/564x/36/14/91/3614913a0a5208cd329b929ca8a005fb.jpg" >
        <h5 className="flex justify-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          PC
        </h5>
        <p className="flex justify-center font-normal text-gray-700 dark:text-gray-400">
          &#11088;&#11088;&#11088;&#11088;&#11088;
        </p>
        <p className="flex justify-center font-normal text-gray-700 dark:text-gray-400">
          computer for student 
        </p>
      </Card>
    </div>
  );
}
export default Component;