"use client";

import Select from "react-select";
import { useState } from "react";
import "./CustomSelect.scss";

// const options = [
//     { value: "cocina", label: "Cocina" },
//     { value: "azulejos", label: "Azulejos" },
//     { value: "pladur", label: "Pladur" },
//     {
//         value: "todo tipo de electricidad: las lámparas, enchufes",
//         label: "Todo tipo de electricidad: las lámparas, enchufes",
//     },
//     {
//         value: "instalación: suelo, paredes, techo",
//         label: "Instalación: suelo, paredes, techo",
//     },
//     { value: "desmontaje de los muebles", label: "Desmontaje de los muebles" },
//     { value: "instalación de los muebles", label: "Instalación de los muebles" },
//     {
//         value: "todo tipo de trabajo de fontanería",
//         label: "Todo tipo de trabajo de fontanería",
//     },
//     {
//         value: "desmontaje: suelo, paredes, techo",
//         label: "Desmontaje: suelo, paredes, techo",
//     },
//     { value: "todos tipos de hormigón", label: "Todos tipos de hormigón" },
//     { value: "todo tipo de pintura", label: "Todo tipo de pintura" },
//     { value: "otro", label: "Otro" },
// ];

export const CustomSelect = ({setNewData, placeholder, options}) => {
  const [currentSelect, setCurrentSelect] = useState("");
  const isMulti = false;

    const getValue = () => {
        if (currentSelect) {
            return isMulti ? options.filter((item) => currentSelect.indexOf(item.value) >= 0) : options.find((item) => item.value === currentSelect);
        } else {
            return isMulti ? [] : "";
        }
    };

  const onChange = (newValue) => {
    setCurrentSelect(
      isMulti ? newValue.map((item) => item.value) : newValue.value
      );
    setNewData({ service: newValue.value});
  };
  return (
    <Select
      classNamePrefix="customSelect"
      options={options}
      value={getValue()}
      placeholder={placeholder}
      isSearchable={false}
      onChange={onChange}
    />
  );
};
