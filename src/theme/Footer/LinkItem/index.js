import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import * as Icons from 'react-icons/fa'; // Cambiá el set si usás otro (Feather, Material, etc.)

export default function FooterLinkItem({ item }) {
  const {
    to,
    href,
    label,
    prependBaseUrlToHref,
    className,
    customProps,
    ...props
  } = item;

  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });
  const isExternal = href && !isInternalUrl(href);

  const iconComponent =
    customProps?.icon && Icons[customProps.icon]
      ? React.createElement(Icons[customProps.icon], {
          style: { marginRight: 6, verticalAlign: 'middle' },
          size: 16,
        })
      : null;

  const linkContent = (
    <>
      {iconComponent}
      {label}
    </>
  );

  if (href) {
    return (
      <Link
        className={clsx('footer__link-item', className)}
        href={prependBaseUrlToHref ? normalizedHref : href}
        {...props}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {linkContent}
      </Link>
    );
  }

  return (
    <Link className={clsx('footer__link-item', className)} to={toUrl} {...props}>
      {linkContent}
    </Link>
  );
}
