export interface TripEntry {
    title: string;
    location: string;
    googleMapsUrl: string;
    date: string;
    description: string;
    imageUrl: string;
}

export const data: TripEntry[] = [
    {
        title: "United States Botanical Garden",
        location: "Maryland, USA",
        googleMapsUrl: "https://goo.gl/maps/3byMroRZhW3xE2xz9",
        date: "22 Feb, 2017",
        description:
            "The U.S. Botanic Garden is a living plant museum. It is supervised by Congress through the Architect of the Capitol, who is responsible for maintaining the grounds of the US Capitol. ",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/2017_United_States_Botanic_Garden.jpg/2880px-2017_United_States_Botanic_Garden.jpg",
    },

    {
        title: "Times Square",
        location: "New York, USA",
        googleMapsUrl: "https://goo.gl/maps/w5vTuAwreq3peCyu6",
        date: "18 Jan, 2019",
        description:
            "Times Square is a major commercial intersection, tourist destination, entertainment center, and neighborhood in Midtown Manhattan, New York.",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/1_times_square_night_2013.jpg/2880px-1_times_square_night_2013.jpg",
    },

    {
        title: "Santa Monica Pier",
        location: "California, USA",
        googleMapsUrl: "https://goo.gl/maps/KnJU8wcpWiV6G9aX7",
        date: "31 March, 2022",
        description:
            "Jutting out into the Pacific Ocean at the intersection of Ocean and Colorado, the Santa Monica Pier symbolizes the heart of Santa Monica and is one of the most photographed locations in the world.",
        imageUrl:
            "https://www.discoverlosangeles.com/sites/default/files/business/santa-monica-pier/h_2000-crm-la-santa-monica-pier-81caa3e45056a36_81caaa5e-5056-a36f-236a20f47e02fec1.jpg?width=1600&height=1200&fit=crop&quality=78&auto=webp",
    },
];
