
var locations = [
  {
    Name: "Surrey Jamea Masjid",
    Address: "12407 72 Ave",
    Phone: "(604) 596-7834",
    Website: "http://surrey.thebcma.com/",
    Category: "Culture & Community",
    Directions: "Surrey+Jamea+Masjid,+12407+72+Ave,+Surrey,+BC+V3W+2M5/@49.1342644,-122.8808848,17z",
    Description: "We are a community of believers dedicated to the worship of Allah and the practice of Islam. Our mosque offers a peaceful and respectful environment for our members to come together and perform their daily prayers, listen to the teachings of the Quran, and engage in community activities."
  },
  {
    Name: "Masjid Al-Noor: Mosque of Lights",
    Address: "13526 98A Ave",
    Phone: "(604) 930-9742",
    Website: "http://masjidalnoor.ca/",
    Category: "Culture & Community",
    Directions: "Masjid+Al-Noor:+Mosque+of+Lights,+98A+Avenue,+Surrey,+BC/@49.1814734,-122.917654,12z",
    Description: "We are a community of believers dedicated to the worship of Allah and the practice of Islam. Our mosque offers a peaceful and respectful environment for our members to come together and perform their daily prayers, listen to the teachings of the Quran, and engage in community activities."
  },
  {
    Name: "Masjid-Ur-Rahmah",
    Address: "13585 62 Ave",
    Phone: "(604) 597-7863",
    Website: "http://org.thebcma.com/surreyeast/",
    Category: "Culture & Community",
    Directions: "Masjid-Ur-Rahmah,+62+Avenue,+Surrey,+BC/@49.1157032,-122.9157587,12z",
    Description: "We are a community of believers dedicated to the worship of Allah and the practice of Islam. Our mosque offers a peaceful and respectful environment for our members to come together and perform their daily prayers, listen to the teachings of the Quran, and engage in community activities."
  },
  {
    Name: "Abu Bakr Islamic Centre",
    Address: "7375 144 St",
    Phone: "(778) 564-3717",
    Website: "http://www.abubakr.ca/",
    Category: "Culture & Community",
    Directions: "Abu+Bakr+Islamic+Centre,+144+Street,+Surrey,+BC/@49.1369754,-122.8938275,12z",
    Description: "We are a community of believers dedicated to the worship of Allah and the practice of Islam. Our mosque offers a peaceful and respectful environment for our members to come together and perform their daily prayers, listen to the teachings of the Quran, and engage in community activities."
  },
  {
    Name: "White Rock Muslim Association - Musallah",
    Address: "15531 24 Ave ",
    Phone: "(604) 542-0260",
    Website: "http://www.whiterockmuslims.com/",
    Category: "Culture & Community",
    Directions: "White+Rock+Muslim+Association+-+Musallah,+24+Avenue,+Surrey,+BC/@49.0471809,-122.8620398,12z",
    Description: "We are a community of believers dedicated to the worship of Allah and the practice of Islam. Our mosque offers a peaceful and respectful environment for our members to come together and perform their daily prayers, listen to the teachings of the Quran, and engage in community activities."
  },
  {
    Name: "Al Iman Islamic Centre",
    Address: "13478 78 Ave #18",
    Phone: "6045935123",
    Website: "http://al-imancenter.com/",
    Category: "Culture & Community",
    Directions: "Al+Iman+Islamic+Centre,+78+Avenue,+Surrey,+BC/@49.1438314,-122.9178604,12z",
    Description: "We are a community of believers dedicated to the worship of Allah and the practice of Islam. Our mosque offers a peaceful and respectful environment for our members to come together and perform their daily prayers, listen to the teachings of the Quran, and engage in community activities."
  },
  {
    Name: "Masjidul Huda",
    Address: "14136 Grosvenor Rd",
    Phone: "6045127836",
    Website: "https://awqat.net/Masjids/BCHuda/huda.html",
    Category: "Culture & Community",
    Directions: "Masjidul+Huda,+Grosvenor+Road,+Surrey,+BC/@49.2071209,-122.9001125,12z",
    Description: "We are a community of believers dedicated to the worship of Allah and the practice of Islam. Our mosque offers a peaceful and respectful environment for our members to come together and perform their daily prayers, listen to the teachings of the Quran, and engage in community activities."
  },
  {
    Name: "Fleetwood Islamic Center",
    Address: "8462 162 St #209-210",
    Phone: "6047862215",
    Website: "https://www.facebook.com/pages/Fleetwood-Islamic-Centre/374700776014820",
    Category: "Culture & Community",
    Directions: "Fleetwood+Islamic+Center,+162+Street,+Surrey,+BC/@49.1566747,-122.8418581,12z",
    Description: "We are a community of believers dedicated to the worship of Allah and the practice of Islam. Our mosque offers a peaceful and respectful environment for our members to come together and perform their daily prayers, listen to the teachings of the Quran, and engage in community activities."
  },
  {
    Name: "Guildford Islamic Cultural Center (GICC)",
    Address: "15290 103A Ave #101",
    Phone: "6046706732",
    Website: "https://giccmasjid.org/",
    Category: "Culture & Community",
    Directions: "Guildford+Islamic+Cultural+Center+(GICC),+103A+Avenue,+Surrey,+BC/@49.1901378,-122.868178,12z",
    Description: "We are a community of believers dedicated to the worship of Allah and the practice of Islam. Our mosque offers a peaceful and respectful environment for our members to come together and perform their daily prayers, listen to the teachings of the Quran, and engage in community activities."
  },
  {
    Name: "Ukrainian Orthodox Church",
    Address: "13512 108 Ave",
    Phone: "6045810313",
    Website: "https://uocstmarysurrey.com",
    Category: "Culture & Community",
    Directions: "Ukrainian+Orthodox+Church,+108+Avenue,+Surrey,+BC/@49.1987337,-122.9176831,12z",
    Description: "The Ukrainian Orthodox Church of St. Mary in Surrey, BC is part of Surrey's heritage, and is one of the most significant cultural landmarks in the area. St. Mary's provides a physical symbol of the Ukrainian community and it is valued for its active contribution to the life and cultural character"
  },
  {
    Name: "Surrey Food Bank Society",
    Address: "13478 78 Ave Unit - 1",
    Phone: "6045815443",
    Website: "https://www.surreyfoodbank.org/",
    Category: ['Food Banks', 'Culture & Community'],
    Directions: "Surrey+Food+Bank+Society,+78+Avenue,+Surrey,+BC/@49.1441153,-122.9197442,12z",
    Description: "We support refugees in need by providing access to healthy and nutritious food. Our services include distributing emergency food supplies, offering nutritious meal options, and connecting you with resources for long-term food security"
  },
  {
    Name: "Sources Food Bank",
    Address: "2343 156 St",
    Phone: "6045318168",
    Website: "https://www.sourcesbc.ca/our-services/sources-white-rock-south-surrey-food-bank/",
    Category: "Food Banks",
    Directions: "Sources+Food+Bank,+156+Street,+Surrey,+BC/@49.0446257,-122.8606209,12z",
    Description: "We  support refugees in need by providing access to healthy and nutritious food. Our services include distributing emergency food supplies, offering nutritious meal options, and connecting you with resources for long-term food security"
  },
  {
    Name: "Guru Nanak Food Bank Surrey",
    Address: "15299 68 Ave #101",
    Phone: "6045801313",
    Website: "https://www.gnfb.ca/",
    Category: "Food Banks",
    Directions: "Guru+Nanak+Food+Bank+Surrey,+68+Avenue,+Surrey,+BC/@49.1273982,-122.8700202,12z",
    Description: "We support refugees in need by providing access to healthy and nutritious food. Our services include distributing emergency food supplies, offering nutritious meal options, and connecting you with resources for long-term food security"
  },
  {
    Name: "Muslim Food Bank and Community Services",
    Address: "12941 115 Ave #104",
    Phone: "8662483868",
    Website: "https://muslimfoodbank.com/",
    Category: ["Food Banks","Settlement"],
    Directions: "Muslim+Food+Bank+and+Community+Services,+115+Avenue,+Surrey,+BC/@49.2120087,-122.9325274,12z",
    Description: "We support refugees in need by providing access to healthy, culturally appropriate and nutritious food. Our services include distributing emergency food supplies, offering nutritious meal options, and connecting you with resources for long-term food security"
  },
  {
    Name: "Guildford WorkBC",
    Address: "10334 152A St #202",
    Phone: "6045809740",
    Website: "https://workbccentre-surreyguildford.ca/",
    Category: "Employment",
    Directions: "Guildford+WorkBC,+152A+Street,+Surrey,+BC/@49.1901766,-122.8692631,12z",
    Description: "Access job search resources, employment planning, skills assessment, training programs, work experience placement and more at WorkBC for free as a refugee."
  },
  {
    Name: "Whalley WorkBC",
    Address: "10362 King George Blvd #160 ",
    Phone: "6045840003",
    Website: "https://workbccentre-surreywhalley.ca/",
    Category: "Employment",
    Directions: "Whalley+WorkBC,+King+George+Boulevard,+Surrey,+BC/@49.1910359,-122.9141438,12z",
    Description: "Access job search resources, employment planning, skills assessment, training programs, work experience placement and more at WorkBC for free as a refugee."
  },
  {
    Name: "Newton WorkBC ",
    Address: "7525 King George Blvd",
    Phone: "7787280175",
    Website: "http://workbccentre-surreynewton.ca/",
    Category: "Employment",
    Directions: "Newton+WorkBC+Centre,+King+George+Boulevard,+Surrey,+BC/@49.1395536,-122.9162776,12z",
    Description: "Access job search resources, employment planning, skills assessment, training programs, work experience placement and more at WorkBC for free as a refugee."
  },
  {
    Name: "South Surrey - White Rock WorkBC",
    Address: "1688 152 St Suite 108 ",
    Phone: "6045313331",
    Website: "http://workbccentre-surrey-152.ca/",
    Category: "Employment",
    Directions: "WorkBC+Centre+South+Surrey+-+White+Rock,+152+Street,+Surrey,+BC/@49.0323101,-122.8710503,12z",
    Description: "Access job search resources, employment planning, skills assessment, training programs, work experience placement and more at WorkBC for free as a refugee."
  },
  {
    Name: "Cloverdale WorkBC",
    Address: "17700 56 Ave Suite 202 ",
    Phone: "7785475020",
    Website: "http://workbccentre-surrey-56.ca/",
    Category: "Employment",
    Directions: "WorkBC+Centre+Surrey+Cloverdale,+56+Avenue,+Surrey,+BC/@49.1035882,-122.8024425,12z",
    Description: "Access job search resources, employment planning, skills assessment, training programs, work experience placement and more at WorkBC for free as a refugee."
  },
  {
    Name: "Cloverdale Recreation Centre",
    Address: "6188 176 St",
    Phone: "6045987960",
    Website: "https://www.surrey.ca/about-surrey/newcomer-information",
    Category: ["Settlement","Employment","Family"],
    Directions: "Cloverdale+Recreation+Centre,+176+Street,+Surrey,+BC/@49.1156193,-122.8045486,12z",
    Description: "At the recreation centre, we offer a range of settlement services to help you transition to life in Canada, including assistance with finding housing and employment, enrolling in language classes, accessing healthcare and other essential resources, and connecting you with community support networks."
  },
  {
    Name: "Guildford Recreation Centre",
    Address: "15105 105 Ave",
    Phone: "6045026360",
    Website: "https://www.surrey.ca/about-surrey/newcomer-information",
    Category: ["Settlement","Employment","Family"],
    Directions: "Guildford+Recreation+Centre,+105+Avenue,+Surrey,+BC/@49.1936296,-122.8728615,12z",
    Description: "At the recreation centre, we offer a range of settlement services to help you transition to life in Canada, including assistance with finding housing and employment, enrolling in language classes, accessing healthcare and other essential resources, and connecting you with community support networks."
  },
  {
    Name: "Newton Recreation Centre",
    Address: "13730 72 Ave",
    Phone: "6045015540",
    Website: "https://www.surrey.ca/about-surrey/newcomer-information",
    Category: ["Settlement","Employment","Family"],
    Directions: "Newton+Recreation+Centre,+72+Avenue,+Surrey,+BC/@49.133187,-122.9124691,12z",
    Description: "At the recreation centre, we offer a range of settlement services to help you transition to life in Canada, including assistance with finding housing and employment, enrolling in language classes, accessing healthcare and other essential resources, and connecting you with community support networks."
  },
  {
    Name: "Umoja Operation Compassion Society",
    Address: "14888 104 Ave #208",
    Phone: "6045815574",
    Website: "https://umojaoperation.ca",
    Category: ["Learn English","Employment","Settlement"],
    Directions: "Umoja+Operation+Compassion+Society,+104+Avenue,+Surrey,+BC/@49.19135,-122.8797883,12z",
    Description: "We empower immigrants and refugees to successfully integrate into an inclusive Canadian society, through our Sdult Literacy and Life Skills program."
  },
  {
    Name: "ISSofBC Welcome Centre Surrey",
    Address: "10334 152A St #301",
    Phone: "6046831684",
    Website: "https://issbc.org/",
    Category: ["Learn English","Employment","Settlement","Financial","Youth","Women","Culture & Community"],
    Directions: "ISSofBC+Welcome+Centre+-+Surrey,+152A+Street,+Surrey,+BC/@49.1901325,-122.869298,12z",
    Description: "If you're a refugee new to Canada, we can help. ISSofBC provides free newcomer services including settlement support, employment programs, English classes, and mor"
  },
  {
    Name: "MOSAIC Surrey Newcomers' Centre",
    Address: "7134 King George Blvd #200",
    Phone: "7785919334",
    Website: "https://mosaicbc.org/",
    Category: ["Learn English","Employment","Settlement","Financial","Family","Youth","Women","Culture & Community"],
    Directions: "MOSAIC+Surrey+Newcomers'+Centre+and+Migrant+Worker's+Hub,+King+George+Boulevard,+Surrey,+BC/@49.1323468,-122.9145153,12z",
    Description: "MOSAIC provides services to refugees to help advance an inclusive and thriving Canada. Our staff and partners work together through employment, settlement, and language services to further the success and sense of belonging of newcomers from diverse backgrounds."
  },
  {
    Name: "DIVERSEcity Community Resources Society",
    Address: "13455 76 Ave",
    Phone: "6045970205",
    Website: "http://www.dcrs.ca/",
    Category: ["Learn English","Employment","Settlement","Family","Youth","Women","Culture & Community"],
    Directions: "DIVERSEcity+Community+Resources+Society,+76+Avenue,+Surrey,+BC/@49.1412466,-122.9195794,12z",
    Description: "At DIVERSEcity Community Resources Society, we help newcomers, refugees and diverse communities with settlement, language, employment services and mor"
  },
  {
    Name: "Options Community Services Newton",
    Address: "13520 78 Ave",
    Phone: "6045964321",
    Website: "https://www.options.bc.ca/",
    Category: "Settlement",
    Directions: "Options+Community+Services,+78+Avenue,+Surrey,+BC/@49.1443849,-122.9182401,12z",
    Description: "At Options we believe in helping people help themselves. For refugees, we provide a settlement service. We believe in collaborating with individuals, businesses, community groups and government to create focused, effective and responsive resources for the community. "
  },
  {
    Name: "Progressive Intercultural Community Services (PICS)",
    Address: "12725 80 Ave #205",
    Phone: "6045967722",
    Website: "https://pics.bc.ca/",
    Category: ["Learn English","Settlement","Family","Youth"],
    Directions: "PICS+-+Payal+Center,+80+Avenue,+Surrey,+BC/@49.1489553,-122.8646277,18.9z",
    Description: "Progressive Intercultural Community Services (PICS) Society provides a broad spectrum of programs and services for refugees, including Employment Programs, Settlement Services, Language Services, Social Programs and more"
  },
  {
    Name: "SUCCESS",
    Address: "15117 101 Ave #100",
    Phone: "6045886869",
    Website: "http://www.success.bc.ca/",
    Category: ["Learn English","Settlement","Women","Culture & Community"],
    Directions: "SUCCESS,+101+Avenue,+Surrey,+BC/@49.186492,-122.8733188,12z",
    Description: "We are a diverse, inclusive, and multi-service agency that assists refugees in all stages of their lives in Canada with settlement, English classes and support groups."
  },
  {
    Name: "Surrey English Language Centre",
    Address: "7337 137 St Floor 2",
    Phone: "6045074150",
    Website: "https://educacentre.com/wp-content/uploads/2021/05/LINC-Information-Brochure-Jun-2021.pdf",
    Category: "Learn English",
    Directions: "Surrey+English+Language+Center,+137+Street,+Surrey,+BC/@49.1361496,-122.9133077,12z",
    Description: "To apply for LINC and start learning English, visit the Surrey English Language Centre and we will refer you to an instructor."
  },
  {
    Name: "Surrey Schools Welcome Centre",
    Address: "7525 King George Blvd",
    Phone: "6045433060",
    Website: "https://www.surreyschools.ca/page/411/welcome-centre",
    Category: ["Learn English","Settlement","Family"],
    Directions: "English+Language+Learner+Wlcm/@49.1396836,-122.8462557,19.85z",
    Description: "The Welcome Centre is committed to assisting our District's ELL students with their transition to a new school system and community by facilitating effective reception, language assessment, and appropriate placement. The Welcome Centre staff provides registration support, information about the B.C. education system, school and programs/services."
  },
]
var subcategories = [
  {
      Parent: "Housing",
      Topic: "Finding a Place to Live",
      Description: "This section provides information and resources for refugees on finding and maintaining affordable and safe housing.",
      Links: ["https://rentboard.ca", "https://chf.bc.ca", "https://bchousing.org/", "https://issbc.org"],
      Descriptions: ["The Rent Board Canada provides a comprehensive listing of rental properties available in British Columbia. You can search for rental properties by location, price range, number of bedrooms, and other factors.", "The Co-op Housing Federation of BC is a non-profit organization that helps low-income families and individuals access affordable housing through housing cooperatives.", "BC Housing is a government organization that provides affordable housing options and support services for eligible low-income residents in British Columbia. They have a wide range of housing options available, including rental housing and supportive housing for those who need extra assistance.","The Immigrant Services Society of BC provides support and resources for immigrants and refugees settling in British Columbia, including information and assistance on finding affordable housing."],
      Names: ["Rental Listings", "Co-op Housing Federation of BC", "BC Housing", "Settlement and Housing Services at ISSofBC"],
  },
  {
      Parent: "Housing",
      Topic: "Rent/Lease Agreements and Security Deposits",
      Description: "This section provides information on legal contracts for renting or leasing a property. Understand the terms, know your rights and responsibilities as tenants, seek assistance if needed.",
      Links: ["https://tenants.bc.ca", "https://gov.bc.ca/rentingbc", "https://issbc.org"],
      Descriptions: ["The Tenant Resource & Advisory Centre provides information and resources for tenants in British Columbia, including information on rent and lease agreements.", "The Government of British Columbia provides information and resources on renting in BC, including information on rent and lease agreements, rights and responsibilities of tenants and landlords, and dispute resolution.","The Immigrant Services Society of BC provides support and resources for immigrants and refugees settling in British Columbia, including information and assistance on finding affordable housing."],
      Names: ["Tenant Resource & Advisory Centre", "RentingBC", "Settlement and Housing Services at ISSofBC"],
  },
  {
      Parent: "Housing",
      Topic: "Maintenance and Repairs",
      Description: "This section outlines details regarding maintenance and repairs for ypur property. Learn about the responsibilities of landlords and tenants, and understand common maintenance and repair issues.",
      Links: ["https://tenants.bc.ca", "https://homesforgood.ca"],
      Descriptions: ["The Tenant Resource & Advisory Centre provides information and resources for tenants in British Columbia, including information on rent and lease agreements.","Homes for Good provides information and resources for tenants on maintenance and repairs in rental properties, including information on what to do if repairs are needed and how to request repairs from a landlord."],
      Names: ["Tenant Resource & Advisory Centre", "Homes for Good"],
  },
  {
      Parent: "Housing",
      Topic: "Eviction and Homelessness Prevention",
      Description: "This section provides information on eviction and homelessness, including the legal process of eviction, your rights as a tenant, and resources available to help find a new place to live.",
      Links: ["https://tenants.bc.ca/", "https://hsabc.ca/"],
      Descriptions: ["The Tenant Resource & Advisory Centre provides information and resources for tenants in British Columbia, including information on rent and lease agreements.","The Homelessness Services Association of BC provides information and resources on homelessness and eviction prevention in British Columbia, including information on support services and programs available to those at risk of homelessness."],
      Names: ["Tenant Resource & Advisory Centre", "Homelessness Services Association of BC"],
  },
  {
      Parent: "Culture & Community",
      Topic: "Understanding Canada's Culture",
      Description: "This section provides information on understanding the cultural norms and values of the host country as a refugee. Gain knowledge of local customs, traditions, and beliefs, learn about the local laws, and seek assistance from cultural advisors or mentors if needed.",
      Links: ["https://culturelink.ca/", "https://canada.ca/en/immigration-refugees-citizenship/services/canadians/celebrate-being-canadian/teachers-corner.html"],
      Descriptions: ["A Toronto-based organization that provides a range of services to help newcomers integrate into Canadian society, including information and resources on cultural norms and values. Although they are based in Toronto, they provide a wealth of information that can be useful to refugees anywhere in Canada.","The Teachers’ Corner offers you resources to teach citizenship, immigration and multiculturalism subjects. Share them with your students and colleagues as part of a lesson or to make learning more fun!"],
      Names: ["Tenant Resource & Advisory Centre", "Government of Canada: Teachers' Corner"],
  },
  {
      Parent: "Culture & Community",
      Topic: "Building a Social Network and Making New Friends",
      Description: "This section offers guidance on building a social network as a refugee. Learn about the challenges and opportunities, identify resources and support networks, and take proactive steps to cultivate meaningful connections in your new community.",
      Links: ["https://www.meetup.com", "https://mosaicbc.org/wp-content/uploads/2016/07/Volunteer-Opportunities-for-Newcomers.pdf", "https://issbc.org/job-types/become-a-volunteer"],
      Descriptions: ["An online platform that connects people with similar interests and helps them find events and activities to attend. There are a wide range of Meetup groups in BC, including groups for refugees and immigrants, where newcomers can meet other people, make new friends, and learn about life in their new communities","Volunteering is a great way to meet new people, build relationships, and get involved in the community. MOSAIC BC provides a list of volunteering opportunities for newcomers.", "Volunteering is a great way to meet new people, build relationships, and get involved in the community. The ISSofBC welcomes newcomers from all backgrounds as volunteers."],
      Names: ["Meetup", "MOSAIC BC Volunteering Opportunities for Newcomers", "ISSofBC Volunteer Connections Program"],
  },
  { 
      Parent: "Learn English",
      Topic: "Useful Tools for Learning English",
      Description: "This section highlights useful tools for refugees to learn English, including language-learning apps, online courses, and in-person resources. Improve your language skills, understand cultural nuances, and connect with language exchange partners. Find the support you need to succeed in your new home",
      Links: ["https://duolingo.com/", "https://babbel.com/", "https://memrise.com/", "https://www.bbc.co.uk/learningenglish", "#"],
      Descriptions : ["A popular language learning platform that offers courses in English and over 100 other languages. It’s free, fun, and accessible on any device with an internet connection.", "Another online language learning platform that offers courses in English and other languages. Babbel offers a variety of courses designed for different levels and learning styles.", "A language learning platform that uses spaced repetition and gamification to help learners retain information and progress quickly. Memrise offers courses in English and many other languages.", "A website provided by the British Broadcasting Corporation that offers free lessons, videos, and resources to help learners improve their English language skills.", "Start by learning the basics of the language, such as common greetings, basic vocabulary, and basic grammar structures. This will help you feel more confident when communicating with others and will provide a foundation for further language learning."],
      Names: ["Duolingo", "Babbel", "Memrise", "BBC Learning English", "Helpful Tip:"],
  },
  {
      Parent: "Learn English",
      Topic: "Language Instruction for Newcomers to Canada (LINC)",
      Description: "As a newcomer to Canada, learning English is one of the most important things you can do to make British Columbia feel like home. LINC English classes are delivered by qualified instructors and will equip newcomers with the English conversation skills needed to settle in Canada, make new connections, and find work. LINC classes improve reading, writing, listening, and speaking skills in English, while providing information on the local community, Canadian culture, and job search support.",
      Links: ["https://issbc.org/our-resource/register-for-linc", "https://douglascollege.ca/programs-courses/training-group/linc"],
      Descriptions: ["The ISSofBC provides a comprehensive video guide on how you can apply for LINC at your nearest assessment centre and offers free LINC classes at their Surrey location.", "LINC, offered at Douglas College delivers free language training and skills development services that will help you attain the English proficiency you need to function and participate in all aspects of Canadian society and the economy. "],
      Names: ['Applying for LINC', 'LINC at Douglas College'],
  },
  {
      Parent: "Mental Health",
      Topic: "Useful Websites on this Topic",
      Description: "This list compiles helpful websites on mental health that offer a wealth of resources and support. Gain insights into mental health conditions, access tools for self-care, connect with online communities, and seek professional help if necessary.",
      Links: ["https://cmha.ca", "https://camh.ca", "https://canada.ca/en/public-health/services/mental-health-support.html", "https://healthlinkbc.ca/health-topics/hw233861"],
      Descriptions: ["A nationwide organization that promots mental health and supports people recovering from mental illness", "The Centre for Addiction and Mental Health (CAMH) is Canada's largest mental health teaching hospital ", "The Government of Canada website provides resources on mental health support", "HealthLinkBC provides non-emergency care information to residents of British Columbia"],
      Names: ['Canadian Mental Health Association', 'Centre for Addiction and Mental Health', 'Government of Canada Mental Health Supports', 'HealthLinkBC'],
  },
  {
      Parent: "Mental Health",
      Topic: "Understanding Mental Health",
      Description: "This section provides information on understanding mental health. Learn about mental health conditions, recognize symptoms, understand treatment options, and seek support if needed.",
      Links: ["https://mentalhealthcommission.ca", "https://cmha.ca"],
      Descriptions: ["The Mental Health Commission of Canada provides information and resources on mental health, including what it is, how to maintain it, and how to access support.", "The Canadian Mental Health Association provides information and resources on mental health, including information on different types of mental health conditions and how to access support."],
      Names: ['The Mental Health Commission of Canada', 'Canadian Mental Health Association'],
  },
  {
      Parent: "Mental Health",
      Topic: "Managing Stress and Trauma",
      Description: "Mental health and wellness can be impacted by a range of factors, including genetics, life events, and stress. It's important to understand these factors and to seek support when needed to maintain good mental health and wellness.",
      Links: ["https://vastbc.ca", "https://bouncebackbc.ca"],
      Descriptions: ["VAST assists refugees and other newcomers who have endured torture, trauma and political violence through counselling, documentation, education, and referrals.", "BounceBack is a free skill-building program designed to help adults and youth 13+ manage low mood, mild to moderate depression, anxiety, stress or worry."],
      Names: ['Vancouver Association for Survivors of Torture', 'BounceBackBC'],
  },
  {
      Parent: "Mental Health",
      Topic: "Finding Support",
      Description: "If you're in need of mental health support in Canada or BC, there are many resources available to you. ",
      Links: ["tel:+8334564566", "tel:+8006686868", "https://mentalhealthsupport.net/", "https://cmha.ca"],
      Descriptions: ["Thinking of suicide? Call this number.", "More than a helpline. Call, text, chat and more to get support using Kids Help Phone's 24/7 e-mental health services. For all young people in Canada.More than a helpline. Call, text, chat and more to get support using Kids Help Phone's 24/7 e-mental health services. For all young people in Canada.", "The Mental Health Support Network provides a directory of mental health support resources, including support groups and mental health professionals, for individuals in British Columbia.", "The Canadian Mental Health Association provides information and resources on mental health, including information on different types of mental health conditions and how to access support."],
      Names: ['Canada Suicide Prevention Service 18334564566', 'Kids Help Phone 18006686868', 'Mental Health Support Network', 'Canadian Mental Health Association'],
  },
  {
      Parent: "Healthcare",
      Topic: "Understanding the Healthcare System",
      Description: "Refugees in BC can access a wide range of healthcare services and medical care through the publicly funded healthcare system. This system is known as the Medical Services Plan (MSP) and it provides coverage for a range of services, including hospital care, doctor visits, and diagnostic tests. To access these services, refugees must have a BC Services Card, which is a government-issued identification card that proves they are eligible for MSP coverage.",
      Links: ['https://www.health.gov.bc.ca/health-insurance', 'https://www.health.gov.bc.ca/health-insurance/overview', 'https://www.health.gov.bc.ca/health-insurance/understanding'],
      Names: ['Health Insurance BC', 'Health Insurance BC Overview', 'Health Insurance BC Understanding Your Coverage']
  },
  {
      Parent: "Healthcare",
      Topic: "Insurance and Coverage Options",
      Description: "Refugees in BC may also be eligible for other insurance coverage options, including private health insurance and supplemental insurance plans. Private health insurance may provide coverage for services not covered by MSP, such as dental and vision care.",
      Links: ['https://www.health.gov.bc.ca/health-insurance', 'https://www.health.gov.bc.ca/health-insurance/eligibilty', 'https://www.health.gov.bc.ca/health-insurance/enrolling'],
      Names: ['Health Insurance BC', 'Health Insurance BC Eligibility', 'Health Insurance BC Enrolling in Coverage']
  },
  {
      Parent: "Healthcare",
      Topic: "Preventative Care and Wellness",
      Description: "Preventative care and wellness is an important aspect of maintaining good health. To access preventative care services in BC, you can visit your doctor, a public health clinic, or a community health center. These providers can offer a range of services, including vaccinations, cancer screenings, and health assessments.",
      Links: ['https://www.healthlinkbc.ca/health-topics/hw233370', 'https://www.healthlinkbc.ca/health-topics/hw233380', 'https://www2.gov.bc.ca/gov/content/health/promoting-healthy-living/preventative-health'],
      Names: ['HealthLinkBC Wellness', 'HealthLinkBC Preventive Care', 'BC Ministry of Health - Preventative Health'],
  },
  {
      Parent: "Healthcare",
      Topic: "Chronic Conditions and Special Needs",
      Description: "If you have a chronic condition or special need, it is important to receive ongoing care and support to manage your condition. In BC, there are several resources available to help refugees with chronic conditions and special needs access healthcare services and medical care.",
      Links: ['https://www.healthlinkbc.ca/health-topics/hw233390', 'https://www.healthlinkbc.ca/health-topics/hw233401', 'https://www2.gov.bc.ca/gov/content/health/care-facility-administration-licensing/resident-care-standards/chronic-disease-management'],
      Names: ['HealthLinkBC Chronic Diseases', 'HealthLinkBC Disability Services and Supports', 'BC Ministry of Health - Chronic Disease Management'],
  },
  {
      Parent: "Healthcare",
      Topic: "Emergency and Urgent Care",
      Description: "In the event of an emergency or urgent medical situation, it is important to seek medical care as soon as possible. In BC, you can visit a hospital emergency room, call 9-1-1 for emergency medical services, or go to a walk-in clinic for urgent medical care.",
      Links: ['https://www.healthlinkbc.ca/health-topics/hw233440', 'tel:+911'],
      Names: ['HealthLinkBC Emergencies', '9-1-1'],
  },
  {
      Parent: "Legal Services",
      Topic: "Understanding the Legal System",
      Description: "This section aims to guide individuals in understanding the legal system. Familiarize yourself with legal terms, know your rights and responsibilities, and seek assistance if needed to navigate through the complexities of the legal system",
      Links: ["https://www.gov.bc.ca/ag", "https://www.cba.org", "https://www.canadianlegalfaq.ca"],
      Descriptions: ["The British Columbia Ministry of Attorney General provides information on the legal system in British Columbia, including information on accessing the courts and the services provided by the Legal Services Society.", "The Canadian Bar Association provides information and resources for individuals navigating the legal system in Canada, including information on finding a lawyer, legal procedures and court processes.","Canadian Legal FAQ provides basic information and answers to common questions about the Canadian legal system, including information on accessing the courts and finding a lawyer."],
      Names: ['BC Ministry of Attorney General', 'Canadian Bar Association', 'Canadian Legal FAQ'],
  },
  {
      Parent: "Legal Services",
      Topic: "Understanding the Legal System",
      Description: "This section aims to guide individuals in understanding the legal system. Familiarize yourself with legal terms, know your rights and responsibilities, and seek assistance if needed to navigate through the complexities of the legal system",
      Links: ["https://www.gov.bc.ca/ag", "https://www.cba.org", "https://www.canadianlegalfaq.ca"],
      Descriptions: ["The British Columbia Ministry of Attorney General provides information on the legal system in British Columbia, including information on accessing the courts and the services provided by the Legal Services Society.", "The Canadian Bar Association provides information and resources for individuals navigating the legal system in Canada, including information on finding a lawyer, legal procedures and court processes.","Canadian Legal FAQ provides basic information and answers to common questions about the Canadian legal system, including information on accessing the courts and finding a lawyer."],
      Names: ['BC Ministry of Attorney General', 'Canadian Bar Association', 'Canadian Legal FAQ'],
  },
  {
      Parent: "Legal Services",
      Topic: "Finding a Lawyer",
      Description: "This section aims to guide individuals in understanding the legal system. Familiarize yourself with legal terms, know your rights and responsibilities, and seek assistance if needed to navigate through the complexities of the legal system",
      Links: ["https://www.lawsociety.bc.ca", "https://www.cba.org", "https://www.bc-ivmw.org", "https://clasbc.net", "https://www.accessprobono.ca"],
      Descriptions: ["The Law Society of British Columbia provides a directory of lawyers in British Columbia, allowing individuals to search for lawyers by name, location, or area of practice.", "The Canadian Bar Association provides information and resources for individuals navigating the legal system in Canada, including information on finding a lawyer, legal procedures and court processes.", "The BC Society of Immigrant and Visible Minority Women provides legal information, advice and representation to women of all backgrounds in British Columbia. They have a focus on immigration, family and refugee law.", "The Community Legal Assistance Society provides legal assistance to low-income individuals and marginalized communities in British Columbia. They have a focus on immigration and refugee law, as well as other areas of law that impact refugees.", "Access Pro Bono provides free legal services to individuals and non-profit organizations in British Columbia. They have a focus on serving those who cannot afford a lawyer, including refugees."],
      Names: ['Law Society of BC', 'Canadian Bar Association', 'The BC Society of Immigrant and Visible Minority Women', 'Community Legal Assistance Society', 'Access Pro Bono'],
  },
  {
      Parent: "Legal Services",
      Topic: "Court Procedures and Hearings",
      Description: "If a refugee is involved in a legal dispute, they may need to attend a court hearing. It can be helpful to understand the court procedures and what to expect at a hearing. The court process can be confusing, but there are resources available to help refugees navigate the system.",
      Links: ["https://www.gov.bc.ca/ag", "https://www.cba.org"],
      Descriptions: ["The British Columbia Ministry of Attorney General provides information on the legal system in British Columbia, including information on accessing the courts and the services provided by the Legal Services Society.", "The Canadian Bar Association provides information and resources for individuals navigating the legal system in Canada, including information on finding a lawyer, legal procedures and court processes."],
      Names: ['BC Ministry of Attorney General', 'Canadian Bar Association'],
  },
  {
      Parent: "Financial",
      Topic: "Basic Concepts and Terminology",
      Description: "Understanding basic financial concepts is crucial for refugees as they start to rebuild their financial lives in a new country. Some of the key concepts to understand include budgeting, saving, earning, and spending money, credit and debt, and investing. It’s also important to familiarize yourself with financial terms and concepts that are commonly used in Canada.",
      Links: ["https://www.investopedia.com/terms", "https://www.bankofcanada.ca/glossary", "https://www.fcac-acfc.gc.ca/eng/resources/publications/money/index-eng.html"],
      Names: ['Investopedia - Terms', 'Bank of Canada - Glossary', 'Financial Consumer Agency of Canada'],
  },
  {
      Parent: "Financial",
      Topic: "Budgeting and money management techniques",
      Description: "Budgeting is a critical component of managing your finances. It helps you keep track of your income and expenses, so you can see where your money is going and make changes to your spending habits. Some useful budgeting techniques include setting financial goals, creating a spending plan, and tracking your expenses. There are also many free budgeting tools and resources available online, such as the FCAC's budget calculator.",
      Links: [" https://moneymattersbc.ca/tools-and-resources/budgeting-and-money-management", "https://www.fcac-acfc.gc.ca/eng/resources/publications/budgeting/index-eng.html", "https://www.canada.ca/en/financial-consumer-agency/services/financial-education/budgeting.html"],
      Names: ['Money Matters BC - Budgeting', 'Financial Consumer Agency of Canada', 'Government of Canada'],
  },
  {
      Parent: 'Financial',
      Topic: 'Building and managing credit',
      Description: "Budgeting is a critical component of managing your finances. It helps you keep track of your income and expenses, so you can see where your money is going and make changes to your spending habits. Some useful budgeting techniques include setting financial goals, creating a spending plan, and tracking your expenses. There are also many free budgeting tools and resources available online, such as the FCAC's budget calculator.",
      Links: [" https://moneymattersbc.ca/tools-and-resources/budgeting-and-money-management", "https://www.fcac-acfc.gc.ca/eng/resources/publications/budgeting/index-eng.html", "https://borrowell.com", "https://www.creditkarma.ca/"],
      Names: ['Money Matters BC', 'Financial Consumer Agency of Canada', 'Borrowell', 'Credit Karma'],
  },
  {
      Parent: 'Financial',
      Topic: 'Accessing bank accounts, loans and insurance',
      Description: "Accessing financial products and services such as bank accounts, loans, and insurance can be challenging for refugees, especially if they do not have a credit history in Canada. However, there are many options available, such as no-credit check bank accounts, prepaid credit cards, and alternative lending options.",
      Links: [" https://moneymattersbc.ca/tools-and-resources/banking-and-insurance/", "https://www.fcac-acfc.gc.ca/eng/resources/publications/budgeting/index-eng.html", "https://www.canada.ca/en/financial-consumer-agency/services/financial-education/banking.html"],
      Names: ['Money Matters BC - Budgeting', 'Financial Consumer Agency of Canada', 'Government of Canada'],
  },
  {
      Parent: 'Settlement',
      Topic: 'Useful Websites for the Resettlement Process',
      Description: "This section provides digital resources for individuals seeking to understand and navigate the immigration and citizenship process.",
      Descriptions: ['The ISSofBC (Immigrant Services Society of British Columbia) is a non-profit organization that provides a range of services for new immigrants and refugees in BC, Canada.', 'MOSAIC is a non-profit organization that offers a variety of programs and services to immigrants and refugees in BC, Canada, to help them settle and integrate into Canadian society.', 'The Refugee Hub is a Canadian non-profit organization that provides information, resources, and support to refugees and new immigrants in Canada.', 'This website provides information and resources for individuals making a refugee claim in British Columbia, Canada.', 'This website is provided by the Government of Canada and provides a comprehansive directory of information and resources for newcomers to Canada, including refugees and immigrants.'],
      Links: ["https://issbc.org", "https://mosaicbc.org", "https://refugeehub.ca", "https://refugeeclaimbc.com", "https://www.canada.ca/en/immigration-refugees-citizenship/campaigns/newcomers.html"],
      Names: ['ISSofBC', 'MOSAIC', 'Canadian Refugee Hub', 'Refugee Claim BC', 'Government of Canada - Newcomers'],
  },
  {
      Parent: 'Settlement',
      Topic: 'Settlement Services and Programs',
      Description: "As a newcomer to British Columbia, it can be overwhelming to navigate all the different systems and services that are available. Settlement support helps you and your family to settle in your new community with confidence and ease.",
      Descriptions: ['WelcomeBC explains settlement services, and also provides a list of settlement service providers in British Columbia', 'The Settlement Orientation Services (SOS) program is designed specifically for refugee claimants, offering support and guidance throughout the claim process. This service can help to make the often-complex process of claiming asylum a little bit easier, and ensure that you have the information and resources you need to make a successful claim.', 'For newcomers who may be facing challenges adjusting to life in Canada, ISS of BC offers the Moving Ahead service. This service provides settlement and integration support, helping you overcome any obstacles you may be facing and successfully transition to life in your new community.'],
      Links: ["https://www.welcomebc.ca/Start-Your-Life-in-B-C/Settlement-Services", "https://issbc.org/our-services/sos-settlement-orientation-services", "https://issbc.org/our-services/moving-ahead"],
      Names: ['WelcomeBC - Settlement Services', 'ISSofBC SOS Program', 'ISSofBC Moving Ahead Program']
}]

