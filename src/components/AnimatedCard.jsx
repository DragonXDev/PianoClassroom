import React from 'react';
import { useSpring, animated } from 'react-spring';

function AnimatedCard({ title, content }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 50 }
  }));

  return (
    <animated.div
      className="mx-auto w-full max-w-2xl md:max-w-3xl lg:max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-2xl mb-12 cursor-pointer transform"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: [(y - window.innerHeight / 2) / 100, -(x - window.innerWidth / 2) / 100, 1.025] })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate((x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`)
      }}
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-lg">{content}</p>
    </animated.div>
  );
}

export default AnimatedCard;
