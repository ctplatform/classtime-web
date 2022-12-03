import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../../prisma/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") return res.status(405).end()

    if (typeof req.query.id !== "string") return res.status(400).end("Invalid Identifier");

    const messages = await prisma.message.findMany({
        where: {chatRoomID: req.query.id},
    });

    res.status(200).json(messages);
}