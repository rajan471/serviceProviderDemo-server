const baseUrl = process.env.NODE_ENV !== "development" ?
    process.env.BASE_URL : `http://localhost:${process.env.PORT}/`;
    
const data = [
    {
        "id": 1,
        "name": "BSNL",
        "lowest_price": 110,
        "rating": 3.4,
        "max_speed": 100,
        "description": "Local + STD: Unlimited calling BSNL Network and Rs 100/- calls on Other Network",
        "contact_number": "1800-345-1500",
        "email": "portalhelpdesk@bsnl.co.in",
        "image": baseUrl + "assets/bsnl.png",
        "url": "https://portal2.bsnl.in/myportal/tariffs.do?LANDLINE"
    },
    {
        "id": 2,
        "name": "Airtel",
        "lowest_price": 450,
        "rating": 4.5,
        "max_speed": 250,
        "description": "Tariffs plans that are available in Delhi NCR *Delhi NCR includes Gurgaon, Noida, Faridabad and Ghaziabad. Airtel Calls-1p/sec Other Calls-1.2p/sec. 999 Local and STD + Rs.500 Airtel to Airtel Local",
        "contact_number": "1800-102-002",
        "email": "care@airtel.in",
        "image": baseUrl + "assets/airtel-logo_opt.webp",
        "url": "https://www.airtel.in/fixedline-tariff"
    },
    {
        "id": 3,
        "name": "Hathway",
        "lowest_price": 600,
        "rating": 4.0,
        "max_speed": 150,
        "description": "Enjoy the freedom of endless possibilities with Hathway Broadband. Download any songs you like, play your favourite games, attach large files or folders, upload your trendy photos & videos; its simple & easy with lightening fast speed.",
        "contact_number": "N/A",
        "email": "support@hathway.net",
        "image": baseUrl + "assets/hathway.png",
        "url": "https://www.hathway.com/Broadband/HomeBroadband"
    },
    {
        "id": 4,
        "name": "BBNL / BBNET",
        "lowest_price": 450,
        "rating": 3.0,
        "max_speed": 45,
        "description": "45 mbps speed. Unlimited Data for 30 days",
        "contact_number": "080-67995700",
        "email": "moreinfo@bbnl.co.in",
        "image": baseUrl + "assets/bbnllogo.jpg",
        "url": "https://bbnl.co.in/plans.html"
    },
    {
        "id": 5,
        "name": "ACT Broadband",
        "lowest_price": 600,
        "rating": 4.4,
        "max_speed": 150,
        "description": "Enjoy the freedom of endless possibilities with this Broadband. Download any songs you like, play your favourite games, attach large files or folders, upload your trendy photos & videos; its simple & easy with lightening fast speed.",
        "contact_number": "+91-7288999999",
        "email": "Helpdesk.ncr@actcorp.in",
        "image": baseUrl + "assets/act.png",
        "url": "https://www.actcorp.in/"
    },
    {
        "id": 6,
        "name": "YOU Broadband",
        "lowest_price": 700,
        "rating": 2.3,
        "max_speed": 100,
        "description": "Enjoy the freedom of endless possibilities with this Broadband. Download any songs you like, play your favourite games, attach large files or folders, upload your trendy photos & videos; its simple & easy with lightening fast speed.",
        "contact_number": "N/A",
        "email": "support@you-broadband.co.in",
        "image": baseUrl + "assets/you-broadband.png",
        "url": "https://youbroadband.in/"
    },
    {
        "id": 7,
        "name": "Tikona Digital Network",
        "lowest_price": 400,
        "rating": 2.2,
        "max_speed": 100,
        "description": "Enjoy the freedom of endless possibilities with this Broadband. Download any songs you like, play your favourite games, attach large files or folders, upload your trendy photos & videos; its simple & easy with lightening fast speed.",
        "contact_number": "N/A",
        "email": "care@tikone.net",
        "image": baseUrl + "assets/Tikona_logo_2_0.png",
        "url": "http://www.tikona.in/for-home/broadband-plans"
    },
    {
        "id": 8,
        "name": "Railtel",
        "lowest_price": 1500,
        "rating": 4.0,
        "max_speed": 150,
        "description": "Enjoy the freedom of endless possibilities with Hathway Broadband. Download any songs you like, play your favourite games, attach large files or folders, upload your trendy photos & videos; its simple & easy with lightening fast speed.",
        "contact_number": "N/A",
        "email": "support@railtel.net",
        "image": baseUrl + "assets/railtel.png",
        "url": "https://www.railtelindia.com/our-expertise/railwire-broadband.html"
    },
    {
        "id": 9,
        "name": "Jio Fiber",
        "lowest_price": 399,
        "rating": 4.7,
        "max_speed": 250,
        "description": "Enjoy the freedom of endless possibilities with Jio Fiber Broadband. Download any songs you like, play your favourite games, attach large files or folders, upload your trendy photos & videos; its simple & easy with lightening fast speed.",
        "contact_number": "N/A",
        "email": "care@jio.com",
        "image": baseUrl + "assets/jio-fiber-log.png",
        "url": "https://www.jio.com/fiber/en-in/plans"
    }
]
module.exports = JSON.stringify(data);