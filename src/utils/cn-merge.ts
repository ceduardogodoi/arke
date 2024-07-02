export function cn(...classNames: (string | undefined)[]): string {
  return classNames
    .filter((className): className is string => typeof className === 'string')
    .join(' ');
}
