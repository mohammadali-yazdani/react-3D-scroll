import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg px-8 py-12">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityThirdSection, setOpacityThirdSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(1 - scroll.range(1 / 3, 1 / 3));
    setOpacityThirdSection(1 - scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-poppins text-2xl">
            Hello, I'm Mohammad Ali
          </h1>
          <p className="text-gray-500">Welcome to my portfolio</p>
          <p className="mt-3">I know:</p>
          <ul className="leading-9">
            <li>💻 How to code</li>
            <li>👨‍🎓 How to learn</li>
            <li>📦 How to deliver</li>
            <li>⚙️ How to develop systems</li>
          </ul>
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-poppins text-2xl">
            Here are my skillsets 🔥
          </h1>
          <p className="text-gray-500">PS: I always test my work!</p>
          <p className="mt-3">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9">
            <li>ReactJS</li>
            <li>VueJS</li>
            <li>Next.js</li>
            <li>Nuxt.js</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap 5</li>
            <li>Three.js (Basic knowledge)</li>
          </ul>
          <b>Backend 🔬</b>
          <ul className="leading-9">
            <li>NodeJS (Basic knowledge)</li>
            <li>FastAPI (Basic knowledge)</li>
          </ul>
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section opacity={opacityThirdSection}>
          <h1 className="font-semibold font-poppins text-2xl">
            🤙 Call me maybe?
          </h1>
          <p className="text-gray-500">
            I strive to deliver high-quality work, and I'm confident you’ll be
            satisfied with the results.
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞 <a href="tel:+989162881431">+989162881431</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
