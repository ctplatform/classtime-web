import { Message, User } from "@prisma/client";
import { testApiHandler } from "next-test-api-route-handler";
import { prismaMock } from "../../singleton";
import handler from "../../../pages/api/user/[id]";

describe("/api/course-section/[id]/chat/[send]", () => {
  it("it should return nothing/ a success status", async () => {
    const id = "my_user_id";
    const user = {
      id,
      firstName: "First",
      lastName: "Last",
    } as User;
    const message = {
      authorId: user.id,
      chatRoomId: "my_chatroom_id",
      content: "This is a message! ",
    } as Message;
    await testApiHandler<Message | null>({
      handler,
      paramsPatcher: (params) => (params.id = id),
      test: async ({ fetch }) => {
        prismaMock.user.findFirst.mockResolvedValue(message);
        const res = await fetch();
        expect(res.status).toBe(200);
        expect(res.json()).resolves.toStrictEqual(message);
      },
    });
  });
});
