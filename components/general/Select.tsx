type Option = {
  value: string;
  label: string;
};

interface SelectProps {
  id: string;
  defaultValue?: string;
  bgColor?: string;
  textColor?: string;
  title: string;
  options: Option[];
}

function Select({
  id,
  defaultValue,
  bgColor = "bg-[#F3f3f3]",
  textColor = "text-[#585858]",
  title,
  options,
}: SelectProps) {
  return (
    <select
      id={id}
      aria-label={title}
      defaultValue={defaultValue ?? "default"}
      className={` ${bgColor} ${textColor} font-dinProMedium text-[16px] leading-[140%] rounded-lg focus:ring-primary focus:border-primary block w-[150px] px-[13px] py-[6px]`}
    >
      <option value="default" disabled>
        {title}
      </option>
      {options.map((option, ind) => (
        <option key={`option-${ind + 1}`} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
