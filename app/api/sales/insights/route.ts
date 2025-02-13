import { NextRequest, NextResponse } from "next/server";
import { processSalesData } from "@/libs/dataProcessor";
import { generateAISummary } from "@/libs/openAIHelper";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!Array.isArray(body.sales)) {
      return NextResponse.json({ error: "Invalid sales data format" }, { status: 400 });
    }

    const insights = processSalesData(body.sales);
    const aiSummary = await generateAISummary(insights);

    return NextResponse.json({ insights, aiSummary });
  } catch (error) {
    console.error("Error in /api/sales/insights:", error); 
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
