import { useRef } from "react";

function Form() {
  const ref = useRef(null);
  const handleSubmit = () => console.log(ref.current.value);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={ref} />
      </form>
    </>
  );
}

export default Form;
