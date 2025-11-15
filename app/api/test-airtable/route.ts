import { NextRequest, NextResponse } from "next/server";
import Airtable from "airtable";

/**
 * Simple test endpoint to verify Airtable configuration
 * Visit: /api/test-airtable in your browser
 */
export async function GET(request: NextRequest) {
  try {
    // Check if credentials are configured
    if (!process.env.AIRTABLE_API_TOKEN) {
      return NextResponse.json(
        {
          status: "error",
          message: "AIRTABLE_API_TOKEN is not configured",
          hint: "Generate a token at https://airtable.com/create/tokens",
        },
        { status: 500 }
      );
    }

    if (!process.env.AIRTABLE_BASE_ID) {
      return NextResponse.json(
        {
          status: "error",
          message: "AIRTABLE_BASE_ID is not configured",
          hint: "Get your base ID from https://airtable.com/api",
        },
        { status: 500 }
      );
    }

    if (!process.env.AIRTABLE_TABLE_ID) {
      return NextResponse.json(
        {
          status: "error",
          message: "AIRTABLE_TABLE_ID is not configured",
          hint: "Get your table ID from the Airtable URL",
        },
        { status: 500 }
      );
    }

    // Initialize Airtable
    const airtable = new Airtable({
      apiKey: process.env.AIRTABLE_API_TOKEN,
    });

    const base = airtable.base(process.env.AIRTABLE_BASE_ID);
    const table = base(process.env.AIRTABLE_TABLE_ID);

    // Try to create a test record
    const testRecord = await table.create({
      "Partner 1": "Test",
      "Partner 2": "Partner",
      "Email": "test@example.com",
      "Status": "New Lead",
      "Role": "Couple",
      "Event Type": "weddingDay",
      "Location": "Test Location",
      "Additional Notes": "🧪 This is a test record created by /api/test-airtable endpoint",
    });

    // Immediately delete the test record to keep database clean
    await table.destroy(testRecord.id);

    return NextResponse.json({
      status: "success",
      message: "✅ Airtable connection successful!",
      test: {
        createdRecordId: testRecord.id,
        deletedImmediately: true,
        baseId: process.env.AIRTABLE_BASE_ID,
        tableId: process.env.AIRTABLE_TABLE_ID,
      },
      instructions: [
        "✅ Airtable API connection is working correctly",
        "✅ Test record was created and immediately deleted",
        "✅ Your consultation form can now write to Airtable",
        "Next: Update /api/consultation to write to Airtable + send email",
      ],
      nextSteps: [
        "1. Verify the Airtable base structure matches the guide",
        "2. Test the consultation form end-to-end",
        "3. Check both email and Airtable record are created",
      ],
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "error",
        message: "Airtable connection failed",
        error: error.message,
        possibleCauses: [
          "API token is invalid or expired",
          "Base ID is incorrect",
          "Table ID is incorrect",
          "Table field names don't match (case-sensitive)",
          "API token doesn't have permission to write to this base",
        ],
        fixInstructions: [
          "1. Verify token at https://airtable.com/create/tokens",
          "2. Check Base ID from https://airtable.com/api",
          "3. Check Table ID from Airtable URL",
          "4. Ensure field names match exactly (case-sensitive)",
        ],
      },
      { status: 500 }
    );
  }
}
