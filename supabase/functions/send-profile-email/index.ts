import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ProfileEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ProfileEmailRequest = await req.json();

    const emailResponse = await resend.emails.send({
      from: "FinanceAI <onboarding@resend.dev>",
      to: [email],
      subject: "Profile Update Confirmation",
      html: `
        <h1>Hello ${name}!</h1>
        <p>Your profile has been successfully updated in FinanceAI.</p>
        <p><strong>Message:</strong> ${message}</p>
        <p>Thank you for using FinanceAI - Your AI Financial Assistant!</p>
        <p>Best regards,<br>The FinanceAI Team</p>
      `,
    });

    console.log("Profile email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-profile-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);