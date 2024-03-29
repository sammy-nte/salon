import { Link } from "react-router-dom";
import SalonCareCards from "../components/SalonCareCards";
import {
  BraidsSvg,
  HairCutSvg,
  HairDyeSvg,
  NailSvg,
  NavSvg,
  WigSvg
} from "../components/Svgs";

function Home() {
  return (
    <section>
      <section className="bg-oColor w-full">
        <div className="max-w-containerMax flex flex-col justify-around items-center mx-auto lg:flex-row">
          <div className="flex flex-col items-center max-w-[500px] text-center lg:text-left lg:block mx-4">
            <h2 className="font-semibold text-3xl pt-5 ">
              Where Elegance Meets Radiance: Your Beauty, Our Passion!
            </h2>
            <p className="font-light pt-5">
              Step into our oasis of style, where skilled stylists bring
              precision and flair to redefine your look. From chic cuts to
              vibrant colors, we specialize in crafting hairstyles that reflect
              your unique radiance. Elevate your beauty at our salon – where
              every detail enhances your natural charm.
            </p>
            <a href="https://theguyhair.as.me/" target="_blank" className="">
              <button className="h-8 rounded-md bg-borderColor w-44 capitalize my-5 text-white font-medium hover:scale-105 transition-all">
                Book an appointment
              </button>
            </a>
          </div>
          <div className="hidden lg:block h-[500px] w-[300px] bg-[url('../public/assets/images/pexels.jpg')] bg-no-repeat bg-cover bg-center rounded-full my-5 relative after:content[' '] after:absolute after:w-full after:h-full after:border-4 after:rounded-full after:left-4" />
        </div>
      </section>
      <section className="max-w-[800px] mx-auto mt-8 rounded-lg">
        <h3 className="text-center text-3xl capitalize font-medium text-tColor p-5 font-[Anton]">
          At Your Command: What's Your Desire?
        </h3>
        <section className="w-full grid grid-cols-1 mx-auto gap-4 place-items-center sm:grid-cols-2 lg:grid-cols-3">
          <SalonCareCards svg={<HairCutSvg width="50px" />} text="hair cuts" />
          <SalonCareCards svg={<BraidsSvg width="50px" />} text="braids" />
          <SalonCareCards
            svg={<NailSvg width="50px" />}
            text="nail treatment"
          />
          <SalonCareCards svg={<HairDyeSvg width="50px" />} text="dyes" />
          <SalonCareCards svg={<WigSvg width="50px" />} text="wig treatment" />
          <SalonCareCards text="many more" />
        </section>
      </section>
      <section className="w-[90%] p-3 lg:max-w-containerMax mx-auto lg:bg-borderColor mt-11 flex flex-col items-center justify-around rounded-2xl lg:flex-row">
        <img
          src="./assets/images/barber.jpg"
          alt="barbering tools"
          width="400px"
          className="rounded-xl my-5 lg:my-8"
        />
        <div className="text-center text-tColor px-5 relative lg:w-[60%] lg:border-l-2 border-oColor lg:pl-5 lg:text-left">
          <p className="font-light">Who are we?</p>
          <div className="lg:w-[78%]">
            <h3 className="font-medium text-4xl font-[Anton] py-2 lg:py-4 lg:w-[70%] lg:pl-11">
              Hair Loom at your service since 2023
            </h3>
            <p className="font-light lg:pl-11">
              Crafting timeless styles since 2023, Hair Loom is at your service,
              turning visions into reality. Step into a world where expertise
              meets elegance, and let your hair tell the story of your unique
              beauty.
            </p>
          </div>
          <Link to="about">
            <button className="mx-auto mt-2 w-[150px] rounded-md h-7 font-light border-2 block lg:hover:bg-oColor transition hover:font-medium lg:absolute lg:right-0 lg:mt-3">
              More about us
            </button>
          </Link>
        </div>
      </section>
      <section className="text-tColor max-w-[890px] mx-auto mt-20">
        <h3 className="text-center p-4 text-3xl font-[Anton]">
          We work around your week! Seven days of service, always here for you.
        </h3>
        <table className="w-[80%] mx-auto lg:w-full">
          <tr>
            <td className="td">
              <p>Mon</p>
              <p>08:30 - 9:00</p>
            </td>
            <td className="td">
              <p>Tue</p>
              <p>08:30 - 9:00</p>
            </td>
            <td className="td">
              <p>Wed</p>
              <p>08:30 - 9:00</p>
            </td>
            <td className="td">
              <p>Thu</p>
              <p>08:30 - 9:00</p>
            </td>
            <td className="td">
              <p>Fri</p>
              <p>08:30 - 9:00</p>
            </td>
            <td className="td">
              <p>Sat</p>
              <p>08:30 - 9:00</p>
            </td>
            <td className="td">
              <p>Sun</p>
              <p>02:00 - 9:00</p>
            </td>
          </tr>
        </table>
      </section>
      <section className="mt-20 w-[90%] max-w-[1200px] mx-auto bg-oColor rounded-2xl flex flex-col items-center justify-around sm:flex-row">
        <div className="w-full flex flex-wrap justify-around gap-2 my-5 sm:w-[400px]">
          <img
            className="rounded-2xl"
            src="./assets/images/barber.jpg"
            alt=""
            width="140px"
          />
          <img
            className="rounded-2xl"
            src="./assets/images/barber.jpg"
            alt=""
            width="140px"
          />
          <img
            className="rounded-2xl"
            src="./assets/images/barber.jpg"
            alt=""
            width="140px"
          />
        </div>
        <div className="w-[100%] text-center py-2 text-tColor px-2 sm:w-[60%] sm:text-left sm:py-0">
          <h3 className="text-3xl font-[Anton]">Enjoy our awesome snapshoot</h3>
          <p className="py-2 font-[Sevillana] text-xl">
            Indulge in the magic of fleeting moments with our captivating
            snapshots.
          </p>
          <Link to="gallery">
            <button className="w-28 h-8 border-2 rounded-md mt-3 hover:bg-borderColor hover:font-medium transition-all">
              See More
            </button>
          </Link>
        </div>
      </section>
      <section className="text-center mt-20">
        <h3 className="text-tColor font-[Anton] text-2xl px-5">
          Seeking our price huh? Don't worry—here's a PDF for your convenience.
        </h3>
        <a href="./assets/images/pexels.jpg" download>
          <button className="button">
            <span className="button_lg">
              <span className="button_sl" />
              <span className="button_text">Download Now</span>
            </span>
          </button>
        </a>
      </section>
      <section className="flex flex-col w-[90%] justify-evenly items-center my-24 mx-auto max-w-containerMax border-borderColor border-2 p-6 rounded-2xl lg:flex-row">
        <div className="flex flex-col items-center">
          <h3 className=" text-tColor text-center font-[Anton] text-2xl p-5">
            Curious about our location? No problem—navigate to our Google link
            for easy directions
          </h3>
          <NavSvg width="300px" />
          <a href="https://maps.app.goo.gl/yCnm9rPs5SBpZQ8k6" target="_blank">
            <button className="button">
              <span className="button_lg">
                <span className="button_sl !bg-oColor" />
                <span className="button_text">Find Us</span>
              </span>
            </button>
          </a>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.431350241404!2d-0.1987993252713294!3d5.650567332692033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7ebaeabe93%3A0xd78257e67498c1a0!2sUniversity%20of%20Ghana!5e0!3m2!1sen!2sgh!4v1706044826839!5m2!1sen!2sgh"
          loading="eager"
          referrerpolicy="no-referrer-when-downgrade"
          className="h-[400px] w-[80%] lg:w-[400px]"
        />
      </section>
    </section>
  );
}

export default Home;