var guides = [
  {
    Parent: 'Employment',
    Name: 'Applying for a Work Permit',
    Description: 'In this guide, the narrator provides a brief explanation of what a work permit is, how to apply for one, and other important details like how long it may take.',
    Links:["https://issbc.org", "https://mosaicbc.org", "https://bcrefugeehub.ca"],
    Names:["ISSofBC" , "MOSAIC", "BC Refugee Hub"],
    File:'workpermit',
  },
  {
    Parent: 'Learn English',
    Name: 'Want to Learn English? Get Started Here',
    Description: 'If you are confused on where to start here in Surrey to learn English, this is the perfect guide for you! The narrator will provide a simple explanation of all the steps you need to take to learn english, a big step to feeling more at home here in British Columbia.',
    Links:["https://issbc.org", "https://mosaicbc.org", "https://bcrefugeehub.ca"],
    Names:["ISSofBC" , "MOSAIC", "BC Refugee Hub"],
    File:'learnenglish',
  },
  {
    Parent: 'Settlement',
    Name: 'Getting Settled in Canada (Arabic)',
    Description: "This guide provides a brief overview of the settlement process, including information on how to access settlement services, how to apply for permanent residency, and how to apply for citizenship.",
    Links:["https://issbc.org", "https://mosaicbc.org", "https://bcrefugeehub.ca"],
    Names:["ISSofBC" , "MOSAIC", "BC Refugee Hub"],
    File:'gettingsettled',
  }
]