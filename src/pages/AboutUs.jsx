import AbCards from "../components/AbCards";

function AboutUs() {
  return (
    <section className="">
        <h1 className="text-2xl p-3 font-[Anton] text-tColor text-center">
          Dedicated to crafting personalized excellence where passion meets
          expertise.
        </h1>
      <AbCards
        text="Born from a shared love for creativity and a commitment to
            personalized service, our shop began its journey with a vision to
            redefine the experience of beauty and style. Drawing inspiration
            from the intersection of passion and expertise, we've curated a
            space where each interaction is a canvas for artistic expression.
            Our story is one of commitment to crafting unique and exceptional
            moments for every individual who walks through our doors."
        heading="our story"
        imgSrc="./assets/images/pexels.jpg"
        bgColor="bg-borderColor"
      />
      <AbCards
        text="At our core, we embody values of creativity, integrity, and
            individuality. We believe in the transformative power of
            personalized service, embracing diversity, and fostering an
            environment where passion converges with expertise. These values
            guide us in our commitment to crafting unique and meaningful
            experiences for each person we serve."
        heading="our value"
        imgSrc="./assets/images/pexels.jpg"
      />
    </section>
  );
}

export default AboutUs;
