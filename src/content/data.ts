export type IconName =
  | "ShieldCheck" | "ScrollText" | "GitBranch" | "UserCheck" | "BadgeCheck"
  | "Landmark" | "Map" | "Gavel" | "FileSearch" | "Building2" | "KeyRound"
  | "FileSignature" | "ScanLine" | "Network" | "Fingerprint" | "Scale"
  | "AlertTriangle" | "Layers" | "Banknote" | "History" | "Eye" | "Lock"
  | "Database" | "ClipboardCheck" | "FileWarning" | "Workflow";

export const metrics = [
  { value: 850, suffix: " Cr+", prefix: "₹", label: "Property Value Protected" },
  { value: 12000, suffix: "+", label: "Verification Checks Run" },
  { value: 4500, suffix: "+", label: "Properties Audited" },
  { value: 98.7, suffix: "%", label: "Issue Detection Accuracy", decimals: 1 },
];

export const problems = [
  { icon: "FileWarning", title: "Fake Registry", desc: "Forged sale deeds and fabricated registration entries used to sell property the seller never owned." },
  { icon: "Layers", title: "Double Selling", desc: "The same plot or flat sold to multiple buyers using parallel agreements and duplicate documents." },
  { icon: "Map", title: "Land Disputes", desc: "Ancestral, partition, and boundary disputes that surface only after possession." },
  { icon: "Banknote", title: "Encumbrances", desc: "Undisclosed mortgages, liens, and bank charges silently attached to the title." },
  { icon: "AlertTriangle", title: "Illegal Layouts", desc: "Unapproved sub-divisions and plotting violating LDA / development authority norms." },
  { icon: "Building2", title: "Builder Fraud", desc: "Diverted funds, fake RERA claims, and projects on disputed or unconverted land." },
  { icon: "Landmark", title: "Acquisition Risk", desc: "Land marked for government acquisition, road widening, or green-belt reservation." },
  { icon: "Gavel", title: "Court Cases", desc: "Active litigation, stay orders, and injunctions hidden from the buyer at booking." },
] as const;

export const processSteps = [
  { n: "01", icon: "ClipboardCheck", title: "Property Submission", desc: "Share property, builder, and location details. We open a secure verification file in minutes." },
  { n: "02", icon: "ScrollText", title: "Document Intake", desc: "Encrypted upload of deeds, agreements, and approvals into your private document vault." },
  { n: "03", icon: "Scale", title: "Legal Due Diligence", desc: "Title chain reconstruction, ownership mapping, and clause-level legal review by experts." },
  { n: "04", icon: "Landmark", title: "Government Verification", desc: "Cross-checks against registry, RERA, LDA, revenue, and municipal records." },
  { n: "05", icon: "Gavel", title: "Litigation Screening", desc: "District court, high court, and tribunal record screening for active and historical cases." },
  { n: "06", icon: "FileSearch", title: "Risk Report", desc: "A clear 0–100 risk score with categorised findings and prioritised recommendations." },
  { n: "07", icon: "FileSignature", title: "Registration Support", desc: "Guided allotment, drafting review, and registration assistance until the title is yours." },
] as const;

export const aiFeatures = [
  { icon: "ScanLine", title: "Registry OCR", desc: "Reads scanned deeds, khataunis, and registration extracts with high-accuracy document intelligence.", span: "lg" },
  { icon: "Network", title: "Ownership Mapping", desc: "Reconstructs the full ownership graph across decades of transfers." },
  { icon: "GitBranch", title: "Title Chain Analysis", desc: "Validates each link in the chain of title for breaks and forgeries." },
  { icon: "Gavel", title: "Litigation Detection", desc: "Matches parties against court dockets across jurisdictions.", span: "lg" },
  { icon: "Banknote", title: "Encumbrance Analysis", desc: "Surfaces hidden mortgages, liens, and charges on the asset." },
  { icon: "Building2", title: "Builder Intelligence", desc: "Scores developer reputation, delivery history, and RERA standing." },
  { icon: "Map", title: "Land Use Validation", desc: "Confirms zoning, conversion, and master-plan compliance." },
  { icon: "Fingerprint", title: "Risk Score Generation", desc: "Synthesises every signal into a single, defensible risk score.", span: "lg" },
] as const;

