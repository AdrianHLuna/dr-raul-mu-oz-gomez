import { z } from "zod";

// ─── Sub-schemas ──────────────────────────────────────────────
const SEOSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  keywords: z.array(z.string()).optional(),
  ogImage: z.string().optional(),
});

const ExperienceItemSchema = z.object({
  year: z.string(),
  title: z.string(),
  description: z.string(),
});

const CertificationSchema = z.object({
  name: z.string(),
  institution: z.string().optional(),
  logo: z.string().optional(),
  year: z.string().optional(),
});

const EducationSchema = z.object({
  degree: z.string(),
  institution: z.string().optional(),
  year: z.string().optional(),
});

const FAQItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
  category: z.string().optional(),
});

const TestimonialSchema = z.object({
  id: z.string(),
  patientName: z.string().optional(),
  name: z.string().optional(),
  rating: z.number().min(1).max(5),
  text: z.string().optional(),
  comment: z.string().optional(),
  image: z.string().optional(),
  sourceUrl: z.string().url().optional(),
  date: z.string(),
  condition: z.string().optional(),
  treatment: z.string().optional(),
  age: z.number().optional(),
});

const VideoSchema = z.object({
  title: z.string(),
  description: z.string(),
  url: z.string().url(),
  thumbnailUrl: z.string().url(),
  duration: z.string().optional(),
  uploadDate: z.string(),
});

// ─── Doctor Profile ───────────────────────────────────────────
export const DoctorProfileSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  title: z.string(),
  specialty: z.string(),
  specialistTitle: z.string().optional(),
  subspecialty: z.string().optional(),
  cedula: z.string(),
  cedulaEspecialidad: z.string().optional(),
  cedulaSubespecialidad: z.string().optional(),
  cofepris: z.string().optional(),
  phone: z.string(),
  whatsapp: z.string(),
  emergencyPhone: z.string().optional(),
  email: z.string().email().optional(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  googleMapsUrl: z.string(),
  doctoraliaUrl: z.string().optional(),
  instagramUrl: z.string().optional(),
  facebookUrl: z.string().optional(),
  consultationPrice: z.number(),
  consultationFollowUpPrice: z.number().optional(),
  experienceYears: z.number().optional(),
  surgeriesCount: z.string().optional(),
  patientsCount: z.string().optional(),
  paymentMethods: z.array(z.string()),
  insurances: z.array(z.string()).optional(),
  schedule: z.string(),
  photo: z.string(),
  logo: z.string().optional(),
  footerLogo: z.string().optional(),
  heroImage: z.string().optional(),
  aboutPhoto: z.string().optional(),
  bio: z.string(),
  philosophy: z.string().optional(),
  experience: z.array(z.any()).optional(),
  certifications: z.array(z.any()).optional(),
  education: z.array(z.any()).optional(),
  hospitalAffiliations: z.array(z.string()).optional(),
  testimonials: z.array(z.any()).optional(),
  videos: z.array(z.any()).optional(),
  sameAs: z.array(z.string()).optional(),
  ga4Id: z.string().optional(),
});

// ─── Medical Condition (Enfermedad) ───────────────────────────
export const MedicalConditionSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  shortDescription: z.string().optional(),
  technicalName: z.string().optional(),
  description: z.string(),
  symptoms: z.array(z.string()),
  causes: z.array(z.string()),
  riskFactors: z.array(z.string()).optional(),
  prevention: z.array(z.string()).optional(),
  mexicoStats: z.string().optional(),
  complications: z.array(z.string()).optional(),
  treatments: z.array(z.string()), // Sin fármacos de patente
  faqs: z.array(FAQItemSchema).optional(),
  sources: z.array(z.string()).optional(),
  relatedServices: z.array(z.string()).optional(),
  relatedSymptoms: z.array(z.string()).optional(),
  image: z.string().optional(),
  sameAs: z.string().optional(),
  seo: SEOSchema.optional(),
});

// ─── Medical Service (Servicio/Cirugía) ───────────────────────
export const MedicalServiceSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  shortDescription: z.string().optional(),
  description: z.string(),
  longDescription: z.string().optional(),
  isSurgical: z.boolean().optional(),
  type: z.string().optional(),
  anesthesiaType: z.string().optional(),
  duration: z.string().optional(),
  recoveryTime: z.string().optional(),
  isPainful: z.boolean().optional(),
  benefits: z.array(z.string()),
  indications: z.array(z.string()).optional(),
  procedureDescription: z.string().optional(),
  postOpRecommendations: z.array(z.string()).optional(),
  priceRange: z.string().optional(),
  technicalSpecs: z.record(z.string(), z.string()).optional(),
  relatedConditions: z.array(z.string()).optional(),
  video: VideoSchema.optional(),
  image: z.string().optional(),
  seo: SEOSchema.optional(),
});

// ─── Symptom (Síntoma) ───────────────────────────────────────
export const SymptomSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  shortDescription: z.string().optional(),
  description: z.string(),
  causes: z.array(z.string()).optional(),
  whyConsult: z.string(),
  relatedConditions: z.array(z.string()).optional(),
  relatedDiseases: z.array(z.string()).optional(),
  image: z.string().optional(),
  seo: SEOSchema.optional(),
});

// ─── Tipos inferidos ─────────────────────────────────────────
export type Doctor = z.infer<typeof DoctorProfileSchema>;
export type DoctorProfile = Doctor;
export type Disease = z.infer<typeof MedicalConditionSchema>;
export type MedicalCondition = Disease;
export type Service = z.infer<typeof MedicalServiceSchema>;
export type MedicalService = Service;
export type Symptom = z.infer<typeof SymptomSchema>;
export type Testimonial = z.infer<typeof TestimonialSchema>;
export type FAQItem = z.infer<typeof FAQItemSchema>;
