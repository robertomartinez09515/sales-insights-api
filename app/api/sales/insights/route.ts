import { NextRequest, NextResponse } from "next/server";
import { processSalesData } from "@/libs/dataProcessor";
import { generateAISummary } from "@/libs/openAIHelper";
import { validateRequestBody } from "@/libs/validateRequestBody";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validationResponse = await validateRequestBody(body);
    if (!validationResponse.isValid) {
    return NextResponse.json({ error: validationResponse.message, details: validationResponse.details }, { status: 400 });
    }

    const insights = processSalesData(body.sales);
    const aiSummary = await generateAISummary(insights);

    return NextResponse.json({ insights, aiSummary });
  } catch (error) {
    console.error("Error in /api/sales/insights:", error); 
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
