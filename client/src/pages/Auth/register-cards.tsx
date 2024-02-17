import AnimatedCard from "@/components/common/animated-card";
const registerCardsData = [
  {
    title: "I am a Student",
    image: "/src/assets/images/student.jpg",
    value: "student",
  },
  {
    title: "I am a Teacher",
    image: "/src/assets/images/teacher.jpg",
    value: "teacher",
  },
  {
    title: "I am a Parent",
    image: "/src/assets/images/parent.jpg",
    value: "parent",
  },
];

const RegisterCards = () => {
  return (
    <>
      <div>
        <section className="flex min-h-screen flex-wrap items-center justify-center gap-20 bg-red-500 py-10 pb-32 sm:mb-0 sm:flex-col md:flex-row">
          {registerCardsData.map((card, index) => (
            <AnimatedCard
              key={index}
              title={card.title}
              image={card.image}
              value={card.value}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default RegisterCards;
