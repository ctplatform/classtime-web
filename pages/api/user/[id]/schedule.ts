import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") return res.status(405).end();

  if (typeof req.query.id !== "string")
    return res.status(400).end("Invalid Identifier");

  const founduser = await prisma.user.findFirst({
    where: { id: req.query.id },
  });

  const sched = await prisma.schedule.findFirst({
    where: { user: founduser },
  });

  if (!sched) {
    return res.status(400).end();
  }

  const courseSectionIDs = sched.courseSectionIDs;
  var blocks = new Array();

  for (let i = 0; i < courseSectionIDs.length; i++) {
    const courseBlock = await prisma.courseBlock.findFirst({
      where: { id: courseSectionIDs[i] },
    });
    blocks.push(courseBlock);
  }

  res.status(200).json(blocks);
}