export const services = [
  { icon: "ShieldCheck", title: "Pre-Booking Due Diligence", desc: "Full legal and structural risk assessment before you pay a single rupee of booking amount." },
  { icon: "ScrollText", title: "Registry Verification", desc: "Authentication of the sale deed and registration entries against sub-registrar records." },
  { icon: "GitBranch", title: "Title Chain Validation", desc: "Decade-spanning reconstruction of every ownership transfer to confirm a clean, unbroken title." },
  { icon: "UserCheck", title: "Ownership Verification", desc: "Confirms the seller is the lawful, sole owner with full authority to transfer the property." },
  { icon: "BadgeCheck", title: "RERA Verification", desc: "Validates RERA registration, project status, and promoter disclosures and complaints." },
  { icon: "Landmark", title: "LDA Approval Validation", desc: "Verifies development-authority sanctions, layout approvals, and completion certificates." },
  { icon: "Map", title: "Land Use Compliance", desc: "Checks zoning, land conversion, and master-plan alignment for the parcel." },
  { icon: "Gavel", title: "Court Record Screening", desc: "Screens district, high court, and tribunal records for live and historical litigation." },
  { icon: "Banknote", title: "Encumbrance Analysis", desc: "Reviews the encumbrance certificate for mortgages, liens, and undisclosed charges." },
  { icon: "Building2", title: "Builder Background Verification", desc: "Investigates developer track record, financials, delivery history, and disputes." },
  { icon: "KeyRound", title: "Allotment Verification", desc: "Validates allotment letters, possession terms, and authority of the allotting body." },
  { icon: "FileSignature", title: "Registration Assistance", desc: "End-to-end support through drafting review, stamp duty, and final registration." },
] as const;

export const trustSections = [
  { icon: "FileSearch", title: "Verification Methodology", desc: "A documented, multi-layer methodology covering title, registry, litigation, and compliance — applied identically to every file." },
  { icon: "Database", title: "Government Data Sources", desc: "Verifications reconcile against sub-registrar, RERA, development authority, revenue, and court record sources." },
  { icon: "Scale", title: "Compliance Framework", desc: "Workflows aligned to RERA, the Registration Act, the Transfer of Property Act, and state land laws." },
  { icon: "Lock", title: "Data Protection", desc: "Bank-grade encryption in transit and at rest. Your documents are isolated to your private vault." },
  { icon: "ClipboardCheck", title: "Audit Standards", desc: "Every finding is evidence-linked and independently reviewable, with a full audit trail per file." },
  { icon: "Fingerprint", title: "Document Security", desc: "Access-controlled vaults, watermarking, and tamper-evident logging on all uploaded records." },
  { icon: "BadgeCheck", title: "Quality Assurance", desc: "Dual-reviewer sign-off on every report before it reaches you — no single point of failure." },
  { icon: "ShieldCheck", title: "Risk Management Framework", desc: "A calibrated 0–100 scoring model with transparent criteria and conservative escalation thresholds." },
] as const;

export const caseStudies = [
  {
    slug: "gomti-nagar-villa",
    title: "Gomti Nagar Independent Villa",
    location: "Lucknow, Uttar Pradesh",
    value: "₹3.2 Cr",
    risk: "Critical",
    problem: "A buyer was days from registering a premium villa marketed as freehold with a 'clean' title.",
    investigation: "Our title-chain reconstruction traced ownership across four decades and flagged a missing 1998 transfer link.",
    discovery: "The property carried an undisclosed bank mortgage and was subject to a pending partition suit between legal heirs.",
    resolution: "We halted the transaction, documented the encumbrance, and the buyer walked away before paying the balance.",
    saved: "₹3.2 Cr",
  },
  {
    slug: "noida-apartment",
    title: "Noida High-Rise Apartment",
    location: "Noida, Uttar Pradesh",
    value: "₹95 L",
    risk: "High",
    problem: "An NRI buyer booked a flat in an under-construction tower from a heavily advertised developer.",
    investigation: "Builder intelligence and RERA screening revealed the project's registration had lapsed and funds were diverted.",
    discovery: "The tower was built on land with an unresolved land-use conversion, exposing buyers to demolition risk.",
    resolution: "We secured a documented refund pathway and redirected the buyer to a fully compliant project.",
    saved: "₹95 L",
  },
  {
    slug: "lucknow-residential-plot",
    title: "Lucknow Residential Plot",
    location: "Sultanpur Road, Lucknow",
    value: "₹62 L",
    risk: "Moderate",
    problem: "A young family planned to buy a plot in a fast-growing peripheral colony.",
    investigation: "Land-use validation against the LDA master plan and revenue records uncovered a green-belt overlap.",
    discovery: "Part of the plot fell under a proposed road-widening reservation, making construction legally impossible.",
    resolution: "We renegotiated boundaries and confirmed the buildable area before the family committed.",
    saved: "₹18 L",
  },
] as const;

