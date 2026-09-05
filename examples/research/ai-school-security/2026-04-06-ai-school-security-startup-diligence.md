# AI School Security Startup Diligence

Date: April 6, 2026

## Founder Input

The proposed startup is a school security company built around AI on top of security cameras. The core idea is to attach software to existing school camera feeds, or install new camera systems where needed, and use real-time computer vision for behavioral analysis and object detection. The intended outcome is faster detection of visible weapons, suspicious behavior, or active-shooter indicators so schools and first responders can act sooner than if they relied only on a teacher or staff member calling 911.

## Founder-Provided Traction, Team, Funding, Milestones

None provided yet.

## Researched Findings

This is not a blank market. There are already credible companies selling adjacent or directly overlapping products into education. ZeroEyes markets AI gun detection that integrates with existing digital security cameras, says most clients pay less than $60 per camera stream per month, and publicly offers small-plan pricing for education. Omnilert sells AI gun detection on existing IP cameras, pairs detection with automated response workflows, and has announced district-scale school deployments including Baltimore County Public Schools and Sarasota County Schools. Ambient.ai is broader than gun detection and is pushing an agentic physical-security platform for education that combines continuous monitoring, threat detection, investigations, and response across existing cameras and access-control systems. icetana AI explicitly markets anomaly and unusual-event surveillance to education customers. Eagle Eye Networks and Motorola/Avigilon also occupy adjacent ground by bundling AI surveillance, VMS, and emergency sharing into broader physical-security stacks.

The demand side is real. U.S. schools already have camera coverage at scale. NCES reported that 92.6 percent of public schools had security cameras in 2021-22, and 93.5 percent of traditional public schools did. A separate NCES indicator found that 86 percent of students ages 12 to 18 reported seeing security cameras at school in 2019, up from 70 percent in 2009. That means the retrofit story is credible because the installed base is already there. Public funding also exists. DOJ's School Violence Prevention Program materials list camera systems and weapons detection systems among commonly funded projects. Kansas launched a $10 million Safe and Secure Firearm Detection Grant Program for public schools, and state budget language specifically contemplates software that integrates into existing security camera systems.

From a technical standpoint, narrow visual detection is feasible today; broad behavioral prediction is much shakier. Weapon detection on visible firearms is already commercial. ZeroEyes, Omnilert, and Eagle Eye all claim compatibility with existing camera systems and fast human-verified alerting. Ambient.ai and icetana show that behavior- and anomaly-oriented security analytics are also commercially available. But the real technical question is not whether a model can sometimes detect a visible gun. It is whether the system can do so with a low enough false-positive and false-negative profile that schools, law enforcement, and insurers trust it operationally.

The limits are substantial. Even the vendors define the problem narrowly. ZeroEyes states that visual gun detection is designed for brandished or partially exposed guns and does not detect holstered weapons. Omnilert likewise describes detection of visible firearms on live video. Scholarly reviews of AI weapon detection through surveillance video show why: performance degrades when weapons are small, concealed, partially occluded, in low light, or in low-quality video. The same literature shows false positives and false negatives remain an active research problem rather than a solved one. The challenge is even worse for generic behavioral anomaly detection. A 2024 systematic review of video anomaly detection describes anomalies as ambiguous and ill-defined, with performance hurt by lighting variation, crowd density, occlusion, complex human behavior, and scene-specific context. That matters in schools because "abnormal" changes constantly by bell schedule, age group, sports, assemblies, pickup lines, and special events.

Operational trust is the make-or-break issue. False positives are not hypothetical. In October 2025, CBS Baltimore reported that an Omnilert-backed gun alert at Kenwood High School turned out to be a bag of chips, prompting a drawn-guns police response and local calls for review. That incident does not prove the category is broken, but it does show the downstream harm of imperfect detection in a school context. The product may be operating "as designed" and still create a traumatic operational failure.

