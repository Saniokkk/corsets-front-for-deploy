"use client";

//hooks and library
import { useEffect } from "react";
import { getCorsets } from "@/services/api";

//components
import { Button, Cards, Container, Title } from "@/shared";

//styles
import s from "./Dresses.module.scss";

//image
import imgEl from "../../../public/example.png";
import imgEl2 from "../../../public/example2.png";

// const data = [
//   {
//     img: [imgEl, imgEl2, imgEl, imgEl2],
//     title: "Name of the dress",
//     price: 100,
//   },
//   {
//     img: [imgEl, imgEl2, imgEl, imgEl2],
//     title: "Name of the dress",
//     price: 100,
//   },
//   {
//     img: [imgEl, imgEl2, imgEl, imgEl2],
//     title: "Name of the dress",
//     price: 100,
//   },
//   {
//     img: [imgEl, imgEl2, imgEl, imgEl2],
//     title: "Name of the dress",
//     price: 100,
//   },
//   {
//     img: [imgEl, imgEl2, imgEl, imgEl2],
//     title: "Name of the dress",
//     price: 100,
//   },
//   {
//     img: [imgEl, imgEl2, imgEl, imgEl2],
//     title: "Name of the dress",
//     price: 100,
//   },
//   {
//     img: [imgEl, imgEl2, imgEl, imgEl2],
//     title: "Name of the dress",
//     price: 100,
//   },
//   {
//     img: [imgEl, imgEl2, imgEl, imgEl2],
//     title: "Name of the dress",
//     price: 100,
//   },
//   {
//     img: [imgEl, imgEl2, imgEl, imgEl2],
//     title: "Name of the dress",
//     price: 100,
//   },
// ];

export const Dresses = () => {
  useEffect(() => {
    getCorsets();
  });
  const limitedData = data.slice(0, 3);

  return (
    <section className={s.new}>
      <Container className={s.container}>
        <Title className={s.title} tag="h2">
          dresses
        </Title>
        <Cards data={limitedData} />
        <div className={s.wrapperButton}>
          <Button additional="arrow-right">See all collection</Button>
        </div>
      </Container>
    </section>
  );
};