export const faqs = [
  { q: "What exactly does GharVerify protect me from?", a: "We protect buyers from title defects, fake or forged registries, double-selling, undisclosed encumbrances, illegal layouts, builder fraud, government acquisition risk, and hidden litigation — any issue that could put your money or ownership at risk." },
  { q: "How is GharVerify different from hiring a local lawyer?", a: "A typical lawyer reviews documents you hand over. We run an institutional, multi-source verification — registry, RERA, development authority, revenue, and court records — combined with document intelligence and a structured risk score, with dual-reviewer sign-off on every report." },
  { q: "How long does a full verification take?", a: "A standard verification is typically completed in 5–9 working days. Timelines vary with the property's complexity, the responsiveness of record sources, and the depth of the plan you choose." },
  { q: "What documents do I need to provide?", a: "At minimum: the sale deed or agreement to sell, prior title documents, the latest encumbrance certificate, identity proofs of the seller, and any approval or RERA documents you have. We guide you through exactly what's needed for your case." },
  { q: "Can you verify a property before I pay any booking amount?", a: "Yes — and we strongly recommend it. Pre-Booking Due Diligence is designed to assess risk before you commit funds, which is the single most effective way to avoid losses." },
  { q: "Do you cover under-construction and builder projects?", a: "Yes. We verify RERA registration, project approvals, land title under the project, the developer's track record, and the legality of the allotment and possession terms." },
  { q: "What is the Property Risk Score?", a: "It's a 0–100 score that synthesises every verification signal into a single, defensible number, mapped to four bands: Low, Moderate, High, and Critical risk — each with prioritised recommended actions." },
  { q: "Is my data and documentation secure?", a: "Yes. Documents are encrypted in transit and at rest, isolated to your private vault, access-controlled, and tamper-evident logged. See our Trust Center for the full framework." },
  { q: "Do you help with the actual registration?", a: "Yes. Registration Assistance covers drafting review, stamp duty and valuation guidance, and support through the sub-registrar process until the title is registered in your name." },
  { q: "Which cities and states do you cover?", a: "We are headquartered in Lucknow with deep coverage across Uttar Pradesh, and we support verifications in major metros and Tier-2 cities across India." },
  { q: "What happens if you find a serious problem?", a: "We document it with evidence, explain its impact in plain language, and give you clear options — renegotiate, remediate, or walk away. The decision is always yours; our job is to make it informed." },
  { q: "Do you guarantee a property is risk-free?", a: "No responsible verifier can guarantee zero risk. We guarantee a rigorous, evidence-backed assessment of known and discoverable risks, with full transparency on what was checked and what was found." },
  { q: "How much does verification cost?", a: "Pricing scales with property size and the depth of verification. Use our interactive pricing calculator to get an instant, transparent estimate across our Essential, Professional, and Institutional plans." },
  { q: "Can I track the progress of my verification?", a: "Yes. Every client gets a live dashboard with phase-by-phase status, a document vault, your risk score panel, and a real-time activity feed." },
  { q: "Do you work with banks and home-loan buyers?", a: "Yes. Our reports are structured to support loan due diligence, and we can coordinate with your lender's legal team where required." },
  { q: "What is an encumbrance and why does it matter?", a: "An encumbrance is any claim against a property — a mortgage, lien, or charge. If undisclosed, it can transfer to you as the new owner. We surface every recorded encumbrance during verification." },
  { q: "Can you verify ancestral or inherited property?", a: "Yes. These cases need careful succession and partition analysis, which is a core part of our ownership-mapping and title-chain work." },
  { q: "Do you offer support for commercial property?", a: "Yes. We verify commercial plots, shops, and office spaces, including land-use, FAR compliance, and occupancy considerations." },
  { q: "What if litigation appears after I've already bought?", a: "Our screening is designed to surface this before purchase. For post-purchase cases, we can produce an evidentiary verification report to support your legal position." },
  { q: "How do I get started?", a: "Initiate a property scan or book a consultation. We'll open a secure file, walk you through document intake, and begin verification immediately." },
] as const;
