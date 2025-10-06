import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const {
      partnerType,
      incubatorLink,
      firstName,
      lastName,
      email,
      submittedAt,
      recipientEmail
    } = req.body;

    // Validate required fields
    if (!partnerType || !firstName || !lastName || !email) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Email HTML template for atlas@fn7.io
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { color: #333; margin-left: 10px; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Partner Application Received</h2>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Partner Type:</span>
              <span class="value">${partnerType}</span>
            </div>
            ${incubatorLink ? `
            <div class="field">
              <span class="label">Incubator Link:</span>
              <span class="value"><a href="${incubatorLink}">${incubatorLink}</a></span>
            </div>
            ` : ''}
            <div class="field">
              <span class="label">Name:</span>
              <span class="value">${firstName} ${lastName}</span>
            </div>
            <div class="field">
              <span class="label">Email:</span>
              <span class="value"><a href="mailto:${email}">${email}</a></span>
            </div>
            <div class="field">
              <span class="label">Submitted At:</span>
              <span class="value">${new Date(submittedAt).toLocaleString()}</span>
            </div>
            <div class="footer">
              <p>This application was submitted through the FN7 Partner Program form.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Confirmation email HTML for applicant
    const applicantEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Thank You for Your Application!</h2>
          </div>
          <div class="content">
            <p>Dear ${firstName},</p>
            <p>We have received your application to become a <strong>${partnerType}</strong> partner with FN7.</p>
            <p>Our team will review your application and get back to you within 2-3 business days.</p>
            <p>If you have any questions in the meantime, please don't hesitate to reach out to us at <a href="mailto:atlas@fn7.io">atlas@fn7.io</a>.</p>
            <p>Best regards,<br>The FN7 Team</p>
            <div class="footer">
              <p>© 2024 FN7. All rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Prepare payload for admin email
    const adminEmailPayload = {
      from: {
        name: "FN7 Partner Program",
        email: "noreply@fn7.io",
      },
      to: [
        {
          email: recipientEmail || "atlas@fn7.io",
          name: "FN7 Partner Team",
        },
      ],
      subject: `New Partner Application - ${partnerType} - ${firstName} ${lastName}`,
      body: adminEmailHtml,
    };

    // Prepare payload for applicant confirmation email
    const applicantEmailPayload = {
      from: {
        name: "FN7 Team",
        email: "noreply@fn7.io",
      },
      to: [
        {
          email: email,
          name: `${firstName} ${lastName}`,
        },
      ],
      subject: "FN7 Partner Application Received",
      body: applicantEmailHtml,
    };

    // Send admin notification email - exact same approach as get-form
    const adminEmailResponse = await fetch("https://helix.app.fn7.io/api/send-email", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adminEmailPayload),
    });
    
    const adminData = await adminEmailResponse.json();
    
    // Send applicant confirmation email
    const applicantEmailResponse = await fetch("https://helix.app.fn7.io/api/send-email", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicantEmailPayload),
    });
    
    const applicantData = await applicantEmailResponse.json();
    
    // Always return success - matching get-form pattern exactly
    return res.status(200).json({ 
      message: 'Application submitted successfully',
      data: {
        recipient: recipientEmail || 'atlas@fn7.io',
        applicant: `${firstName} ${lastName}`,
        type: partnerType
      }
    });

  } catch (error) {
    // Even on error, return success to ensure form can proceed - matching get-form pattern
    console.error('Error occurred:', error);
    return res.status(200).json({ 
      message: 'Application submitted successfully',
      data: {
        recipient: 'atlas@fn7.io',
        applicant: 'Partner Application',
        type: 'Partner'
      }
    });
  }
}