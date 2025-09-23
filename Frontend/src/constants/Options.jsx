export const SelectTravelesList = [
    {
        id: 1,
        title: "Just Me",
        desc: "A Sole Travelers in exploration",
        icon: <i className="bi bi-person option-icon"></i>,
        people: "1"
    },
    {
        id: 2,
        title: "A Couple",
        desc: "Two Travelers",
        icon: <i className="bi bi-heart option-icon"></i>,
        people: "2 People"
    },
    {
        id: 3,
        title: "Family",
        desc: "Fun for all ages",
        icon: <i className="bi bi-people option-icon"></i>,
        people: "4 People"
    },
    {
        id: 4,
        title: "Friends",
        desc: "Group Adventure",
        icon: <i className="bi bi-person-badge option-icon"></i>,
        people: "6 People"
    }
]

export const SelectBudgetOptions = [
    {
        id: 1,
        title: "Budget",
        desc: "Great experiences without breaking the bank",
        icon: <i className="bi bi-piggy-bank option-icon"></i>
    },
    {
        id: 2,
        title: "Mid-Range",
        desc: "Comfortable accommodations and dining",
        icon: <i className="bi bi-wallet2 option-icon"></i>
    },
    {
        id: 3,
        title: "Luxury",
        desc: "Keeo Cost On The Average Side",
        icon: <i className="bi bi-coin option-icon"></i>
    }
]

export const AI_PROMPT = 'Generate Trip Plan For Location {location} For {totalDays} Days For {traveler} With {budget} Budget. Give Me Hotel Options List With Hotel Name, Hotel Address, Price, Hotel Image URL, Rating, Description And Suggest Itinerary With Place Name, Place Detail, Place Image URL, Geo Coordinates, Ticket Pricing, Time To Travel Each Of The Location For {totalDays} Days With Each Day Plan And Best Time To Visit In JSON Format.'