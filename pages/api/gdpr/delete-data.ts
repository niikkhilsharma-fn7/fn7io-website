import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * GDPR Data Deletion Endpoint
 * Allows users to request deletion of their personal data
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
    const { email, verificationCode, reason } = req.body;

    // Validate required fields
    if (!email || !verificationCode) {
      return res.status(400).json({ 
        message: 'Email and verification code are required' 
      });
    }

    // In production, you would:
    // 1. Verify the verification code sent to the user's email
    // 2. Log the deletion request with reason
    // 3. Queue the deletion process
    // 4. Delete data from all systems:
    //    - Application database
    //    - Analytics systems
    //    - Email marketing platforms
    //    - Backup systems (after retention period)
    // 5. Send confirmation email

    // Mock deletion process
    const deletionRecord = {
      requestId: `DEL-${Date.now()}`,
      email: email,
      requestDate: new Date().toISOString(),
      reason: reason || 'User requested deletion',
      status: 'pending',
      dataToDelete: [
        'Personal information (name, email, company)',
        'Form submissions',
        'Consent records',
        'Marketing preferences',
        'Analytics identifiers',
        'Communication history'
      ],
      timeline: {
        requestReceived: new Date().toISOString(),
        verificationSent: new Date().toISOString(),
        deletionScheduled: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours
        completionExpected: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 days
      },
      notes: [
        'Your data will be deleted within 30 days',
        'Some data may be retained for legal compliance',
        'Anonymized analytics data will not be deleted',
        'You will receive confirmation when deletion is complete'
      ]
    };

    // In production, send confirmation email and queue deletion
    return res.status(200).json({
      message: 'Data deletion request received successfully',
      deletionRecord: deletionRecord,
      nextSteps: [
        'Check your email for confirmation',
        'Your data will be deleted within 30 days',
        'You will receive final confirmation when complete'
      ]
    });

  } catch (error) {
    console.error('Data deletion error:', error);
    return res.status(500).json({ 
      message: 'Error processing deletion request',
      error: 'Please contact privacy@fn7.io for assistance'
    });
  }
}