import { Message } from "@prisma/client";
import { testApiHandler } from "next-test-api-route-handler";
import { prismaMock } from "../../../../singleton";
import handler from "../../../../../pages/api/course-section/[id]/chat/messages";

describe ("/api/course-section/[id]/chat/messages", () => {
    it("should return messages", async () => {
        const id = "chatroom_id";
        const messages = {
            id,
            createdAt = 
        } 
        as Message;
        await testApiHandler<Message | null>({
            handler,
            paramsPatcher: (params) => (params.id = id),
            test: async ({ fetch }) => {
            prismaMock.message.findFirst.mockResolvedValueOnce(messages);
            const res = await fetch();
            expect(res.status).toBe(200);
            expect(res.json()).resolves.toStrictEqual(messages);
        },
    });
});
  it("should return null", async () => {
    const id = "chatroom_id";
    await testApiHandler<User | null>({
      handler,
      paramsPatcher: (params) => (params.id = id),
      test: async ({ fetch }) => {
        prismaMock.message.findFirst.mockResolvedValue(null);
        const res = await fetch();
        expect(res.status).toBe(200);
        expect(res.json()).resolves.toBeNull();
      },
    });
  });
});