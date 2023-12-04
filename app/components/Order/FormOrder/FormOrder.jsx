"use client";

//library
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import cn from "classnames";

//components
import { CustomSelect } from "./CustomSelect";

//email function
// import { sendEmail } from "@/utils/sendEmail";

//styles
import s from "./FormOrder.module.scss";
import { Text } from "./../../../../shared/Text/Text";

const productOptions = [
  { value: "name new", label: "Name New" },
  { value: "corsets name", label: "Corsets Name" },
  { value: "dresses name1", label: "Dresses Name1" },
  { value: "dresses name2", label: "Dresses Name2" },
  { value: "dresses name3", label: "Dresses Name3" },
  { value: "dresses name3", label: "Dresses Name3" },
  { value: "dresses name3", label: "Dresses Name3" },
];
const categoryOptions = [
  { value: "name new", label: "Name New" },
  { value: "corsets name", label: "Corsets Name" },
  { value: "dresses name1", label: "Dresses Name1" },
  { value: "dresses name2", label: "Dresses Name2" },
  { value: "dresses name3", label: "Dresses Name3" },
];

export const FormOrder = () => {
  const el = useRef(null);
  const [categoryData, setCategoryData] = useState({});
  const [productData, setProductData] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeShipping, setActiveShipping] = useState("Ukraine");

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail(formData).then(() => {
      setModalVisible(true);
    });
  };

  useEffect(() => {}, []);

  const onChangeInput = (event) => {
    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   [event.target.name]: event.target.value,
    // }));
    // console.log(formData);
  };

  //using animation true(one) and false(always) when you see this el in viewport
  const isInView = useInView(el, {
    once: true,
  });

  return (
    <>
      <div className={s.wrapship}>
        <Text
          size="xs"
          className={cn(s.text, { [s.active]: activeShipping === "Ukraine" })}
          onClick={() => setActiveShipping("Ukraine")}
        >
          Shipping within Ukraine
        </Text>
        <Text
          size="xs"
          className={cn(s.text, { [s.active]: activeShipping === "World" })}
          onClick={() => setActiveShipping("World")}
        >
          Shipping overseas
        </Text>
      </div>
      <form
        ref={el} //style animation
        style={{
          transform: isInView ? "none" : "translateX(100%)",
          opacity: isInView ? 1 : 0,
          transition:
            "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.05s, opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.05s",
        }}
        className={s.form}
        onSubmit={handleSubmit}
      >
        <CustomSelect
          placeholder={"Category"}
          options={categoryOptions}
          setNewData={(value) => setCategoryData({ ...formData, ...value })}
        />{" "}
        <CustomSelect
          options={productOptions}
          placeholder={"Product"}
          setNewData={(value) => setProductData({ ...formData, ...value })}
        />
        <div className={s.inputWrap}>
          <input
            className={cn(s.input, s.number)}
            type="phone"
            name="phone"
            placeholder=" "
            onChange={onChangeInput}
            id="phone"
          />
          <label className={cn(s.label)} for="phone">
            Phone number
            {/* <span className={s.inputRequire}>*</span> */}
          </label>
        </div>
        <div className={s.inputWrap}>
          <input
            className={cn(s.input, s.name)}
            type="text"
            name="name"
            placeholder=" "
            onChange={onChangeInput}
            id="name"
          />
          <label className={cn(s.label)} for="name">
            Full name
          </label>
        </div>
        {activeShipping === "Ukraine" ? (
          <>
            <div className={s.inputWrap}>
              <input
                className={cn(s.input, s.location)}
                type="text"
                name="location"
                placeholder=" "
                onChange={onChangeInput}
                id="location"
              />
              <label className={cn(s.label)} for="location">
                City
              </label>
            </div>
            <div className={s.inputWrap}>
              <input
                className={cn(s.input, s.address)}
                type="text"
                name="Address"
                placeholder=" "
                onChange={onChangeInput}
                id="address"
              />
              <label className={cn(s.label)} for="address">
                Address
              </label>
            </div>
          </>
        ) : (
          <>
            <div className={s.inputWrap}>
              <input
                className={cn(s.input, s.location)}
                type="text"
                name="full_address"
                placeholder=" "
                onChange={onChangeInput}
                id="full_address"
              />
              <label className={cn(s.label)} for="full_address">
                Full shipping address
              </label>
            </div>
            <div className={s.inputWrap}>
              <input
                className={cn(s.input, s.address)}
                type="text"
                name="Address"
                placeholder=" "
                onChange={onChangeInput}
                id="address"
              />
              <label className={cn(s.label)} for="address">
                State/Province and zip/post code
              </label>
            </div>
          </>
        )}
        <button className={s.submitBtn} type="submit">
          Book
        </button>
      </form>
    </>
  );
};
