/* =============================================================
   AXIS ADVISORY — SCRIPT.JS
   Bilingual EN/AR static website logic
   Handles: language toggle, rotating words animation,
            mobile nav, FAQ accordion, scroll effects
   ============================================================= */

'use strict';

/* =============================================================
   1. TRANSLATIONS CONTENT OBJECT
   All visible text for both English (en) and Arabic (ar).
   To edit content: find the key below and update both languages.
   ============================================================= */
const translations = {

  /* ── ENGLISH ─────────────────────────────────────────── */
  en: {
    /* Navigation */
    nav_home:     'Home',
    nav_services: 'Services',
    nav_approach: 'Our Approach',
    nav_faq:      'FAQs',
    nav_contact:  'Contact',
    nav_cta:      'Request Consultation',
    lang_toggle:  'العربية',

    /* Hero */
    hero_badge:            'Trusted ESG Partner for Saudi SMEs',
    hero_headline_prefix:  'ESG Readiness for',
    hero_headline_suffix:  'That Want to Win',
    hero_sub:              'Saudi buyers, government entities, and large corporates are now asking ESG questions at the procurement stage. We help you answer them — with practical systems built for your business, not theory.',
    hero_cta_primary:      'Request an ESG Readiness Consultation',
    hero_cta_secondary:    'Download Free Guide',
    hero_trust_1:          '✓ Vision 2030 aligned',
    hero_trust_2:          '✓ Mostadam compatible',
    hero_trust_3:          '✓ Tender-ready documentation',

    /* Problem */
    problem_label:          'The Challenge',
    problem_headline:       'ESG Pressure Is Now Reaching Saudi SMEs',
    problem_sub:            'If your business supplies large corporates, government-linked projects, or international partners, you are already being evaluated on ESG — whether you are ready or not.',
    pain1_title:            'Procurement Forms Are Asking ESG Questions',
    pain1_body:             'Tender documents and supplier questionnaires now include sections on environmental policy, carbon footprint, social responsibility, and governance — and blank answers cost contracts.',
    pain2_title:            'No Clear Guidance on What Is Actually Required',
    pain2_body:             'Most SMEs know ESG matters but lack clarity on which standards apply, what documentation is needed, and how to prioritise without wasting resources on the wrong things.',
    pain3_title:            'Supply Chain ESG Requirements Are Cascading Down',
    pain3_body:             'Large Saudi corporates, government-linked entities, and international project developers are passing ESG requirements down their supply chains — reaching sub-contractors, manufacturers, and service providers.',
    problem_statement:      '',
    problem_statement_strong: 'The good news:',
    problem_statement_rest:   ' you do not need a large internal ESG team or a complex reporting system to respond confidently. You need a practical, right-sized framework that fits your business — and a clear roadmap to get there.',

    /* Services */
    services_label:         'Our Services',
    services_headline:      'Three Pathways to ESG Readiness',
    services_sub:           'Whether you are just starting or aiming to differentiate through ESG, there is a clear, structured path forward.',
    service_benefit_label:  'Business Benefit',
    service_popular:        'Most Requested',
    service_cta:            'Start with Foundation',

    s1_tier:      'Tier 1',
    s1_title:     'Foundation',
    s1_desc:      'For SMEs beginning their ESG journey. Build the basic framework you need to respond to initial compliance requirements and supplier questionnaires.',
    s1_benefit:   'Stop losing contracts because of blank ESG sections. Get a credible baseline in place that shows buyers you are taking this seriously.',
    s1_d1:        'ESG maturity assessment tailored to your operations',
    s1_d2:        'Basic governance framework and policy documentation',
    s1_d3:        'Initial carbon footprint measurement (Scope 1 & 2)',
    s1_d4:        'Compliance checklist aligned with Saudi regulations',
    s1_d5:        'Clear roadmap for ESG reporting and management',
    s1_timeline:  'Typically completed in 6–8 weeks',

    s2_tier:      'Tier 2',
    s2_title:     'Mostadam Alignment',
    s2_desc:      'For companies working with Saudi real estate, infrastructure, or large project ecosystems. Align your ESG systems with Mostadam requirements and Saudi project compliance standards.',
    s2_benefit:   'Become a credible supply chain partner on major Saudi projects. Meet the ESG documentation requirements that are increasingly expected for project participation.',
    s2_d1:        'Detailed Mostadam compliance gap analysis',
    s2_d2:        'ESG system integration for Saudi project requirements',
    s2_d3:        'Scope 3 emissions roadmap development',
    s2_d4:        'Tender-ready ESG documentation package',
    s2_d5:        'Training on ESG governance for key staff',
    s2_timeline:  'Delivered over 8–12 weeks',
    s2_cta:       'Align with Mostadam',

    s3_tier:      'Tier 3',
    s3_title:     'Competitive Advantage',
    s3_desc:      'For SMEs ready to use ESG as a commercial asset. Build investor-grade strategy and disclosure that improves procurement scoring and positions you ahead of competitors.',
    s3_benefit:   'Win larger contracts, attract better partners, and improve investor confidence by demonstrating a mature, commercially linked ESG strategy.',
    s3_d1:        'Advanced ESG strategy linked to business goals',
    s3_d2:        'Enhanced carbon management including Scope 3',
    s3_d3:        'ESG risk and opportunity mapping',
    s3_d4:        'Support for procurement scoring improvement',
    s3_d5:        'Ongoing ESG performance monitoring plan',
    s3_timeline:  'Ongoing engagement — custom timeline',
    s3_cta:       'Build Your Advantage',

    /* Process */
    process_label:    'Our Approach',
    process_headline: 'Our 4-Step ESG Framework',
    process_sub:      'A structured, transparent methodology designed to embed ESG into your business operations without disrupting day-to-day activity.',
    step1_title:      'Assess',
    step1_body:       'We evaluate your current ESG maturity, identify compliance exposure, and map the specific procurement or supply chain pressures your business faces. No assumptions — everything is calibrated to your industry and situation.',
    step2_title:      'Structure',
    step2_body:       'We design a right-sized ESG framework aligned with Saudi regulatory expectations and your industry\'s requirements. The result is a practical governance structure that fits your operations — not an off-the-shelf template.',
    step3_title:      'Execute',
    step3_body:       'We integrate governance, policies, KPI tracking, and accountability into your daily operations. Your team receives the guidance they need to run ESG processes with confidence — without relying on external consultants indefinitely.',
    step4_title:      'Strengthen',
    step4_body:       'We enhance your reporting, documentation, and performance metrics so your ESG position continues to improve — keeping you compliant, competitive, and credible as requirements evolve.',
    process_cta:      'Book a Strategy Call',

    /* Why Us */
    whyus_label:      'Why Axis Advisory',
    whyus_headline:   'Practical ESG. Commercially Aware. Regionally Grounded.',
    whyus_body1:      'Axis Advisory delivers structured ESG systems designed specifically for Saudi SMEs facing regulatory and supply chain demands. Our approach integrates Mostadam compliance and governance-led frameworks into your operations — with clear timelines and measurable outcomes.',
    whyus_body2:      'We apply insights from large-scale projects to create scalable, tender-ready ESG solutions that protect your revenue and improve procurement scoring — without unnecessary complexity or jargon.',
    diff1_title:      'Vision 2030 Aligned',
    diff1_body:       'We understand the regulatory direction Saudi Arabia is moving in and build ESG systems that track with it.',
    diff2_title:      'Commercial, Not Academic',
    diff2_body:       'Our focus is on outcomes that protect revenue, improve procurement scoring, and reduce commercial risk — not on theory.',
    diff3_title:      'Right-Sized for SMEs',
    diff3_body:       'We do not apply large-enterprise frameworks to small businesses. Every engagement is calibrated to your size, sector, and current maturity level.',
    diff4_title:      'Remote-Capable Across the GCC',
    diff4_body:       'We work with SMEs across Saudi Arabia and the GCC using structured diagnostics and digital collaboration — no site visit required to get started.',
    whyus_cta:        'Start the Conversation',

    /* Lead Magnet */
    lm_label:       'Free Resource',
    lm_headline:    'Saudi SME ESG Readiness: The 10 Items Buyers Now Ask For',
    lm_body:        'Buyers, procurement teams, and project developers across Saudi Arabia and the GCC are now asking suppliers a standard set of ESG-related questions. This practical guide tells you exactly what those 10 items are — and what you need to have in place to answer them.',
    lm_item1:       'What procurement questionnaires now include about ESG',
    lm_item2:       'The minimum documentation most buyers expect',
    lm_item3:       'Where Saudi SMEs are most commonly unprepared',
    lm_item4:       'How to respond even if you are at an early stage',
    lm_cta:         'Download the Free Guide',
    lm_note:        'No registration required. Instant download.',
    lm_guide_label: 'ESG Readiness Guide',
    lm_guide_title: 'The 10 Items Buyers Now Ask For',
    lm_guide_sub:   'Saudi SME Edition',

    /* FAQ */
    faq_label:    'FAQs',
    faq_headline: 'Common Questions About ESG for Saudi SMEs',
    faq1_q:       'Which industries does Axis Advisory support?',
    faq1_a:       'We support construction subcontractors, logistics operators, engineering service firms, manufacturing businesses, facilities management companies, and food supply chains — as well as healthcare providers, professional services firms, and retail SMEs with multi-site operations. Our ESG systems are tailored to the specific regulatory and procurement requirements of each sector.',
    faq2_q:       'Is Axis Advisory a certification body for ESG?',
    faq2_a:       'No. We provide structured ESG frameworks and compliance systems but do not issue certifications. Our focus is on practical implementation and readiness aligned with Saudi regulations and international standards — so your business can respond to buyer requirements with credible, auditable evidence.',
    faq3_q:       'How quickly can we have credible ESG systems in place?',
    faq3_a:       'Foundation-level systems are typically in place within 6 to 8 weeks. Full Mostadam-aligned implementation takes 8 to 12 weeks depending on your current maturity. The result is operational governance, reporting documentation, and compliance materials ready for immediate use in tenders and audits.',
    faq4_q:       'Can you support our business remotely?',
    faq4_a:       'Yes. We work remotely with SMEs across Saudi Arabia and the GCC. Our process uses structured diagnostics and digital collaboration tools, meaning we can deliver governance-led ESG systems without requiring on-site visits. Many of our engagements are conducted entirely online.',
    faq5_q:       'Do we need a large internal team to manage ESG after the engagement?',
    faq5_a:       'No. One of our core principles is that ESG systems should be manageable with your existing team. We build frameworks that your current staff can operate — with clear responsibilities, simple tracking tools, and the training to use them. You should not need to hire a dedicated ESG manager to stay compliant.',

    /* Contact */
    contact_label:    'Get in Touch',
    contact_headline: 'Request Your ESG Readiness Consultation',
    contact_body:     'During the consultation, we assess your current ESG position, outline a clear implementation path tailored to your business, and explain how to meet Saudi regulatory and supply chain requirements — with confidence and without unnecessary complexity.',
    contact_body2:    'The conversation is straightforward and designed to give you a clear picture of where you stand and what is needed.',
    contact_location: 'Riyadh, Saudi Arabia',

    form_name_label:         'Full Name',
    form_name_placeholder:   'Your full name',
    form_company_label:      'Company Name',
    form_company_placeholder:'Your company',
    form_role_label:         'Your Role',
    form_role_default:       'Select your role',
    form_role_owner:         'Owner / Founder',
    form_role_coo:           'COO',
    form_role_cfo:           'CFO',
    form_role_compliance:    'Head of Compliance',
    form_role_procurement:   'Procurement Director',
    form_role_other:         'Other',
    form_email_label:        'Email Address',
    form_email_placeholder:  'your@email.com',
    form_message_label:      'Tell us about your situation',
    form_message_placeholder:'Briefly describe your ESG challenge or question...',
    form_submit:             'Request ESG Readiness Consultation',
    form_privacy:            'Your information is kept confidential and used only to respond to your enquiry.',

    /* Footer */
    footer_tagline:        'Practical ESG for Saudi SMEs',
    footer_location:       'Riyadh, Saudi Arabia',
    footer_nav_title:      'Navigation',
    footer_services_title: 'Services',
    footer_guide_link:     'Free ESG Guide',
    footer_contact_title:  'Contact',
    footer_cta:            'Request Consultation',
    footer_copy:           ' Axis Advisory. All rights reserved. Riyadh, Saudi Arabia.',
    footer_copy_ar:        'جميع الحقوق محفوظة — أكسيس أدفايزوري',
  },

  /* ── ARABIC ──────────────────────────────────────────── */
  ar: {
    /* Navigation */
    nav_home:     'الرئيسية',
    nav_services: 'الخدمات',
    nav_approach: 'نهجنا',
    nav_faq:      'الأسئلة الشائعة',
    nav_contact:  'تواصل معنا',
    nav_cta:      'طلب استشارة',
    lang_toggle:  'English',

    /* Hero */
    hero_badge:            'الشريك الموثوق في معايير ESG للمنشآت السعودية',
    hero_headline_prefix:  'الاستعداد لمعايير ESG',
    hero_headline_suffix:  'التي تسعى للفوز بالعقود',
    hero_sub:              'المشترون السعوديون والجهات الحكومية والشركات الكبرى باتوا يطرحون أسئلة متعلقة بمعايير ESG في مرحلة المشتريات. نساعدك على الإجابة عنها — بأنظمة عملية مُصمَّمة لعملك، لا بنظريات مجردة.',
    hero_cta_primary:      'طلب استشارة الاستعداد لمعايير ESG',
    hero_cta_secondary:    'تحميل الدليل المجاني',
    hero_trust_1:          '✓ متوافق مع رؤية 2030',
    hero_trust_2:          '✓ متوافق مع متطلبات مستدام',
    hero_trust_3:          '✓ وثائق جاهزة للمناقصات',

    /* Problem */
    problem_label:          'التحدي',
    problem_headline:       'ضغوط معايير ESG تصل الآن إلى المنشآت السعودية الصغيرة والمتوسطة',
    problem_sub:            'إذا كانت منشأتك تزوِّد شركات كبرى أو مشاريع حكومية أو شركاء دوليين، فأنت بالفعل تُقيَّم وفق معايير ESG — سواء كنت مستعداً أم لا.',
    pain1_title:            'استمارات المشتريات باتت تتضمن أسئلة ESG',
    pain1_body:             'وثائق المناقصات واستبيانات الموردين تشمل الآن أقساماً تتعلق بالسياسة البيئية وبصمة الكربون والمسؤولية الاجتماعية والحوكمة — والإجابات الفارغة تُكلِّف العقود.',
    pain2_title:            'غياب التوجيه الواضح بشأن المتطلبات الفعلية',
    pain2_body:             'معظم المنشآت الصغيرة والمتوسطة تُدرك أهمية معايير ESG، لكنها تفتقر إلى وضوح حول المعايير المنطبقة والوثائق المطلوبة وأولويات التنفيذ دون إهدار الموارد.',
    pain3_title:            'متطلبات ESG تتدفق عبر سلاسل التوريد',
    pain3_body:             'الشركات الكبرى والجهات الحكومية والمطورون الدوليون يُمرِّرون متطلبات ESG عبر سلاسل توريدهم — لتصل إلى المقاولين من الباطن والمصنِّعين ومقدِّمي الخدمات.',
    problem_statement:      '',
    problem_statement_strong: 'البشرى الطيبة:',
    problem_statement_rest:   ' لا تحتاج إلى فريق ESG داخلي كبير أو نظام تقارير معقَّد لتستجيب بثقة. ما تحتاجه هو إطار عملي مُناسب لحجم عملك — مع خارطة طريق واضحة للوصول إليه.',

    /* Services */
    services_label:         'خدماتنا',
    services_headline:      'ثلاثة مسارات للاستعداد لمعايير ESG',
    services_sub:           'سواء كنت في بداية مسيرتك مع معايير ESG أو تسعى إلى التميُّز من خلالها، هناك مسار واضح ومنظَّم أمامك.',
    service_benefit_label:  'الفائدة التجارية',
    service_popular:        'الأكثر طلباً',
    service_cta:            'ابدأ بمستوى الأساس',

    s1_tier:      'المستوى الأول',
    s1_title:     'الأساس',
    s1_desc:      'للمنشآت الصغيرة والمتوسطة في بداية مسيرتها مع معايير ESG. أنشئ الإطار الأساسي الذي تحتاجه للاستجابة لمتطلبات الامتثال الأولية واستبيانات الموردين.',
    s1_benefit:   'توقَّف عن خسارة العقود بسبب الأقسام الفارغة المتعلقة بـ ESG. أنشئ خطاً أساسياً موثوقاً يُظهر للمشترين أنك تأخذ هذا الأمر بجدية.',
    s1_d1:        'تقييم نضج ESG مُصمَّم خصيصاً لعملياتك',
    s1_d2:        'إطار حوكمة أساسي ووثائق السياسات',
    s1_d3:        'قياس أولي لبصمة الكربون (النطاق 1 والنطاق 2)',
    s1_d4:        'قائمة امتثال متوافقة مع الأنظمة السعودية',
    s1_d5:        'خارطة طريق واضحة لإعداد تقارير ESG وإدارتها',
    s1_timeline:  'يُنجَز عادةً في غضون 6 إلى 8 أسابيع',

    s2_tier:      'المستوى الثاني',
    s2_title:     'التوافق مع مستدام',
    s2_desc:      'للشركات العاملة في قطاع العقارات والبنية التحتية السعودية أو منظومات المشاريع الكبرى. وافِق أنظمة ESG الخاصة بك مع متطلبات برنامج مستدام ومعايير الامتثال للمشاريع السعودية.',
    s2_benefit:   'كن شريكاً موثوقاً في سلسلة التوريد للمشاريع السعودية الكبرى. استوفِ متطلبات وثائق ESG المتوقَّعة بصورة متزايدة للمشاركة في المشاريع.',
    s2_d1:        'تحليل مفصَّل لثغرات الامتثال مع متطلبات مستدام',
    s2_d2:        'دمج أنظمة ESG في متطلبات المشاريع السعودية',
    s2_d3:        'تطوير خارطة طريق لانبعاثات النطاق الثالث',
    s2_d4:        'حزمة وثائق ESG جاهزة للمناقصات',
    s2_d5:        'تدريب الموظفين الرئيسيين على حوكمة ESG',
    s2_timeline:  'يُسلَّم خلال 8 إلى 12 أسبوعاً',
    s2_cta:       'التوافق مع مستدام',

    s3_tier:      'المستوى الثالث',
    s3_title:     'الميزة التنافسية',
    s3_desc:      'للمنشآت المستعدة لتحويل معايير ESG إلى أصل تجاري. أنشئ استراتيجية وإفصاحاً بمستوى المستثمرين يُحسِّن درجات المشتريات ويضعك في مكانة متقدمة على المنافسين.',
    s3_benefit:   'افُز بعقود أكبر، واجذب شركاء أفضل، وعزِّز ثقة المستثمرين من خلال إظهار استراتيجية ESG ناضجة مرتبطة بأهداف عملك.',
    s3_d1:        'استراتيجية ESG متقدمة مرتبطة بأهداف العمل',
    s3_d2:        'إدارة معززة للكربون تشمل النطاق الثالث',
    s3_d3:        'رسم خريطة مخاطر وفرص ESG',
    s3_d4:        'دعم تحسين درجات تقييم المشتريات',
    s3_d5:        'خطة مستمرة لرصد أداء ESG',
    s3_timeline:  'تعاقد مستمر — جدول زمني مخصَّص',
    s3_cta:       'ابنِ ميزتك التنافسية',

    /* Process */
    process_label:    'نهجنا',
    process_headline: 'إطارنا المكوَّن من 4 خطوات لمعايير ESG',
    process_sub:      'منهجية منظَّمة وشفافة مُصمَّمة لدمج معايير ESG في عمليات منشأتك دون تعطيل النشاط اليومي.',
    step1_title:      'التقييم',
    step1_body:       'نُقيِّم مستوى نضج ESG الحالي لديك، ونحدد نقاط الضعف في الامتثال، ونرصد الضغوط المحددة التي تواجهها منشأتك في المشتريات وسلسلة التوريد. لا افتراضات — كل شيء مُعايَر وفق قطاعك ووضعك الفعلي.',
    step2_title:      'الهيكلة',
    step2_body:       'نُصمِّم إطار ESG مناسباً لحجمك، متوافقاً مع توقعات الأنظمة السعودية ومتطلبات قطاعك. النتيجة بنية حوكمة عملية تلائم عملياتك — لا قالب جاهز من الرف.',
    step3_title:      'التنفيذ',
    step3_body:       'ندمج الحوكمة والسياسات وتتبع مؤشرات الأداء والمساءلة في عملياتك اليومية. يحصل فريقك على التوجيه اللازم لإدارة عمليات ESG بثقة — دون الاعتماد الدائم على مستشارين خارجيين.',
    step4_title:      'التعزيز',
    step4_body:       'نُحسِّن تقاريرك ووثائقك ومقاييس أدائك حتى تستمر منشأتك في تحسين موقفها من ESG — مع الحفاظ على الامتثال والتنافسية والمصداقية مع تطور المتطلبات.',
    process_cta:      'احجز مكالمة استراتيجية',

    /* Why Us */
    whyus_label:      'لماذا أكسيس أدفايزوري',
    whyus_headline:   'معايير ESG عملية. وعي تجاري. جذور إقليمية.',
    whyus_body1:      'تُقدِّم أكسيس أدفايزوري أنظمة ESG منظَّمة مُصمَّمة خصيصاً للمنشآت السعودية الصغيرة والمتوسطة التي تواجه متطلبات تنظيمية وضغوط سلسلة التوريد. يدمج نهجنا متطلبات الامتثال لمستدام والأطر القائمة على الحوكمة في عملياتك — بجداول زمنية واضحة ونتائج قابلة للقياس.',
    whyus_body2:      'نستثمر الخبرات المُكتسبة من المشاريع الكبرى لإنشاء حلول ESG قابلة للتوسع وجاهزة للمناقصات، تحمي إيراداتك وتُحسِّن درجات المشتريات — دون تعقيد أو مصطلحات مُبهمة.',
    diff1_title:      'متوافق مع رؤية 2030',
    diff1_body:       'نفهم الاتجاه التنظيمي الذي تسير فيه المملكة العربية السعودية ونبني أنظمة ESG تسير في اتجاهه.',
    diff2_title:      'تجاري لا أكاديمي',
    diff2_body:       'تركيزنا على النتائج التي تحمي الإيرادات وتُحسِّن درجات المشتريات وتُقلِّل المخاطر التجارية — لا على النظريات.',
    diff3_title:      'مُناسب لحجم المنشآت الصغيرة والمتوسطة',
    diff3_body:       'لا نُطبِّق أطر الشركات الكبرى على الأعمال الصغيرة. كل تعاقد مُعايَر وفق حجمك وقطاعك ومستوى نضجك الحالي.',
    diff4_title:      'قادرون على العمل عن بُعد في منطقة الخليج',
    diff4_body:       'نعمل مع المنشآت الصغيرة والمتوسطة عبر المملكة العربية السعودية ودول الخليج باستخدام أدوات التشخيص المنظَّمة والتعاون الرقمي — لا حاجة لزيارة ميدانية للبدء.',
    whyus_cta:        'ابدأ المحادثة',

    /* Lead Magnet */
    lm_label:       'مورد مجاني',
    lm_headline:    'استعداد المنشآت السعودية الصغيرة والمتوسطة لمعايير ESG: العناصر الـ 10 التي يطلبها المشترون الآن',
    lm_body:        'المشترون وفرق المشتريات ومطورو المشاريع في المملكة العربية السعودية ودول الخليج باتوا يطرحون على الموردين مجموعة قياسية من الأسئلة المتعلقة بـ ESG. يُخبرك هذا الدليل العملي بالضبط ما هي تلك العناصر الـ 10 — وما تحتاج إلى امتلاكه للإجابة عنها.',
    lm_item1:       'ما تتضمنه استبيانات المشتريات الآن بشأن ESG',
    lm_item2:       'الحد الأدنى من الوثائق التي يتوقعها معظم المشترين',
    lm_item3:       'أين تكون المنشآت السعودية غير مستعدة في الغالب',
    lm_item4:       'كيفية الاستجابة حتى لو كنت في مرحلة مبكرة',
    lm_cta:         'تحميل الدليل المجاني',
    lm_note:        'لا يلزم التسجيل. تحميل فوري.',
    lm_guide_label: 'دليل الاستعداد لـ ESG',
    lm_guide_title: 'العناصر الـ 10 التي يطلبها المشترون الآن',
    lm_guide_sub:   'إصدار المنشآت السعودية',

    /* FAQ */
    faq_label:    'الأسئلة الشائعة',
    faq_headline: 'أسئلة شائعة حول معايير ESG للمنشآت السعودية الصغيرة والمتوسطة',
    faq1_q:       'ما القطاعات التي تدعمها أكسيس أدفايزوري؟',
    faq1_a:       'ندعم مقاولي الباطن في قطاع البناء، ومشغِّلي اللوجستيات، وشركات خدمات الهندسة، والمؤسسات التصنيعية، وشركات إدارة المرافق، وسلاسل توريد الغذاء — فضلاً عن مقدِّمي الرعاية الصحية وشركات الخدمات المهنية وقطاع التجزئة متعدد المواقع. أنظمة ESG لدينا مُصمَّمة وفق المتطلبات التنظيمية والمشتريات الخاصة بكل قطاع.',
    faq2_q:       'هل أكسيس أدفايزوري جهة إصدار شهادات ESG؟',
    faq2_a:       'لا. نُقدِّم أطر ESG منظَّمة وأنظمة امتثال، لكننا لا نُصدر شهادات. تركيزنا على التطبيق العملي والاستعداد المتوافق مع الأنظمة السعودية والمعايير الدولية — حتى تتمكن منشأتك من الاستجابة لمتطلبات المشترين بأدلة موثوقة وقابلة للمراجعة.',
    faq3_q:       'كم يستغرق تطبيق أنظمة ESG موثوقة؟',
    faq3_a:       'تُنجَز أنظمة المستوى الأساسي عادةً في غضون 6 إلى 8 أسابيع. يستغرق التطبيق الكامل المتوافق مع مستدام من 8 إلى 12 أسبوعاً حسب مستوى نضجك الحالي. النتيجة حوكمة تشغيلية ووثائق تقارير ومواد امتثال جاهزة للاستخدام الفوري في المناقصات وعمليات التدقيق.',
    faq4_q:       'هل يمكنكم دعم منشأتنا عن بُعد؟',
    faq4_a:       'نعم. نعمل عن بُعد مع المنشآت الصغيرة والمتوسطة في جميع أنحاء المملكة العربية السعودية ودول الخليج. تعتمد عمليتنا على أدوات التشخيص المنظَّمة وأدوات التعاون الرقمي، مما يعني قدرتنا على تسليم أنظمة ESG قائمة على الحوكمة دون الحاجة إلى زيارات ميدانية. كثير من تعاقداتنا تتم بالكامل عبر الإنترنت.',
    faq5_q:       'هل نحتاج إلى فريق داخلي كبير لإدارة ESG بعد انتهاء التعاقد؟',
    faq5_a:       'لا. من مبادئنا الأساسية أن تكون أنظمة ESG قابلة للإدارة بفريقك الحالي. نبني أطراً يمكن لموظفيك الحاليين تشغيلها — بمسؤوليات واضحة وأدوات تتبع بسيطة والتدريب اللازم لاستخدامها. لا ينبغي أن تحتاج إلى توظيف مدير ESG متخصص للحفاظ على الامتثال.',

    /* Contact */
    contact_label:    'تواصل معنا',
    contact_headline: 'اطلب استشارتك للاستعداد لمعايير ESG',
    contact_body:     'خلال الاستشارة، نُقيِّم موقفك الحالي من ESG، ونضع خطة تنفيذ واضحة مُصمَّمة لمنشأتك، ونشرح كيفية الوفاء بالمتطلبات التنظيمية السعودية ومتطلبات سلسلة التوريد — بثقة ودون تعقيد غير ضروري.',
    contact_body2:    'المحادثة مباشرة ومُصمَّمة لتمنحك صورة واضحة عن وضعك الحالي وما هو مطلوب.',
    contact_location: 'الرياض، المملكة العربية السعودية',

    form_name_label:         'الاسم الكامل',
    form_name_placeholder:   'اسمك الكامل',
    form_company_label:      'اسم الشركة',
    form_company_placeholder:'شركتك',
    form_role_label:         'مسمَّاك الوظيفي',
    form_role_default:       'اختر مسمَّاك الوظيفي',
    form_role_owner:         'مالك / مؤسِّس',
    form_role_coo:           'مدير العمليات',
    form_role_cfo:           'مدير مالي',
    form_role_compliance:    'رئيس الامتثال',
    form_role_procurement:   'مدير المشتريات',
    form_role_other:         'أخرى',
    form_email_label:        'البريد الإلكتروني',
    form_email_placeholder:  'بريدك@الإلكتروني.com',
    form_message_label:      'أخبرنا عن وضعك',
    form_message_placeholder:'صِف باختصار تحديك أو سؤالك المتعلق بـ ESG...',
    form_submit:             'طلب استشارة الاستعداد لمعايير ESG',
    form_privacy:            'تظل معلوماتك سرية ولا تُستخدم إلا للرد على استفسارك.',

    /* Footer */
    footer_tagline:        'معايير ESG العملية للمنشآت السعودية',
    footer_location:       'الرياض، المملكة العربية السعودية',
    footer_nav_title:      'التنقل',
    footer_services_title: 'الخدمات',
    footer_guide_link:     'دليل ESG المجاني',
    footer_contact_title:  'التواصل',
    footer_cta:            'طلب استشارة',
    footer_copy:           ' أكسيس أدفايزوري. جميع الحقوق محفوظة. الرياض، المملكة العربية السعودية.',
    footer_copy_ar:        'جميع الحقوق محفوظة — أكسيس أدفايزوري',
  },
};

