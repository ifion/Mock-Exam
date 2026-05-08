// answers.js — Maps question id → 0-based index of the correct option
// e.g. 0 = option A, 1 = option B, 2 = option C, 3 = option D
//
// ID scheme (matches questions.js):
//   PSR  : 1   – 50   (Public Service Rules)
//   GEN  : 51  – 200  (General Knowledge / Common Law / Local Acts)
//   FR   : 201 – 350  (Financial Regulations — 150 questions)
//   ENG  : 351 – 400  (English Language)
//   MATH : 401 – 450  (Mathematics)
//
// CORRECTIONS vs previous version:
//   Q74  : 2→0  Meranda appointed Speaker in 2024, not 2025
//   Q340 : 1→0  Revenue collection = Chapter 2 (not Chapter 3 = Expenditure)

export const answers = {

  // ── Public Service Rules (1 – 50) ─────────────────────────────────────────
  1: 2,   // Before appointment
  2: 2,   // Study Leave
  3: 1,   // Date of Birth
  4: 1,   // Once
  5: 0,   // Leave Year
  6: 1,   // Public Service Rules
  7: 1,   // General Inefficiency
  8: 0,   // 12/15
  9: 2,   // Resettlement Allowance
  10: 2,  // Surcharge
  11: 3,  // Contract
  12: 2,  // Mr Adekunmilola Adio-Moses
  13: 0,  // Special Secondment
  14: 3,  // Subvention
  15: 0,  // Budget
  16: 0,  // Dismissal
  17: 0,  // Top Secret
  18: 0,  // Circular
  19: 0,  // Discipline
  20: 1,  // Commissioner
  21: 1,  // Misconduct
  22: 1,  // Permanent Secretary
  23: 1,  // Recruitment
  24: 1,  // Salary
  25: 2,  // Promotion
  26: 2,  // Parastatal
  27: 2,  // Probation
  28: 2,  // Permanent
  29: 2,  // Pupil
  30: 2,  // Engage in Bribery
  31: 2,  // Mr Bode Agoro
  32: 0,  // Deployment
  33: 0,  // Entry Date
  34: 0,  // Discipline
  35: 1,  // Immediate
  36: 0,  // SPADEV
  37: 1,  // Acting
  38: 1,  // Posting
  39: 1,  // Training
  40: 1,  // Mr Yomi Oluyomi
  41: 0,  // Mr Tunbosun Alake
  42: 2,  // Notional Promotion
  43: 2,  // Indefinitely
  44: 3,  // Delegation of Duties
  45: 3,  // Head of Service
  46: 3,  // Gazette
  47: 3,  // Probationary
  48: 3,  // Inefficiency
  49: 0,  // Withheld
  50: 1,  // Under Flying Seal

  // ── General Knowledge / Common Law / Local Acts (51 – 200) ───────────────
  51: 1,  // Commerce
  52: 1,  // 774
  53: 0,  // 5
  54: 3,  // Lord Frederick Lugard
  55: 2,  // 1914
  56: 1,  // 1991
  57: 2,  // 1988
  58: 1,  // Reduction, pardon or variation of punishment
  59: 3,  // Prostitution
  60: 2,  // Handling of labour, trade unions and industrial related matters
  61: 1,  // LASEPA
  62: 2,  // A proof beyond reasonable doubt
  63: 1,  // An offeror
  64: 2,  // The benefit expected from a contract
  65: 3,  // Montesquieu of France
  66: 2,  // Prevents the concentration of powers in one person or group
  67: 1,  // 109
  68: 1,  // Legislature
  69: 3,  // Providing food for the common man
  70: 3,  // 20
  71: 2,  // Court of Appeal
  72: 1,  // Contractual incapacity
  73: 3,  // Independent Corrupt Practices and Other Related Offences Commission
  74: 0,  // 2024 ← CORRECTED (was 2; Meranda was appointed January 2024)
  75: 2,  // Disfranchisement
  76: 1,  // Victoria Island Division
  77: 2,  // Battery
  78: 0,  // Public and private nuisance
  79: 0,  // Negligence
  80: 0,  // Aid the financial credit of a person
  81: 1,  // Libel
  82: 2,  // Legislature
  83: 2,  // Contract
  84: 3,  // One of the parties setting the agency agreement on fire
  85: 1,  // Executive
  86: 3,  // Running errands to carry out dubious actions for financial reward
  87: 1,  // 1920
  88: 2,  // General orders for civil servants
  89: 2,  // The law for the rich must be different from the poor
  90: 0,  // 109
  91: 1,  // National Assembly Service Commission
  92: 1,  // Human Rights Court
  93: 2,  // Proved beyond reasonable doubt
  94: 1,  // An act that is beyond human control
  95: 3,  // An offeree
  96: 2,  // The benefit expected from a contract
  97: 3,  // Death of the offeror
  98: 3,  // There shall be encroachment of the duties of other organs of government
  99: 1,  // Hon. Tajudeen Abbas
  100: 0, // Labour related matters
  101: 2, // General Ibrahim Babangida
  102: 1, // Chief Obafemi Awolowo
  103: 0, // Sir Adetokunbo Ademola
  104: 1, // 1967
  105: 2, // 1976
  106: 0, // 1976
  107: 2, // Lillian Jean Williams
  108: 2, // 1963
  109: 2, // 1967
  110: 2, // 1970
  111: 1, // 1992 – 1993
  112: 0, // Mr. Akinwunmi Adesina
  113: 3, // National Arts Theatre
  114: 3, // Check and inspect vehicle particulars
  115: 2, // 1983
  116: 1, // General Yakubu Gowon
  117: 2, // 6
  118: 1, // Hon. Justice K.O. Alogba
  119: 2, // Dr Musa Adamu Aliyu
  120: 3, // Justice Kudirat Motonmori Kekere-Ekun
  121: 2, // 37
  122: 3, // HRM. Oba Rilwan Akiolu
  123: 0, // Brigadier Mobolaji Johnson
  124: 2, // 1978
  125: 0, // Ashipa
  126: 1, // 90 days
  127: 1, // Federal High Court
  128: 3, // Industrial Court
  129: 1, // Customary Court
  130: 1, // To register the names and residence of the people living in Lagos
  131: 1, // Alhaji Tafawa Balewa
  132: 1, // 1962
  133: 0, // Mrs Mopelola Victoria Peregrino
  134: 1, // 20
  135: 1, // Ikeja
  136: 1, // Marina to Mile 2
  137: 1, // To establish a standard of behavior for public officers
  138: 1, // 1990
  139: 2, // Parties to a case must be given equal opportunity during the trial
  140: 1, // 6
  141: 1, // 1983
  142: 1, // 60
  143: 2, // An agent in possession of another's property who must act during an emergency
  144: 3, // LAWMA
  145: 1, // To regulate pollution, noise and other public nuisance
  146: 1, // 1973
  147: 1, // 1963
  148: 3, // State control over local government
  149: 3, // Alaba International Market
  150: 2, // Bigamy
  151: 2, // Supreme Court
  152: 1, // Public Service Rules
  153: 0, // 2
  154: 1, // LIRS
  155: 1, // 1960
  156: 1, // 3 years
  157: 1, // Aso Rock Villa
  158: 1, // Schools and education policy
  159: 1, // 2018
  160: 2, // Leadership and progress
  161: 1, // Babajide Sanwo-Olu
  162: 0, // Obafemi Hamzat
  163: 2, // Ikeja
  164: 0, // 20
  165: 2, // Ikeja
  166: 0, // Mudashiru Obasa
  167: 1, // 1967
  168: 1, // Lateef Jakande
  169: 0, // Centre of Excellence
  170: 2, // Senate and House of Representatives
  171: 0, // October 1
  172: 2, // South-West
  173: 2, // Kayode Egbetokun
  174: 2, // Lagos House
  175: 1, // Unity and Faith, Peace and Progress
  176: 3, // Lagos
  177: 0, // LAWMA
  178: 1, // Air Force
  179: 3, // English
  180: 0, // LAMATA
  181: 0, // Democracy Day
  182: 2, // INEC
  183: 1, // Benin Republic
  184: 0, // Nyesom Wike
  185: 0, // Mile 2 to Marina
  186: 2, // 2024
  187: 1, // 2 Eagles
  188: 2, // President (subject to Senate confirmation)
  189: 1, // Traffic control
  190: 2, // Alausa
  191: 2, // Beneficiary
  192: 1, // Proof presented in court
  193: 2, // Claimant
  194: 1, // Balance of probabilities
  195: 2, // Inadmissible
  196: 1, // State
  197: 1, // Guilty mind
  198: 2, // Guilty act
  199: 0, // Murder
  200: 1, // Colonial heritage

  // ── Financial Regulations (201 – 260) ────────────────────────────────────
  201: 2,  // 2009
  202: 0,  // Finance (Control and Management) Act, Cap.144
  203: 2,  // The Treasury
  204: 2,  // Monthly  (formal reconciliation statement attached to monthly transcript — FR 716 & 806)
  205: 1,  // Not permitted  (FR 710)
  206: 2,  // Are not to be accepted  (FR 726)
  207: 1,  // Strictly forbidden  (FR 3002)
  208: 1,  // Not to be accepted  (FR 727)
  209: 1,  // A fixed cash advance to meet minor or incidental expenses  (FR 1001)
  210: 2,  // Accountant-General  (FR 1013)
  211: 2,  // Annually  (FR 1801)
  212: 2,  // "PAID"  (FR 622)
  213: 2,  // Accounting Officer  (FR 1506)
  214: 1,  // Prohibited  (FR 223)
  215: 1,  // 302–306
  216: 3,  // A company's annual report
  217: 1,  // To the bank  (FR 219)
  218: 1,  // Bank accounts and books of accounts of government MDAs  (FR 110)
  219: 2,  // 304  (Annual General Warrant — FR 304)
  220: 0,  // Transfer of approved funds between sub-heads
  221: 2,  // The relevant contract terms  (FR 412)
  222: 2,  // Chapter 17
  223: 2,  // Accountant-General  (FR 1702)
  224: 2,  // Annually  (FR 1313 — deposit ledgers balanced at year-end)
  225: 3,  // Chapter 21
  226: 1,  // An offence under Financial Regulations
  227: 2,  // 2801  (FR 2801)
  228: 1,  // 1411  (FR 1411 — DTA rates)
  229: 1,  // Outside Nigeria
  230: 1,  // Officer Controlling Expenditure  (FR 2302)
  231: 1,  // 3101  (FR 3101 — non-response to audit queries)
  232: 1,  // 3110  (FR 3110 — ghost workers)
  233: 2,  // 3201
  234: 1,  // Transferred  (FR 1514)
  235: 2,  // 232  (FR 232 — loss of revenue by negligence → surcharge)
  236: 1,  // Lapses and reverts to the Consolidated Revenue Fund  (FR 413)
  237: 1,  // Officially prescribed Treasury forms  (FR 601)
  238: 1,  // Separate from government funds  (FR 713)
  239: 1,  // Treasury-trained  (FR 1603)
  240: 2,  // 1509
  241: 3,  // 233  (FR 233 — Paper Money Register)
  242: 1,  // Take immediate action as required by Financial Regulations  (FR 409)
  243: 1,  // The Minister of Finance  (FR 315–316)
  244: 1,  // Overseeing and regulating public procurement
  245: 1,  // 3112  (FR index — Inflation of contracts listed at 3112)
  246: 1,  // Collected through the proper banking channel as specified  (FR 724)
  247: 2,  // Chapter 19
  248: 1,  // Take action as prescribed in FR 2502
  249: 3,  // 3124  (FR 3124 — non-retirement of imprests/advances)
  250: 2,  // 3115  (FR 3115 — poor cash management)
  251: 2,  // 1415  (FR 1415 — correspondence course advance)
  252: 1,  // 3106  (FR 3106 — irregular or wrong payments)
  253: 2,  // 2621  (FR 2621 — Board of Survey for stores)
  254: 1,  // 402  (FR 402 — Vote Book)
  255: 2,  // 3118  (FR 3118 — non-recovery of advance)
  256: 1,  // Minister of Finance  (FR 103)
  257: 0,  // At any time as directed by the Accountant-General  (FR 1803)
  258: 2,  // 3121  (FR 3121 — failure to prepare bank reconciliation)
  259: 2,  // 231  (FR 231 — abandonment of arrears of revenue)
  260: 1,  // 3104  (FR 3104 — payments for jobs not executed)

  // ── Financial Regulations Extension (261 – 350) ───────────────────────────
  261: 1,  // Government funds and financial operations of an MDA  (FR 111)
  262: 1,  // An authority issued for expenditure from government funds
  263: 1,  // The Capital Development Fund  (FR 318)
  264: 1,  // A penalty charged against a public officer for improper payment or loss
  265: 1,  // The Consolidated Revenue Fund  (FR 213)
  266: 1,  // Track approved budget provisions against actual expenditure  (FR 402)
  267: 1,  // Recovered in full before the officer retires or is transferred  (FR 1416)
  268: 1,  // The National Assembly  (FR 108–109)
  269: 1,  // Is delegated to perform accounting functions on behalf of the Accounting Officer  (FR 115)
  270: 1,  // Surcharge and possible dismissal
  271: 1,  // Section 80 of the 1999 Constitution of Nigeria  (FR 102)
  272: 1,  // Cost price  (FR 2226)
  273: 1,  // The Accountant-General's department  (FR 1201)
  274: 2,  // Chapter 14
  275: 2,  // Before the end of each financial year or when the holder is transferred  (FR 1011)
  276: 1,  // The Consolidated Revenue Fund
  277: 1,  // Storekeeper  (FR 2131)
  278: 1,  // A financial obligation incurred but not yet paid
  279: 1,  // 6 months
  280: 1,  // Urgent and unforeseen expenditure not provided for in the main budget  (FR 306)
  281: 0,  // All government revenue collections regardless of amount  (FR 202, 205)
  282: 2,  // 1st January to 31st December
  283: 1,  // The Federal Inland Revenue Service (FIRS)  (FR 234–235)
  284: 1,  // Paid into a Deposit Account and later refunded to the Consolidated Revenue Fund  (FR 1513)
  285: 1,  // Misappropriation of public funds
  286: 1,  // Make accounting adjustments between accounts without cash movement  (FR 901)
  287: 1,  // A Board of Survey followed by appropriate disposal procedures  (FR 2614)
  288: 1,  // Only after the previous imprest has been fully retired  (FR 1011)
  289: 1,  // Are not permitted under Financial Regulations  (FR 714, 729)
  290: 1,  // In excess of the approved estimates for the relevant sub-head  (FR 313)
  291: 2,  // Declared and surrendered to government
  292: 1,  // Retires, resigns, or is transferred to another MDA
  293: 1,  // Certifying Officer  (FR 410)
  294: 1,  // Investigated and corrected promptly
  295: 1,  // Remitted to the relevant tax authority  (FR 235)
  296: 1,  // The Accounting Officer or a designated officer  (FR 736)
  297: 2,  // Monthly  (FR 2112 — stores ledger balanced monthly)
  298: 1,  // Surcharge, criminal prosecution, and/or dismissal
  299: 1,  // Goods are received into the store  (FR 2402)
  300: 1,  // Goods issued out of the store  (FR 2414)
  301: 1,  // Head of Department or designated Certifying Officer  (FR 410–411)
  302: 2,  // 4 years
  303: 2,  // Chapter 23
  304: 1,  // 3104  (fraudulent/falsified payments — FR 3104)
  305: 1,  // The Accounting Officer to incur expenditure against approved estimates  (FR 304)
  306: 1,  // Approved budget provisions are insufficient or a new expenditure item arises
  307: 1,  // For personal errands by the officer in charge  (FR 2002)
  308: 0,  // Authorized, documented, and paid in accordance with approved rates
  309: 1,  // The Accountant-General with the Minister of Finance's approval  (FR 2515)
  310: 1,  // Properly documented and approved at the appropriate authority level
  311: 1,  // A properly completed and approved payment voucher  (FR 601)
  312: 1,  // A classification of government income or revenue
  313: 1,  // The Accounting Officer  (FR 1703)
  314: 1,  // All cash and bank receipts and payments  (FR 801–802)
  315: 1,  // Operating government bank accounts for personal benefit  (FR 713)
  316: 1,  // Funds appropriated are insufficient or a new expenditure item arises in the year
  317: 1,  // Misconduct or misappropriation under FR
  318: 2,  // Overhead Cost
  319: 1,  // All government accounting operations across MDAs  (FR 106)
  320: 0,  // The Accounting Officer in writing  (FR 705)
  321: 0,  // FR 105
  322: 1,  // The Auditor-General for the Federation  (FR 108–110)
  323: 2,  // 7 years  (FR 1132 — payment vouchers, etc.)
  324: 1,  // Government's own workforce and equipment
  325: 1,  // Take immediate steps as required by the Financial Regulations  (FR 409)
  326: 1,  // Accounting Officer or Finance Department  (FR 2129)
  327: 1,  // FR 3104
  328: 1,  // Minister of Finance  (FR 302–304)
  329: 1,  // The vote as approved in the estimates for that sub-head  (FR 313, 402)
  330: 1,  // Evaluating and recommending contract awards within set thresholds  (FR 2916)
  331: 1,  // Misconduct and misuse of government property under FR
  332: 1,  // A common expenditure budget managed centrally for government-wide items
  333: 1,  // In accordance with approved rates and properly documented
  334: 1,  // A contractor receives advance payment from government  (FR 2933)
  335: 1,  // Contractor's failure to complete the contract as agreed  (FR 2934)
  336: 2,  // The President through the relevant authority
  337: 1,  // Use their official position to solicit personal benefits
  338: 0,  // A portion of the contract sum withheld until satisfactory completion
  339: 1,  // Personally liable and may be surcharged  (FR 301)
  340: 0,  // Chapter 2 ← CORRECTED (was 1; FR Table of Contents: Ch 2 = "Revenue Collection and Accounting")
  341: 1,  // The Accountant-General of the Federation  (FR 1601)
  342: 1,  // Paid in accordance with the Stamp Duties Act  (FR 620)
  343: 1,  // Supplements the Financial Regulations with specific guidance for that MDA
  344: 1,  // In writing, pre-numbered, and issued in sets of copies  (FR 2306)
  345: 1,  // Accounting Officer  (FR 106, 112)
  346: 1,  // Misclassification, which is an offence under FR
  347: 1,  // The President or designated authority  (FR 306)
  348: 1,  // The safe custody and proper use of funds under their imprest  (FR 1007–1008)
  349: 1,  // The ICPC Act and Criminal Code
  350: 1,  // Properly authorized, documented, and within the approved budget

  // ── English Language (351 – 400) ─────────────────────────────────────────
  351: 2,  // attended
  352: 1,  // Accommodation
  353: 1,  // Phenomena
  354: 2,  // Each of the officers has submitted his report
  355: 1,  // Using more words than necessary
  356: 2,  // Opaque
  357: 2,  // Postpone to a later time
  358: 1,  // The group of officers is meeting today
  359: 1,  // The letter was signed by the officer
  360: 2,  // Hardworking  ← diligent = hardworking (NOT careless)
  361: 2,  // to
  362: 3,  // promptly
  363: 0,  // Without a fixed date for resumption
  364: 0,  // Official salary and benefits of a position
  365: 1,  // The minimum number of members required for a valid meeting
  366: 1,  // Antidote  (anti- = against)
  367: 1,  // For restricted circulation within an MDA
  368: 0,  // The report is ready; however, it needs approval
  369: 2,  // Per person
  370: 0,  // to forgive
  371: 0,  // The officer submitted the report and the supervisor approved it
  372: 2,  // Tardy
  373: 1,  // Shortened
  374: 1,  // Deliberate failure to obey a superior's lawful orders
  375: 1,  // The officer said that he would submit the report
  376: 2,  // Coming after in time or order
  377: 1,  // The existing state of affairs
  378: 2,  // Honesty
  379: 0,  // The new policy will affect all civil servants
  380: 2,  // Compulsory
  381: 1,  // Written communications exchanged between parties
  382: 1,  // Word for word
  383: 2,  // with
  384: 1,  // An urgent situation requiring immediate action
  385: 1,  // presided
  386: 1,  // There were fewer officers present today
  387: 3,  // Increment  (not a form of official communication/publication)
  388: 1,  // as
  389: 1,  // Curricula
  390: 1,  // The files were lying on the desk
  391: 1,  // The Permanent Secretary attended the meeting
  392: 0,  // Resignation
  393: 1,  // Under a false name or identity to avoid recognition
  394: 1,  // Careful and sensible in managing resources
  395: 1,  // In spite of; despite
  396: 1,  // that the officer is diligent
  397: 1,  // Neither the director nor his deputies were present
  398: 1,  // More than what is needed; unnecessary
  399: 1,  // The principal concern of the MDA is accountability
  400: 0,  // Verbal

  // ── Mathematics (401 – 450) ───────────────────────────────────────────────
  401: 1,  // 30  (15% × 200)
  402: 2,  // ₦1,020,000  (₦85,000 × 12)
  403: 1,  // 5/4  (3/4 + 2/4)
  404: 2,  // 315  (450 × 70%)
  405: 2,  // ₦15,000  (50000 × 10% × 3)
  406: 2,  // 8  (15 − 7)
  407: 1,  // 75%
  408: 2,  // 800  (1200 − 400)
  409: 1,  // 24  (LCM of 6 and 8)
  410: 2,  // ₦15,000  (75000 ÷ 5)
  411: 2,  // 2,700  (60 × 45)
  412: 2,  // 0.4  (2 ÷ 5)
  413: 1,  // 25%  (200/800 × 100)
  414: 1,  // 12  (BODMAS: 4 + 8)
  415: 2,  // ₦120,000  (5000 × 24)
  416: 1,  // 25  (9 + 16)
  417: 2,  // 3 hours 30 minutes
  418: 2,  // 6  (18 ÷ 3)
  419: 2,  // 200  (40% × 500)
  420: 0,  // 37.5%  (3/8 × 100)
  421: 1,  // ₦800,000  (40% remaining of ₦2,000,000)
  422: 1,  // 50  (250 ÷ 5)
  423: 0,  // 5/4  (125/100 simplified)
  424: 2,  // 150 km  (60 × 2.5)
  425: 2,  // 210  (30 docs/hr × 7 hr)
  426: 2,  // 12  (HCF of 24 and 36)
  427: 1,  // ₦72,000  (60000 × 1.20)
  428: 2,  // 4  (x + 3 = 7)
  429: 3,  // 1/8  (1/4 × 1/2)
  430: 1,  // ₦6,000  (7.5% × 80,000)
  431: 2,  // ₦33,000  (1500 × 22)
  432: 1,  // 635
  433: 1,  // ₦250  (50 × 5)
  434: 0,  // 3/2  ((2/3) × (9/4))
  435: 1,  // 12  (30 × 2/5)
  436: 2,  // ₦20,000  (5% × 400,000)
  437: 1,  // 12  (2/5 × 30)
  438: 1,  // 28 m  (2 × (8 + 6))
  439: 2,  // 20  (4 × 5)
  440: 2,  // 300  (500 − 60 − 140)
  441: 1,  // 391  (17 × 23)
  442: 1,  // 3/4  (45/60)
  443: 1,  // 12 km/litre  (240 ÷ 20)
  444: 2,  // ₦400,000  (3,600,000 ÷ 9)
  445: 0,  // 1/8  (0.125)
  446: 1,  // 25%  (35/140 × 100)
  447: 2,  // 15  (3/4 × 20)
  448: 2,  // 12  (√144)
  449: 0,  // 2/3  (48/72 simplified)
  450: 2,  // ₦120,000  (500,000 − 380,000)
}