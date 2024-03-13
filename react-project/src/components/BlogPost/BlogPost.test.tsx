import { vi, describe, expect, it } from "vitest";
import BlogPost from "./BlogPost";
import BlogPostModel from "../../models/BlogPostModel";
import { render, screen, fireEvent } from "@testing-library/react";

const blogPost: BlogPostModel = {
  id: "1",
  title: "Title",
  content: "Content",
  description: "Description",
  date: "2021-01-01",
};

describe("Blogpost", () => {
  it("Renders the BlogPost", async () => {
    render(<BlogPost onClick={() => {}} post={blogPost} />);

    const button = await screen.findByText("Lesen");

    screen.getByText("Title");
    screen.getByText("Content");
    screen.getByText("Description");
    screen.getByText("2021-01-01");

    expect(button.className.includes("primary")).equal(true);
  });

  it("OnClick BlogPost", async () => {
    const onClick = vi.fn();

    render(<BlogPost onClick={onClick} post={blogPost} />);

    const button = await screen.findByText("Lesen");
    fireEvent.click(button);

    expect(onClick).toBeCalledTimes(1);
  });
});
