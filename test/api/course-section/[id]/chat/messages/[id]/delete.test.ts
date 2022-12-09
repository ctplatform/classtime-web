import { Message, User } from "@prisma/client";
import { testApiHandler } from "next-test-api-route-handler";
import { prismaMock } from "../../../../../../singleton";
import handler from "../../../../../../../pages/api/course-section/[id]/chat/messages/[id]";

describe("/api/user/[id]", () => {
  it("should return the user", async () => {
    const id = "my_user_id";
    const user = {
      id,
      firstName: "First",
      lastName: "Last",
    } as User;
    await testApiHandler<User | null>({
      handler,
      paramsPatcher: (params) => (params.id = id),
      test: async ({ fetch }) => {
        prismaMock.user.findFirst.mockResolvedValue(user);
        const res = await fetch();
        expect(res.status).toBe(200);
        expect(res.json()).resolves.toStrictEqual(user);
      },
    });
  });

  it("should return null", async () => {
    const id = "my_user_id";
    await testApiHandler<User | null>({
      handler,
      paramsPatcher: (params) => (params.id = id),
      test: async ({ fetch }) => {
        prismaMock.user.findFirst.mockResolvedValue(null);
        const res = await fetch();
        expect(res.status).toBe(200);
        expect(res.json()).resolves.toBeNull();
      },
    });
  });
});