/* =============================================================
   2. ROTATING WORDS (hero animated headline)
   ============================================================= */
const rotatingWords = {
  en: ['Contractors',    'Suppliers',     'Manufacturers',    'Logistics Firms',     'Saudi SMEs'],
  ar: ['المقاولين',     'الموردين',      'المصنِّعين',       'شركات اللوجستيات',    'المنشآت السعودية'],
};

let currentWordIndex = 0;
let wordIntervalId   = null;

/** Populate rotating word elements with current language words */
function populateRotatingWords(lang) {
  const words = rotatingWords[lang];
  const wordEls = document.querySelectorAll('.rotating-word');

  wordEls.forEach((el, i) => {
    el.textContent = words[i] || '';
    el.classList.remove('active', 'exit');
  });

  // Reset to first word
  currentWordIndex = 0;
  if (wordEls[0]) wordEls[0].classList.add('active');
}

/** Cycle to next rotating word */
function cycleWords() {
  const wordEls = document.querySelectorAll('.rotating-word');
  if (!wordEls.length) return;

  const currentEl = wordEls[currentWordIndex];
  currentEl.classList.remove('active');
  currentEl.classList.add('exit');

  // Remove exit class after animation
  setTimeout(() => { currentEl.classList.remove('exit'); }, 500);

  currentWordIndex = (currentWordIndex + 1) % wordEls.length;
  wordEls[currentWordIndex].classList.add('active');
}

