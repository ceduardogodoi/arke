import { describe, expect, it } from 'vitest';
import { cn } from './cn-merge'

describe('utils/cn', () => {
  it('should return "class1 class2" when args are "class1", "class2"', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });

  it('should return "class1" when args are "class1", `undefined`', () => {
    expect(cn('class1', undefined)).toBe('class1');
  });

  it('should return "" when args are not provided', () => {
    expect(cn()).toBe('');
  });
})
