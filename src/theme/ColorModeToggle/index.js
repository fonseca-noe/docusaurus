import React from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { translate } from '@docusaurus/Translate';
import IconLightMode from '@theme/Icon/LightMode';
import IconDarkMode from '@theme/Icon/DarkMode';
import styles from './styles.module.css';

function ColorModeToggle({ className, value, onChange }) {
  const isBrowser = useIsBrowser();
  const isDark = value === 'dark';

  const title = translate(
    {
      message: 'Switch between dark and light mode (currently {mode})',
      id: 'theme.colorToggle.ariaLabel',
      description: 'The ARIA label for the navbar color mode toggle',
    },
    {
      mode: isDark
        ? translate({
            message: 'dark mode',
            id: 'theme.colorToggle.ariaLabel.mode.dark',
          })
        : translate({
            message: 'light mode',
            id: 'theme.colorToggle.ariaLabel.mode.light',
          }),
    }
  );

  return (
    <label className={clsx(styles.switch, className)} title={title}>
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => onChange(isDark ? 'light' : 'dark')}
        disabled={!isBrowser}
        aria-label={title}
      />
      <span className={styles.slider}>
        <span className={styles.icon}>
          {isDark ? <IconDarkMode /> : <IconLightMode />}
        </span>
      </span>
    </label>
  );
}

export default React.memo(ColorModeToggle);