/** Start rotating word animation */
function startRotatingWords() {
  if (wordIntervalId) clearInterval(wordIntervalId);
  wordIntervalId = setInterval(cycleWords, 2200);
}


/* =============================================================
   3. LANGUAGE TOGGLE
   ============================================================= */
let currentLang = 'en';

/**
 * Apply language to the page:
 * - Updates html[lang] and html[dir]
 * - Updates all [data-i18n] text nodes
 * - Updates all [data-i18n-placeholder] attributes
 * - Updates rotating words
 * - Updates select option texts
 */
function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Update document language and direction
  document.documentElement.lang = lang;
  document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Update all placeholders with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // Update select option elements (role dropdown)
  const selectEl = document.getElementById('role');
  if (selectEl) {
    selectEl.querySelectorAll('option[data-i18n]').forEach(opt => {
      const key = opt.getAttribute('data-i18n');
      if (t[key] !== undefined) opt.textContent = t[key];
    });
  }

  // Update rotating words
  populateRotatingWords(lang);

  // Persist preference
  try { localStorage.setItem('axis-lang', lang); } catch (e) {}
}

/** Toggle between en and ar */
function toggleLanguage() {
  applyLanguage(currentLang === 'en' ? 'ar' : 'en');
}


/* =============================================================
   4. MOBILE NAVIGATION
   ============================================================= */
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

  // Close menu when a nav link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.classList.remove('open');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.site-header')) {
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.classList.remove('open');
    }
  });
}


