import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Link } from ".";

describe('Link Component', () => {
  afterEach(cleanup);

  it('should render with no children elements when `target="_blank" is not set`', () => {
    render(<Link href="#">I'm an anchor</Link>);

    const $link = screen.getByRole<HTMLAnchorElement>('link', { name: /anchor/ });
    expect($link.children).toHaveLength(0);
  });

  it('should render children elements when `target="_blank" is set`', () => {
    render(<Link href="#" target="_blank">I'm an anchor</Link>);

    const $link = screen.getByRole<HTMLAnchorElement>('link', { name: /anchor/ });
    expect($link.children).toHaveLength(1);
  });
});
