import { http } from "msw";
export const handlers = [
  http.get("/api/getTodos", (request, response, context) => {
    return response(
      context.status(200),
      context.json([
        { id: 1, todo: "Shop Groceries" },
        { id: 2, todo: "Send the parcels" },
      ])
    );
  }),
];