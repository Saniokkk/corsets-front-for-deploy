//components
import { Container, Text, Title } from "@/shared";

//styles
import s from "./Note.module.scss";

const data = [
  {
    text: (
      <>
        If measurements are not done
        <br className={s.enter} /> correctly and consequently not
        <br className={s.enter} /> according to the size of the sewn
        <br className={s.enter} /> product, our store will not be
        <br className={s.enter} /> responsible.
      </>
    ),
  },
  {
    text: (
      <>
        Altering and hemming - is not included
        <br className={s.enter} /> in the price of the product. There is a
        <br className={s.enter} /> separate charge for this.
      </>
    ),
  },
  {
    text: (
      <>
        The product is altered at the expense of
        <br className={s.enter} /> our store only in case of defect or
        <br className={s.enter} /> inconsistency of the selected model.
      </>
    ),
  },
  {
    text: (
      <>
        If you change the fabric, style or color
        <br className={s.enter} /> of the product,
        <br className={s.enter} /> our store will not responsible for the
        <br className={s.enter} /> result.
      </>
    ),
  },
];

export const Note = () => {
  return (
    <section className={s.note}>
      <Container>
        <Title className={s.title} tag="h2">
          Note
        </Title>
        <Text size="xs" className={s.preText}>
          Please read the instructions carefully before taking measurements.
        </Text>
        <ul className={s.list}>
          {data.map((el, i) => (
            <li key={i}>
              <Text size="card">{el.text}</Text>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
