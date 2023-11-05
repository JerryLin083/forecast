const Option = ({ options, onChange, value }) => {
  return (
    <select
      className="bg-transparent p-2 rounded-lg"
      onChange={onChange}
      value={value}
    >
      {options.map((option, index) => (
        <option key={`option-${index}`}>{option}</option>
      ))}
    </select>
  );
};

export default Option;
