import { Navbar } from 'flowbite-react';

function Component() {
    return (
        <Navbar fluid rounded className="pt-5 pb-5">
        <Navbar.Brand  href="https://flowbite-react.com">
          <img src="/src/assets/react.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <div className="">
            <ul className="flex flex-row pr-10 text-lg w-[75vh] justify-between transition-all">
              <a href="#"><li>Home</li></a>
              <a href="#"><li>About</li></a>
              <a href="#"><li>Services</li></a>
              <a href="#"><li>Pricing</li></a>
              <a href="#"><li>Contact</li></a>
            </ul>
        </div>
        </Navbar>
    );
}
export default Component;