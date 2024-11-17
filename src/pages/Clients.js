import React from 'react'

const Clients = () => {
    const clientReviews = [
        {
            img: 'https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/person_01-300x300.jpg',
            client: 'Vivien Hawkins',
            designation: 'Makeup Specialist',
            description: 'Cosmetics that are meant to be used on the face and eye area are usually applied with a brush, a makeup sponge'
        },
        {
            img: 'https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/person_02-300x300.jpg',
            client: 'Rudy Martinez',
            designation: 'Body Treatments',
            description: 'The European spas provided various other diversions for guests after the bath, including gambling, horse racing.'
        },
        {
            img: 'https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/person_01-300x300.jpg',
            client: 'Vivien Hawkins',
            designation: 'Makeup Specialist',
            description: 'Cosmetics that are meant to be used on the face and eye area are usually applied with a brush, a makeup sponge'
        },
        {
            img: 'https://preview.lsvr.sk/beautyspot/wp-content/uploads/sites/6/2019/05/person_03-300x300.jpg',
            client: 'Matthew Hernandez',
            designation: 'Barber and Hairdresser',
            description: 'The barber pole, featuring red and white spiraling stripes, another word symbolized different aspects of the craft.'
        }
    ];
    return (
        <div>
            <div className="main_body">
                <div className="content" id="hcontent">
                    <h1 style={{ textAlign: 'left', margin: '10px 0px 15px 10px' }}>Clients</h1>
                    <div id="clients">

                        <div className="review-cards">
                            {clientReviews.map((review) => (
                                <div className="r-card" style={{ padding: '10px' }}>
                                    <img style={{ maxWidth: '160px', borderRadius: '100px' }} alt="" src={review.img} />
                                    <div className="c-review">
                                        <h3 style={{ fontSize: '15px' }}>{review.client}</h3>
                                        <i style={{ color: 'graytext' }}>{review.designation}</i>
                                        <p style={{ margin: '10px', fontSize: '15px' }}>{review.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Clients;
