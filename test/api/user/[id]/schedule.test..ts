import { CourseBlock, Schedule, User } from "@prisma/client";
import { testApiHandler } from "next-test-api-route-handler";
import { prismaMock } from "../../../singleton";
import handler from "../../../../pages/api/user/[id]/schedule";

describe("/api/user/[id]/schedule", () => {
  it("should return the user", async () => {
    const courseBlock1 = {
      id: "1",
      courseSectionID: "1",
    } as CourseBlock;
    const courseBlock2 = {
      id: "2",
      courseSectionID: "2",
    } as CourseBlock;
    const courseSection = {
      id: "3",
      blocks: [courseBlock1, courseBlock2],
    };
    const sched = {
      id: "4",
      courseSectionIDs: ["3"],
      courses: [courseSection],
    } as Schedule;
    await testApiHandler<User | null>({
      handler,
      paramsPatcher: (params) => (params.id = "4"),
      test: async ({ fetch }) => {
        prismaMock.schedule.findFirst.mockResolvedValue(sched);
        const res = await fetch();
        expect(res.status).toBe(200);
        expect(res.json()).resolves.toStrictEqual(sched);
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
