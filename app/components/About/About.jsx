
//components
import { Video } from "./Video/Video";
import { Container, Text, Title } from "@/shared";

//styles
import s from "./About.module.scss";

export const About = () => {

    return (
        <section className={s.about}>
            <Container className={s.container}>
                <Title tag="h2" className={s.title}>
                    About brand
                </Title>
                <ul className={s.list}>
                    <li className={s.item}>
                        <Text size="s">
                            Hand crafted and tailored to your measurements.
                            <br className={s.enter} /> Worldwide shipping.
                        </Text>
                    </li>
                    <li className={s.item}>
                        <Text size="s">
                            Brand of explosive corsets and dresses that brings out your
                            femininity.
                        </Text>
                    </li>
                </ul>
                <Video />
            </Container>
        </section>
    );
};
