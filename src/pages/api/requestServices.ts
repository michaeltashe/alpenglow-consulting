import dbConnect from "@/src/lib/mongodb";
import ServiceRequest from "@/src/lib/serviceRequest";
import { NextApiRequest, NextApiResponse } from "next";
import nextPWA from "next-pwa";
import sendEmail from "./sendEmail";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const data = req.body;
        
        await dbConnect();

        const test = new ServiceRequest({
            name: data.name,
            email: data.email,
            message: data.message
        })

        await test.save();

        res.status(200).json({message: 'POST received', data })
    } else {
        res.status(405).json({error: 'Method not allowed'})
    }
}