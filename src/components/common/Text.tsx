import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

type TitleProps = {
  children: ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

export function Title({ className, children, ...rest }: TitleProps) {
  return (
    <h2 className={classNames(className, 'text-h3 sm:text-h1')} {...rest}>
      {children}
    </h2>
  );
}

export function BodyText({ className, children, ...rest }: TitleProps) {
  return (
    <p className={classNames(className, 'text-p1')} {...rest}>
      {children}
    </p>
  );
}
