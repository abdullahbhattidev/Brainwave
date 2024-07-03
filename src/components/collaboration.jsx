import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import {LeftCurve, RightCurve} from './design/Collaboration'
const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>
          <ul className="max-w-[24rem] mb-10 md:mb-14">
            {collabContent.map((items, id) => (
              <li key={id} className="mb-3 py-3">
                <div className="flex items-center">
                  <img src={check} alt={check} width={24} height={24} />
                  <h6 className="body-2 ml-5">{items.title}</h6>
                </div>
                {items.text && (
                  <p className="body-2 text-n-4 mt-3">{items.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it now!</Button>
        </div>
        <div className="relative lg:ml-auto xl:w-[38rem] mt-5">
          <p className="body-2 text-n-4 mb-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          <div className="flex  relative w-[22rem] left-1/2 aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex m-auto  w-60 aspect-square border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    alt="brainwave"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
            </div>
            <div className="absolute animate-spin-slow w-[22rem] aspect-square rounded-full">
              <ul>
                {collabApps.map((apps, index) => (
                  <li
                    key={index}
                    className={`absolute -top-[1.6rem] left-[9.5rem] h-[12.5rem]  origin-bottom rotate-${
                      index * 45
                    } `}
                  >
                    <div
                      className={` flex w-[3.2rem]  h-[3.2rem] border border-n-1/15 rounded-xl bg-n-7 -rotate-${
                        index * 45
                      }`}
                    >
                      <img
                        className="m-auto"
                        src={apps.icon}
                        alt={apps.icon}
                        width={apps.width}
                        height={apps.height}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <LeftCurve/>
            <RightCurve/>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
