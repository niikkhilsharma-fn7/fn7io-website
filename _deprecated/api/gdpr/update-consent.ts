import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * GDPR Consent Update Endpoint
 * Allows users to update their consent preferences
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
    const { 
      email, 
      privacyConsent,
      marketingConsent,
      analyticsConsent,
      timestamp 
    } = req.body;

    // Validate required fields
    if (!email) {
      return res.status(400).json({ 
        message: 'Email is required' 
      });
    }

    // In production, you would:
    // 1. Verify user identity (via session or verification code)
    // 2. Update consent records in database
    // 3. Update marketing platform preferences
    // 4. Log consent changes for audit trail
    // 5. Send confirmation email

    const consentUpdate = {
      updateId: `CONSENT-${Date.now()}`,
      email: email,
      timestamp: timestamp || new Date().toISOString(),
      consentChanges: {
        privacy: {
          previous: null, // Would fetch from database
          current: privacyConsent,
          updated: privacyConsent !== undefined
        },
        marketing: {
          previous: null, // Would fetch from database
          current: marketingConsent,
          updated: marketingConsent !== undefined
        },
        analytics: {
          previous: null, // Would fetch from database
          current: analyticsConsent,
          updated: analyticsConsent !== undefined
        }
      },
      ipAddress: req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown',
      userAgent: req.headers['user-agent'] || 'unknown',
      legalBasis: {
        privacy: privacyConsent ? 'Consent' : 'Withdrawn',
        marketing: marketingConsent ? 'Consent' : 'Withdrawn',
        analytics: analyticsConsent ? 'Consent' : 'Withdrawn'
      },
      effectiveDate: new Date().toISOString(),
      auditLog: true
    };

    // Process consent withdrawal implications
    const implications: string[] = [];
    
    if (privacyConsent === false) {
      implications.push('Account may be scheduled for deletion');
      implications.push('You may lose access to services');
    }
    
    if (marketingConsent === false) {
      implications.push('You will be unsubscribed from marketing emails');
      implications.push('You will not receive promotional offers');
    }
    
    if (analyticsConsent === false) {
      implications.push('Analytics cookies will be deleted');
      implications.push('Your usage data will not be collected');
    }

    // In production, update all relevant systems
    return res.status(200).json({
      message: 'Consent preferences updated successfully',
      consentUpdate: consentUpdate,
      implications: implications,
      nextSteps: [
        'Changes take effect immediately',
        'You will receive a confirmation email',
        'You can update preferences anytime'
      ]
    });

  } catch (error) {
    console.error('Consent update error:', error);
    return res.status(500).json({ 
      message: 'Error updating consent preferences',
      error: 'Please contact privacy@fn7.io for assistance'
    });
  }
}