/* =============================================================
   5. FAQ ACCORDION
   ============================================================= */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all items
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}


/* =============================================================
   6. SCROLL EFFECTS
   ============================================================= */
function initScrollEffects() {
  // Header shadow on scroll
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // Fade-up animation using IntersectionObserver
  const fadeEls = document.querySelectorAll(
    '.pain-card, .service-card, .process-step, .diff-item, .faq-item'
  );

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
    // Fallback: show all immediately
    fadeEls.forEach(el => el.classList.add('visible'));
  }
}


/* =============================================================
   7. SMOOTH SCROLL (fallback for older browsers)
   ============================================================= */
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


/* =============================================================
   8. FOOTER YEAR
   ============================================================= */
function setFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}


/* =============================================================
   9. CONTACT FORM — CLIENT-SIDE VALIDATION
   (Server submission handled by form action attribute)
   ============================================================= */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    const nameEl    = form.querySelector('#name');
    const emailEl   = form.querySelector('#email');
    const submitBtn = form.querySelector('.form-submit');

    // Basic validation
    if (nameEl && !nameEl.value.trim()) {
      e.preventDefault();
      nameEl.focus();
      return;
    }

    if (emailEl) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailEl.value.trim())) {
        e.preventDefault();
        emailEl.focus();
        return;
      }
    }

    // If form has no action (placeholder state), prevent default and show message
    if (!form.action || form.action === window.location.href + '#') {
      e.preventDefault();
      if (submitBtn) {
        const original = submitBtn.textContent;
        submitBtn.textContent = currentLang === 'ar'
          ? 'يُرجى إضافة خدمة نموذج للإرسال الفعلي'
          : 'Please connect a form service to enable submissions.';
        submitBtn.disabled = true;
        setTimeout(() => {
          submitBtn.textContent = original;
          submitBtn.disabled = false;
        }, 4000);
      }
    }
  });
}


/* =============================================================
   10. LANGUAGE TOGGLE BUTTON EVENT LISTENERS
   ============================================================= */
function initLanguageToggle() {
  // Desktop toggle
  const desktopToggle = document.getElementById('lang-toggle');
  if (desktopToggle) {
    desktopToggle.addEventListener('click', toggleLanguage);
  }

  // Mobile toggle
  const mobileToggle = document.getElementById('lang-toggle-mobile');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleLanguage);
  }
}


/* =============================================================
   11. INIT — Run everything on DOMContentLoaded
   ============================================================= */
document.addEventListener('DOMContentLoaded', () => {

  // Restore language preference (default: 'en')
  let savedLang = 'en';
  try { savedLang = localStorage.getItem('axis-lang') || 'en'; } catch (e) {}

  // Apply initial language
  applyLanguage(savedLang);

  // Start rotating words animation
  startRotatingWords();

  // Init all interactive modules
  initLanguageToggle();
  initMobileNav();
  initFAQ();
  initScrollEffects();
  initSmoothScroll();
  initContactForm();
  setFooterYear();

});
