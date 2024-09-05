import { NextResponse } from "next/server";
import { revalidatePath } from 'next/cache'
import prisma from "@/lib/prisma";

export async function GET(req, { params }) {
    const { id } = params
    try {
        const flower = await prisma.flower.findUnique({
            where: { id }
        });
        return NextResponse.json({
            message: "Flowers found successfully",
            data: flower
        }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Error while fetching flowers"
        }, { status: 501 });
    }
}
export async function PUT(req, { params }) {
    const { id } = params;
    const data = await req.json()

    try {
        const flower = await prisma.flower.findUnique({
            where: { id }
        });
        if (!flower) {
            return NextResponse.json({
                message: "Requested flower not exist",
            }, { status: 401 });
        }
        const updateFlower = await prisma.flower.update({
            where: { id },
            data: data
        })
        return NextResponse.json({
            message: "Flower updated successfully",
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            message: "Error while fetching flowers",
            error: error,
        }, { status: 501 });
    }
}

export async function DELETE(req, { params }) {
    const { id } = params;
    try {

        const updateFlower = await prisma.flower.delete({
            where: { id }
        })
        revalidatePath('/')
        return NextResponse.json({
            message: "Flower deleted successfully",
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            message: "Error while fetching flowers",
            error: error,
        }, { status: 501 });
    }
}
