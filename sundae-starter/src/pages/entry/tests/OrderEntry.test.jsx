import { render, screen, logRoles } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { expect } from "vitest";
import { server } from "../../../mocks/server";

import { OrderEntry } from "../OrderEntry";

test("handle error for scoops and toppings routes", async () => {
  server.resetHandlers(
    http.get("http://localhost:3030/scoops", () => {
      return new HttpResponse(null, { status: 500 });
    }),
    http.get("http://localhost:3030/toppings", () => {
      return new HttpResponse(null, { status: 500 });
    })
  );

  const { container } = render(<OrderEntry />);

  const alerts = await screen.findAllByText(/an unexpected error occurred/i);

  // logRoles(container); //Used for debugging

  expect(alerts).toHaveLength(2);
});
