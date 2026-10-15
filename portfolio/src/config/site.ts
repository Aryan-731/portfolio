// ===== EDIT THESE VALUES =====
export const SITE = {
  name: "Aryan Raj",
  email: "araj306498@gmail.com",            // replace with your email
  githubUrl: "https://github.com/Aryan-731",  
      // replace
  linkedinUrl: "https://www.linkedin.com/in/aryan-raj-28475828a?utm_source=share_via&utm_content=profile&utm_medium=member_android", // replace
  // Put your photo in /public and set the filename here (e.g. /public/aryan.jpg).
  photoUrl: "/aryan.jpg",
  // Put your PDF in /public (e.g. /public/Aryan_Raj_Resume.pdf) and set "/Aryan_Raj_Resume.pdf".
  // While empty, the resume button is shown as disabled.
  resumeUrl: "/aryan_raj.pdf",
  // Contact form endpoint comes from .env (VITE_FORM_ENDPOINT)
  formEndpoint: (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) ?? "",
};