School-violence prevention doctrine also complicates the thesis. Secret Service research is consistent that targeted school violence is often preceded by observable concerning behaviors and that community reporting matters. In the 2021 NTAC study of disrupted K-12 plots, 95 percent of plotters were current students and 94 percent had shared their intentions or concerning communications with others. The 2002 Safe School Initiative likewise concluded that there is no useful profile and that, before most incidents, other people knew about the attacker's plan. That suggests camera AI can help with response once a threat is visible, but it is not a full prevention solution and should not be sold as one.

Privacy, bias, and regulatory exposure are real, especially if the product expands from object detection into identity or behavior profiling. FERPA guidance states that education records can include videotape and other media when they are directly related to a student and maintained by the school or a party acting on its behalf. The Department of Education's student privacy site also defines biometric records to include measurable biological or behavioral characteristics used for automated recognition, including facial characteristics. OCR's November 2024 guidance, revised in January 2025, explicitly warns that AI used for school safety can create or contribute to discrimination and gives a facial-recognition school-safety example involving repeated false identification of Black students. New York State, in a September 27, 2023 order, said schools may not purchase or use facial recognition technology unless a superseding order is issued, citing serious concerns over false positives, civil-rights harms, and limited real-world evidence that such systems prevent violent incidents. In short: a startup that stays with object detection of visible firearms has a clearer policy path than one that attempts persistent identity resolution or generic student-behavior scoring.

Commercially, the category is hard because customers want outcomes, not just models. A district buyer will care about five things at once: whether it works on existing cameras, whether it triggers automated lockdown and notification workflows, whether it creates bias or privacy headaches, whether police and 911 can act on the data, and whether the district can pay for it through grants or a board-approved budget. Omnilert's public positioning shows the value of bundling gun detection with emergency notification and response. Eagle Eye shows the value of direct 911 camera sharing. Ambient.ai shows the value of a full physical-security operating layer rather than a single detector. That means a new entrant that only offers "better detection" is at risk of being outcompeted by better-distributed platforms unless it has a meaningful data advantage, a dramatic reduction in harmful false alarms, or a sharply better distribution model.

## EIR Synthesis

This idea is real, but only in a much narrower form than the original pitch. If the thesis is "AI can watch school cameras and predict dangerous behavior," I would treat that as weak. The science is messy, the ethics are harder, and the product risk is too high. If the thesis is "retrofit existing school camera and safety systems to detect visible weapons, verify threats quickly, and orchestrate a faster coordinated response," that is far more feasible. Even then, it is not a greenfield market. It is an active category with credible incumbents, some public pricing, real deployments, and growing state and grant support.

The most attractive startup wedge is not generic behavior analysis. It is one of:

1. A privacy-first orchestration layer that sits on top of cameras, access control, notification, and PSAP workflows and is vendor-agnostic.
2. A trust-and-governance layer that measurably reduces harmful false alarms, improves auditability, and gives districts cleaner FERPA and civil-rights compliance.
3. A vertical implementation company for K-12 that wins on integration, procurement, grants, training, and response playbooks rather than just the underlying model.

If the founder wants to build core detection from scratch, they need a non-obvious advantage in data, labeling, distribution, or verification. Otherwise they are entering a crowded category with difficult liability and long school-sales cycles.

## Investment Verdict

Watch.

Why: there is confirmed buyer demand, existing budget pathways, and proven technical feasibility for the narrow visible-weapon-detection layer. But the market is already occupied, the broader behavioral-analysis pitch is technically and ethically weaker than it sounds, and the operational downside of false positives is unusually high in K-12.

## Why Now / Why Not Now

Why now: schools already have cameras, public concern remains high, grant programs are supporting this spend, and real-time AI video tooling is materially better than it was a few years ago.

Why not now: the market is no longer early enough to win with a generic "AI on cameras" story, and the hardest unsolved problems are trust, legal defensibility, and operational adoption rather than raw model availability.

## Top Risks

1. False positives that trigger harmful police or school responses.
2. False negatives when weapons are concealed, partially occluded, or outside camera coverage.
3. Civil-rights and privacy blowback if the product expands into identity or behavioral profiling.
4. Long and fragmented school procurement cycles.
5. Bundling pressure from broader VMS and physical-security incumbents.

