import { resend } from "../email/resend";

export async function sendContactEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "nguyenhongtruclam1@gmail.com",
    subject: `New message from ${name}`,
    replyTo: email,
    html: `
      <h2>New Contact Request</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b></p>
      <p>${message}</p>
    `,
  });
}