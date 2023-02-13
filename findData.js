
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
  