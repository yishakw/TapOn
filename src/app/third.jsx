import Image from "next/image";
const third = () => {
  return (
    <section className="mt-11">
      <div className="h-[100vh] flex justfy-between gap-5">
        <div className="w-[200px]">
          <Image
            src="/happy_habesh.jpg"
            alt="habesha girl smiling"
            className="dark:invert "
            width={300}
            height={300}
            priority
          />
        </div>
        {/* <img src="/happy_habesha.jpg" alt="habesha girl smiling" /> */}
        <div>
          <span></span>
          <h1>Fantastic experience</h1>
          <p className="text-[7px] w-[250px]  ">
            Charming Life brings together those who want a better tomorrow in
            one place. Includes life-changing blogs curated by professionals. It
            is the right choice for those who need advice and short training in
            various areas of life, including love and family life, work, and
            spiritual growth. You will have many friends from all over the world
            as you will be presented with a selection of tasty and delicious
            life stories submitted by the audience. We have opened a platform
            for you to share your story with others.
          </p>
        </div>
      </div>
    </section>
  );
};

export default third;
