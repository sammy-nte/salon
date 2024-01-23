import AbCards from "../components/AbCards";

function AboutUs() {
  return (
    <section className="">
      <section className="max-w-containerMax mx-auto text-center text-tColor p-3">
        <h1 className="text-2xl py-3 font-[Anton]">
          Dedicated to crafting personalized excellence where passion meets
          expertise.
        </h1>
        <div className="h-[400px] bg-[url('./assets/images/barber.jpg')] bg-cover bg-no-repeat bg-center rounded-2xl w-[70%] mx-auto" />
      </section>
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
