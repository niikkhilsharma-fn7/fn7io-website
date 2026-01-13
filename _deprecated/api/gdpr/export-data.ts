import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * GDPR Data Portability Endpoint
 * Allows users to export their data in a portable format
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
    const { email, verificationCode, format = 'json' } = req.body;

    // Validate required fields
    if (!email || !verificationCode) {
      return res.status(400).json({ 
        message: 'Email and verification code are required' 
      });
    }

    // Validate format
    if (!['json', 'csv', 'xml'].includes(format)) {
      return res.status(400).json({ 
        message: 'Invalid format. Supported formats: json, csv, xml' 
      });
    }

    // In production, you would:
    // 1. Verify the verification code
    // 2. Collect all user data
    // 3. Format according to requested format
    // 4. Create a secure download link or send via email

    // Mock data export
    const exportData = {
      exportMetadata: {
        exportId: `EXP-${Date.now()}`,
        requestDate: new Date().toISOString(),
        format: format,
        dataSubject: email,
        gdprCompliant: true,
        portableFormat: true
      },
      personalData: {
        profile: {
          firstName: 'John',
          lastName: 'Doe',
          email: email,
          company: 'Example Corp',
          website: 'https://example.com',
          linkedin: 'https://linkedin.com/in/johndoe'
        },
        accountInfo: {
          accountCreated: '2024-01-01T00:00:00Z',
          lastLogin: '2025-01-01T00:00:00Z',
          accountStatus: 'active'
        }
      },
      consentHistory: [
        {
          date: '2024-01-01T00:00:00Z',
          privacyConsent: true,
          marketingConsent: false,
          ipAddress: 'anonymized',
          userAgent: 'anonymized'
        }
      ],
      formSubmissions: [
        {
          date: '2024-01-01T00:00:00Z',
          formType: 'Get Access',
          data: {
            topic: 'Atlas Platform',
            description: 'Interest in platform'
          }
        }
      ],
      communicationPreferences: {
        emailMarketing: false,
        partnerOffers: false,
        productUpdates: true,
        newsletters: false
      },
      dataProcessingRecords: [
        {
          purpose: 'Service delivery',
          legalBasis: 'Contract',
          dataCategories: ['Contact info', 'Company info'],
          retention: '3 years'
        },
        {
          purpose: 'Marketing',
          legalBasis: 'Consent',
          dataCategories: ['Email', 'Preferences'],
          retention: 'Until consent withdrawn'
        }
      ]
    };

    // Format based on requested format
    let formattedData;
    let contentType;
    
    switch(format) {
      case 'csv':
        // In production, properly format as CSV
        formattedData = 'CSV export would be here';
        contentType = 'text/csv';
        break;
      case 'xml':
        // In production, properly format as XML
        formattedData = '<xml>Export would be here</xml>';
        contentType = 'application/xml';
        break;
      default:
        formattedData = JSON.stringify(exportData, null, 2);
        contentType = 'application/json';
    }

    // In production, you would create a secure download link
    // For now, return the data with appropriate headers
    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Disposition', `attachment; filename="gdpr-export-${Date.now()}.${format}"`);
    
    return res.status(200).send(formattedData);

  } catch (error) {
    console.error('Data export error:', error);
    return res.status(500).json({ 
      message: 'Error processing data export request',
      error: 'Please contact privacy@fn7.io for assistance'
    });
  }
}