import Content from "./Content";

export default function Section() {
  console.log("section rendered");
  return (
    <div>
      <h1>This is a section</h1>
      <Content />
    </div>
  );
}
