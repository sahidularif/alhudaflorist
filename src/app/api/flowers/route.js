import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
    const { title, image, price, category, description, section } = await req.json()
    try {

        const newFlowers = await prisma.flower.create({
            data: { title, image, price, category, description, section }
        })
        console.log(newFlowers)
        return NextResponse.json({
            message: "Flowers created",
            data: {
                ...newFlowers
            }
        }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Error",
            error
        }, { status: 500 });
    }
}

export async function GET(req, res) {
    try {
        const flowers = await prisma.flower.findMany()
        return NextResponse.json({
            message: "Flowers found successfully",
            data: [...flowers]
        }, { status: 201 })
    } catch (error) {
        return NextResponse.json({
            message: "Error while fetching flowers",
            error
        }, { status: 500 });
    }
}
export async function DELETE(req, res) {
    const flower_id = req.params.id
    try {
        const flowers = await prisma.user.delete({
            where: {
              id: flower_id,
            },
          })
        return NextResponse.json({
            message: "Flower successfully deleted",
        }, { status: 201 })
    } catch (error) {
        return NextResponse.json({
            message: "Error while deleting flowers",
            error
        }, { status: 500 });
    }
}

