/* =============================================================
   AXIS ADVISORY — SCRIPT.JS
   Bilingual EN/AR static website logic
   ============================================================= */

'use strict';

const translations = {

  en: {
    nav_home:     'Home',
    nav_services: 'Services',
    nav_approach: 'Our Approach',
    nav_faq:      'FAQs',
    nav_contact:  'Contact',
    nav_cta:      'Book a Free Call',
    lang_toggle:  'العربية',

    hero_badge:            'AI + Automation for UK & Saudi SMEs',
    hero_headline_prefix:  'AI Automation for',
    hero_headline_suffix:  'That Want to Work Smarter',
    hero_sub:              'We automate the workflows slowing your business down — lead generation, compliance reporting, client onboarding, and ESG documentation. Practical AI, real results.',
    hero_cta_primary:      'Book a Free Call',
    hero_cta_secondary:    'See How It Works',
    hero_trust_1:          '✓ UK and Saudi markets',
    hero_trust_2:          '✓ AI-powered workflows',
    hero_trust_3:          '✓ Results in weeks, not months',

    problem_label:          'The Challenge',
    problem_headline:       'Manual Processes Are Costing You Time and Contracts',
    problem_sub:            'From chasing leads to compiling compliance reports, the admin load on ambitious SMEs never stops. AI automation changes that.',
    pain1_title:            'Lead Generation Is Time-Consuming and Inconsistent',
    pain1_body:             'Manual prospecting eats hours. Automated systems find, qualify, and reach the right contacts while you focus on closing.',
    pain2_title:            'Compliance and Reporting Takes Your Best People Off Billable Work',
    pain2_body:             'ESG reporting, regulatory checklists, and audit prep drain skilled staff. We automate the data collection, formatting, and submission.',
    pain3_title:            'Client Onboarding Is Slow and Error-Prone',
    pain3_body:             'Manual onboarding delays revenue and creates risk. Automated workflows get clients live faster — with fewer mistakes and no manual chasing.',
    problem_statement:      '',
    problem_statement_strong: 'The good news:',
    problem_statement_rest:   ' you do not need a large tech team or enterprise budget. AI automation is now accessible for SMEs — and we make it practical.',

    services_label:         'Our Services',
    services_headline:      'Three Ways We Automate Your Business',
    services_sub:           'From lead generation to ESG reporting, we build and deploy AI-powered workflows tailored to your business.',
    service_benefit_label:  'Business Benefit',
    service_popular:        'Most Requested',
    service_cta:            'Automate Your Pipeline',

    s1_tier:      'Lead Gen',
    s1_title:     'Lead Generation Automation',
    s1_desc:      'For UK and Saudi businesses that want a consistent pipeline without manual prospecting. We build automated systems that find, qualify, and reach your ideal clients.',
    s1_benefit:   'Wake up to qualified leads already in your CRM. Automated outreach and follow-up — running 24/7.',
    s1_d1:        'Automated prospect research and list building',
    s1_d2:        'AI-powered email outreach sequences',
    s1_d3:        'CRM integration and lead scoring',
    s1_d4:        'Response handling and follow-up automation',
    s1_d5:        'Weekly pipeline reporting dashboard',
    s1_timeline:  'Live in 2–4 weeks',

    s2_tier:      'Workflow',
    s2_title:     'Workflow & Compliance Automation',
    s2_desc:      'For professional services firms — law, finance, consulting — dealing with compliance burdens, reporting deadlines, and client admin that drains skilled staff.',
    s2_benefit:   'Reclaim hours every week. Compliance workflows that run themselves — with audit trails, automated reports, and real-time alerts.',
    s2_d1:        'Compliance checklist and deadline automation',
    s2_d2:        'Regulatory reporting workflows',
    s2_d3:        'Document generation and filing automation',
    s2_d4:        'Alert and escalation systems',
    s2_d5:        'Staff dashboard for oversight and sign-off',
    s2_timeline:  'Delivered in 4–8 weeks',
    s2_cta:       'Automate Your Workflows',

    s3_tier:      'ESG',
    s3_title:     'ESG Reporting Automation',
    s3_desc:      'For Saudi and UK businesses facing ESG requirements from buyers, investors, or regulators. We automate data collection, reporting, and documentation.',
    s3_benefit:   'ESG compliance without the manual burden. Automated data gathering, formatted reports, and tender-ready documentation — built to Saudi and UK standards.',
    s3_d1:        'Automated ESG data collection and tracking',
    s3_d2:        'Carbon footprint measurement and reporting',
    s3_d3:        'Vision 2030 and Mostadam-aligned documentation',
    s3_d4:        'Supplier ESG questionnaire automation',
    s3_d5:        'Audit-ready report generation',
    s3_timeline:  'Typically 4–6 weeks',
    s3_cta:       'Automate Your ESG',

    process_label:    'Our Approach',
    process_headline: 'Our 4-Step Automation Framework',
    process_sub:      'A structured, proven methodology to deploy AI automation in your business — without disruption, with measurable results from day one.',
    step1_title:      'Discover',
    step1_body:       'We map your current workflows, identify the highest-value automation opportunities, and understand your specific context — UK market, Saudi market, or both. No generic templates.',
    step2_title:      'Design',
    step2_body:       'We design the automation architecture — the tools, triggers, logic, and outputs. Everything is tailored to your operations and built to be operated by your existing team.',
    step3_title:      'Build',
    step3_body:       'We build and deploy your automated workflows. Your team receives full documentation and training so you can operate independently from day one.',
    step4_title:      'Optimise',
    step4_body:       'We monitor performance, refine outputs, and expand automation as your needs grow — keeping your systems current and your competitive advantage intact.',
    process_cta:      'Book a Free Call',

    whyus_label:      'Why Axis Advisory',
    whyus_headline:   'Practical AI. Commercial Focus. Two Markets.',
    whyus_body1:      'Axis Advisory builds AI automation systems for UK and Saudi SMEs — from law firms and financial advisers to construction contractors and logistics operators. We combine commercial insight with hands-on technical delivery.',
    whyus_body2:      'Every system we build is designed to run with your existing team, not replace them. The goal is always measurable ROI — faster pipelines, less admin, better compliance — not technology for its own sake.',
    diff1_title:      'UK and Saudi Market Expertise',
    diff1_body:       'We understand the commercial, regulatory, and cultural context of both markets — and build automation systems that work in each.',
    diff2_title:      'Commercial, Not Technical',
    diff2_body:       'We focus on business outcomes — more leads, less admin, faster compliance — not on showcasing technology.',
    diff3_title:      'Built for SME Scale',
    diff3_body:       'No enterprise complexity. Every system is right-sized for your team, your budget, and your current operations.',
    diff4_title:      'Remote-First Delivery',
    diff4_body:       'We work with clients across the UK and Saudi Arabia entirely online — structured, efficient, and fully documented.',
    whyus_cta:        'Start the Conversation',

    lm_label:       'Free Resource',
    lm_headline:    'Free Guide: 5 Workflows UK and Saudi SMEs Are Already Automating',
    lm_body:        'From lead generation to compliance reporting, ambitious SMEs are using AI to reclaim hours every week. This practical guide covers the five highest-impact workflows to automate first — and what each one typically saves.',
    lm_item1:       'What AI lead generation automation actually looks like in practice',
    lm_item2:       'How compliance workflows can run without manual input',
    lm_item3:       'The fastest ESG data collection methods for SMEs',
    lm_item4:       'How onboarding automation reduces client drop-off',
    lm_cta:         'Download the Free Guide',
    lm_note:        'No registration required. Instant download.',
    lm_guide_label: 'AI Automation Guide',
    lm_guide_title: '5 Workflows to Automate First',
    lm_guide_sub:   'UK & Saudi SME Edition',

    faq_label:    'FAQs',
    faq_headline: 'Common Questions About AI Automation',
    faq1_q:       'Which industries does Axis Advisory support?',
    faq1_a:       'We work with professional services firms (law, finance, consulting), construction and engineering contractors, logistics operators, and businesses across the UK and Saudi markets. Our automation systems are tailored to the specific workflows, compliance requirements, and commercial context of each sector and region.',
    faq2_q:       'Do you build custom automation or use off-the-shelf tools?',
    faq2_a:       'Both — depending on what fits. We use proven automation platforms where they do the job well, and build custom components where needed. The result is always designed to be operated by your existing team, without creating a long-term dependency on us.',
    faq3_q:       'How quickly can we see results?',
    faq3_a:       "Most lead generation and onboarding automations go live within 2–4 weeks. Compliance and ESG workflows typically take 4–8 weeks. You'll see measurable time savings and pipeline improvements within the first month.",
    faq4_q:       'Can you support businesses in both the UK and Saudi Arabia?',
    faq4_a:       'Yes. We work remotely with clients across the UK and Saudi Arabia. Our process uses structured diagnostics and digital collaboration tools — no on-site visits required. Many engagements are completed entirely online.',
    faq5_q:       'Do we need a technical team to run the automations?',
    faq5_a:       "No. We build every system with operational simplicity in mind. Your team receives clear training, documentation, and handoff materials. Day-to-day operation requires no technical expertise, and we're available for ongoing support if you want to expand.",

    contact_label:    'Get in Touch',
    contact_headline: 'Book a Free Call',
    contact_body:     "In 30 minutes, we'll map your highest-value automation opportunities, explain what's realistic for your timeline and budget, and give you a clear picture of what working with us looks like.",
    contact_body2:    'No sales pressure. Just a practical conversation about what AI automation can do for your business.',
    contact_location: 'UK & Saudi Arabia',

    form_name_label:          'Full Name',
    form_name_placeholder:    'Your full name',
    form_company_label:       'Company Name',
    form_company_placeholder: 'Your company',
    form_service_label:       'Service of Interest',
    form_service_default:     'Select a service',
    form_service_foundation:  'Lead Generation Automation',
    form_service_mostadam:    'Workflow & Compliance Automation',
    form_service_competitive: 'ESG Reporting Automation',
    form_service_onboarding:  'Client Onboarding Automation',
    form_service_unsure:      'Not sure yet',
    form_email_label:         'Email Address',
    form_email_placeholder:   'your@email.com',
    form_message_label:       "Tell us what you'd like to automate",
    form_message_placeholder: "Briefly describe your business and the workflows you'd like to automate...",
    form_submit:              'Book a Free Call',
    form_submitting:          'Sending…',
    form_privacy:             'Your information is kept confidential and used only to respond to your enquiry.',
    form_success_title:       'Thank you!',
    form_success_body:        "We've received your request and will be in touch within one business day.",
    form_err_required:        'Please fill in this field.',
    form_err_email:           'Please enter a valid email address.',
    form_err_server:          'Something went wrong on our end — please try again or email us directly.',

    footer_tagline:        'AI Automation & ESG for UK and Saudi SMEs',
    footer_location:       'UK & Saudi Arabia',
    footer_nav_title:      'Navigation',
    footer_services_title: 'Services',
    footer_guide_link:     'Free Automation Guide',
    footer_contact_title:  'Contact',
    footer_cta:            'Book a Free Call',
    footer_copy:           ' Axis Advisory. All rights reserved. UK & Saudi Arabia.',
    footer_copy_ar:        'جميع الحقوق محفوظة — أكسيس أدفايزوري',
  },

  ar: {
    nav_home:     'الرئيسية',
    nav_services: 'الخدمات',
    nav_approach: 'نهجنا',
    nav_faq:      'الأسئلة الشائعة',
    nav_contact:  'تواصل معنا',
    nav_cta:      'احجز مكالمة مجانية',
    lang_toggle:  'English',

    hero_badge:            'أتمتة الذكاء الاصطناعي للمنشآت في المملكة المتحدة والسعودية',
    hero_headline_prefix:  'أتمتة الذكاء الاصطناعي',
    hero_headline_suffix:  'التي تريد العمل بذكاء أكبر',
    hero_sub:              'نُؤتمت سير العمل التي تُعيق نشاطك التجاري — توليد العملاء المحتملين، وتقارير الامتثال، وإعداد العملاء، وتوثيق ESG. ذكاء اصطناعي عملي، نتائج حقيقية.',
    hero_cta_primary:      'احجز مكالمة مجانية',
    hero_cta_secondary:    'اكتشف كيف يعمل',
    hero_trust_1:          '✓ أسواق المملكة المتحدة والسعودية',
    hero_trust_2:          '✓ سير عمل مدعومة بالذكاء الاصطناعي',
    hero_trust_3:          '✓ نتائج في أسابيع، لا أشهر',

    problem_label:          'التحدي',
    problem_headline:       'العمليات اليدوية تُكلِّفك الوقت والعقود',
    problem_sub:            'من متابعة العملاء المحتملين إلى إعداد تقارير الامتثال، العبء الإداري على المنشآت الطموحة لا يتوقف. أتمتة الذكاء الاصطناعي تُغيِّر ذلك.',
    pain1_title:            'توليد العملاء المحتملين مرهق ومتذبذب',
    pain1_body:             'التنقيب اليدوي يستهلك ساعات. الأنظمة الآلية تجد العملاء المؤهَّلين وتتواصل معهم بينما تُركِّز أنت على إتمام الصفقات.',
    pain2_title:            'الامتثال والتقارير يستنزفان أفضل موظفيك من العمل المُدرّ للدخل',
    pain2_body:             'تقارير ESG وقوائم الرقابة التنظيمية واستعداد التدقيق تُجهِد الكوادر المهرة. نُؤتمت جمع البيانات وتنسيقها وتقديمها.',
    pain3_title:            'إعداد العملاء بطيء وعرضة للأخطاء',
    pain3_body:             'الإعداد اليدوي يُؤخِّر الإيرادات ويُوجد مخاطر. سير العمل الآلية تُنشِئ العملاء بسرعة أكبر وبأخطاء أقل دون مطاردة يدوية.',
    problem_statement:      '',
    problem_statement_strong: 'البشرى الطيبة:',
    problem_statement_rest:   ' لا تحتاج إلى فريق تقني كبير أو ميزانية المؤسسات الكبرى. أتمتة الذكاء الاصطناعي أصبحت في متناول المنشآت الصغيرة والمتوسطة — ونحن نجعلها عملية.',

    services_label:         'خدماتنا',
    services_headline:      'ثلاث طرق لأتمتة أعمالك',
    services_sub:           'من توليد العملاء المحتملين إلى تقارير ESG، نبني وننشر سير عمل مدعومة بالذكاء الاصطناعي مُصمَّمة لأعمالك.',
    service_benefit_label:  'الفائدة التجارية',
    service_popular:        'الأكثر طلباً',
    service_cta:            'أتمت خط أعمالك',

    s1_tier:      'توليد العملاء',
    s1_title:     'أتمتة توليد العملاء المحتملين',
    s1_desc:      'للمنشآت في المملكة المتحدة والسعودية التي تريد خطاً ثابتاً من العملاء المحتملين دون التنقيب اليدوي. نبني أنظمة آلية تجد عملاءك المثاليين وتتواصل معهم.',
    s1_benefit:   'استيقظ على عملاء مؤهَّلين في نظامك. تواصل آلي ومتابعة — يعمل على مدار الساعة.',
    s1_d1:        'بحث تلقائي عن العملاء المحتملين وبناء القوائم',
    s1_d2:        'تسلسلات تواصل بريدية بالذكاء الاصطناعي',
    s1_d3:        'تكامل نظام إدارة العملاء وتسجيل النقاط',
    s1_d4:        'أتمتة الردود والمتابعة',
    s1_d5:        'لوحة تقارير خط الأعمال الأسبوعية',
    s1_timeline:  'يعمل خلال 2 إلى 4 أسابيع',

    s2_tier:      'سير العمل',
    s2_title:     'أتمتة سير العمل والامتثال',
    s2_desc:      'لشركات الخدمات المهنية — المحاماة والمالية والاستشارات — التي تُعاني من عبء الامتثال ومواعيد التقارير والإدارة التي تستنزف الموظفين المهرة.',
    s2_benefit:   'استعِد ساعات كل أسبوع. سير عمل الامتثال تعمل من تلقاء نفسها — مع سجلات تدقيق وتقارير آلية وتنبيهات فورية.',
    s2_d1:        'أتمتة قوائم الامتثال والمواعيد النهائية',
    s2_d2:        'سير عمل التقارير التنظيمية',
    s2_d3:        'إنشاء المستندات وأتمتة الحفظ',
    s2_d4:        'أنظمة التنبيه والتصعيد',
    s2_d5:        'لوحة تحكم للموظفين للمراقبة والموافقة',
    s2_timeline:  'يُسلَّم خلال 4 إلى 8 أسابيع',
    s2_cta:       'أتمت سير عملك',

    s3_tier:      'معايير ESG',
    s3_title:     'أتمتة تقارير ESG',
    s3_desc:      'للمنشآت السعودية والبريطانية التي تواجه متطلبات ESG من المشترين أو المستثمرين أو الجهات التنظيمية. نُؤتمت جمع البيانات والتقارير والتوثيق.',
    s3_benefit:   'الامتثال لمعايير ESG دون العبء اليدوي. جمع بيانات آلي وتقارير منسَّقة ووثائق جاهزة للمناقصات — وفق المعايير السعودية والبريطانية.',
    s3_d1:        'جمع وتتبع بيانات ESG تلقائياً',
    s3_d2:        'قياس وتقارير بصمة الكربون',
    s3_d3:        'توثيق متوافق مع رؤية 2030 ومستدام',
    s3_d4:        'أتمتة استبيانات ESG للموردين',
    s3_d5:        'إنشاء تقارير جاهزة للتدقيق',
    s3_timeline:  'عادةً 4 إلى 6 أسابيع',
    s3_cta:       'أتمت تقارير ESG',

    process_label:    'نهجنا',
    process_headline: 'إطارنا المكوَّن من 4 خطوات للأتمتة',
    process_sub:      'نهج منظَّم ومُجرَّب لنشر أتمتة الذكاء الاصطناعي في أعمالك — دون تعطيل، مع نتائج قابلة للقياس من اليوم الأول.',
    step1_title:      'الاستكشاف',
    step1_body:       'نرسم خريطة سير عملك الحالية، ونحدد أعلى فرص الأتمتة قيمةً، ونفهم سياقك المحدد — السوق البريطاني أو السعودي أو كليهما. لا قوالب جاهزة.',
    step2_title:      'التصميم',
    step2_body:       'نُصمِّم بنية الأتمتة — الأدوات والمُشغِّلات والمنطق والمخرجات. كل شيء مُصمَّم خصيصاً لعملياتك وقابل للتشغيل بفريقك الحالي.',
    step3_title:      'البناء',
    step3_body:       'نبني وننشر سير العمل الآلية. يحصل فريقك على توثيق كامل وتدريب حتى تتمكن من العمل بشكل مستقل من اليوم الأول.',
    step4_title:      'التحسين',
    step4_body:       'نراقب الأداء ونُحسِّن المخرجات ونوسِّع الأتمتة مع نمو احتياجاتك — للحفاظ على أنظمتك حديثة وميزتك التنافسية.',
    process_cta:      'احجز مكالمة مجانية',

    whyus_label:      'لماذا أكسيس أدفايزوري',
    whyus_headline:   'ذكاء اصطناعي عملي. تركيز تجاري. سوقان.',
    whyus_body1:      'تبني أكسيس أدفايزوري أنظمة أتمتة ذكاء اصطناعي للمنشآت الصغيرة والمتوسطة في المملكة المتحدة والسعودية — من شركات المحاماة والمستشارين الماليين إلى المقاولين ومشغِّلي اللوجستيات. نجمع بين الفهم التجاري العميق والتنفيذ التقني المباشر.',
    whyus_body2:      'كل نظام نبنيه مُصمَّم للعمل بفريقك الحالي، لا ليحلَّ محله. الهدف دائماً عائد استثمار قابل للقياس — خطوط أعمال أسرع وإدارة أقل وامتثال أفضل — لا تقنية من أجل التقنية.',
    diff1_title:      'خبرة في سوقَي المملكة المتحدة والسعودية',
    diff1_body:       'نفهم السياق التجاري والتنظيمي والثقافي لكلا السوقين — ونبني أنظمة أتمتة تعمل في كل منهما.',
    diff2_title:      'تجاري لا تقني',
    diff2_body:       'تركيزنا على نتائج الأعمال — المزيد من العملاء المحتملين وإدارة أقل وامتثال أسرع — لا على عرض التقنية.',
    diff3_title:      'مُناسب لحجم المنشآت الصغيرة والمتوسطة',
    diff3_body:       'لا تعقيد المؤسسات الكبرى. كل نظام مُعايَر وفق حجم فريقك وميزانيتك وعملياتك الحالية.',
    diff4_title:      'تسليم عن بُعد بالكامل',
    diff4_body:       'نعمل مع عملاء في المملكة المتحدة والسعودية عبر الإنترنت بالكامل — منظَّم وفعَّال وموثَّق.',
    whyus_cta:        'ابدأ المحادثة',

    lm_label:       'مورد مجاني',
    lm_headline:    'دليل مجاني: 5 سير عمل تُؤتمتها منشآت في المملكة المتحدة والسعودية بالفعل',
    lm_body:        'من توليد العملاء المحتملين إلى تقارير الامتثال، تستخدم المنشآت الطموحة الذكاء الاصطناعي لاستعادة ساعات كل أسبوع. يغطي هذا الدليل العملي الخمس سير العمل الأعلى تأثيراً للأتمتة أولاً.',
    lm_item1:       'كيف تبدو أتمتة توليد العملاء بالذكاء الاصطناعي في الواقع',
    lm_item2:       'كيف تعمل سير عمل الامتثال دون تدخل يدوي',
    lm_item3:       'أسرع طريقة لأتمتة جمع بيانات ESG',
    lm_item4:       'كيف تُقلِّل أتمتة إعداد العملاء من تراجعهم',
    lm_cta:         'تحميل الدليل المجاني',
    lm_note:        'لا يلزم التسجيل. تحميل فوري.',
    lm_guide_label: 'دليل أتمتة الذكاء الاصطناعي',
    lm_guide_title: '5 سير عمل للأتمتة أولاً',
    lm_guide_sub:   'إصدار المملكة المتحدة والسعودية',

    faq_label:    'الأسئلة الشائعة',
    faq_headline: 'أسئلة شائعة حول أتمتة الذكاء الاصطناعي',
    faq1_q:       'ما القطاعات التي تدعمها أكسيس أدفايزوري؟',
    faq1_a:       'نعمل مع شركات الخدمات المهنية (المحاماة والمالية والاستشارات) والمقاولين في قطاعَي البناء والهندسة ومشغِّلي اللوجستيات والمنشآت في أسواق المملكة المتحدة والسعودية. أنظمة الأتمتة لدينا مُصمَّمة وفق سير العمل ومتطلبات الامتثال والسياق التجاري الخاص بكل قطاع ومنطقة.',
    faq2_q:       'هل تبنون أتمتة مخصَّصة أم تستخدمون أدوات جاهزة؟',
    faq2_a:       'كلاهما — بحسب ما يلائم. نستخدم منصات الأتمتة المُجرَّبة حيث تؤدي الغرض بشكل جيد، ونبني مكونات مخصَّصة عند الحاجة. النتيجة دائماً مُصمَّمة للتشغيل بفريقك الحالي، دون إيجاد اعتماد طويل الأمد علينا.',
    faq3_q:       'كم يستغرق الأمر لرؤية النتائج؟',
    faq3_a:       'معظم أتمتة توليد العملاء المحتملين وإعدادهم تبدأ العمل في غضون 2 إلى 4 أسابيع. سير عمل الامتثال وESG عادةً تستغرق 4 إلى 8 أسابيع. ستشهد توفيراً قابلاً للقياس في الوقت وتحسيناً في خط الأعمال خلال الشهر الأول.',
    faq4_q:       'هل يمكنكم دعم الأعمال في المملكة المتحدة والسعودية معاً؟',
    faq4_a:       'نعم. نعمل عن بُعد مع عملاء في المملكة المتحدة والسعودية. تعتمد عمليتنا على أدوات التشخيص المنظَّمة والتعاون الرقمي — لا حاجة لزيارات ميدانية. كثير من تعاقداتنا تتم بالكامل عبر الإنترنت.',
    faq5_q:       'هل نحتاج إلى فريق تقني لتشغيل الأتمتة؟',
    faq5_a:       'لا. نبني كل نظام مع وضع البساطة التشغيلية في الاعتبار. يحصل فريقك على تدريب واضح ووثائق ومواد تسليم. التشغيل اليومي لا يتطلب أي خبرة تقنية، ونحن متاحون للدعم المستمر إذا أردت التوسع.',

    contact_label:    'تواصل معنا',
    contact_headline: 'احجز مكالمة مجانية',
    contact_body:     'في 30 دقيقة، سنرسم خريطة أعلى فرص الأتمتة قيمةً لديك، ونوضِّح ما هو واقعي لجدولك الزمني وميزانيتك، ونمنحك صورة واضحة عن كيفية عملنا معاً.',
    contact_body2:    'لا ضغط للبيع. مجرد محادثة عملية حول ما يمكن لأتمتة الذكاء الاصطناعي أن تفعله لأعمالك.',
    contact_location: 'المملكة المتحدة والسعودية',

    form_name_label:          'الاسم الكامل',
    form_name_placeholder:    'اسمك الكامل',
    form_company_label:       'اسم الشركة',
    form_company_placeholder: 'شركتك',
    form_service_label:       'الخدمة المطلوبة',
    form_service_default:     'اختر الخدمة',
    form_service_foundation:  'أتمتة توليد العملاء المحتملين',
    form_service_mostadam:    'أتمتة سير العمل والامتثال',
    form_service_competitive: 'أتمتة تقارير ESG',
    form_service_onboarding:  'أتمتة إعداد العملاء',
    form_service_unsure:      'غير متأكد بعد',
    form_email_label:         'البريد الإلكتروني',
    form_email_placeholder:   'بريدك@الإلكتروني.com',
    form_message_label:       'أخبرنا ما الذي تريد أتمتته',
    form_message_placeholder: 'صِف باختصار أعمالك وسير العمل التي تريد أتمتتها...',
    form_submit:              'احجز مكالمة مجانية',
    form_submitting:          'جارٍ الإرسال…',
    form_privacy:             'تظل معلوماتك سرية ولا تُستخدم إلا للرد على استفسارك.',
    form_success_title:       'شكراً لك!',
    form_success_body:        'استلمنا طلبك وسنتواصل معك خلال يوم عمل واحد.',
    form_err_required:        'يُرجى تعبئة هذا الحقل.',
    form_err_email:           'يُرجى إدخال بريد إلكتروني صحيح.',
    form_err_server:          'حدث خطأ من جانبنا — يُرجى المحاولة مرة أخرى أو التواصل معنا مباشرةً.',

    footer_tagline:        'أتمتة الذكاء الاصطناعي ومعايير ESG للمنشآت في المملكة المتحدة والسعودية',
    footer_location:       'المملكة المتحدة والسعودية',
    footer_nav_title:      'التنقل',
    footer_services_title: 'الخدمات',
    footer_guide_link:     'دليل الأتمتة المجاني',
    footer_contact_title:  'التواصل',
    footer_cta:            'احجز مكالمة مجانية',
    footer_copy:           ' أكسيس أدفايزوري. جميع الحقوق محفوظة. المملكة المتحدة والسعودية.',
    footer_copy_ar:        'جميع الحقوق محفوظة — أكسيس أدفايزوري',
  },
};

