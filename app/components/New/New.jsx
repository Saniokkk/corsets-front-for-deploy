//components
import { Button, Cards, Container, Title } from "@/shared";

//styles
import s from "./New.module.scss";

//image
import imgEl from "../../../public/example.png";

const data = [
  { img: imgEl, title: "Name of the dress", price: 100 },
  { img: imgEl, title: "Name of the dress", price: 100 },
  { img: imgEl, title: "Name of the dress", price: 100 },
  { img: imgEl, title: "Name of the dress", price: 100 },
  { img: imgEl, title: "Name of the dress", price: 100 },
  { img: imgEl, title: "Name of the dress", price: 100 },
  { img: imgEl, title: "Name of the dress", price: 100 },
  { img: imgEl, title: "Name of the dress", price: 100 },
  { img: imgEl, title: "Name of the dress", price: 100 },
];

export const New = () => {
  const limitedData = data.slice(0, 3);

  return (
    <section className={s.new}>
      <Container className={s.container}>
        <Title className={s.title} tag="h2">
          new collection
        </Title>
        <Cards data={limitedData} />
        <div className={s.wrapperButton}>
          <Button additional="arrow-right">See all collection</Button>
        </div>
      </Container>
    </section>
  );
};
