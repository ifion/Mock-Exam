// answers.js — Maps question id → 0-based index of the correct option
// e.g. 0 = option A (first), 1 = option B (second), 2 = option C (third), 3 = option D (fourth)
//
// ID scheme (matches questions.js):
//   PSR  : 1   – 50   (Public Service Rules — LASG + Federal PSR)
//   GEN  : 51  – 200  (General Knowledge / Common Law / Local Acts)
//   FR   : 201 – 350  (Financial Regulations 2009)
//   ENG  : 351 – 400  (English Language)
//   MATH : 401 – 450  (Mathematics)
//
// Sources: LASG PSR Chs 1–18, Federal PSR 2008, Civil Service Handbook,
//          Federal Financial Regulations 2009, PSSDC Study Guide

export const answers = {

  // ── Public Service Rules (1 – 50) ─────────────────────────────────────────
  // Source: LASG PSR Chapters 1–18, Federal PSR 2008, Civil Service Handbook
  1:  1,  // Before Appointment — LASG PSR Ch.2; all officers must sign Oath of Secrecy
  2:  1,  // Undertake an approved course of study — LASG PSR Ch.12 (Study Leave)
  3:  1,  // Shall not be changed throughout career — LASG PSR Ch.2 / Federal PSR Ch.2
  4:  1,  // Once a year — LASG PSR Ch.7 (at least once a year)
  5:  2,  // January 1st to December 31st — LASG PSR Ch.12 (Leave Year)
  6:  1,  // Public Service Rules — the primary discipline guide
  7:  1,  // Cumulative pattern of incompetence — LASG PSR Ch.4 / Federal PSR Ch.3
  8:  1,  // Once every two years — LASG PSR Ch.8 (GL 12–15 medical check-up)
  9:  1,  // Confirmed living conditions impaired — LASG PSR Ch.15 (Resettlement Allowance)
  10: 2,  // Surcharge — LASG PSR Ch.4; FR Ch.3 (loss of revenue through negligence)
  11: 3,  // Contract — LASG PSR Ch.2 (retired officers re-engaged on contract only)
  12: 2,  // Mr Adekunmilola Adio-Moses — confirmed in Study Guide Key Office Holders
  13: 1,  // Special Secondment — LASG PSR Ch.2 (unlimited secondment → Special Secondment)
  14: 3,  // Subvention — Civil Service Handbook Ch.2 (financing parastatals)
  15: 1,  // Budget — Civil Service Handbook Ch.2
  16: 3,  // Dismissal — LASG PSR Ch.4 (ultimate penalty for serious misconduct)
  17: 0,  // Top Secret — Civil Service Handbook Ch.9 (classification of correspondence)
  18: 1,  // Circular — Civil Service Handbook Ch.8 (commonest means of communication)
  19: 1,  // Discipline — LASG PSR Ch.4 and Civil Service Handbook Ch.4
  20: 2,  // Commissioner — political head of a Ministry in Lagos State
  21: 1,  // Misconduct — LASG PSR Ch.4 (specific provable wrongful act)
  22: 2,  // Permanent Secretary — appointment by the Governor, not CSC
  23: 2,  // Recruitment — Civil Service Handbook (Four D's: Demand = Recruitment)
  24: 2,  // Salary — Civil Service Handbook Ch.4
  25: 3,  // Promotion — movement from one grade level to another
  26: 2,  // Parastatal — LASG PSR Ch.18; Federal PSR Ch.16
  27: 2,  // Probation — LASG PSR Ch.2 (2-year probation for new appointees)
  28: 2,  // Permanent — temporary officer not on permanent employment
  29: 2,  // Trainee/Pupil — LASG PSR Ch.2 / Federal PSR Ch.2
  30: 2,  // Director of a private company — LASG PSR Ch.4 (officers may hold shares but not directorships)
  31: 2,  // Mr Bode Agoro — confirmed in Study Guide Key Office Holders
  32: 1,  // Deployment — transfer = deployment (LASG PSR Ch.2)
  33: 1,  // Entry Date — LASG PSR (seniority determined by entry date)
  34: 3,  // Half salary — LASG PSR Ch.4 (officer on interdiction receives at least half salary)
  35: 2,  // Immediate — Civil Service Handbook (XXX = Immediate; XX = Today; X = Urgent)
  36: 1,  // SPADEV — Lagos State uses SPADEV (Study Guide Abbreviations)
  37: 1,  // Acting — LASG PSR Ch.3 (acting appointment for temporarily vacant posts)
  38: 2,  // Posting — Four D's: Dispatch = Posting
  39: 2,  // Training — Four D's: Development = Training
  40: 3,  // GL 07 — LASG PSR Ch.3 (acting appointments only for GL 07 and above)
  41: 1,  // Restore seniority lost during approved absence — LASG PSR Ch.2
  42: 3,  // Indefinitely — 'Sine die' means adjourned indefinitely
  43: 2,  // Delegation of Duties — LASG PSR / Civil Service Handbook
  44: 3,  // Head of Service — LASG PSR Ch.8 (overseas medical treatment approved by HOS)
  45: 3,  // Gazette — government official publication dealing with activities
  46: 3,  // 24 weeks — LASG PSR Ch.12 (maternity leave: 24 weeks for first 2 deliveries)
  47: 3,  // Withheld — LASG PSR Ch.5 (increment denied for 12 months = withheld)
  48: 2,  // Inefficiency — LASG PSR Ch.4 (incapable of discharging duties = inefficiency)
  49: 3,  // 30 working days — LASG PSR Ch.12 (GL 08 and above = 30 working days)
  50: 2,  // Under Flying Seal — confirmed in Study Guide abbreviations

  // ── General Knowledge / Common Law / Local Acts (51 – 200) ───────────────
  51: 1,  // Commerce — Red in Lagos State coat of arms = Commerce
  52: 2,  // 774 — total LGAs in Nigeria
  53: 0,  // 5 — Lagos State has 5 administrative divisions
  54: 3,  // Lord Frederick Lugard — first Governor-General of Nigeria
  55: 3,  // 1914 — Nigeria's amalgamation
  56: 1,  // 1991 — Federal capital moved to Abuja
  57: 2,  // 1988 — Wole Soyinka, Road Safety (Western Nigeria)
  58: 1,  // Reduction, pardon or variation of punishment
  59: 1,  // Obtaining money under false pretence (public officers CAN commit this)
  60: 2,  // Handling of labour, trade unions and industrial related matters
  61: 2,  // LASEPA — Lagos State Environmental Protection Agency
  62: 2,  // A proof beyond reasonable doubt (criminal standard)
  63: 3,  // An offeror — person who initiates contract
  64: 3,  // The benefit expected from a contract
  65: 3,  // Montesquieu of France
  66: 2,  // Prevents the concentration of powers in one person or group
  67: 3,  // 109 — Nigerian Senate members
  68: 3,  // Legislature — makes laws
  69: 3,  // Providing food for the common man — NOT a judiciary role
  70: 3,  // 20 — LGAs per 1999 Constitution
  71: 3,  // Court of Appeal — appeal from High Court
  72: 0,  // Contractual incapacity — NOT an essential element (it disqualifies, not constitutes)
  73: 3,  // Independent Corrupt Practices and Other Related Offences Commission
  74: 0,  // 2024 — Meranda appointed Speaker in January 2024
  75: 3,  // Disfranchisement — depriving right to vote
  76: 1,  // Victoria Island Division — not an administrative division in Lagos State
  77: 3,  // Battery — intentional application of force
  78: 1,  // Public and private nuisance
  79: 3,  // Negligence — breach of a legal duty
  80: 0,  // Aid the financial credit of a person — defamation does NOT do this
  81: 1,  // Libel — defamation in permanent form
  82: 2,  // Executive — enforces the law
  83: 3,  // Contract — agreement intended to give rise to legal relations
  84: 3,  // One party setting the agreement on fire — not a recognised method
  85: 3,  // Judiciary — interprets the law
  86: 2,  // Running errands to carry out dubious actions for reward — NOT a duty
  87: 1,  // 1920 — Lagos State College of Health Technology established
  88: 2,  // General orders for civil servants
  89: 2,  // The law for the rich must differ from the poor — NOT rule of law
  90: 3,  // 109 — Nigerian Senate members
  91: 2,  // National Assembly Service Commission
  92: 3,  // Human Rights Court — not established by 1999 Constitution
  93: 1,  // Proved beyond reasonable doubt
  94: 3,  // An event that is beyond human control
  95: 3,  // An offeree — person who accepts an offer
  96: 1,  // Ministries and Extra-Ministerial Departments only — Civil Service Handbook Ch.1
  97: 3,  // Death of the offeror — not a way of creating agency (it terminates it)
  98: 3,  // There shall be encroachment — this VIOLATES separation of powers
  99: 3,  // Hon. Tajudeen Abbas — Speaker, House of Representatives
  100: 0, // Labour related matters — NIC jurisdiction
  101: 3, // General Ibrahim Babangida — moved capital to Abuja
  102: 3, // Chief Obafemi Awolowo — first Premier, Western Region
  103: 3, // Sir Adetokunbo Ademola — first indigenous CJN
  104: 2, // 1967 — Lagos State created
  105: 3, // 1976 — Nigeria divided into 19 states
  106: 0, // 1976 — Operation Feed the Nation launched
  107: 3, // Lillian Jean Williams — wrote 1959 Nigerian National Anthem
  108: 3, // 1963 — Nigeria became a Federal Republic
  109: 3, // 1967 — Nigeria divided into 12 states
  110: 2, // 1970 — Nigerian Civil War ended
  111: 3, // 1992–1993 — Sir Michael Otedola served
  112: 0, // Mr. Akinwunmi Adesina — AfDB Chairman
  113: 3, // National Arts Theatre — NOT in Badagry (it's in Lagos Island)
  114: 3, // Check and inspect vehicle particulars — not LASTMA's core role
  115: 3, // 1983 — LASU established under Jakande
  116: 3, // General Yakubu Gowon — created Lagos State
  117: 3, // 6 — judicial divisions in Lagos State as at December 2019
  118: 3, // Hon. Justice K.O. Alogba — former Chief Judge of Lagos State
  119: 3, // Dr Musa Adamu Aliyu — ICPC Chairman
  120: 3, // Justice Kudirat Motonmori Kekere-Ekun — current CJN
  121: 3, // 37 LCDAs in addition to 20 LGAs
  122: 3, // HRM. Oba Rilwan Akiolu — Oba of Lagos
  123: 3, // Brigadier Mobolaji Johnson — first Governor of Lagos State
  124: 3, // 1978 — Land Use Act promulgated
  125: 3, // Ashipa — founder of Lagos Royal Dynasty
  126: 3, // 90 days — election petition judgement deadline
  127: 3, // Federal High Court — customs duties = Federal matter
  128: 3, // Industrial Court — employment/labour dispute
  129: 3, // Customary Court — marriage under native law and custom
  130: 2, // To register names and residence of people in Lagos (LASSRA)
  131: 3, // Alhaji Tafawa Balewa — first Prime Minister of Nigeria
  132: 3, // 1962 — University of Lagos established
  133: 3, // Mrs Mopelola Victoria Peregrino — TESCOM Chairman
  134: 3, // 20 — LGAs per 1999 Constitution
  135: 3, // Ikeja — Lagos State Government House
  136: 3, // Marina to Mile 2 — Lagos Blue Line Rail
  137: 1, // To establish a standard of behaviour for public officers
  138: 3, // 1990 — Third Mainland Bridge commissioned
  139: 2, // Parties must be given equal opportunity — fair hearing
  140: 3, // 6 — judicial divisions in Lagos State as at 2020
  141: 3, // 1983 — LASU established
  142: 3, // 60 — retirement age in Lagos State civil service
  143: 2, // Agent in possession of property who acts in emergency
  144: 3, // LAWMA — Lagos Waste Management Authority
  145: 3, // To regulate pollution, noise and other public nuisance (LASEPA)
  146: 3, // 1973 — NYSC established
  147: 3, // 1963 — Nigeria became a Republic
  148: 3, // State control over local government — Section 7, 1999 Constitution
  149: 3, // Alaba International Market — biggest electronics market
  150: 3, // Bigamy — marrying more than one wife under Matrimonial Causes Law
  151: 3, // Supreme Court — highest court in Nigeria
  152: 3, // Public Service Rules
  153: 0, // 2 — Nigerian flag has 2 colours (green and white)
  154: 3, // LIRS — Lagos State Internal Revenue Service
  155: 3, // 1960 — Nigeria joined the United Nations
  156: 3, // 3 years — Local Government Chairman's term
  157: 3, // Aso Rock Villa — official residence of President
  158: 3, // Schools and education policy — Lagos Ministry of Education
  159: 3, // 2018 — Democracy Day moved to June 12
  160: 3, // Leadership and progress
  161: 3, // Babajide Sanwo-Olu — current Governor of Lagos State
  162: 3, // Obafemi Hamzat — current Deputy Governor
  163: 3, // Ikeja — Lagos State House of Assembly location
  164: 0, // 20 — LGAs in Lagos State
  165: 3, // Ikeja — capital of Lagos State
  166: 3, // Mudashiru Obasa — Speaker, LSHA
  167: 3, // 1967 — Lagos State created
  168: 3, // Lateef Jakande — first civilian Governor of Lagos State
  169: 0, // Centre of Excellence — slogan of Lagos State
  170: 3, // Senate and House of Representatives
  171: 3, // October 1 — Nigeria's Independence Day
  172: 3, // South-West — Lagos State geopolitical zone
  173: 3, // Kayode Egbetokun — current IGP
  174: 2, // Lagos House — official residence of Lagos Governor
  175: 3, // Unity and Faith, Peace and Progress — Nigeria's motto
  176: 3, // Lagos — largest city by population
  177: 0, // LAWMA — Lagos Waste Management Authority
  178: 3, // Air Force — Nigerian Armed Forces third branch
  179: 3, // English — official language of Nigeria
  180: 3, // LAMATA — operates Lagos Blue Line
  181: 3, // Democracy Day — June 12
  182: 2, // INEC — body responsible for elections in Nigeria
  183: 3, // Benin Republic — borders Lagos State
  184: 3, // Nyesom Wike — FCT Minister
  185: 3, // Mile 2 to Marina — Lagos Blue Rail Line route
  186: 2, // 2024 — national anthem re-adopted
  187: 1, // 2 horses — Nigerian Coat of Arms
  188: 3, // President (subject to Senate confirmation) — appoints CJN
  189: 1, // Traffic control — LASTMA responsibility
  190: 3, // Alausa — Lagos State Government Secretariat
  191: 2, // Beneficiary — trustee holds property for beneficiary
  192: 3, // Proof presented in court — evidence
  193: 2, // Claimant — bears burden of proof in civil cases
  194: 3, // Balance of probabilities — civil standard of proof
  195: 3, // Inadmissible — hearsay evidence
  196: 3, // State — crime is offence against the state
  197: 3, // Guilty mind — mens rea
  198: 3, // Guilty act — actus reus
  199: 3, // Murder — a common law offence
  200: 3, // Colonial heritage — how common law entered Nigerian law

  // ── Financial Regulations (201 – 350) ────────────────────────────────────
  // Source: Federal Government Financial Regulations, Revised 2009
  //         PSSDC Comprehensive Study Guide
  201: 3,  // 2009 — FR revised to January 2009
  202: 1,  // Finance (Control and Management) Act, Cap.144
  203: 2,  // Chief Accounting Officer responsible for all government finances
  204: 3,  // Monthly — bank reconciliation prepared monthly
  205: 3,  // Not permitted — overdrawing government accounts (FR Ch.8)
  206: 3,  // Are not to be accepted — post-dated cheques prohibited (FR Ch.8)
  207: 3,  // Strictly prohibited — Tippex/correction fluid on financial docs
  208: 3,  // Red biro — errors in Vote Book corrected with red biro
  209: 3,  // Fixed cash advance to meet minor or incidental expenses (FR Ch.11)
  210: 2,  // 50 pages in triplicate — each govt receipt booklet
  211: 3,  // Payer/Client — original receipt goes to the payer
  212: 3,  // Kept intact in the booklet — cancelled receipts (FR Ch.13)
  213: 3,  // Provisional General Warrant — when Appropriation Act not yet in operation
  214: 3,  // Development Fund — capital expenditure (FR Ch.4)
  215: 2,  // Consolidated Revenue Fund — recurrent expenditure (FR Ch.4)
  216: 1,  // Another sub-head under the same head — virement rule (FR Ch.4)
  217: 3,  // At the earliest possible time — revenue paid into bank (FR Ch.3)
  218: 3,  // Bank accounts and books of accounts of government MDAs (FR Ch.2)
  219: 3,  // Three months after close of financial year — arrears of revenue
  220: 3,  // Arrears of revenue that have become impossible to collect
  221: 3,  // 21 days — VAT/WHT remittance to FIRS (FR Ch.3)
  222: 3,  // Surcharge — for loss of revenue through negligence (FR Ch.3)
  223: 3,  // Receipt — document evidencing cash payment
  224: 2,  // Officer Controlling Expenditure, Checking Officer, Payee (FR Ch.7)
  225: 3,  // Are not allowed — no alteration to amount on PV (FR Ch.7)
  226: 3,  // Accounting Officer — only AO can alter voucher classification (FR Ch.7)
  227: 3,  // 3 months — vouchers over 3 months may not be paid (FR Ch.7)
  228: 3,  // Crossed cheques — payments to corporate bodies (FR Ch.7)
  229: 1,  // Indemnity Certificate — assurance against double payment (FR Ch.7)
  230: 3,  // Honour Certificate — in lieu of receipt for petty disbursements (FR Ch.7)
  231: 3,  // Job Completion Certificate — for construction contracts (FR Ch.7)
  232: 3,  // An offence — splitting contracts to avoid thresholds (FR Ch.31)
  233: 3,  // Officer's personal bank account number — NOT in Vote Book
  234: 2,  // "ENTERED IN VOTE BOOK" — stamp required before payment (FR Ch.5)
  235: 3,  // Payee — beneficiary named on cheque or voucher
  236: 2,  // Drawer, Drawee, Payee — parties to a cheque (FR Ch.8)
  237: 3,  // Hand-written — cheque not dishonoured merely for being hand-written
  238: 3,  // Counterfoil — cheque stub = cheque counterfoil (FR Ch.8)
  239: 3,  // Commission on Turnover — COT definition
  240: 3,  // Treasury Single Account — NOT specifically prescribed in FR Ch.8
  241: 1,  // To rely solely on the bank — NOT a reason for bank reconciliation
  242: 3,  // Controversy with Accounts Manager — NOT a valid reason for disagreement
  243: 1,  // Cheque Matured Register — does NOT exist in FR (FR Ch.8)
  244: 2,  // Unauthorised expenditure beyond approved allocation — sole liability
  245: 2,  // Is not allowed — virement between recurrent and capital (FR Ch.4)
  246: 3,  // At the end of the financial year — recurrent warrants lapse (FR Ch.5)
  247: 3,  // Personally and financially liable for that expenditure (FR Ch.2)
  248: 3,  // Separate from government funds — private money (FR Ch.7/12)
  249: 3,  // Separate from all other moneys — imprest cash (FR Ch.11)
  250: 3,  // 31st December — Standing Imprests retired by year-end (FR Ch.11)
  251: 3,  // ₦200,000 — PS/DG Standing Imprest limit (FR Ch.11)
  252: 3,  // ₦300,000 — Minister Standing Imprest limit (FR Ch.11)
  253: 3,  // Assistant Executive Officer (Accounts) — min rank for imprest cash book
  254: 1,  // Two locks — strongroom security requirement (FR Ch.12)
  255: 1,  // Pay slips — NOT a security document under FR Ch.12
  256: 2,  // Sale of postage stamps — receipts not required (FR Ch.13)
  257: 3,  // A third-party witness signs — when payer cannot sign (FR Ch.13)
  258: 1,  // A sworn affidavit from the applicant — for lost receipt CTC (FR Ch.13)
  259: 2,  // Three senior officers — for destroying unused receipts (FR Ch.13)
  260: 3,  // Held in trust by government, not belonging to it — deposits (FR Ch.14)
  261: 2,  // Deposit account — unclaimed salaries MUST NOT be placed here (FR Ch.14)
  262: 3,  // 5 years — unclaimed deposits reported to AG for revenue transfer (FR Ch.14)
  263: 1,  // Advances for government projects not given to individuals (FR Ch.15)
  264: 3,  // Has not fully repaid a previous advance of the same type (FR Ch.15)
  265: 3,  // 23rd — military/para-military salary paid by 23rd (FR Ch.16)
  266: 3,  // Transferred — LPC prepared when officer is transferred (FR Ch.16)
  267: 3,  // Fraud, criminal prosecution and surcharge — ghost workers (FR Ch.16)
  268: 3,  // Its own financial records — self-accounting unit's control (FR Ch.18)
  269: 3,  // Accountant-General — deploys Internal Audit Unit (FR Ch.19)
  270: 1,  // Accounting Officer, with copy to Accountant-General (FR Ch.19)
  271: 3,  // At least once a year — Board of Survey frequency (FR Ch.20)
  272: 3,  // 8% — employee Contributory Pension contribution (FR Ch.21)
  273: 3,  // 10% — employer pension contribution (FR Ch.21)
  274: 2,  // Non-expendable, expendable, and consumable (FR Ch.23)
  275: 3,  // Daily — stores ledgers must be posted daily (FR Ch.23)
  276: 3,  // Striking out in red ink and initialling — stores ledger correction
  277: 3,  // Local Purchase Order (LPO) — all store purchases (FR Ch.24)
  278: 3,  // 5 years imprisonment and summary dismissal (PPA 2007 / FR Ch.32)
  279: 2,  // 5 years plus fine of 25% of contract value (PPA 2007 / FR Ch.32)
  280: 3,  // 31st May — annual returns of arrears deadline (FR Ch.3)
  281: 3,  // 15th — IGR transfer to CRF by 15th of following month (FR Ch.3)
  282: 3,  // 1st January to 31st December — Nigeria's financial year
  283: 3,  // Section 80 of the 1999 Constitution — establishes CRF
  284: 3,  // Urgent and unforeseen expenditure not in main budget (FR Ch.4)
  285: 3,  // Authority for expenditure from government funds — Warrant definition
  286: 3,  // Accountant-General — receives original of every Warrant (FR Ch.4)
  287: 3,  // Gazette — Warrant notification must be published (FR Ch.4)
  288: 3,  // 10th month — virement application deadline (FR Ch.4)
  289: 2,  // Same Economic Programme Section/Head — capital virement restriction
  290: 3,  // Federal Executive Council (FEC) approval — Special Warrant (FR Ch.4)
  291: 3,  // Commissioner of Finance — issues warrants in Lagos State (Study Guide)
  292: 2,  // Unexplained cash surpluses and deposits held in trust (FR Ch.9/14)
  293: 3,  // Make accounting adjustments without cash movement (FR Ch.10)
  294: 3,  // Board of Survey followed by appropriate disposal (FR Ch.27)
  295: 3,  // All government revenue collections regardless of amount (FR Ch.3)
  296: 2,  // Approved cash tank + government vehicle + police escort (FR Ch.12)
  297: 3,  // Goods received into the store — SRV definition (FR Ch.24)
  298: 3,  // Goods issued out of the store — SIV definition (FR Ch.24)
  299: 3,  // 7 years — minimum preservation of financial records (FR Ch.6)
  300: 3,  // Personnel Costs and Overhead Costs — recurrent expenditure (FR Ch.5)
  301: 3,  // ICPC Act and Criminal Code — bribery in government contracts
  302: 3,  // Retires, resigns, or is transferred — Treasury Clearance Certificate
  303: 3,  // Certifying Officer — certifies services rendered (FR Ch.7)
  304: 3,  // Remitted to the relevant tax authority — WHT treatment (FR Ch.3)
  305: 3,  // Accounting Officer or a designated officer — blank cheque custody (FR)
  306: 3,  // Surcharge, criminal prosecution, and/or dismissal — imprest misuse
  307: 3,  // Portion of contract sum withheld until satisfactory completion
  308: 3,  // Personally liable and may be surcharged — expenditure without Warrant
  309: 3,  // Contractor's failure to complete the contract — Performance Bond
  310: 3,  // When a contractor receives advance payment from government — APG
  311: 3,  // Surcharge and possible dismissal — fraudulent payment authorisation
  312: 3,  // A properly completed and approved payment voucher (FR Ch.7)
  313: 3,  // Classification of government income or revenue — Revenue Head
  314: 3,  // Recovered in full before officer retires or is transferred (FR Ch.15)
  315: 3,  // The National Assembly — AG reports audit findings (FR Ch.2)
  316: 3,  // Delegated to perform accounting functions on behalf of AO (FR Ch.2)
  317: 3,  // Auditor-General for the Federation — external audit (FR Ch.2)
  318: 3,  // Overhead Cost — training and capacity development classification
  319: 3,  // Personal errands — official vehicles must NOT be used (FR Ch.22)
  320: 3,  // Evaluating and recommending contract awards within thresholds
  321: 3,  // Misconduct and misuse of government property — stamps for personal use
  322: 3,  // Common expenditure budget managed centrally — Service Wide Vote
  323: 3,  // Supplements FR with specific guidance for that MDA — Financial Instruction
  324: 3,  // In writing, pre-numbered, and issued in sets of copies — LPOs (FR Ch.24)
  325: 3,  // Accounting Officer — day-to-day FR administration (FR Ch.2)
  326: 3,  // Minister of Finance — issues General Warrants for recurrent expenditure
  327: 3,  // The vote as approved in the estimates for that sub-head (FR Ch.5)
  328: 3,  // Take immediate steps as required by the Financial Regulations
  329: 3,  // Accounting Officer or Finance Department — fixed assets register
  330: 3,  // Use their official position to solicit personal benefits
  331: 3,  // Personnel Costs and Overhead Costs — recurrent expenditure classification
  332: 3,  // Human, material, and financial resources of the parastatal (FR Ch.33)
  333: 3,  // 31st May of the following year — parastatal accounts deadline (FR Ch.33)
  334: 3,  // Properly authorised, documented, and within the approved budget (FR Ch.1)
  335: 2,  // Electronically unless an exemption is granted — e-Payment Policy
  336: 3,  // Gross misconduct — paying by cash/cheque without exemption
  337: 3,  // Accountant-General — authorises opening of official bank accounts
  338: 3,  // 10 years — procurement records retention (PPA 2007 / FR Ch.31)
  339: 3,  // Head of Department or designated Certifying Officer — salary certification
  340: 3,  // Chapter 3 — Revenue Collection and Accounting (FR Table of Contents)
  341: 3,  // Accountant-General of the Federation — self-accounting returns (FR Ch.18)
  342: 3,  // Consolidated Revenue Fund — interest on bank accounts (FR Ch.9)
  343: 3,  // Approved budget insufficient or new expenditure item — supplementary estimates
  344: 3,  // Misclassification, which is an offence under FR
  345: 3,  // The President or designated authority — Contingencies Fund approval
  346: 3,  // Safe custody and proper use of funds under their imprest (FR Ch.11)
  347: 3,  // Accountant-General with Minister of Finance's approval (FR Ch.25)
  348: 3,  // Allocation — failure to remit VAT/WHT deducted from allocation (FR Ch.3)
  349: 3,  // Chapter 31 — Public Procurement Contracts (FR Table of Contents)
  350: 3,  // Depositor's personal bank account number — NOT in Deposit Register

  // ── English Language (351 – 400) ─────────────────────────────────────────
  351: 3,  // attended — simple past tense
  352: 3,  // Accommodation — correctly spelt
  353: 3,  // Phenomena — plural of phenomenon
  354: 3,  // Each of the officers has submitted his report — correct S-V agreement
  355: 3,  // Using more words than necessary — verbose
  356: 3,  // Opaque — antonym of transparent
  357: 3,  // Postpone to a later time — defer
  358: 3,  // The group of officers is meeting today — group = singular
  359: 3,  // The letter was signed by the officer — passive voice
  360: 3,  // Hardworking — synonym of diligent
  361: 3,  // to — addressed to
  362: 3,  // promptly — adverb modifying 'submitted'
  363: 3,  // Without a fixed date for resumption — sine die
  364: 3,  // Official salary and benefits of a position — emolument
  365: 3,  // Minimum number of members required for a valid meeting — quorum
  366: 3,  // Antidote — anti- prefix means against
  367: 3,  // For restricted circulation within an MDA — Confidential
  368: 0,  // The report is ready; however, it needs approval — correct semicolon use
  369: 3,  // Per person — per capita
  370: 3,  // to forgive — 'To err is human; to forgive is divine'
  371: 3,  // Compound sentence: two independent clauses joined by 'and'
  372: 3,  // Tardy — antonym of punctual
  373: 3,  // Shortened — abridged
  374: 3,  // Deliberate failure to obey a superior's lawful orders — insubordination
  375: 3,  // The officer said that he would submit the report — indirect speech
  376: 3,  // Coming after in time or order — subsequent
  377: 3,  // The existing state of affairs — status quo
  378: 3,  // Honesty — abstract noun
  379: 3,  // The new policy will affect all civil servants — correct use of 'affect'
  380: 3,  // Compulsory — mandatory
  381: 3,  // Written communications exchanged between parties — correspondence
  382: 3,  // Word for word — verbatim
  383: 3,  // with — issued with immediate effect
  384: 3,  // An urgent situation requiring immediate action — exigency
  385: 3,  // presided — the minister presided over the meeting (simple past)
  386: 3,  // There were fewer officers present today — correct use of fewer
  387: 3,  // Increment — not a form of official communication/publication
  388: 3,  // as — worked as a senior officer
  389: 3,  // Curricula — correct plural of curriculum
  390: 3,  // The files were lying on the desk — correct use of lie/lay
  391: 3,  // The Permanent Secretary attended the meeting — correct capitalisation
  392: 3,  // Resignation — correctly spelt
  393: 3,  // Under a false name or identity — incognito
  394: 3,  // Careful and sensible in managing resources — prudent
  395: 3,  // In spite of; despite — notwithstanding
  396: 3,  // that the officer is diligent — noun clause
  397: 3,  // Neither the director nor his deputies were present — correct with plural noun nearest to verb
  398: 3,  // More than what is needed; unnecessary — superfluous
  399: 3,  // The principal concern of the MDA is accountability — correct use
  400: 3,  // Verbal — correctly spelt

  // ── Mathematics (401 – 450) ───────────────────────────────────────────────
  401: 1,  // 30 — 15% × 200 = 30
  402: 2,  // ₦1,020,000 — ₦85,000 × 12 = ₦1,020,000
  403: 1,  // 5/4 — 3/4 + 2/4 = 5/4
  404: 2,  // 315 — 70% of 450 = 315 new files
  405: 2,  // ₦15,000 — SI = 50,000 × 10% × 3 = ₦15,000
  406: 3,  // 8 — x = 15 − 7 = 8
  407: 3,  // 75% — 0.75 × 100 = 75%
  408: 3,  // 800 — 1,200 − 400 = 800
  409: 3,  // 24 — LCM(6,8) = 24
  410: 3,  // ₦15,000 — 75,000 ÷ 5 = 15,000
  411: 3,  // 2,700 — 60 × 45 = 2,700
  412: 3,  // 0.4 — 2 ÷ 5 = 0.4
  413: 1,  // 25% — (200/800) × 100 = 25%
  414: 1,  // 12 — BODMAS: 12÷3 + 4×2 = 4 + 8 = 12
  415: 3,  // ₦120,000 — ₦5,000 × 24 months = ₦120,000
  416: 3,  // 25 — 3² + 4² = 9 + 16 = 25
  417: 3,  // 3 hours 30 minutes — 9:00 AM to 12:30 PM
  418: 3,  // 6 — x = 18 ÷ 3 = 6
  419: 3,  // 200 — 40% × 500 = 200
  420: 3,  // 37.5% — (3/8) × 100 = 37.5%
  421: 3,  // ₦800,000 — 40% remaining of ₦2,000,000
  422: 3,  // 50 — (45+55+60+80+10) ÷ 5 = 250 ÷ 5 = 50
  423: 3,  // 5/4 — 125% = 125/100 = 5/4
  424: 3,  // 150 km — 60 × 2.5 = 150 km
  425: 3,  // 210 — 30 docs/hr × 7 hrs = 210
  426: 3,  // 12 — HCF(24,36) = 12
  427: 3,  // ₦72,000 — ₦60,000 × 1.20 = ₦72,000
  428: 3,  // 4 — 2(x+3) = 14; x+3 = 7; x = 4
  429: 3,  // 1/8 — 1/4 × 1/2 = 1/8
  430: 3,  // ₦6,000 — 7.5% × ₦80,000 = ₦6,000
  431: 3,  // ₦33,000 — ₦1,500 × 22 = ₦33,000
  432: 3,  // 635 — 1,000 − 365 = 635
  433: 3,  // ₦250 — (600/12) × 5 = 50 × 5 = ₦250
  434: 3,  // 3/2 — (2/3) ÷ (4/9) = (2/3) × (9/4) = 18/12 = 3/2
  435: 3,  // 12 — 2/(3+2) × 30 = 2/5 × 30 = 12
  436: 3,  // ₦20,000 — 5% × ₦400,000 = ₦20,000
  437: 3,  // 12 — 2/5 × 30 = 12
  438: 3,  // 28 m — 2 × (8 + 6) = 28 m
  439: 3,  // 20 — x = 4 × 5 = 20
  440: 3,  // 300 — 500 − 60 − 140 = 300
  441: 3,  // 391 — 17 × 23 = 391
  442: 3,  // 3/4 — 45/60 = 3/4
  443: 3,  // 12 km/litre — 240 ÷ 20 = 12
  444: 3,  // ₦400,000 — ₦3,600,000 ÷ 9 = ₦400,000
  445: 3,  // 1/8 — 0.125 = 1/8
  446: 3,  // 25% — (35/140) × 100 = 25%
  447: 3,  // 15 — 3/4 × 20 = 15
  448: 3,  // 12 — √144 = 12
  449: 0,  // 2/3 — 48/72 = 2/3 (GCF = 24)
  450: 3,  // ₦120,000 — ₦500,000 − ₦380,000 = ₦120,000
}