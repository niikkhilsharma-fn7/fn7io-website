/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { trackEvent, getCurrentUTMParams } from "@/deprecated/utils/amplitude";

export const GetPriorityAccessForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  let isSubmitting = false;
  const [isMobile, setIsMobile] = useState(false);

  // State for validation errors
  const [validationErrors, setValidationErrors] = useState({
    UserDetails: {
      FirstName: false,
      LastName: false,
      Email: false,
      Company: false,
      Website: false,
      LinkedIn: false,
    },
    topic: false,
    questions: {},
    privacyConsent: false,
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Validate form before submission
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      UserDetails: {
        FirstName: !formData.UserDetails.FirstName,
        LastName: !formData.UserDetails.LastName,
        Email: !formData.UserDetails.Email,
        Company: !formData.UserDetails.Company,
        Website: !formData.UserDetails.Website,
        LinkedIn: false, // LinkedIn is optional, so no validation needed
      },
      topic: !formData.topic,
      questions: {},
      privacyConsent: !formData.privacyConsent,
    };

    // Check privacy consent
    if (!formData.privacyConsent) {
      newErrors.privacyConsent = true;
      isValid = false;
    }

    console.log("Validating form", formData, newErrors);
    // Basic email validation
    if (formData.UserDetails.Email && !/\S+@\S+\.\S+/.test(formData.UserDetails.Email)) {
      newErrors.UserDetails.Email = true;
      isValid = false;
    }

    // Basic website URL validation
    if (formData.UserDetails.Website && !/^https?:\/\/.+\..+/.test(formData.UserDetails.Website)) {
      newErrors.UserDetails.Website = true;
      isValid = false;
    }

    // Basic LinkedIn URL validation (optional field)
    if (
      formData.UserDetails.LinkedIn &&
      !/^https?:\/\/(www\.)?linkedin\.com\/in\/.+/.test(formData.UserDetails.LinkedIn)
    ) {
      newErrors.UserDetails.LinkedIn = true;
      isValid = false;
    }

    // if (
    //   formData.topic !== "fn7 GTM Agents" &&
    //   formData.topic !== "Atlas Platform"
    // ) {
    //   newErrors.topic = true;
    //   isValid = false;
    // }

    // Validate all questions based on the selected topic
    // const questionsToValidate =
    //   formData.topic === "fn7 GTM Agents"
    //     ? gtmQuestions
    //     : formData.topic === "Atlas Platform"
    //       ? atlasQuestions
    //       : [];

    // questionsToValidate.forEach((question) => {
    //   if (question.type === "radio") {
    //     // For radio buttons, check if any option is selected
    //     const isAnswered = !!questionAnswers[question.id];
    //     newErrors.questions[question.id] = !isAnswered;
    //     if (!isAnswered) isValid = false;
    //   } else if (question.type === "checkbox") {
    //     // For checkboxes, check if at least one option is selected
    //     const isAnswered = questionAnswers[question.id]?.length > 0;
    //     newErrors.questions[question.id] = !isAnswered;
    //     if (!isAnswered) isValid = false;
    //   }
    // });

    setValidationErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const isValidated = !validateForm();
    // Validate the form
    if (isValidated) {
      // Scroll to the first error
      const firstErrorElement = document.querySelector(".error-highlight");
      if (firstErrorElement) {
        firstErrorElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
      return; // Stop submission if validation fails
    }

    try {
      // Collect ALL parameters that start with 'utm'
      const finalutm: Record<string, string> = {};
      searchParams.forEach((value, key) => {
        if (key.startsWith("utm")) {
          finalutm[key] = value;
        }
      });

      // For backward compatibility, also include the old format
      const utmsource = searchParams.get("utm_source") || "";
      const utmpmedium = searchParams.get("utm_medium") || "";
      const utmcampaign = searchParams.get("utm_campaign") || "";
      const utmcontent = searchParams.get("utm_content") || "";
      const utmterm = searchParams.get("utm_term") || "";

      // Merge both formats
      const utmParams = {
        ...finalutm,
        utmsource,
        utmpmedium,
        utmcampaign,
        utmcontent,
        utmterm,
      };

      // const call = await fetch("/api/send-email", {
      //   method: "PUT",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     user_form: formData,
      //     utmssource: utmParams
      //   }),
      // });

      // Include consent status in the data
      const consentData = {
        privacyConsent: formData.privacyConsent,
        marketingConsent: formData.marketingConsent,
        consentTimestamp: new Date().toISOString(),
      };

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
                      <span style="color: #333333;">${formData.UserDetails.FirstName}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e1e4e8;">
                      <strong style="color: #555555; display: inline-block; width: 140px;">Last Name:</strong>
                      <span style="color: #333333;">${formData.UserDetails.LastName}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e1e4e8;">
                      <strong style="color: #555555; display: inline-block; width: 140px;">Email:</strong>
                      <a href="mailto:${formData.UserDetails.Email}" style="color: #0066cc; text-decoration: none;">${
        formData.UserDetails.Email
      }</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e1e4e8;">
                      <strong style="color: #555555; display: inline-block; width: 140px;">Company:</strong>
                      <span style="color: #333333;">${formData.UserDetails.Company}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e1e4e8;">
                      <strong style="color: #555555; display: inline-block; width: 140px;">Website:</strong>
                      <a href="${formData.UserDetails.Website}" style="color: #0066cc; text-decoration: none;">${
        formData.UserDetails.Website
      }</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e1e4e8;">
                      <strong style="color: #555555; display: inline-block; width: 140px;">LinkedIn:</strong>
                      <a href="${formData.UserDetails.LinkedIn}" style="color: #0066cc; text-decoration: none;">${
        formData.UserDetails.LinkedIn || "Not provided"
      }</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e1e4e8;">
                      <strong style="color: #555555; display: inline-block; width: 140px;">Interest: </strong>
                      <span style="color: #333333;">${formData.topic || "Not specified"}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e1e4e8;">
                      <strong style="color: #555555; display: inline-block; width: 140px;">Privacy Consent:</strong>
                      <span style="color: #333333;">${consentData.privacyConsent ? "Yes" : "No"}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e1e4e8;">
                      <strong style="color: #555555; display: inline-block; width: 140px;">Marketing Consent:</strong>
                      <span style="color: #333333;">${consentData.marketingConsent ? "Yes" : "No"}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e1e4e8;">
                      <strong style="color: #555555; display: inline-block; width: 140px;">Consent Date:</strong>
                      <span style="color: #333333;">${consentData.consentTimestamp}</span>
                    </td>
                  </tr>
                  ${Object.entries(finalutm)
                    .map(([key, value]) => {
                      // Format the key for display (utm_source -> UTM Source)
                      const displayKey = key
                        .replace(/_/g, " ")
                        .split(" ")
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(" ");

                      return `
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #e1e4e8;">
                      <strong style="color: #555555; display: inline-block; width: 140px;">${displayKey}:</strong>
                      <span style="color: #333333;">${value || "Not specified"}</span>
                    </td>
                  </tr>`;
                    })
                    .join("")}
                  <tr>
                    <td style="padding: 10px 0;">
                      <strong style="color: #555555; display: block; margin-bottom: 5px;"></strong>
                      <span style="color: #333333; display: block; line-height: 1.5;">${formData.description}</span>
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
          {
            email: "nagaraju.mudunuri@fn7.io",
            name: "Nagaraju Mudunuri",
          },
          {
            email: "radha.jaishetty@fn7.io",
            name: "RK",
          },
        ],
        subject: "You have a new form submission on your Atlas site!",
        utmssource: utmParams,
        body: companybody,
      };

      // Track form submission
      trackEvent("Form Submitted", {
        form_name: "Get Priority Access",
        page: "Get Form",
        topic: formData.topic,
        company: formData.UserDetails.Company,
        website: formData.UserDetails.Website,
        privacy_consent: formData.privacyConsent,
        marketing_consent: formData.marketingConsent,
        ...getCurrentUTMParams(),
      });

      // Make API call to send email
      const response = await fetch("https://helix.app.fn7.io/api/send-email", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload2),
      });

      const emailData = await response.json();

      // if (emailData) {
      isSubmitting = false;

      // Track successful submission
      trackEvent("Form Submission Success", {
        form_name: "Get Priority Access",
        page: "Get Form",
        ...getCurrentUTMParams(),
      });

      // Preserve query parameters when navigating to submit page
      const currentParams = new URLSearchParams(searchParams.toString());
      router.push(`/submitpage?${currentParams.toString()}`);
      // } else {
      //   isSubmitting = false;
      //   alert("Error occurred. Please try again.");
      // }
    } catch (err) {
      isSubmitting = false;
      alert("Error occurred. Please try again after some time.");
    }
  };

  const [formData, setFormData] = useState({
    UserDetails: {
      FirstName: "",
      LastName: "",
      Email: "",
      Company: "",
      Website: "",
      LinkedIn: "",
    },
    topic: "", // Start with no selection
    description: "",
    privacyConsent: false,
    marketingConsent: false,
  });

  // Questions and answers for GTM Agents and Atlas Platform
  const [questionAnswers, setQuestionAnswers] = useState({
    // GTM Agent questions
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: [],
    q7_other: "",
    q8: [],
    q8_other: "",
    q9: [],
    q9_other: "",

    // Atlas Platform questions
    atlas_q1: "",
    atlas_q2: [],
    atlas_q2_other: "",
    atlas_q3: "",
    atlas_q4: "",
    atlas_q5: "",
    atlas_q6: "",
    atlas_q7: "",
    atlas_q7_other: "",
    atlas_q8: "",
    atlas_q9: "",
  });

  // Questions for GTM Agents
  const gtmQuestions = [
    {
      id: "q1",
      text: "1. Are you launching a technology product or service?",
      type: "radio",
      options: ["Tech product", "Tech service", "Neither"],
    },
    {
      id: "q2",
      text: "2. What stage is your product at?",
      type: "radio",
      options: ["Idea", "Prototype", "Beta testing", "Launched", "Scaling"],
    },
    {
      id: "q3",
      text: "3. How long has it been since your company or product inception?",
      type: "radio",
      options: ["Not launched yet", "Less than 3 months ago", "3 to 6 months ago", "More than 6 months ago"],
    },
    {
      id: "q4",
      text: "4. How big is your team?",
      type: "radio",
      options: ["Solo founder", "2 to 5 people", "6 to 20 people", "More than 20 people"],
    },
    {
      id: "q5",
      text: "5. How many active users or customers do you have?",
      type: "radio",
      options: ["Fewer than 10", "10 to 100", "100 to 1,000", "More than 1,000"],
    },
    {
      id: "q6",
      text: "6. What's your current monthly marketing budget?",
      type: "radio",
      options: ["Less than $1,000", "$1,000 to $5,000", "$5,001 to $20,000", "More than $20,000"],
    },
    {
      id: "q7",
      text: "7. Which paid marketing channels do you currently use? (Select all that apply)",
      type: "checkbox",
      options: ["Google Ads", "LinkedIn Ads", "Meta Ads (Facebook/Instagram)", "None"],
      hasOther: true,
    },
    {
      id: "q8",
      text: "8. What's your biggest growth challenge right now?",
      type: "checkbox",
      options: [
        "Finding and converting leads",
        "Increasing user engagement",
        "Scaling marketing efforts",
        "Retaining customers",
        "Achieving product-market fit",
      ],
      hasOther: true,
    },
    {
      id: "q9",
      text: "9. What's your top goal for growth over the next 3 to 6 months?",
      type: "checkbox",
      options: ["Acquire new customers", "Increase user engagement", "Improve conversion rates", "Grow revenue"],
      hasOther: true,
    },
  ];

  // Questions for Atlas Platform
  const atlasQuestions = [
    {
      id: "atlas_q1",
      text: "1. Are you actively building or planning to build custom AI agents or automated workflows?",
      type: "radio",
      options: ["Yes, actively building", "Planning to start soon", "Just exploring"],
    },
    {
      id: "atlas_q2",
      text: "2. What is your primary objective for using Atlas?",
      type: "checkbox",
      options: [
        "Automate marketing, sales, or CRM processes",
        "Build internal operational workflows",
        "Develop entirely new AI-driven capabilities",
      ],
      hasOther: true,
    },
    {
      id: "atlas_q3",
      text: "3. How experienced is your team with AI or automation development?",
      type: "radio",
      options: ["None / beginner", "Moderate / some experience", "Expert / advanced technical skills"],
    },
    {
      id: "atlas_q4",
      text: "4. What level of customization do you require?",
      type: "radio",
      options: [
        "Low: Use pre-built agents with minor tweaks",
        "Medium: Configure and customize existing agents",
        "High: Build custom agents and logic from scratch",
      ],
    },
    {
      id: "atlas_q5",
      text: "5. How critical is control over your data and AI logic?",
      type: "radio",
      options: ["Mission critical: Full ownership and control needed", "Important but flexible", "Not a priority"],
    },
    {
      id: "atlas_q6",
      text: "6. What is the scale of your current or intended deployment?",
      type: "radio",
      options: ["Small pilot / PoC", "Startup / small team", "Mid-sized company", "Large enterprise"],
    },
    {
      id: "atlas_q7",
      text: "7. What are your biggest challenges today in building or managing AI agents?",
      type: "radio",
      options: ["Technical complexity", "Data integration", "Scaling solutions", "Maintenance and updates"],
      hasOther: true,
    },
    {
      id: "atlas_q8",
      text: "8. What is your expected timeline to launch your AI agents?",
      type: "radio",
      options: ["Within 1 month", "1-3 months", "3-6 months", "Beyond 6 months"],
    },
    {
      id: "atlas_q9",
      text: "9. How do you prefer to work with the Atlas team?",
      type: "radio",
      options: ["Full partnership and support", "Occasional consulting", "Independent, minimal support"],
    },
  ];

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Clear validation error when field is being filled
    if (
      name === "FirstName" ||
      name === "LastName" ||
      name === "Email" ||
      name === "Company" ||
      name === "Website" ||
      name === "LinkedIn"
    ) {
      setValidationErrors({
        ...validationErrors,
        UserDetails: {
          ...validationErrors.UserDetails,
          [name]: false,
        },
      });

      setFormData({
        ...formData,
        UserDetails: {
          ...formData.UserDetails,
          [name]: value,
        },
      });
    } else if (name === "topic") {
      setValidationErrors({
        ...validationErrors,
        topic: false,
        questions: {}, // Reset question validation errors when topic changes
      });

      setFormData({
        ...formData,
        [name]: value,
        description: "", // Clear description when changing topics
      });

      // Clear previous answers when changing topics
      const clearedAnswers: any = {};
      Object.keys(questionAnswers).forEach((key) => {
        clearedAnswers[key] = Array.isArray(questionAnswers[key]) ? [] : "";
      });
      setQuestionAnswers(clearedAnswers);
    } else if (name.includes("_option")) {
      // Handle checkbox selections for multi-select questions
      const questionId = name.split("_option")[0];
      const option = value;

      // Clear validation error for this question
      setValidationErrors({
        ...validationErrors,
        questions: {
          ...validationErrors.questions,
          [questionId]: false,
        },
      });

      // Get the question to determine its type
      const isGtm = !questionId.startsWith("atlas_");
      const questions = isGtm ? gtmQuestions : atlasQuestions;
      const question = questions.find((q) => q.id === questionId);

      if (question && question.type === "checkbox") {
        // Handle multi-select questions (checkboxes)
        let updatedOptions = [...(questionAnswers[questionId] || [])];

        if (checked) {
          // Add option if checked and not already in the array
          if (!updatedOptions.includes(option)) {
            updatedOptions.push(option);
          }
        } else {
          // Remove option if unchecked
          updatedOptions = updatedOptions.filter((item) => item !== option);

          // Clear "other" text if "Other" option is unchecked
          if (option === "Other") {
            questionAnswers[`${questionId}_other`] = "";
          }
        }

        // Update state with the new selections
        const newAnswers: any = {
          ...questionAnswers,
          [questionId]: updatedOptions,
        };

        setQuestionAnswers(newAnswers);

        // After updating answers, combine all answers into description field
        setTimeout(() => updateDescription(newAnswers), 0);
      }
    } else if (name.includes("_other")) {
      // Handle "other" text inputs
      const newAnswers = {
        ...questionAnswers,
        [name]: value,
      };

      setQuestionAnswers(newAnswers);

      // Update description with new "other" text
      setTimeout(() => updateDescription(newAnswers), 0);
    } else if (name.startsWith("q") || name.startsWith("atlas_")) {
      // Clear validation error for this question
      setValidationErrors({
        ...validationErrors,
        questions: {
          ...validationErrors.questions,
          [name]: false,
        },
      });

      // Handle radio button selections for single-select questions
      const newAnswers = {
        ...questionAnswers,
        [name]: value,
      };

      // Clear "other" text if switching away from "Other" option
      if (questionAnswers[name] === "Other" && value !== "Other") {
        newAnswers[`${name}_other`] = "";
      }

      setQuestionAnswers(newAnswers);

      // After updating answers, combine all answers into description field
      setTimeout(() => updateDescription(newAnswers), 0);
    }
  };

  // Function to update the description field with all answers
  const updateDescription = (currentAnswers?: typeof questionAnswers | null) => {
    // Use passed answers or current state
    const answersToUse = currentAnswers || questionAnswers;
    let questionsToUse = formData.topic === "fn7 GTM Agents" ? gtmQuestions : atlasQuestions;

    const updatedDescription = questionsToUse
      .map((question) => {
        const { id, text, type, hasOther } = question;

        if (type === "checkbox" && answersToUse[id] && answersToUse[id].length > 0) {
          // For multi-select questions (checkboxes)
          let answer = answersToUse[id].join(", ");

          // Handle "Other" option with text input
          if (answersToUse[id].includes("Other") && answersToUse[`${id}_other`]) {
            answer = answer.replace("Other", `Other: ${answersToUse[`${id}_other`]}`);
          }

          return answer ? `${text} <br> → ${answer} <br><br>  ` : "<br><br>  ";
        } else if (type === "radio" && answersToUse[id]) {
          // For single-select questions (radio buttons)
          if (answersToUse[id] === "Other" && hasOther && answersToUse[`${id}_other`]) {
            return `${text}\n→ Other: ${answersToUse[`${id}_other`]}`;
          } else {
            return answersToUse[id] ? `${text} <br> → ${answersToUse[id]} <br> <br> ` : "<br> <br> ";
          }
        }

        return "";
      })
      .filter((text) => text)
      .join("\n\n");

    setFormData({
      ...formData,
      description: updatedDescription,
    });
  };

  // Render question based on its type
  const renderQuestion = (question) => {
    const hasError = validationErrors.questions[question.id];

    if (question.type === "checkbox") {
      return (
        <div className={`space-y-2 ${hasError ? "error-highlight" : ""}`}>
          {question.options.map((option) => (
            <div key={option} className="flex items-start">
              <input
                type="checkbox"
                id={`${question.id}_${option.replace(/\s+/g, "_")}`}
                name={`${question.id}_option`}
                value={option}
                checked={questionAnswers[question.id]?.includes(option) || false}
                onChange={handleChange}
                className={`mt-1 h-4 w-4 ${hasError ? "border-red-500" : "text-purple-600"}`}
              />
              <label htmlFor={`${question.id}_${option.replace(/\s+/g, "_")}`} className="ml-2 block text-sm">
                {option}
              </label>
            </div>
          ))}

          {/* "Other" option if applicable */}
          {question.hasOther && (
            <div className="flex items-start">
              <input
                type="checkbox"
                id={`${question.id}_Other`}
                name={`${question.id}_option`}
                value="Other"
                checked={questionAnswers[question.id]?.includes("Other") || false}
                onChange={handleChange}
                className={`mt-1 h-4 w-4 ${hasError ? "border-red-500" : "text-purple-600"}`}
              />
              <label htmlFor={`${question.id}_Other`} className="ml-2 block text-sm">
                Other
              </label>
              {questionAnswers[question.id]?.includes("Other") && (
                <input
                  type="text"
                  name={`${question.id}_other`}
                  placeholder="Please specify"
                  className="ml-2 bg-gray-100 text-gray-900 placeholder-gray-500 px-3 py-1 text-sm rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-400"
                  value={questionAnswers[`${question.id}_other`] || ""}
                  onChange={handleChange}
                />
              )}
            </div>
          )}

          {hasError && <p className="text-red-500 text-xs mt-1">Please select at least one option</p>}
        </div>
      );
    } else if (question.type === "radio") {
      return (
        <div className={`space-y-2 ${hasError ? "error-highlight" : ""}`}>
          {question.options.map((option) => (
            <div key={option} className="flex items-start">
              <input
                type="radio"
                id={`${question.id}_${option.replace(/\s+/g, "_")}`}
                name={question.id}
                value={option}
                checked={questionAnswers[question.id] === option}
                onChange={handleChange}
                className={`mt-1 h-4 w-4 ${hasError ? "border-red-500" : "text-purple-600"}`}
              />
              <label htmlFor={`${question.id}_${option.replace(/\s+/g, "_")}`} className="ml-2 block text-sm">
                {option}
              </label>
            </div>
          ))}

          {/* "Other" option if applicable */}
          {question.hasOther && (
            <div className="flex items-start">
              <input
                type="radio"
                id={`${question.id}_Other`}
                name={question.id}
                value="Other"
                checked={questionAnswers[question.id] === "Other"}
                onChange={handleChange}
                className={`mt-1 h-4 w-4 ${hasError ? "border-red-500" : "text-purple-600"}`}
              />
              <label htmlFor={`${question.id}_Other`} className="ml-2 block text-sm">
                Other
              </label>
              {questionAnswers[question.id] === "Other" && (
                <input
                  type="text"
                  name={`${question.id}_other`}
                  placeholder="Please specify"
                  className="ml-2 bg-gray-100 text-gray-900 placeholder-gray-500 px-3 py-1 text-sm rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-400"
                  value={questionAnswers[`${question.id}_other`] || ""}
                  onChange={handleChange}
                />
              )}
            </div>
          )}

          {hasError && <p className="text-red-500 text-xs mt-1">Please select an option</p>}
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className="md:scale-[0.9] max-w-2xl my-12 md:my-0"
      style={{
        padding: "2px",
        borderRadius: "16px",
        background: "linear-gradient(90deg, rgba(255,72,44,0.8) 0%, rgba(162,69,238,0.8) 100%)",
      }}
    >
      <section
        className="w-full mx-auto bg-white rounded-2xl p-8 text-gray-900"
        style={{
          borderRadius: "16px",
        }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Get Beta Access</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="FirstName" className="block text-sm font-medium mb-1">
                First Name *
              </label>
              <input
                type="text"
                id="FirstName"
                name="FirstName"
                placeholder="First Name"
                required
                className={`w-full bg-gray-100 text-gray-900 placeholder-gray-500 px-4 py-2 rounded border ${
                  validationErrors.UserDetails.FirstName ? "border-red-500 error-highlight" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-purple-400`}
                onChange={handleChange}
                value={formData.UserDetails.FirstName}
              />
              {validationErrors.UserDetails.FirstName && (
                <p className="text-red-500 text-xs mt-1">First name is required</p>
              )}
            </div>
            <div>
              <label htmlFor="LastName" className="block text-sm font-medium mb-1">
                Last Name *
              </label>
              <input
                type="text"
                id="LastName"
                name="LastName"
                placeholder="Last Name"
                required
                className={`w-full bg-gray-100 text-gray-900 placeholder-gray-500 px-4 py-2 rounded border ${
                  validationErrors.UserDetails.LastName ? "border-red-500 error-highlight" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-purple-400`}
                onChange={handleChange}
                value={formData.UserDetails.LastName}
              />
              {validationErrors.UserDetails.LastName && (
                <p className="text-red-500 text-xs mt-1">Last name is required</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="Email" className="block text-sm font-medium mb-1">
              Business Email *
            </label>
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder="jane@company.com"
              required
              className={`w-full bg-gray-100 text-gray-900 placeholder-gray-500 px-4 py-2 rounded border ${
                validationErrors.UserDetails.Email ? "border-red-500 error-highlight" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-purple-400`}
              onChange={handleChange}
              value={formData.UserDetails.Email}
            />
            {validationErrors.UserDetails.Email && (
              <p className="text-red-500 text-xs mt-1">Please enter a valid email address</p>
            )}
          </div>

          {/* Company Name */}
          <div>
            <label htmlFor="Company" className="block text-sm font-medium mb-1">
              Company Name *
            </label>
            <input
              type="text"
              id="Company"
              name="Company"
              placeholder="Company Name"
              required
              className={`w-full bg-gray-100 text-gray-900 placeholder-gray-500 px-4 py-2 rounded border ${
                validationErrors.UserDetails.Company ? "border-red-500 error-highlight" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-purple-400`}
              onChange={handleChange}
              value={formData.UserDetails.Company}
            />
            {validationErrors.UserDetails.Company && (
              <p className="text-red-500 text-xs mt-1">Company name is required</p>
            )}
          </div>

          {/* Company Website */}
          <div>
            <label htmlFor="Website" className="block text-sm font-medium mb-1">
              Company Website *
            </label>
            <input
              type="url"
              id="Website"
              name="Website"
              placeholder="https://company.com"
              required
              className={`w-full bg-gray-100 text-gray-900 placeholder-gray-500 px-4 py-2 rounded border ${
                validationErrors.UserDetails.Website ? "border-red-500 error-highlight" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-purple-400`}
              onChange={handleChange}
              value={formData.UserDetails.Website}
            />
            {validationErrors.UserDetails.Website && (
              <p className="text-red-500 text-xs mt-1">Please enter a valid website URL</p>
            )}
          </div>

          {/* LinkedIn Profile */}
          <div>
            <label htmlFor="LinkedIn" className="block text-sm font-medium mb-1">
              LinkedIn Profile URL
            </label>
            <input
              type="url"
              id="LinkedIn"
              name="LinkedIn"
              placeholder="https://linkedin.com/in/yourprofile"
              className={`w-full bg-gray-100 text-gray-900 placeholder-gray-500 px-4 py-2 rounded border ${
                validationErrors.UserDetails.LinkedIn ? "border-red-500 error-highlight" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-purple-400`}
              onChange={handleChange}
              value={formData.UserDetails.LinkedIn}
            />
            {validationErrors.UserDetails.LinkedIn && (
              <p className="text-red-500 text-xs mt-1">Please enter a valid LinkedIn profile URL</p>
            )}
          </div>

          {/* Topic Selection */}
          {/* <div>
            <label htmlFor="topic" className="block text-sm font-medium mb-1">
              What's your interest? *
            </label>
            <div
              className={`flex items-center space-x-4 ${validationErrors.topic ? "error-highlight" : ""
                }`}
            >
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="topic"
                  value="fn7 GTM Agents"
                  checked={formData.topic === "fn7 GTM Agents"}
                  onChange={handleChange}
                  className={`form-radio h-4 w-4 ${validationErrors.topic
                    ? "border-red-500"
                    : "text-purple-600"
                    }`}
                />
                <span className="ml-2">fn7 GTM Agents</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="topic"
                  value="Atlas Platform"
                  checked={formData.topic === "Atlas Platform"}
                  onChange={handleChange}
                  className={`form-radio h-4 w-4 ${validationErrors.topic
                    ? "border-red-500"
                    : "text-purple-600"
                    }`}
                />
                <span className="ml-2">Atlas Platform</span>
              </label>
            </div>
            {validationErrors.topic && (
              <p className="text-red-500 text-xs mt-1">
                Please select an interest
              </p>
            )}
          </div> */}

          {/* Conditional Questions based on Topic */}
          {/* GTM Agents Questions - Currently Disabled */}
          {/* {formData.topic === "fn7 GTM Agents" && (
            <div className="space-y-6">
              {gtmQuestions.map((question) => (
                <div
                  key={question.id}
                  className="border-t pt-4 first:border-t-0 first:pt-0"
                >
                  <label className="block text-sm font-medium mb-2">
                    {question.text}
                    <span className="text-red-500 ml-1">*</span>
                  </label>

                  {renderQuestion(question)}
                </div>
              ))}
            </div>
          )} */}

          {/* Atlas Platform Questions - Currently Disabled */}
          {/* {formData.topic === "Atlas Platform" && (
            <div className="space-y-6">
              {atlasQuestions.map((question) => (
                <div
                  key={question.id}
                  className="border-t pt-4 first:border-t-0 first:pt-0"
                >
                  <label className="block text-sm font-medium mb-2">
                    {question.text}
                    <span className="text-red-500 ml-1">*</span>
                  </label>

                  {renderQuestion(question)}
                </div>
              ))}
            </div>
          )} */}

          {/* GDPR Consent Section */}
          <div className="border-t pt-6 space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">Data Protection & Privacy</h3>

            {/* Privacy Policy Consent (Required) */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="privacy-consent"
                checked={formData.privacyConsent}
                onChange={(e) => {
                  setFormData({ ...formData, privacyConsent: e.target.checked });
                  setValidationErrors({ ...validationErrors, privacyConsent: false });
                }}
                className={`mt-1 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 ${
                  validationErrors.privacyConsent ? "border-red-500" : ""
                }`}
                required
              />
              <label htmlFor="privacy-consent" className="ml-2 text-sm text-gray-700">
                <span className="text-red-500">*</span> I have read and agree to the{" "}
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  className="text-purple-600 hover:text-purple-700 underline"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/tnc" target="_blank" className="text-purple-600 hover:text-purple-700 underline">
                  Terms of Service
                </Link>
                . I understand that FN7 will process my personal data as described in the Privacy Policy.
              </label>
            </div>
            {validationErrors.privacyConsent && (
              <p className="text-red-500 text-xs ml-6">
                You must accept the Privacy Policy and Terms of Service to continue
              </p>
            )}

            {/* Marketing Consent (Optional) */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="marketing-consent"
                checked={formData.marketingConsent}
                onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })}
                className="mt-1 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <label htmlFor="marketing-consent" className="ml-2 text-sm text-gray-700">
                I would like to receive marketing communications, updates, and promotional offers from FN7 (optional -
                you can unsubscribe at any time)
              </label>
            </div>

            {/* Data Rights Information */}
            <div className="bg-gray-50 p-4 rounded-lg text-xs text-gray-600">
              <p className="font-semibold mb-1">Your Data Rights:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>You have the right to access, correct, or delete your personal data</li>
                <li>You can withdraw consent at any time by contacting us at privacy@fn7.io</li>
                <li>We will only use your data for the purposes stated in our Privacy Policy</li>
                <li>Your data will be stored securely and in compliance with GDPR</li>
              </ul>
            </div>
          </div>

          {/* Submit Button with Loading State */}
          <button
            type="submit"
            className="w-full font-semibold py-3 rounded-lg text-white transition relative"
            style={{
              background: "linear-gradient(90deg, rgba(255,72,44,0.8) 0%, rgba(162,69,238,0.8) 100%)",
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="opacity-0">Submit</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </div>
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </section>
    </div>
  );
};
