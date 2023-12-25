import { DelayedFadeIn } from "@/components/shared/DelayedFadeIn";
import classNames from "@/lib/classNames";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start py-16  mx-[20rem] ">
      <DelayedFadeIn delay={200} className="text-5xl">
        <TypeAnimation
          cursor={false}
          sequence={["Welcome", 500]}
          speed={50}
          repeat={1}
        />
      </DelayedFadeIn>
      <DelayedFadeIn delay={1000} className="text-4xl mt-12 mb-6">
        <TypeAnimation
          cursor={false}
          sequence={[text, 500]}
          speed={60}
          repeat={1}
        />
      </DelayedFadeIn>
      {/* <DelayedFadeIn delay={ 3000 } className={classNames('text-4xl', `mt-12` )}>
            <TypeAnimation
              cursor={false}
              sequence={textArray}
              speed={50}
              repeat={0}
            />
          </DelayedFadeIn> */}
      {textArray1.map((wuji, index) => {
        return (
          <div
            className={classNames(
              "flex flex-col mt-6 items-start justify-start ml-4"
            )}
          >
            <DelayedFadeIn
              delay={getPreviousLengths(index, textArray1, false) * 55 + 3000}
              className={classNames("text-3xl", ``)}
            >
              <TypeAnimation
                cursor={false}
                sequence={[wuji]}
                speed={65}
                repeat={1}
              />
            </DelayedFadeIn>
          </div>
        );
      })}
      <div className="flex justify-start items-center mt-10">
        <DelayedFadeIn
          delay={
            getPreviousLengths(textArray1.length - 1, textArray1, false) * 60 +
            3000
          }
          className="text-4xl ml-4 "
        >
          <TypeAnimation
            cursor={false}
            sequence={["➽ → ⇒ ⇨ ➙ ⟶ ➲ ➱ ↣ ↠"]}
            speed={30}
            repeat={1}
          />
        </DelayedFadeIn>
        <DelayedFadeIn
          delay={
            getPreviousLengths(textArray1.length - 1, textArray1, false) * 60 +
            5000
          }
          noFadeIn={false}
          className="text-3xl ml-2 flex items-center justify-start whitespace-nowrap "
        >

          <input
            type="text"
            name="password"
            placeholder="password"
            className="block text-lg w-full text-start bg-transparent border-b border-white  mx-2  hover:opacity-100 focus:opacity-100 placeholder:text-white focus:border-white text-white ring-0 outline-none outline-0 focus:ring-inset focus:ring-0  sm:leading-6 ml-8"
          />
          <div className="text-white cursor-pointer  transition-all duration-500 hover:scale-105 text-lg ml-2 border-0  border-white flex hover:opacity-100">
            enter ➢
          </div>
        </DelayedFadeIn>
      </div>
    </main>
  );
}

function getPreviousLengths(
  index: number,
  arr: string[],
  includeCurrent: boolean
) {
  return arr.reduce((acc, curr, i) => {
    if (i < index || (i === index && includeCurrent)) {
      return acc + curr.length;
    }
    return acc;
  }, 0);
}

const text = `If you're here, to me, you are any of`;
const text1 = `family`;
const text2 = `one of my closest friends,`;
const text3 = ` one of my closest friends, in the future,`;
const text4 = `a mentor`;
const text5 = `a truly impressive human being,`;
const text6 = `or, a mix of the above...`;
const textArray = [text1, 500, text2, 500, text3, 500, text4, 500, text5];

const text_1 = `family, in some way, shape, or form,`;
const text_2 = `one of my closest friends, along some astral dimension,`;
const text_3 = `of my future self, one of my closest friends, `;
const text_4 = `a mentor,`;
const text_5 = `a truly impressive human being,`;
const text_6 = "a mix of the above...";

const textArray1 = [text_1, text_2, text_3, text_4, text_5, text_6];

// const text = `If you're here, you are someone, who to me, is either `;
// const text1 = `family,`;
// const text2 = `one of my closest friends,`;
// const text3 = `one of my closest friends, in the future,`;
// const text4 = `a mentor,`;
// const text5 = `or,`
// const text6 = `a mix of the above...`;
// const textArray = [text1, text2, text3, text4, text5, text6];

// const text = `If you're here, you are someone, is either `;
// const text1 = `someone who to me, is family...     or`;
// const text2 = `someone who to me, is one of my closest friends...     or`;
// const text3 = `someone who to me, will be a close friend in the future...    or`;
// const text4 = `someone who to me, is a mentor...     or`;
// const text5 = `a mix of all of the above...`;
// const textArray = [text1, text2, text3, text4, text5];

// const text = `If you're here, you are someone who is either `;
// const text1 = `to me, family`;
// const text2 = `a best friend, whom I `;
// const text3 = `a close friend in the future...    or`;
// const text4 = `someone who to me, is a mentor...     or`;
// const text5 = `a mix of all of the above...`;
// const textArray = [text1, text2, text3, text4, text5];
