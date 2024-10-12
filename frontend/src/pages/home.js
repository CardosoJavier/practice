import water from "../assets/img/hero-desktop.png";

export default function Home({ name, age }) {
  return (
    <div>
      <p className="">
        Hello, {name}. You're are {age} years olds
      </p>
    </div>
  );
}
