function InputTextarea({
  name,
  className,
  placeholder,
  onChange,
  defaultValue,
  ref,
}) {
  return (
    <textarea
      id={name}
      name={name}
      className={
        "bg-grayscale-20 text-body3 font-regular border-brown-40 placeholder:text-grayscale-40 resize-none rounded-lg border-solid p-16 focus:border focus:p-15 focus:outline-none " +
        className
      }
      placeholder={placeholder}
      defaultValue={defaultValue}
      ref={ref}
      onChange={onChange}
    />
  );
}

export default InputTextarea;
