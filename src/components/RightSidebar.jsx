import React from 'react'
import CardComponent from "./CardComponent"


const listings = [
  {
    id: 1,
    mainTitle: "Go/JS/PHP Software engineer looking for new opportunities",
    subText: "forHire",
  },
  {
    id: 2,
    mainTitle: "Live-Coding on YouTube continues tomorrow",
    subText: "events",
  },
  {
    id: 3,
    mainTitle: "Product Designer",
    subText: "jobs",
  },
  {
    id: 4,
    mainTitle: "FREE COURSE, this weekend only: Ship better code faster",
    subText: "education",
  },
  {
    id: 5,
    mainTitle: "MEAN / MERN Stack 100+ Learning Resources {FREE}",
    subText: "misc",
  },
];
const news = [
  {
    id: 1,
    mainTitle: "Game Dev Digest — Issue #83 - How and Why",

    newarticle: true,
  },
  {
    id: 2,
    mainTitle: "JavaScript News and Updates of February 2021",

    newarticle: true,
  },
  {
    id: 3,
    mainTitle: "🗞 What's new and special in Create Go App CLI v1.7.0?",

    newarticle: true,
  },
  {
    id: 4,
    mainTitle:
      "Google’s Termination of Dr. Mitchell, Clubhouse Security, Low-Code Tools, & more on DevNews!",
    subText: "1 comment",
    newarticle: false,
  },
  {
    id: 5,
    mainTitle: "Ember 3.25 Released",

    newarticle: true,
  },
];

const help = [
  {
    id: 1,
    mainTitle: "How to start a programming blog?",

    newarticle: true,
  },
  {
    id: 2,
    mainTitle: "How to use @yarnpkg/core?",
    subText: "2 comments",
    newarticle: false,
  },
  {
    id: 3,
    mainTitle: "Need advice regarding web development",
    subText: "5 comments",

    newarticle: false,
  },
];


const RightSidebar=()=> {
  return <aside className="rightBar">
    <div className="rightBar__card-hackaton">
      <p>
        <img src="https://picsum.photos/200/300" alt="" />
      </p>
      <h2>
        <a href="/">
          "Hack the planet" with the new relic & Dev
        </a>
      </h2>

      <p>
        Use new Relic to buiild a climate change obersvability app for the chance to win up to 5,000
        <strong>
          <a href="/"> &nbsp; Join the Hackaton</a>
        </strong>
      </p>
    </div>

    <CardComponent tag="listings" articles={listings}/>

    <CardComponent tag="#news" articles={news}/>

    <CardComponent tag="#help" articles={help}/>

  </aside>
}

export default RightSidebar
