/*
    You are given a paginated response from a REST API that contains information 
    about movies. All the pages have been already fetched and you are given the 
    following data structure. 
    Your goal is to determine the average and maximum 
    rating of all the movies in the dataset (two single values). You can assume 
    that the “data” property is always present and is an array and each entry 
    contains the “rating” value. The number of pages and items per page is undetermined.
*/

let response = [
    {
        page: 1,
        totalPages: 5,
        data: [
            {
                title: 'Movie1',
                rating: 4.7,
            },
            {
                title: 'Movie2',
                rating: 7.7,
            }
        ]
    },
    {
        page: 2,
        totalPages: 5,
        data: [
            {
                title: 'Movie3',
                rating: 5.1,
            },
            {
                title: 'Movie4',
                rating: 2.4,
            },
            {
                title: 'Movie5',
                rating: 6.8,
            }
        ]
    },
    {
        page: 3,
        totalPages: 5,
        data: [
            {
                title: 'Movie6',
                rating: 8.9,
            }
        ]
    },
];


const calcRating = () => {
    let allRating = [];
    let maxRating = 0;
    let avgRating = 0;
    response.forEach((item) => {
        item.data.map((rate) => {
            allRating.push(rate.rating);
            avgRating += rate.rating;
        })
    });
    avgRating = Math.round(avgRating / allRating.length);
    maxRating = Math.max(...allRating);
    console.log('Average Rating of all the movies is: ', avgRating);
    console.log('Maximum Rating: ', maxRating);
};

calcRating();