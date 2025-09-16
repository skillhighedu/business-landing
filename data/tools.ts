export const categories = [
  {
    name: "Learning Experience Platform",
    description:
      "Empower students and admins with an engaging platform to manage learning at scale.",
    tools: [
      {
        slug: "student-dashboard", // 👈 unique slug
        name: "Student Dashboard",
        description:
          "Track progress, manage courses, and stay on top of learning with our interactive student dashboard.",
        image: ["/images/student-dashboards.png"],
        features: [
          "Track course progress and completion",
          "View Projects and assignments",
          "Collaborative tools for group work",
          "Access to resources and materials",
          "Bounties and rewards system",
          "Q&A and discussion forums",
          "Quiz and assessments",
          "Resume builder",
          "Mobile-friendly design",
          "Gamification elements for engagement",
          "Regular Updates"
        ],
        extraInfo:
          "Our student dashboard is designed to keep learners motivated, engaged, and on track with their goals.",
      },
      {
        slug: "admin-dashboard",
        name: "Admin Dashboard",
        description:
          "Gain insights, manage users, and oversee the entire learning ecosystem with the powerful admin dashboard.",
        image: ["/images/admin-dashboard.png"],
        features: [
          "Student and courses management",
          "Role-based access control",
          "Analytics and reporting",
          "Bulk student enrollment",
          "Content management system",
          "Automated email notifications",

        ],
        extraInfo:
          "The admin dashboard saves hours of manual work by giving a centralized control panel for all your operations.",
      },
    ],
  },
  {
    name: "Customer Relationship Management (CRM)",
    description:
      "Manage leads, automate workflows, and accelerate your growth with our CRM tools.",
    tools: [
      {
        slug: "crm-tool",
        name: "CRM Tool",
        description:
          "Manage leads, automate tasks, and close deals faster with our powerful CRM built for modern teams.",
        image: ["/images/crm/crm-1.jpg", "/images/crm/crm-2.jpg", "/images/crm/crm-3.jpg, /images/crm/crm-4.jpg, /images/crm/crm-5.jpg"],
        features: [
          "Lead capture and tracking",
          "Automated email follow-ups",
          "Sales pipeline visualization",
        ],
        extraInfo:
          "Our CRM is tailored for edtechs, helping you convert more leads into enrollments without messy spreadsheets.",
      },
    ],
  },
];
