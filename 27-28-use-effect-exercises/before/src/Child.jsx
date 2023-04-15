import { useState, useEffect } from "react";

export function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [documentTitle, setDocumentTitle] = useState(document.title);

  useEffect(() => console.log("**Render"));
  useEffect(() => {
    console.log("**HI");
    return () => {
      console.log("**Bye");
    };
  }, []);
  // 上述是方程里套方程。而不是并列
  useEffect(
    () =>
      console.log("**My name is " + name + "and I am" + age + "years old**"),
    [name, age]
  );
  useEffect((documentTitle) => setDocumentTitle({ name }), [name]);
  // so far, document.title not changed. have to look for answer. However, others working propeplly
  useEffect(() => {
    // setTimeout(function () {
      console.log(name);
    }, 1000);
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge((a) => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge((a) => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  );
}
