"use client";

//hooks and library
import { useState, useEffect } from "react";
import cn from "classnames";

//component
import Image from "next/image";

//styles
import s from "./Card.module.scss";
import { Text, Title } from "@/shared";

export const Card = ({ data }) => {
  const [hovered, setHovered] = useState(false);

  const img = data.attributes.card_gallery_images.data;

  return (
    <li className={cn(s.item)}>
      <Image
        // className={hovered ? img[1] : img[0]}
        src={`/${img[0].attributes.name}`}
        alt="card image"
        width="325"
        height="402"
      />
      <Title className={s.title} tag="h3">
        {data?.attributes?.name || "No name"}
      </Title>
      <Text size="card">Price: {data.attributes.price}$</Text>
    </li>
  );
};
