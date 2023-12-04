//library and hooks
import { revalidateTag } from "next/cache";
import { getCorsets } from "@/services/api";

//components
import { Button, Cards, Container, Title } from "@/shared";

//styles
import s from "./Corsets.module.scss";

export const Corsets = async () => {
  const result = await getCorsets();
  const data = result
    .sort((a, b) => {
      return (
        Number(new Date(b.attributes.updatedAt)) -
        Number(new Date(a.attributes.updatedAt))
      );
    })
    .slice(0, 3);

  return (
    <section className={s.new}>
      <Container className={s.container}>
        <Title className={s.title} tag="h2">
          corsets
        </Title>
        <Cards data={data} />
        <div className={s.wrapperButton}>
          <Button additional="arrow-right">See all collection</Button>
        </div>
      </Container>
    </section>
  );
};
