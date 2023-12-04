//components
import { Container, Title, Text, Icon } from "@/shared";

//styles
import s from "./Terms.module.scss";

const data = [
  {
    number: "01",
    text: (
      <>
        All orders are shipped <br />
        on a first-come, <br />
        first-served basis.
      </>
    ),
    icon: "refresh",
  },
  {
    number: "02",
    text: (
      <>
        The turnaround time is about
        <br /> 10-15 working days.
      </>
    ),
    icon: "clock",
  },
  {
    number: "03",
    text: (
      <>
        Express tailoring:
        <br /> 5 working days, provided that
        <br /> all materials are in stock
        <br /> (+30% to the cost)
      </>
    ),
    icon: "check",
  },
  {
    number: "04",
    text: (
      <>
        In the case when there are
        <br /> many orders,
        <br /> please be advised
        <br /> of potential further delays.
      </>
    ),
    icon: "hurt",
  },
];

export const Terms = () => {
  return (
    <section className={s.terms}>
      <Container className={s.container}>
        <Title tag="h2" className={s.title}>
          terms
        </Title>
        <ul className={s.list}>
          {data.map((el, i) => (
            <li key={i} className={s.item}>
              <Text size="number" className={s.number}>
                {el.number}
              </Text>
              <Text size="card" className={s.text}>
                {el.text}
              </Text>
              <Icon
                className={s.icon}
                width={el.icon === "hurt" ? "29" : "24"}
                height={el.icon === "hurt" ? "30" : "24"}
                name={el.icon}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
