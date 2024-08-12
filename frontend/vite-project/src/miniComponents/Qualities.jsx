import React from 'react'

const Qualities = () => {
    const qualities = [
        {
          id: 1,
          image: "/community.jpg",
          title: "COMMUNITY DEVELOPMENT",
          description:
            "Our mission is to empower communities through sustainable development initiatives. We focus on education, healthcare, and economic growth to create lasting change. Together, we can build stronger, more resilient communities and improve lives. Join us in making a difference today.",
        },
        {
          id: 2,
          image: "/transparency.jpg",
          title: "TRANSPARENCY",
          description:
            "Transparency is at the heart of our mission. We ensure that every donation is accounted for, with clear reporting on how funds are used. Our commitment to openness builds trust and ensures that your contributions directly impact the causes you care about.",
        },
        {
          id: 3,
          image: "/impact.jpg",
          title: "IMPACT MEASUREMENT",
          description:
            "Track the impact of your donations in real-time. Our transparent measurement tools show how every contribution changes lives, from providing essentials to empowering communities. See the difference you make with detailed reports and success stories, ensuring your generosity truly counts.",
        },
      ];
    return (
        <>
        <div className="qualities">
          <h2>OUR QUALITIES</h2>
          <div className="container">
            {qualities.map((elememt) => {
              return (
                <div className="card" key={elememt.id}>
                  <div className="img-wrapper">
                    <img src={elememt.image} alt={elememt.title} />
                  </div>
                  <div className="content">
                    <p className="title">{elememt.title}</p>
                    <p className="description">{elememt.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    )
}

export default Qualities;
