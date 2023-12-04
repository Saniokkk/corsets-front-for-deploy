'use client'

//library
import Link from "next/link";
import { useEffect, useState } from "react";
import cn from 'classnames';

//components
import { Container } from "@/shared/Container/Container";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";

//logo
import logo from '@/public/logo.png'

//styles
import s from "./Header.module.scss";
import Image from "next/image";
import { Navigation } from "@/shared/Navigation/Navigation";

export const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    window.scrollY > 10 ? setScrolling(true) : setScrolling(false);
  }

  useEffect(() => {
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <header className={cn(s.header, {
      [s.scroll]: scrolling,
    })}>
      <Container>
        <div className={s.wrapper}>
          <Link href="/" className={s.logo}>
            <Image width="233" height="58" src={logo} alt="Logo" />
          </Link>
          <BurgerMenu />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};
