import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * GDPR Data Access Endpoint
 * Allows users to request their personal data
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, verificationCode } = req.body;

    // Validate required fields
    if (!email || !verificationCode) {
      return res.status(400).json({ 
        message: 'Email and verification code are required' 
      });
    }

    // In production, you would:
    // 1. Verify the verification code sent to the user's email
    // 2. Query all databases/services for user data
    // 3. Compile the data into a portable format
    // 4. Send the data to the user

    // For now, we'll return a mock response structure
    const userData = {
      requestDate: new Date().toISOString(),
      email: email,
      dataCategories: {
        personalInfo: {
          firstName: 'User data would be here',
          lastName: 'User data would be here',
          email: email,
          company: 'User data would be here',
          website: 'User data would be here',
          linkedin: 'User data would be here'
        },
        consentRecords: {
          privacyConsent: true,
          marketingConsent: false,
          consentDate: 'Consent date would be here'
        },
        formSubmissions: [
          // Array of form submissions
        ],
        analyticsData: {
          note: 'Analytics data is anonymized and aggregated'
        },
        marketingPreferences: {
          emailMarketing: false,
          partnerOffers: false
        }
      },
      dataRetention: {
        policy: 'Data is retained for 3 years from last activity',
        deletionSchedule: 'Data will be deleted after retention period'
      },
      rights: {
        access: 'You have the right to access your personal data',
        rectification: 'You have the right to correct inaccurate data',
        erasure: 'You have the right to request deletion of your data',
        portability: 'You have the right to receive your data in a portable format',
        objection: 'You have the right to object to certain processing',
        restriction: 'You have the right to restrict processing'
      }
    };

    // In production, you would send this data via secure email
    // For now, return it in the response
    return res.status(200).json({
      message: 'Data access request processed successfully',
      note: 'In production, this data would be sent to your registered email',
      data: userData
    });

  } catch (error) {
    console.error('Data access error:', error);
    return res.status(500).json({ 
      message: 'Error processing data access request',
      error: 'Please contact privacy@fn7.io for assistance'
    });
  }
}