## Next Diligence Questions

1. What exact incident class is being targeted first: visible firearm, perimeter intrusion, fight escalation, or generic anomaly?
2. What camera quality and angle requirements are needed for reliable deployment?
3. Can the product prove a materially lower harmful false-alert rate than existing vendors?
4. How will the startup integrate with access control, mass notification, and 911 workflows on day one?
5. What insurance, legal, and indemnity posture will districts require?
6. Is there a data-rights strategy that avoids FERPA and biometric pitfalls while still improving the model?

## Next 3 Experiments or Milestones

1. Build a narrowly scoped pilot around visible-weapon detection plus response orchestration on existing IP cameras at one or two non-school campuses first, then a single school district if performance is strong.
2. Run a shadow-mode trial against real archived school-security footage with independent review to measure harmful false positives, false negatives, time-to-alert, and operator trust.
3. Validate procurement by interviewing at least 20 district safety leaders, SRO leaders, and facilities/security directors on budget source, approval path, required integrations, and red-line privacy objections.

## Sources

- https://zeroeyes.com/pricing/
- https://info.zeroeyes.com/plan-selection-1-12
- https://zeroeyes.com/wp-content/uploads/2023/01/CA-Education-Brochure.pdf
- https://info.zeroeyes.com/migration/portal/how-much-does-zeroeyes-cost
- https://www.zeroeyes.com/blog/gun-detection-technology-common-myths-debunked
- https://www.omnilert.com/solutions/gun-detection-system
- https://www.omnilert.com/blog/ai-gun-detection-baltimore-schools
- https://www.omnilert.com/blog/sarasota-schools-selects-omnilert-gun-detect
- https://www.omnilert.com/blog/omnilert-gun-detect-appliance
- https://www.omnilert.com/blog/omnilert-gun-detection-receives-safety-act-designation-from-homeland-security
- https://www.ambient.ai/solutions/education
- https://www.ambient.ai/press/ambient-unveils-ambient-pulsar-reasoning-vlm
- https://info.ambient.ai/hubfs/One%20Pager%202025/Ambient%20AI%20Platform%20-%20data%20sheet.pdf
- https://www.icetana.ai/industries/education
- https://www.een.com/de/gun-detection/
- https://www.een.com/wp-content/uploads/2024/03/Eagle-Eye-911-Public-Safety-Camera-Sharing-Complete_Data-Sheet.pdf
- https://cops.usdoj.gov/pdf/2024ProgramDocs/svpp/Pre_award_Webinar.pdf
- https://www.ag.ks.gov/reports-resources/kansas-safe-and-secure-firearm-detection-grant-program
- https://sos.ks.gov/publications/Register/Volume-44/Issues/Issue-17A/04-25-25-53095.html
- https://nces.ed.gov/programs//coe/indicator/a20/student-reported-safety-measures?tid=4
- https://files.eric.ed.gov/fulltext/ED639901.pdf
- https://www.secretservice.gov/sites/default/files/reports/2021-03/USSS%20Averting%20Targeted%20School%20Violence.2021.03.pdf
- https://www.secretservice.gov/sites/default/files/2020-04/ssi_final_report.pdf
- https://www.ed.gov/media/document/avoiding-discriminatory-use-of-ai-108250.pdf
- https://studentprivacy.ed.gov/faq/what-education-record
- https://studentprivacy.ed.gov/content/biometric-record
- https://studentprivacy.ed.gov/faq/are-law-enforcement-records-protected-under-ferpa
- https://studentprivacy.ed.gov/faq/does-school-have-record-disclosures-made-under-ferpas-health-or-safety-emergency-exception
- https://www.nysed.gov/sites/default/files/programs/data-privacy-security/biometric-determination-9-27-23.pdf
- https://www.cbsnews.com/baltimore/news/ai-gun-detection-system-kenwood-high-school-mistakes-a-bag-of-chips/
- https://www.mdpi.com/2079-9292/14/23/4609
- https://www.sciencedirect.com/science/article/abs/pii/S0925231224004971
