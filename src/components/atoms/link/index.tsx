import { ComponentPropsWithoutRef } from 'react';
import { ExternalLink } from 'lucide-react';

import './styles.css';
import { cn } from '../../../utils/cn-merge';

type LinkProps = ComponentPropsWithoutRef<'a'>;

export function Link({ className, children, target, href, ...rest }: LinkProps) {
  const externalLink = target === '_blank';
  const underConstruction = href === '#';

  return (
    <a
      {...rest}
      target={target}
      className={cn('link', className)}
      data-under-construction={underConstruction}
    >
      {children}
      {externalLink && <ExternalLink size={16} />}
    </a>
  );
}
