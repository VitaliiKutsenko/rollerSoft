import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { DebounceInputWrapper } from "@src/components/debounceInput/debounceInputStyled";
import { debounce } from "@src/helpers/debounce";
import { useQueryClient } from "react-query";
import { UserModels } from "@src/models/userModels";
import { ReactComponent as Cross } from "@assets/svg/cross.svg";

interface DebounceInputProps {
  data: UserModels[];
}
const errors: UserModels = {
  id: 9999,
  name: "Не найдено",
  username: "",
  email: "Не найдено",
  address: {
    zipcode: "",
    suite: "",
    street: "",
    city: "",
    geo: { lat: "", lng: "" },
  },
  phone: "",
  website: "",
  company: { name: "Не найдено", bs: "", catchPhrase: "" },
};
export const DebounceInput: FC<DebounceInputProps> = ({ data }) => {
  const queryClient = useQueryClient();
  const [inputValue, setInputValue] = useState("");
  const dataRef = useRef(data);
  const [isMutate, setIsMutate] = useState<boolean>(false);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue((prev) => inputValue);
  };
  useEffect(() => {
    if (inputValue.trim().length > 2) {
      const debounceFilter = debounce(() => {
        const filteredData = data.filter((item, index, array) => {
          if (
            item.name.toLowerCase().includes(inputValue.toLowerCase()) ||
            item.email.toLowerCase().includes(inputValue.toLowerCase()) ||
            item.company.name.toLowerCase().includes(inputValue.toLowerCase())
          )
            return item;
        });
        queryClient.setQueryData(
          "userList",
          filteredData.length === 0 ? [errors] : filteredData
        );
        setIsMutate(true);
      }, 500);

      debounceFilter();
    } else {
      isMutate && queryClient.setQueryData("userList", dataRef.current);
    }
  }, [inputValue]);
  return (
    <DebounceInputWrapper>
      <input
        placeholder="Введите имя или email"
        type="text"
        value={inputValue}
        onChange={inputHandler}
      />
      <button
        onClick={() => {
          setInputValue("");
        }}
      >
        <Cross />
      </button>
    </DebounceInputWrapper>
  );
};
