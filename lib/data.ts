// lib/data.ts

import {
  FileText,
  Boxes,
  TrendingUp,
  MessageCircle,
  BarChart3,
  Smartphone,
} from "lucide-react";

export const features = [
  {
    title: "Quote to order",
    description:
      "Build a priced quote in minutes and convert it to a confirmed order with one click, no retyping.",
    icon: FileText,
  },
  {
    title: "BOM management",
    description:
      "Keep bills of materials attached to every quote so costing and production always match.",
    icon: Boxes,
  },
  {
    title: "Sales pipeline",
    description:
      "See every enquiry, quote and work order move across your shop-floor pipeline stage by stage.",
    icon: TrendingUp,
  },
  {
    title: "WhatsApp updates",
    description:
      "Send quotes and order status to customers on WhatsApp, where they already answer.",
    icon: MessageCircle,
  },
  {
    title: "Reports that matter",
    description:
      "Track win rate, order value and delivery delays without exporting a single spreadsheet.",
    icon: BarChart3,
  },
  {
    title: "Mobile app",
    description:
      "Check orders, approve quotes and update work orders from the shop floor on your phone.",
    icon: Smartphone,
  },
];

export const homeFaqs = [
  {
    question: "Who is KanchanFlow built for?",
    answer:
      "Small and mid-sized manufacturers that quote custom jobs, run work orders and need their sales and shop floor on the same page.",
  },
  {
    question: "Can we import our existing customers and quotes?",
    answer:
      "Yes. You can import customers, products and open quotes from Excel or CSV files during setup.",
  },
  {
    question: "Does KanchanFlow work on the shop floor?",
    answer:
      "Yes. The mobile app lets your team view and update work orders from any phone, even with a weak connection.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Every plan starts with a 14-day free trial. No credit card is needed to begin.",
  },
];