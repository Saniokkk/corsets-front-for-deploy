import s from "./Footer.module.scss";
import { Order } from "../../Order/Order";
import { Container } from "@/shared/Container/Container";
import { Title } from "@/shared";
import { SocialMediaList } from './SocialMediaList/SocialMediaList';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <Title className={s.title} tag="h2">
          order
        </Title>
        <Order />
        <SocialMediaList/>
      </Container>
    </footer>
  );
};
