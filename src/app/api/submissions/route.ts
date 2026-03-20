import { NextRequest, NextResponse } from "next/server";

export interface Submission {
  id: string;
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  timeline: string;
  budget: string;
  description: string;
  createdAt: string;
  status: "new" | "contacted" | "quoted" | "won" | "lost";
}

const submissions: Submission[] = [
  {
    id: "sub_001",
    name: "Maria Santos",
    phone: "(650) 312-8847",
    email: "maria.santos@gmail.com",
    serviceType: "Kitchen & Bath Remodel",
    timeline: "1-3 Months",
    budget: "$50K-$100K",
    description:
      "Full kitchen remodel in our Redwood City home. Want to open up the wall between kitchen and dining room, new quartz countertops, custom cabinets, and update all appliances to stainless steel. Approx 200 sq ft kitchen.",
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    status: "new",
  },
  {
    id: "sub_002",
    name: "David Chen",
    phone: "(408) 555-2091",
    email: "dchen84@yahoo.com",
    serviceType: "ADU",
    timeline: "3-6 Months",
    budget: "$100K-$250K",
    description:
      "Looking to build a detached ADU in our backyard in San Mateo. Approximately 600 sq ft, 1 bed / 1 bath. Want to use it as a rental unit. Need help with permits and design as well.",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: "contacted",
  },
  {
    id: "sub_003",
    name: "Jennifer Alvarez",
    phone: "(650) 773-4456",
    email: "jalvarez@outlook.com",
    serviceType: "Home Addition",
    timeline: "3-6 Months",
    budget: "$100K-$250K",
    description:
      "We want to add a second story to our single-story home in Hayward. Currently 1,400 sq ft, looking to add 2 bedrooms and a bathroom upstairs. Need structural engineering included.",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    status: "quoted",
  },
  {
    id: "sub_004",
    name: "Robert Nguyen",
    phone: "(510) 889-3321",
    email: "rob.nguyen@gmail.com",
    serviceType: "Hardscape & Landscape",
    timeline: "ASAP",
    budget: "$25K-$50K",
    description:
      "Need a complete backyard hardscape — concrete patio, retaining wall, and built-in BBQ area. Property is in Fremont. Yard is about 1,500 sq ft. Want to get this done before summer.",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: "contacted",
  },
  {
    id: "sub_005",
    name: "Patricia Morales",
    phone: "(650) 224-7890",
    email: "pmorales@icloud.com",
    serviceType: "Kitchen & Bath Remodel",
    timeline: "1-3 Months",
    budget: "$25K-$50K",
    description:
      "Master bathroom remodel in Redwood City. Want to convert tub to walk-in shower, new tile, double vanity, and heated floors. About 80 sq ft bathroom.",
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    status: "won",
  },
  {
    id: "sub_006",
    name: "James O'Brien",
    phone: "(415) 667-1234",
    email: "jobrien.sf@gmail.com",
    serviceType: "New Construction",
    timeline: "6+ Months",
    budget: "$250K+",
    description:
      "Planning to tear down existing structure and build new 2,800 sq ft home in Belmont. Have architectural plans already. Need a GC who can handle the full build. Looking for someone licensed and experienced with city permits.",
    createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    status: "quoted",
  },
  {
    id: "sub_007",
    name: "Linda Tran",
    phone: "(408) 991-5567",
    email: "linda.tran@hotmail.com",
    serviceType: "Outdoor Living",
    timeline: "1-3 Months",
    budget: "Under $25K",
    description:
      "Want to build a covered pergola with string lights and an outdoor kitchen counter in our Sunnyvale backyard. Nothing too crazy, just a nice entertaining space.",
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    status: "new",
  },
  {
    id: "sub_008",
    name: "Carlos Gutierrez",
    phone: "(650) 443-8812",
    email: "cgutierrez@gmail.com",
    serviceType: "ADU",
    timeline: "3-6 Months",
    budget: "$100K-$250K",
    description:
      "Interested in a garage conversion ADU at our property in East Palo Alto. 2-car garage, want to convert to a 1 bed / 1 bath unit with a small kitchenette. Need to understand permit timeline.",
    createdAt: new Date(Date.now() - 13 * 24 * 60 * 60 * 1000).toISOString(),
    status: "contacted",
  },
];

export async function GET() {
  return NextResponse.json(submissions);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newSubmission: Submission = {
      id: `sub_${Date.now()}`,
      name: body.name,
      phone: body.phone,
      email: body.email,
      serviceType: body.serviceType || body.service,
      timeline: body.timeline,
      budget: body.budget,
      description: body.description,
      createdAt: new Date().toISOString(),
      status: "new",
    };
    submissions.unshift(newSubmission);
    return NextResponse.json(newSubmission, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
