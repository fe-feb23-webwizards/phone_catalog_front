import React from 'react';
import './AboutPhone.scss';

export const AboutPhone: React.FC = () => {
  return (
    <div className="AboutPhone">
      <h2 className="AboutPhone__header">
        About
      </h2>

      <h3 className="AboutPhone__title">
        And then there was Pro
      </h3>

      <p className="AboutPhone__text">
        A transformative triple‑camera system that adds tons of capability
        without complexity.
        <br />
        <br />
        An unprecedented leap in battery life.
        And a mind‑blowing chip that doubles down on machine learning and
        pushes the boundariesof what a smartphone can do.
        Welcome to the first iPhone powerful enough to be called Pro.
      </p>

      <h3 className="AboutPhone__title">
        Camera
      </h3>

      <p className="AboutPhone__text">
        Meet the first triple‑camera system to combine cutting‑edge technology
        with the legendary simplicity of iPhone. Capture up to four times more
        scene. Get beautiful images in drastically lower light. Shoot the
        highest‑quality video in a smartphone — then edit with the same tools
        you love for photos. You’ve never shot with anything like it.
      </p>

      <h3 className="AboutPhone__title">
        Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it.
        Love it.
      </h3>

      <p className="AboutPhone__text">
        iPhone 11 Pro lets you capture videos that are beautifully true
        to life, with greater detail and smoother motion. Epic processing
        power means it can shoot 4K video with extended dynamic range and
        cinematic video stabilization — all at 60 fps. You get more creative
        control, too, with four times more scene and powerful new editing
        tools to play with.
      </p>
    </div>
  );
};
