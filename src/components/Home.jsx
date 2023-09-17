import React from "react";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import developer from "../assets/developer.png";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution of all problems</p>
        </main>
      </div>

      
      <div className="home2">
        <div>
          <img src={developer} alt="developer" />
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          cupiditate rerum, ea quidem praesentium doloribus. Sapiente aperiam
          ipsum accusantium omnis, minus ipsa ipsam commodi aspernatur vitae sit
          aliquid voluptate? Quas.
        </p>
      </div>

      
      <div className="home3" id="about">
        <div>
          <h1>Who we are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis aspernatur est doloremque iure distinctio animi
            numquam, itaque quod sequi rerum eos totam nesciunt praesentium
            atque debitis? Ex odio fuga cumque tempora perferendis omnis
            sapiente, quibusdam a ipsum dolores, tenetur inventore molestias,
            necessitatibus assumenda eaque magnam repellendus non! Labore est
            magnam atque alias similique veniam assumenda qui, nulla accusamus
            eum nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, ducimus nam. Animi architecto aliquam velit nisi minus
            sit repellendus at culpa quasi, nulla in, vel aperiam provident!
            Doloribus, laborum! Dolorum, doloremque! Nesciunt atque delectus
            provident eligendi animi. Incidunt, distinctio autem. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Vel sapiente enim
            facilis, tempore qui saepe voluptas iste quasi explicabo? Unde.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.10s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "0.10s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
