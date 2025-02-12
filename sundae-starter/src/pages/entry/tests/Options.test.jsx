import { render, screen } from "@testing-library/react";

import { Options } from "../Options";

test("displays image for each scoop from the server", async () => {
  render(<Options optionType="scoops" />);

  // find the images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop/i }); // In this case it's an alt text of the image
  expect(scoopImages).toHaveLength(2);

  //confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
