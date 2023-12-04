import cn from "classnames";
import Link from "next/link";

import s from "./Navigation.module.scss";
import { Text } from "../Text/Text";

const textArray = [
    "About",
    "New",
    "Corsets",
    "Dresses",
    "Terms",
    "Note",
    "Order",
    "Contact us",
];

export const Navigation = ({ className }) => {
    return (
        <ul className={cn(s.list, className)}>
            {textArray.map((el, i) => (
                <li key={i} className={cn(s.item, s.last)}>
                    <Link
                        className={s.link}
                        href={`#${el.toLowerCase().replace(/ /g, "-")}`}
                    >
                        <Text size="nav">{el}</Text>
                    </Link>
                </li>
            ))}
        </ul>
    );
};
