interface Props {
  type: string;
  name: string;
  value: string;
  label: string;
  onChange(): Event;
}

const InputField = ({ type, name, value, onChange, label }: Props) => {
  return (
    <>
      <label htmlFor={name}></label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default InputField;