const rotatingWords = {
  en: ['Law Firms', 'Financial Advisers', 'Saudi SMEs', 'UK Businesses', 'Professional Services'],
  ar: ['شركات المحاماة', 'المستشارين الماليين', 'المنشآت السعودية', 'الأعمال البريطانية', 'الخدمات المهنية'],
};

let currentWordIndex = 0;
let wordIntervalId   = null;

function populateRotatingWords(lang) {
  const words = rotatingWords[lang];
  const wordEls = document.querySelectorAll('.rotating-word');
  wordEls.forEach((el, i) => {
    el.textContent = words[i] || '';
    el.classList.remove('active', 'exit');
  });
  currentWordIndex = 0;
  if (wordEls[0]) wordEls[0].classList.add('active');
}

function cycleWords() {
  const wordEls = document.querySelectorAll('.rotating-word');
  if (!wordEls.length) return;
  const currentEl = wordEls[currentWordIndex];
  currentEl.classList.remove('active');
  currentEl.classList.add('exit');
  setTimeout(() => { currentEl.classList.remove('exit'); }, 500);
  currentWordIndex = (currentWordIndex + 1) % wordEls.length;
  wordEls[currentWordIndex].classList.add('active');
}

function startRotatingWords() {
  if (wordIntervalId) clearInterval(wordIntervalId);
  wordIntervalId = setInterval(cycleWords, 2200);
}

