//styles
import { Title } from '@/shared/Title/Title';
import s from './Hero.module.scss';
import { Container, Button } from '@/shared';

export const Hero = () => {
    return (
        <section className={s.hero}>
            <Container className={s.container}>
                <Title tag="h1" className={s.title}>We sew according
                    to your wishes,
                    to your rules</Title>
                <Button additional="arrow-right">Order now</Button>
            </Container>
        </section>
    )
}
