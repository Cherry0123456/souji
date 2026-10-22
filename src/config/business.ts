/**
 * Business Configuration for Souji's Kitchen, Guntur
 * 
 * NOTE FOR BUSINESS OWNER:
 * To update your verified WhatsApp number, address, or operating hours,
 * modify the values below. All WhatsApp buttons and links throughout
 * the site automatically use these settings.
 */

export interface BusinessConfig {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  aboutText: string;
  locationCity: string;
  locationState: string;
  locationCountry: string;
  addressLine: string;
  landmark: string;
  whatsAppNumber: string; // Formatted without '+' or spaces for https://wa.me/
  whatsAppDisplayNumber: string;
  instagramUrl: string;
  instagramHandle: string;
  businessHours: string;
  googleMapsUrl: string;
}

export const DEFAULT_BUSINESS_CONFIG: BusinessConfig = {
  name: "Souji’s Kitchen",
  tagline: "Homemade Goodness, Made with Love",
  heroHeadline: "Homemade Goodness, Made with Love.",
  heroSubheadline: "Discover delicious food prepared with care at Souji’s Kitchen.",
  aboutText: "Welcome to Souji’s Kitchen, a food brand based in Guntur. Explore our food collection and get in touch with us to enquire about available items and place your order.",
  locationCity: "Guntur",
  locationState: "Andhra Pradesh",
  locationCountry: "India",
  addressLine: "Opposite NTR Stadium, beside Raitu Nestam",
  landmark: "Opposite NTR Stadium, Guntur",
  // Editable WhatsApp number placeholder (Default Indian format: 91 + 10 digits)
  // Replace with the owner's verified number when ready, e.g. "919876543210"
  whatsAppNumber: "919876543210",
  whatsAppDisplayNumber: "+91 98765 43210",
  instagramUrl: "https://www.instagram.com/soujis_kitchen/",
  instagramHandle: "@soujis_kitchen",
  businessHours: "Monday – Sunday: 10:00 AM – 8:30 PM (Batch timings may vary)",
  googleMapsUrl: "https://maps.google.com/?q=NTR+Stadium+Guntur+Andhra+Pradesh"
};

/**
 * Generates a clean WhatsApp chat link with an encoded prefilled message
 */
export function createWhatsAppUrl(phoneNumber: string, message: string): string {
  // Clean phone number: remove any non-digit characters
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}
