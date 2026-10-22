// lib/data.ts

import {
  FileText,
  Boxes,
  TrendingUp,
  MessageCircle,
  BarChart3,
  Smartphone,
  Cog,
  Factory,
  Wrench,
  Package,
  Zap,
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
export const industries = [
  { name: "CNC machining", icon: Cog },
  { name: "Metal fabrication", icon: Factory },
  { name: "Tool and die making", icon: Wrench },
  { name: "Packaging", icon: Package },
  { name: "Electrical assemblies", icon: Zap },
];

export const plans = [
  {
    name: "Starter",
    tagline: "For small workshops getting off spreadsheets.",
    users: "Up to 5 users",
    monthly: 2999,
    annual: 2399,
    highlighted: false,
  },
  {
    name: "Growth",
    tagline: "For growing factories with a busy shop floor.",
    users: "Up to 20 users",
    monthly: 7999,
    annual: 6399,
    highlighted: true,
  },
  {
    name: "Enterprise",
    tagline: "For multi-plant manufacturers with custom needs.",
    users: "Unlimited users",
    monthly: null,
    annual: null,
    highlighted: false,
  },
];
export const featureRows = [
  {
    title: "Quote to order in one click",
    description:
      "Build a priced quote from your product list, send it to the customer, and turn it into a confirmed work order the moment it is approved.",
    points: [
      "Reusable quote templates for repeat jobs",
      "Automatic GST and discount calculation",
      "Approval trail for every revision",
    ],
    mockupTitle: "Quote #Q-2041",
    mockupLines: [
      { label: "Customer", value: "Rao Fabricators" },
      { label: "Steel brackets x 500", value: "₹1,95,000" },
      { label: "GST 18%", value: "₹35,100" },
      { label: "Total", value: "₹2,30,100" },
    ],
  },
  {
    title: "Bills of materials that stay attached",
    description:
      "Every quote carries its BOM, so costing, purchasing and production all work from the same list of parts and quantities.",
    points: [
      "Multi-level BOMs with raw material costs",
      "Cost updates flow into open quotes",
      "One BOM shared by sales and production",
    ],
    mockupTitle: "BOM: Gear housing",
    mockupLines: [
      { label: "Aluminium casting", value: "1 pc" },
      { label: "Bearing 6204", value: "2 pcs" },
      { label: "M8 bolts", value: "8 pcs" },
      { label: "Material cost", value: "₹1,240" },
    ],
  },
  {
    title: "A pipeline your whole team can see",
    description:
      "Enquiries, quotes, work orders and dispatches sit on one board. Drag a job to the next stage and everyone sees the change.",
    points: [
      "Stages that match your own process",
      "Overdue and stuck jobs highlighted",
      "Filter by customer, owner or value",
    ],
    mockupTitle: "Pipeline",
    mockupLines: [
      { label: "Quoted", value: "14 jobs" },
      { label: "In production", value: "9 jobs" },
      { label: "Ready to ship", value: "4 jobs" },
      { label: "Delayed", value: "2 jobs" },
    ],
  },
  {
    title: "Customer updates on WhatsApp",
    description:
      "Send quotes, order confirmations and dispatch notices to customers on WhatsApp, and keep the replies attached to the job.",
    points: [
      "Message templates for every stage",
      "Replies saved against the order",
      "No separate tool to switch to",
    ],
    mockupTitle: "WhatsApp: Mehta Auto Parts",
    mockupLines: [
      { label: "Quote sent", value: "10:02" },
      { label: "Customer approved", value: "10:41" },
      { label: "Work order created", value: "10:41" },
      { label: "Dispatch notice", value: "Tomorrow" },
    ],
  },
];

export const comparisonRows = [
  { capability: "Quotes with live BOM costing", spreadsheets: "partial", genericCrm: "no", kanchanflow: "yes" },
  { capability: "Quote converts to work order", spreadsheets: "no", genericCrm: "no", kanchanflow: "yes" },
  { capability: "Shop-floor pipeline board", spreadsheets: "no", genericCrm: "partial", kanchanflow: "yes" },
  { capability: "WhatsApp customer updates", spreadsheets: "no", genericCrm: "partial", kanchanflow: "yes" },
  { capability: "Mobile app for the shop floor", spreadsheets: "partial", genericCrm: "partial", kanchanflow: "yes" },
  { capability: "Built for manufacturing terms", spreadsheets: "partial", genericCrm: "no", kanchanflow: "yes" },
] as const;