import { validateContact } from "@/lib/validators/contact.validator";
import { sendContactEmail } from "@/lib/services/contact.service";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!validateContact(body)) {
      return Response.json(
        { error: "Invalid data" },
        { status: 400 }
      );
    }

    await sendContactEmail(body);

    return Response.json({ success: true });
  } catch (err) {
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}