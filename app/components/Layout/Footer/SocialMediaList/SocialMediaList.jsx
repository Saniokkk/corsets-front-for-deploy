import Link from "next/link";
import { Icon } from "@/shared";

import s from "./SocialMediaList.module.scss";

export const SocialMediaList = () => {
  return (
    <ul className={s.socialMediaList}>
      <li className={s.socialMediaItem}>
        <Link
          className={s.socialMediaLink}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/"
        >
          <Icon className={s.socialMediaIcon} width="40" height="40" name="instagram" />
        </Link>
      </li>
      <li className={s.socialMediaItem}>
        <Link
          className={s.socialMediaLink}
          target="_blank"
          rel="noopener noreferrer"
          href="https://web.telegram.org/"
        >
          <Icon className={s.socialMediaIcon} width="40" height="40" name="telegram" />
        </Link>
      </li>
      <li className={s.socialMediaItem}>
        <Link
          className={s.socialMediaLink}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.tiktok.com/"
        >
          <Icon className={s.socialMediaIcon} width="40" height="40" name="tiktok" />
        </Link>
      </li>
    </ul>
  );
};
