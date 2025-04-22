function InputTextarea({ name, className, placeholder, value, setValue }) {
  return (
    <textarea
      id={name}
      name={name}
      className={
        "bg-grayscale-20 text-body3 font-regular border-brown-40 placeholder:text-grayscale-40 resize-none rounded-lg border-solid p-16 focus:border focus:p-15 focus:outline-none " +
        className
      }
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default InputTextarea;