let currentLang = 'en';

function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });
  const selectEl = document.getElementById('service');
  if (selectEl) {
    selectEl.querySelectorAll('option[data-i18n]').forEach(opt => {
      const key = opt.getAttribute('data-i18n');
      if (t[key] !== undefined) opt.textContent = t[key];
    });
  }
  populateRotatingWords(lang);
  try { localStorage.setItem('axis-lang', lang); } catch (e) {}
}

function toggleLanguage() {
  applyLanguage(currentLang === 'en' ? 'ar' : 'en');
}

function initMobileNav() {
  const hamburger  = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.classList.remove('open');
    } else {
      mobileMenu.classList.add('open');
      mobileMenu.setAttribute('aria-hidden', 'false');
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.classList.add('open');
    }
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.classList.remove('open');
    });
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.site-header')) {
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.classList.remove('open');
    }
  });
}

function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initScrollEffects() {
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }
  const fadeEls = document.querySelectorAll('.pain-card, .service-card, .process-step, .diff-item, .faq-item');
  fadeEls.forEach(el => el.classList.add('fade-up'));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    fadeEls.forEach(el => observer.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('visible'));
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href').slice(1);
      const target   = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      const headerHeight = document.getElementById('site-header')?.offsetHeight || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

function setFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

function initContactForm() {
  const form      = document.getElementById('contact-form');
  const successEl = document.getElementById('form-success');
  const formErrEl = document.getElementById('form-error');
  if (!form) return;

  function setFieldError(errElId, fgId, msg) {
    const errEl = document.getElementById(errElId);
    const fg    = document.getElementById(fgId);
    if (!errEl) return;
    errEl.textContent = msg;
    if (fg) fg.classList.toggle('form-group--error', !!msg);
  }

  function clearFieldErrors() {
    ['err-name', 'err-company', 'err-email'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '';
    });
    ['fg-name', 'fg-company', 'fg-email'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.remove('form-group--error');
    });
    if (formErrEl) { formErrEl.textContent = ''; formErrEl.hidden = true; }
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const t         = translations[currentLang];
    const submitBtn = form.querySelector('.form-submit');
    const nameEl    = form.querySelector('#name');
    const companyEl = form.querySelector('#company');
    const emailEl   = form.querySelector('#email');
    const emailPat  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    clearFieldErrors();
    let hasError = false;
    if (!nameEl?.value.trim()) { setFieldError('err-name', 'fg-name', t.form_err_required); hasError = true; }
    if (!companyEl?.value.trim()) { setFieldError('err-company', 'fg-company', t.form_err_required); hasError = true; }
    if (!emailEl?.value.trim() || !emailPat.test(emailEl.value.trim())) { setFieldError('err-email', 'fg-email', t.form_err_email); hasError = true; }
    if (hasError) {
      const firstErr = form.querySelector('.form-group--error input, .form-group--error textarea');
      firstErr?.focus();
      return;
    }
    const originalLabel = submitBtn.textContent;
    submitBtn.disabled  = true;
    submitBtn.textContent = t.form_submitting;
    const payload = {
      name:    nameEl.value.trim(),
      email:   emailEl.value.trim(),
      company: companyEl.value.trim(),
      service: form.querySelector('#service')?.value || '',
      message: form.querySelector('#message')?.value.trim() || '',
      _gotcha: form.querySelector('#_gotcha')?.value || '',
    };
    try {
      const res  = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const data = await res.json();
      if (res.ok && data.success) { form.hidden = true; if (successEl) successEl.hidden = false; return; }
      if (data.error === 'required_fields') {
        if (formErrEl) { formErrEl.textContent = t.form_err_required; formErrEl.hidden = false; }
      } else if (data.error === 'invalid_email') {
        setFieldError('err-email', 'fg-email', t.form_err_email);
      } else {
        if (formErrEl) { formErrEl.textContent = t.form_err_server; formErrEl.hidden = false; }
      }
    } catch {
      if (formErrEl) { formErrEl.textContent = t.form_err_server; formErrEl.hidden = false; }
    }
    submitBtn.disabled    = false;
    submitBtn.textContent = originalLabel;
  });
}

function initLanguageToggle() {
  const desktopToggle = document.getElementById('lang-toggle');
  if (desktopToggle) desktopToggle.addEventListener('click', toggleLanguage);
  const mobileToggle = document.getElementById('lang-toggle-mobile');
  if (mobileToggle) mobileToggle.addEventListener('click', toggleLanguage);
}

document.addEventListener('DOMContentLoaded', () => {
  let savedLang = 'en';
  try { savedLang = localStorage.getItem('axis-lang') || 'en'; } catch (e) {}
  applyLanguage(savedLang);
  startRotatingWords();
  initLanguageToggle();
  initMobileNav();
  initFAQ();
  initScrollEffects();
  initSmoothScroll();
  initContactForm();
  setFooterYear();
});
