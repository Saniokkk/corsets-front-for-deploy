//components
import { Icon } from '../Icon/Icon';

//styles
import s from "./Button.module.scss";
import cn from "classnames";

export const Button = ({ className, children, additional, ...props }) => {
    return (
        <button
            className={cn(s.button, className)}
            {...props}
        >
            {children}
            {additional && <Icon width="24" height="24" name={additional} className={s.icon} />}
        </button>
    );
};
