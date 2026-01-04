"use client";

import { useState } from "react";
import Link from "next/link";

// Template data structure
interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  pages: string[];
  features: string[];
  previewImage: string;
  previewUrl?: string;
}

// All 10 categories with 5 subcategories each = 50 unique templates
const templates: Template[] = [
  // ==================== E-COMMERCE (5) ====================
  {
    id: "ecom-fashion-boutique",
    name: "Fashion Boutique Store",
    description: "Elegant fashion e-commerce template with lookbook galleries, seasonal collections, and style inspiration sections. Perfect for clothing brands and fashion retailers.",
    category: "E-commerce",
    subcategory: "Fashion Boutique",
    pages: ["Home", "Shop", "Lookbook", "About", "Blog", "Contact"],
    features: ["Product Catalog", "Size Guide", "Wishlist", "Customer Reviews", "Newsletter Signup"],
    previewImage: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
    previewUrl: "/web-ocean/templates/WO-EC-01/index.html"
  },
  {
    id: "ecom-handmade-crafts",
    name: "Handmade Craft Store",
    description: "Artisanal marketplace template with warm aesthetics, artist profiles, and custom order capabilities. Ideal for handmade goods and craft businesses.",
    category: "E-commerce",
    subcategory: "Handmade Crafts",
    pages: ["Home", "Shop", "Artists", "Custom Orders", "Gallery", "Contact"],
    features: ["Artist Profiles", "Behind-the-Scenes Gallery", "Custom Orders Form", "DIY Blog", "Testimonials"],
    previewImage: "https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=800",
    previewUrl: "/web-ocean/templates/WO-EC-02/index.html"
  },
  {
    id: "ecom-organic-grocery",
    name: "Organic Grocery Store",
    description: "Fresh and clean grocery template with product categories, recipe integration, and subscription box options. Perfect for organic food retailers.",
    category: "E-commerce",
    subcategory: "Organic Grocery",
    pages: ["Home", "Products", "Recipes", "Sustainability", "Subscribe", "Contact"],
    features: ["Product Categories", "Recipe Blog", "Subscription Boxes", "Delivery Tracking", "Community Events"],
    previewImage: "https://images.pexels.com/photos/4033636/pexels-photo-4033636.jpeg?auto=compress&cs=tinysrgb&w=800",
    previewUrl: "/web-ocean/templates/WO-EC-04/index.html"
  },
  {
    id: "ecom-electronics",
    name: "Electronics Gadget Store",
    description: "Modern tech store template with product comparisons, tech reviews, and featured deals sections. Built for electronics and gadget retailers.",
    category: "E-commerce",
    subcategory: "Electronics",
    pages: ["Home", "Products", "Compare", "Reviews", "Deals", "Support"],
    features: ["Product Comparison", "Tech Specs Display", "Deal Countdown", "FAQ Section", "Warranty Info"],
    previewImage: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800",
    previewUrl: "/web-ocean/templates/WO-EC-03/index.html"
  },
  {
    id: "ecom-pet-supplies",
    name: "Pet Supply Store",
    description: "Playful pet store template with product categories, pet care tips, and adoption partnership sections. Perfect for pet shops and suppliers.",
    category: "E-commerce",
    subcategory: "Pet Supplies",
    pages: ["Home", "Shop", "Pet Care", "Adoptions", "Blog", "Contact"],
    features: ["Pet Categories", "Care Tips Blog", "Featured Pet Section", "New Arrivals", "Loyalty Program"],
    previewImage: "https://images.pexels.com/photos/6568942/pexels-photo-6568942.jpeg?auto=compress&cs=tinysrgb&w=800",
    previewUrl: "/web-ocean/templates/WO-EC-05/index.html"
  },

  // ==================== FOOD & RESTAURANTS (5) ====================
  {
    id: "food-cafe-bakery",
    name: "Local Café & Bakery",
    description: "Cozy café template with menu displays, ambiance gallery, and event sections. Perfect for cafés, bakeries, and coffee shops.",
    category: "Food & Restaurants",
    subcategory: "Café & Bakery",
    pages: ["Home", "Menu", "Gallery", "About", "Events", "Contact"],
    features: ["Interactive Menu", "Photo Gallery", "Special Orders", "Recipe Blog", "Reservation Form"],
    previewImage: "https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=800",
    previewUrl: "/web-ocean/templates/WO-FR-01/index.html"
  },
  {
    id: "food-fine-dining",
    name: "Fine Dining Restaurant",
    description: "Sophisticated restaurant template with chef specials, wine lists, and private dining options. Ideal for upscale dining establishments.",
    category: "Food & Restaurants",
    subcategory: "Fine Dining",
    pages: ["Home", "Menu", "Wine List", "Private Dining", "Reservations", "Contact"],
    features: ["Chef's Specials", "Virtual Tour", "Online Reservations", "Testimonials", "Gift Cards"],
    previewImage: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
    previewUrl: "/web-ocean/templates/WO-FR-02/index.html"
  },
  {
    id: "food-food-truck",
    name: "Food Truck & Street Food",
    description: "Vibrant food truck template with location tracking, event calendar, and food gallery. Perfect for mobile food vendors.",
    category: "Food & Restaurants",
    subcategory: "Food Truck",
    pages: ["Home", "Menu", "Locations", "Events", "Gallery", "Contact"],
    features: ["Location Map", "Event Calendar", "Food Gallery", "Story Page", "Social Feed"],
    previewImage: "https://images.pexels.com/photos/1766686/pexels-photo-1766686.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "food-meal-prep",
    name: "Healthy Meal Prep Service",
    description: "Clean meal prep template with weekly plans, nutritional info, and subscription options. Built for meal prep and health food businesses.",
    category: "Food & Restaurants",
    subcategory: "Meal Prep",
    pages: ["Home", "Meal Plans", "Nutrition", "Subscribe", "Success Stories", "FAQ"],
    features: ["Weekly Meal Plans", "Nutritional Calculator", "Subscription System", "Health Blog", "Delivery Tracking"],
    previewImage: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "food-specialty-cuisine",
    name: "Specialty Cuisine Restaurant",
    description: "Cultural restaurant template with signature dishes, chef profiles, and cultural recipe blog. Perfect for sushi bars, Italian bistros, etc.",
    category: "Food & Restaurants",
    subcategory: "Specialty Cuisine",
    pages: ["Home", "Menu", "Chef", "Reservations", "Gallery", "Blog"],
    features: ["Signature Dishes", "Chef Bio", "Cultural Recipes", "Photo Gallery", "Online Booking"],
    previewImage: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800",
  },

  // ==================== FITNESS & WELLNESS (5) ====================
  {
    id: "fitness-yoga-studio",
    name: "Yoga Studio",
    description: "Serene yoga template with class schedules, instructor profiles, and virtual session booking. Perfect for yoga studios and meditation centers.",
    category: "Fitness & Wellness",
    subcategory: "Yoga Studio",
    pages: ["Home", "Classes", "Instructors", "Membership", "Virtual Classes", "Contact"],
    features: ["Class Schedule", "Instructor Bios", "Online Booking", "Membership Plans", "Wellness Blog"],
    previewImage: "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800",
    previewUrl: "/web-ocean/templates/WO-FW-01/index.html"
  },
  {
    id: "fitness-gym",
    name: "Gym & Fitness Center",
    description: "Energetic gym template with workout programs, trainer profiles, and facility tours. Built for gyms and fitness centers.",
    category: "Fitness & Wellness",
    subcategory: "Gym",
    pages: ["Home", "Programs", "Trainers", "Facilities", "Membership", "Contact"],
    features: ["Workout Programs", "Trainer Directory", "Photo Tour", "Personal Training Booking", "Fitness Blog"],
    previewImage: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
    previewUrl: "/web-ocean/templates/WO-FW-02/index.html"
  },
  {
    id: "fitness-spa",
    name: "Spa & Wellness Center",
    description: "Tranquil spa template with treatment menus, appointment booking, and wellness philosophy. Perfect for spas and wellness retreats.",
    category: "Fitness & Wellness",
    subcategory: "Spa",
    pages: ["Home", "Treatments", "Book", "Philosophy", "Gallery", "Contact"],
    features: ["Treatment Menu", "Online Booking", "Team Profiles", "Wellness Blog", "Gift Vouchers"],
    previewImage: "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "fitness-personal-trainer",
    name: "Personal Trainer",
    description: "Dynamic trainer template with training packages, success stories, and consultation booking. Ideal for personal trainers and coaches.",
    category: "Fitness & Wellness",
    subcategory: "Personal Trainer",
    pages: ["Home", "Programs", "Success Stories", "About", "Book", "Blog"],
    features: ["Training Packages", "Client Transformations", "Consultation Booking", "Fitness Tips", "Testimonials"],
    previewImage: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "fitness-nutritionist",
    name: "Nutritionist & Wellness Coach",
    description: "Health-focused template with nutrition plans, recipe library, and consultation booking. Perfect for nutritionists and health coaches.",
    category: "Fitness & Wellness",
    subcategory: "Nutritionist",
    pages: ["Home", "Plans", "Recipes", "Resources", "Consult", "Success Stories"],
    features: ["Nutrition Plans", "Recipe Library", "Downloadable Guides", "Consultation Booking", "Client Results"],
    previewImage: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=800",
  },

  // ==================== PORTFOLIO & FREELANCERS (5) ====================
  {
    id: "portfolio-graphic-designer",
    name: "Graphic Designer Portfolio",
    description: "Creative portfolio template with project galleries, case studies, and service offerings. Perfect for graphic designers and visual artists.",
    category: "Portfolio & Freelancers",
    subcategory: "Graphic Designer",
    pages: ["Home", "Portfolio", "Services", "About", "Blog", "Contact"],
    features: ["Project Gallery", "Case Studies", "Service Packages", "Design Blog", "Client Testimonials"],
    previewImage: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    previewUrl: "/web-ocean/templates/WO-PF-01/index.html"
  },
  {
    id: "portfolio-photographer",
    name: "Photographer Portfolio",
    description: "Visual-first photography template with themed galleries, booking system, and project showcases. Built for photographers.",
    category: "Portfolio & Freelancers",
    subcategory: "Photographer",
    pages: ["Home", "Gallery", "Services", "Book", "About", "Blog"],
    features: ["Themed Galleries", "Session Booking", "Photography Blog", "Client Reviews", "Pricing Packages"],
    previewImage: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800",
    previewUrl: "/web-ocean/templates/WO-PF-02/index.html"
  },
  {
    id: "portfolio-writer",
    name: "Writer & Content Creator",
    description: "Clean writer portfolio with writing samples, service offerings, and content blog. Perfect for writers and content creators.",
    category: "Portfolio & Freelancers",
    subcategory: "Writer",
    pages: ["Home", "Portfolio", "Services", "About", "Blog", "Contact"],
    features: ["Writing Samples", "Service Packages", "Content Blog", "Client Testimonials", "Inquiry Form"],
    previewImage: "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "portfolio-web-developer",
    name: "Web Developer Portfolio",
    description: "Modern developer portfolio with project showcases, tech stack display, and service offerings. Ideal for web developers.",
    category: "Portfolio & Freelancers",
    subcategory: "Web Developer",
    pages: ["Home", "Projects", "Services", "Tech Stack", "Blog", "Contact"],
    features: ["Project Showcase", "Tech Stack Display", "Code Blog", "Client Feedback", "Hire Me CTA"],
    previewImage: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "portfolio-consultant",
    name: "Freelance Consultant",
    description: "Professional consultant template with service offerings, case studies, and consultation booking. Perfect for independent consultants.",
    category: "Portfolio & Freelancers",
    subcategory: "Consultant",
    pages: ["Home", "Services", "Case Studies", "About", "Book", "Resources"],
    features: ["Service Packages", "Client Success Stories", "Consultation Booking", "Industry Blog", "Resource Library"],
    previewImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
  },

  // ==================== EDUCATION & COURSES (5) ====================
  {
    id: "edu-online-learning",
    name: "Online Learning Platform",
    description: "Comprehensive learning template with course catalogs, instructor directories, and enrollment systems. Perfect for online education platforms.",
    category: "Education & Courses",
    subcategory: "Online Learning",
    pages: ["Home", "Courses", "Instructors", "Enroll", "Blog", "Support"],
    features: ["Course Catalog", "Instructor Profiles", "Enrollment System", "Student Testimonials", "Live Sessions Calendar"],
    previewImage: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=800",
    previewUrl: "/web-ocean/templates/WO-ED-01/index.html"
  },
  {
    id: "edu-language-learning",
    name: "Language Learning Platform",
    description: "Interactive language template with course levels, community forums, and progress tracking. Built for language schools and tutors.",
    category: "Education & Courses",
    subcategory: "Language Learning",
    pages: ["Home", "Courses", "Community", "Resources", "Progress", "Contact"],
    features: ["Language Courses", "Interactive Lessons", "Community Forum", "Progress Tracking", "Resource Library"],
    previewImage: "https://images.pexels.com/photos/4386426/pexels-photo-4386426.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "edu-professional-dev",
    name: "Professional Development",
    description: "Corporate training template with certification programs, webinar calendars, and enrollment systems. Ideal for professional training providers.",
    category: "Education & Courses",
    subcategory: "Professional Development",
    pages: ["Home", "Programs", "Certifications", "Webinars", "Enroll", "Resources"],
    features: ["Training Programs", "Certification Tracks", "Webinar Calendar", "Industry Blog", "Corporate Packages"],
    previewImage: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "edu-art-workshops",
    name: "Art & Creative Workshops",
    description: "Creative workshop template with class schedules, instructor profiles, and project galleries. Perfect for art schools and creative studios.",
    category: "Education & Courses",
    subcategory: "Art Workshops",
    pages: ["Home", "Workshops", "Instructors", "Gallery", "Register", "Blog"],
    features: ["Workshop Schedule", "Instructor Bios", "Student Gallery", "Registration System", "Creative Tips Blog"],
    previewImage: "https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "edu-kids-programs",
    name: "Kids Educational Programs",
    description: "Playful education template with age-based programs, parent resources, and activity calendars. Built for children's education centers.",
    category: "Education & Courses",
    subcategory: "Kids Programs",
    pages: ["Home", "Programs", "Activities", "Parents", "Register", "Contact"],
    features: ["Age-Based Programs", "Activity Calendar", "Parent Resources", "Testimonials", "Event Registration"],
    previewImage: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800",
    previewUrl: "/web-ocean/templates/WO-ED-02/index.html"
  },

  // ==================== BLOGS & CONTENT CREATORS (5) ====================
  {
    id: "blog-personal",
    name: "Personal Blog",
    description: "Clean personal blog template with featured posts, category archives, and social integration. Perfect for personal bloggers and writers.",
    category: "Blogs & Content Creators",
    subcategory: "Personal Blog",
    pages: ["Home", "Blog", "About", "Categories", "Contact"],
    features: ["Featured Posts", "Category Archives", "Comments Section", "Social Integration", "Newsletter Signup"],
    previewImage: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "blog-travel",
    name: "Travel Blog",
    description: "Adventure travel template with destination guides, photo galleries, and travel maps. Built for travel bloggers and adventurers.",
    category: "Blogs & Content Creators",
    subcategory: "Travel Blog",
    pages: ["Home", "Destinations", "Gallery", "Map", "About", "Contact"],
    features: ["Destination Guides", "Photo Gallery", "Travel Map", "Itineraries", "Collaboration Page"],
    previewImage: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800",
    previewUrl: "/web-ocean/templates/WO-BL-01/index.html"
  },
  {
    id: "blog-food",
    name: "Food Blog",
    description: "Delicious food blog template with recipe archives, cuisine categories, and cooking tips. Perfect for food bloggers and recipe creators.",
    category: "Blogs & Content Creators",
    subcategory: "Food Blog",
    pages: ["Home", "Recipes", "Categories", "About", "Gallery", "Contact"],
    features: ["Recipe Index", "Cuisine Categories", "Photo Gallery", "Cooking Tips", "Newsletter"],
    previewImage: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800",
    previewUrl: "/web-ocean/templates/WO-BL-02/index.html"
  },
  {
    id: "blog-tech",
    name: "Tech & Gadget Blog",
    description: "Modern tech blog template with gadget reviews, comparison tools, and tech news sections. Ideal for tech reviewers and enthusiasts.",
    category: "Blogs & Content Creators",
    subcategory: "Tech Blog",
    pages: ["Home", "Reviews", "Compare", "News", "Tutorials", "About"],
    features: ["Gadget Reviews", "Comparison Tool", "Tech News", "How-To Tutorials", "Newsletter"],
    previewImage: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "blog-parenting",
    name: "Parenting Blog",
    description: "Warm parenting blog template with age-based tips, resource library, and community features. Perfect for parenting bloggers.",
    category: "Blogs & Content Creators",
    subcategory: "Parenting Blog",
    pages: ["Home", "Tips", "Resources", "Community", "About", "Contact"],
    features: ["Age-Based Tips", "Resource Downloads", "Parent Stories", "Community Forum", "Newsletter"],
    previewImage: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800",
  },

  // ==================== CONSULTING & SERVICES (5) ====================
  {
    id: "consulting-business",
    name: "Business Consulting",
    description: "Professional consulting template with service offerings, case studies, and resource library. Perfect for business consultants and advisors.",
    category: "Consulting & Services",
    subcategory: "Business Consulting",
    pages: ["Home", "Services", "Case Studies", "Resources", "Team", "Contact"],
    features: ["Service Packages", "Client Case Studies", "Whitepaper Library", "Team Profiles", "Consultation Booking"],
    previewImage: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    previewUrl: "/web-ocean/templates/WO-CS-01/index.html"
  },
  {
    id: "consulting-marketing",
    name: "Marketing Agency",
    description: "Dynamic agency template with service portfolios, campaign showcases, and pricing packages. Built for marketing agencies.",
    category: "Consulting & Services",
    subcategory: "Marketing Agency",
    pages: ["Home", "Services", "Portfolio", "Pricing", "Blog", "Contact"],
    features: ["Service Portfolio", "Campaign Showcases", "Pricing Packages", "Marketing Blog", "Client Testimonials"],
    previewImage: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "consulting-it-services",
    name: "IT Services",
    description: "Technical IT template with solution offerings, client portfolio, and support resources. Ideal for IT service providers.",
    category: "Consulting & Services",
    subcategory: "IT Services",
    pages: ["Home", "Solutions", "Portfolio", "Support", "Team", "Contact"],
    features: ["IT Solutions", "Client Portfolio", "FAQ Section", "Tech Blog", "Support Ticket System"],
    previewImage: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800",
    previewUrl: "/web-ocean/templates/WO-CS-02/index.html"
  },
  {
    id: "consulting-legal",
    name: "Legal Services",
    description: "Professional legal template with practice areas, attorney profiles, and consultation booking. Perfect for law firms and attorneys.",
    category: "Consulting & Services",
    subcategory: "Legal Services",
    pages: ["Home", "Practice Areas", "Attorneys", "Resources", "Consult", "Contact"],
    features: ["Practice Areas", "Attorney Profiles", "Legal Guides", "FAQ Section", "Consultation Booking"],
    previewImage: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "consulting-creative-agency",
    name: "Creative Agency",
    description: "Bold creative agency template with portfolio showcases, team profiles, and service offerings. Built for creative studios.",
    category: "Consulting & Services",
    subcategory: "Creative Agency",
    pages: ["Home", "Work", "Services", "Team", "Blog", "Contact"],
    features: ["Portfolio Showcase", "Service Packages", "Team Profiles", "Creative Blog", "Client Testimonials"],
    previewImage: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
  },

  // ==================== REAL ESTATE (5) ====================
  {
    id: "realestate-residential",
    name: "Residential Real Estate",
    description: "Modern residential template with property listings, agent profiles, and mortgage calculators. Perfect for residential realtors.",
    category: "Real Estate",
    subcategory: "Residential",
    pages: ["Home", "Listings", "Agents", "Calculator", "Blog", "Contact"],
    features: ["Property Listings", "Search Filters", "Agent Profiles", "Mortgage Calculator", "Home Buying Tips"],
    previewImage: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    previewUrl: "/web-ocean/templates/WO-RE-01/index.html"
  },
  {
    id: "realestate-commercial",
    name: "Commercial Real Estate",
    description: "Professional commercial template with property listings, market trends, and investment resources. Built for commercial realtors.",
    category: "Real Estate",
    subcategory: "Commercial",
    pages: ["Home", "Properties", "Market Trends", "Agents", "Resources", "Contact"],
    features: ["Commercial Listings", "Property Comparison", "Market Analysis", "Investment Guides", "Agent Directory"],
    previewImage: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "realestate-vacation",
    name: "Vacation Rentals",
    description: "Inviting vacation rental template with property showcases, booking calendars, and travel tips. Perfect for vacation rental businesses.",
    category: "Real Estate",
    subcategory: "Vacation Rentals",
    pages: ["Home", "Properties", "Book", "Travel Tips", "Gallery", "Contact"],
    features: ["Property Showcase", "Availability Calendar", "Online Booking", "Photo Gallery", "Guest Reviews"],
    previewImage: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "realestate-property-mgmt",
    name: "Property Management",
    description: "Comprehensive property management template with service offerings, owner resources, and tenant portals. Ideal for property managers.",
    category: "Real Estate",
    subcategory: "Property Management",
    pages: ["Home", "Services", "Owners", "Tenants", "Resources", "Contact"],
    features: ["Service Packages", "Owner Portal", "Tenant Resources", "Maintenance Requests", "Property Blog"],
    previewImage: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "realestate-luxury",
    name: "Luxury Real Estate",
    description: "Elegant luxury template with premium property showcases, virtual tours, and exclusive agent profiles. Built for luxury realtors.",
    category: "Real Estate",
    subcategory: "Luxury",
    pages: ["Home", "Properties", "Virtual Tours", "Agents", "Lifestyle", "Contact"],
    features: ["Premium Listings", "Virtual Tours", "Exclusive Agents", "Lifestyle Blog", "Private Showings"],
    previewImage: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800",
    previewUrl: "/web-ocean/templates/WO-RE-02/index.html"
  },

  // ==================== EVENTS & WEDDINGS (5) ====================
  {
    id: "events-wedding-planning",
    name: "Wedding Planning",
    description: "Romantic wedding template with service packages, vendor directories, and planning checklists. Perfect for wedding planners.",
    category: "Events & Weddings",
    subcategory: "Wedding Planning",
    pages: ["Home", "Services", "Vendors", "Gallery", "Checklist", "Contact"],
    features: ["Service Packages", "Vendor Directory", "Wedding Gallery", "Planning Checklist", "Testimonials"],
    previewImage: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
    previewUrl: "/web-ocean/templates/WO-EV-01/index.html"
  },
  {
    id: "events-event-management",
    name: "Event Management",
    description: "Professional event template with service offerings, event galleries, and vendor networks. Built for event management companies.",
    category: "Events & Weddings",
    subcategory: "Event Management",
    pages: ["Home", "Services", "Events", "Vendors", "Calendar", "Contact"],
    features: ["Event Types", "Past Events Gallery", "Vendor Network", "Event Calendar", "Client Testimonials"],
    previewImage: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "events-party-planning",
    name: "Party Planning",
    description: "Fun party template with theme showcases, planning checklists, and vendor recommendations. Perfect for party planners.",
    category: "Events & Weddings",
    subcategory: "Party Planning",
    pages: ["Home", "Themes", "Gallery", "Checklist", "Vendors", "Book"],
    features: ["Party Themes", "Photo Gallery", "Planning Checklist", "Vendor Directory", "Booking Form"],
    previewImage: "https://images.pexels.com/photos/1405528/pexels-photo-1405528.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "events-conference",
    name: "Conference & Seminar",
    description: "Professional conference template with schedules, speaker profiles, and registration systems. Ideal for conference organizers.",
    category: "Events & Weddings",
    subcategory: "Conference",
    pages: ["Home", "Schedule", "Speakers", "Register", "Resources", "Contact"],
    features: ["Event Schedule", "Speaker Profiles", "Registration System", "Resource Library", "Attendee Testimonials"],
    previewImage: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "events-corporate",
    name: "Corporate Events",
    description: "Sleek corporate event template with event types, past showcases, and booking systems. Built for corporate event planners.",
    category: "Events & Weddings",
    subcategory: "Corporate Events",
    pages: ["Home", "Services", "Portfolio", "Vendors", "Book", "Contact"],
    features: ["Event Types", "Corporate Portfolio", "Vendor Network", "Event Checklist", "Booking System"],
    previewImage: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
    previewUrl: "/web-ocean/templates/WO-EV-02/index.html"
  },

  // ==================== NGOs & NON-PROFITS (5) ====================
  {
    id: "ngo-charity",
    name: "Charity Organization",
    description: "Impactful charity template with campaign showcases, donation systems, and impact stories. Perfect for charitable organizations.",
    category: "NGOs & Non-Profits",
    subcategory: "Charity",
    pages: ["Home", "Campaigns", "Donate", "Impact", "Volunteer", "Contact"],
    features: ["Campaign Showcases", "Donation System", "Impact Stories", "Volunteer Signup", "Annual Reports"],
    previewImage: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800",
    previewUrl: "/web-ocean/templates/WO-NG-01/index.html"
  },
  {
    id: "ngo-environmental",
    name: "Environmental NGO",
    description: "Green environmental template with conservation projects, educational resources, and volunteer programs. Built for environmental organizations.",
    category: "NGOs & Non-Profits",
    subcategory: "Environmental",
    pages: ["Home", "Projects", "Resources", "Volunteer", "Partners", "Contact"],
    features: ["Conservation Projects", "Educational Materials", "Volunteer Programs", "Partnership Page", "Impact Reports"],
    previewImage: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "ngo-community",
    name: "Community Outreach",
    description: "Warm community template with program showcases, volunteer opportunities, and donation options. Perfect for community organizations.",
    category: "NGOs & Non-Profits",
    subcategory: "Community",
    pages: ["Home", "Programs", "Stories", "Volunteer", "Donate", "Contact"],
    features: ["Program Showcases", "Community Stories", "Volunteer Signup", "Donation Page", "Resource Guides"],
    previewImage: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "ngo-healthcare",
    name: "Healthcare NGO",
    description: "Compassionate healthcare template with program information, patient stories, and support options. Ideal for healthcare non-profits.",
    category: "NGOs & Non-Profits",
    subcategory: "Healthcare",
    pages: ["Home", "Programs", "Stories", "Support", "Resources", "Contact"],
    features: ["Healthcare Programs", "Patient Stories", "Support Options", "Resource Library", "Volunteer Opportunities"],
    previewImage: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "ngo-education",
    name: "Education NGO",
    description: "Inspiring education template with scholarship programs, student success stories, and donation options. Built for education-focused non-profits.",
    category: "NGOs & Non-Profits",
    subcategory: "Education",
    pages: ["Home", "Programs", "Scholarships", "Stories", "Donate", "Contact"],
    features: ["Education Programs", "Scholarship Info", "Student Stories", "Donation System", "Volunteer Teaching"],
    previewImage: "https://images.pexels.com/photos/8613312/pexels-photo-8613312.jpeg?auto=compress&cs=tinysrgb&w=800",
  }
];

