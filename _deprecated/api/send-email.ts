// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const payload = req.body;
    console.log("Received payload:", payload);
    const formData = payload.user_form;
    const finalutm = payload.utmssource || "no source";
    const companybody = `
  <div style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
          <tr>
            <td style="padding: 40px 30px;">
              <!-- Header -->
              <h1 style="color: #333333; font-size: 24px; margin: 0 0 10px 0; text-align: center;">
                New Form Submission
              </h1>

              <!-- Welcome Message -->
              <p style="color: #666666; font-size: 16px; line-height: 1.5; margin: 0 0 30px 0; text-align: center;">
                Hello, You have a new form submission on your Atlas site!
              </p>

              <!-- Details Section -->
              <div style="background-color: #f8f9fa; border-radius: 6px; padding: 30px; margin: 0 0 30px 0;">
                <h2 style="color: #333333; font-size: 18px; margin: 0 0 20px 0;">
                  Submission Details:
                </h2>

                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e1e4e8;">
                      <strong style="color: #555555; display: inline-block; width: 140px;">First Name:</strong>
                      <span style="color: #333333;">${
                        formData.UserDetails.FirstName
                      }</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e1e4e8;">
                      <strong style="color: #555555; display: inline-block; width: 140px;">Last Name:</strong>
                      <span style="color: #333333;">${
                        formData.UserDetails.LastName
                      }</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e1e4e8;">
                      <strong style="color: #555555; display: inline-block; width: 140px;">Email:</strong>
                      <a href="mailto:${
                        formData.UserDetails.Email
                      }" style="color: #0066cc; text-decoration: none;">${
      formData.UserDetails.Email
    }</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e1e4e8;">
                      <strong style="color: #555555; display: inline-block; width: 140px;">Company:</strong>
                      <span style="color: #333333;">${
                        formData.UserDetails.Company
                      }</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e1e4e8;">
                      <strong style="color: #555555; display: inline-block; width: 140px;">Interest: </strong>
                      <span style="color: #333333;">${
                        formData.topic || "Not specified"
                      }</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0;">
                      <strong style="color: #555555; display: block; margin-bottom: 5px;"></strong>
                      <span style="color: #333333; display: block; line-height: 1.5;">${
                        formData.description
                      }</span>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Footer -->
              <p style="color: #666666; font-size: 14px; line-height: 1.5; margin: 0; text-align: center;">
                Best regards
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</div>
`;
    const payload2 = {
      from: {
        name: "Nivy",
        email: "niveditha.patluri@fn7.io",
      },
      to: [
        {
          email: "niveditha.patluri@fn7.io",
          name: "Nivy",
        },
        {
          email: "roshini.tribhuvan@fn7.io",
          name: "Roshini",
        },
        {
          email: "lakshmi.ng@fn7.io",
          name: "Lakshmi",
        },
        {
          email: "murali@fn7.io",
          name: "Murali Sid",
        },
      ],
      subject: "New Lead: You have a new form submission on your Atlas site!",
      utmssource: finalutm,
      body: companybody,
    };

    // Make two API calls in parallel using Promise.all
    const [emailResponse, secondResponse] = await Promise.all([
      // First API call (original)
      fetch(
        `https://cbfb39c42f8aef7aac52b0c9f11102.d3.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/ebce4443336b458186540c9e7988e989/triggers/manual/paths/invoke/?api-version=1&tenantId=tId&environmentName=cbfb39c4-2f8a-ef7a-ac52-b0c9f11102d3&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=pZMB5tnqyWjMoaWHfe95OcwbFlxx2CivvFOQgZgYHUk`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      ).then((res) => ({
        status: res.status,
        data: res.text()
      })),

      // Second API call to send email

      fetch("https://helix.app.fn7.io/api/send-email", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload2),
      }).then((res) => ({
        status: res.status,
        data: res.json(),
      })),
    ]);

    // Wait for JSON parsing to complete
    const emailData = await emailResponse.data;
    const secondData = await secondResponse.data;

    // Return combined results
    return res.status(emailResponse.status).json({
      emailResult: emailData,
      secondResult: secondData,
    });
  } catch (error: any) {
    console.error("API proxy error:", error);
    return res
      .status(500)
      .json({ error: "Internal server error. Please try again later. Nivy" });
  }
}
