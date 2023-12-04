//component
import { Card } from "./Card/Card";

//styles
import s from "./Cards.module.scss";

export const Cards = ({ data }) => {
  return (
    <ul className={s.list}>
      {data && data.map((el) => <Card data={el} key={el.id} />)}
    </ul>
  );
};