// Get unique categories
const categories = [...new Set(templates.map(t => t.category))];

export default function WebOceanPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  // Filter templates based on category and search
  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          template.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Group templates by category for display
  const groupedTemplates = filteredTemplates.reduce((acc, template) => {
    if (!acc[template.category]) {
      acc[template.category] = [];
    }
    acc[template.category].push(template);
    return acc;
  }, {} as Record<string, Template[]>);

  return (
    <>
      {/* Hero Section */}
      <section className="web-ocean-hero">
        <div className="container">
          <div className="hero-badge">🌊 50+ Premium Templates</div>
          <h1 className="web-ocean-title">Web Ocean</h1>
          <p className="web-ocean-subtitle">Dive into our collection of professionally designed website templates</p>
          <p className="web-ocean-description">
            Every template is crafted with modern design principles, mobile-first responsiveness, and conversion-optimized layouts. 
            Choose your industry, customize to your brand, and launch faster than ever.
          </p>
          
          {/* Search Bar */}
          <div className="web-ocean-search">
            <input
              type="text"
              placeholder="Search templates by name, category, or feature..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="web-ocean-filters">
        <div className="container">
          <div className="filter-tabs">
            <button
              className={`filter-tab ${selectedCategory === "All" ? "active" : ""}`}
              onClick={() => setSelectedCategory("All")}
            >
              All Categories
            </button>
            {categories.map(category => (
              <button
                key={category}
                className={`filter-tab ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="web-ocean-templates">
        <div className="container">
          {Object.entries(groupedTemplates).map(([category, categoryTemplates]) => (
            <div key={category} className="category-section">
              <div className="category-header">
                <h2 className="category-title">{category}</h2>
                <span className="category-count">{categoryTemplates.length} templates</span>
              </div>
              <div className="templates-grid">
                {categoryTemplates.map(template => (
                  <div key={template.id} className="template-card">
                    <div className="template-image">
                      <img src={template.previewImage} alt={template.name} loading="lazy" />
                      <div className="template-overlay">
                        {template.previewUrl && (
                          <Link
                            href={template.previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary btn-small"
                          >
                            Live Preview
                          </Link>
                        )}
                        <button 
                          className="btn btn-primary btn-small"
                          onClick={() => setSelectedTemplate(template)}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                    <div className="template-content">
                      <span className="template-subcategory">{template.subcategory}</span>
                      <h3 className="template-name">{template.name}</h3>
                      <p className="template-description">{template.description}</p>
                      <div className="template-footer">
                        <span className="template-pages">{template.pages.length} pages</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredTemplates.length === 0 && (
            <div className="no-results">
              <h3>No templates found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Template Detail Modal */}
      {selectedTemplate && (
        <div className="template-modal-overlay" onClick={() => setSelectedTemplate(null)}>
          <div className="template-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedTemplate(null)}>×</button>
            
            <div className="modal-header">
              <img src={selectedTemplate.previewImage} alt={selectedTemplate.name} className="modal-image" />
            </div>
            
            <div className="modal-body">
              <span className="modal-category">{selectedTemplate.category} • {selectedTemplate.subcategory}</span>
              <h2 className="modal-title">{selectedTemplate.name}</h2>
              <p className="modal-description">{selectedTemplate.description}</p>
              
              <div className="modal-section">
                <h4>Included Pages</h4>
                <div className="modal-tags">
                  {selectedTemplate.pages.map(page => (
                    <span key={page} className="modal-tag">{page}</span>
                  ))}
                </div>
              </div>
              
              <div className="modal-section">
                <h4>Key Features</h4>
                <ul className="modal-features">
                  {selectedTemplate.features.map(feature => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="modal-footer">
                <div className="modal-actions">
                  {selectedTemplate.previewUrl && (
                    <Link
                      href={selectedTemplate.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      Live Preview
                    </Link>
                  )}
                  <Link href={`/contact?template=${selectedTemplate.id}`} className="btn btn-primary">
                    Get This Template
                  </Link>
                  <Link href="/contact" className="btn btn-secondary">
                    Request Custom Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="web-ocean-cta">
        <div className="container">
          <h2>Can't Find What You're Looking For?</h2>
          <p>We create custom website designs tailored to your specific industry and requirements. Let's discuss your vision and build something unique together.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-primary btn-large">Request Custom Design</Link>
            <Link href="/services" className="btn btn-secondary btn-large">View All Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
