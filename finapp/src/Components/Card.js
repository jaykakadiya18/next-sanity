// "use client"
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea, Button } from '@mui/material';
// import Link from "next/link";
// import { useRouter } from 'next/navigation'

// import { sanityFetch } from "@/sanity/client";

// const CARDS_QUERY = `*[_type == "card"]{_id, slug}`;

// const cardData = [
//     { 
//       id: 1,
//       image: 'https://assets-global.website-files.com/60473d8edc329c41a58f1151/64134b6f7dc9bea8b058e90d_aws-activate.jpg',
//       title: '$5,000 Credits',
//       description: 'Amazon AWS offers reliable, scalable, and inexpensive cloud computing.'
//     },
//     {
//       id: 2,
//       image: 'https://assets-global.website-files.com/60473d8edc329c41a58f1151/65368d50745ae22a7052180b_google-workspace.jpg',
//       title: '20% Off For 12 Months',
//       description: 'Everything you need to get anything done, all in one place with Google'
//     },
//     {
//       id: 3,
//       image: 'https://assets-global.website-files.com/60473d8edc329c41a58f1151/64134b77aea9175e4cd30db7_notion.jpg',
//       title: 'Up to $6000 in credits',
//       description: "The All-in-one workspace"
//     },
//     {
//         id: 4,
//         image: 'https://assets-global.website-files.com/60473d8edc329c41a58f1151/609162166e4eb2618f28d0e7_digital-ocean.png',
//         title: '$5,000 Credits',
//         description: "The only customer service tool you'll need"
//     },
//     {
//         id: 5,
//         image: 'https://assets-global.website-files.com/60473d8edc329c41a58f1151/65fbecba31cf9a3136480162_zendesk.jpg',
//         title: '6 Months Free',
//         description: "The only customer service tool you'll need"
//     },
//     {
//         id: 6,
//         image: 'https://assets-global.website-files.com/60473d8edc329c41a58f1151/65fbecba31cf9a3136480162_zendesk.jpg',
//         title: '6 Months Free',
//         description: "The only customer service tool you'll need"
//     },
//     {
//         id: 7,
//         image: 'https://assets-global.website-files.com/60473d8edc329c41a58f1151/65fbecba31cf9a3136480162_zendesk.jpg',
//         title: '6 Months Free',
//         description: "The only customer service tool you'll need"
//     }
//     // Add more card objects as needed
//   ];
  
// //   export async function getStaticProps() {
// //   const cards = await sanityFetch({ query: CARDS_QUERY });

// //   return {
// //     props: {
// //       cards,
// //     },
// //   };
// // }


// export default async function ActionAreaCard({ cards }) {
//   // const router = useRouter()
//   const CARDS_QUERY = `*[_type == "card"]{_id, slug}`;

//   return (
      
//      <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
//          {cardData.map((card, id) => (
//           <Link
//           href={`/blogs/${card.id}`}        
//           >
//         <Card sx={{ maxWidth: 250, marginLeft: 4, marginTop: card.id % 2 === 0 ? 5 : 0 }} key={id}>
//         <CardActionArea>
//             <CardMedia
//           component="img"
//           height="100"
//           image={card.image}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//           {card.title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//           {card.description}
//           </Typography>
         
//         </CardContent>
//         </CardActionArea>
//         </Card>
//         </Link>
//       ))}
//      </div>
   
//   );
// }


"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from "next/link";


const cardData = [
    {
      id: 1,
      image: 'https://assets-global.website-files.com/60473d8edc329c41a58f1151/64134b6f7dc9bea8b058e90d_aws-activate.jpg',
      title: '$5,000 Credits',
      description: 'Amazon AWS offers reliable, scalable, and inexpensive cloud computing.'
    },
    {
      id: 2,
      image: 'https://assets-global.website-files.com/60473d8edc329c41a58f1151/65368d50745ae22a7052180b_google-workspace.jpg',
      title: '20% Off For 12 Months',
      description: 'Everything you need to get anything done, all in one place with Google'
    },
    {
      id: 3,
      image: 'https://assets-global.website-files.com/60473d8edc329c41a58f1151/64134b77aea9175e4cd30db7_notion.jpg',
      title: 'Up to $6000 in credits',
      description: "The All-in-one workspace"
    },
    {
        id: 4,
        image: 'https://assets-global.website-files.com/60473d8edc329c41a58f1151/609162166e4eb2618f28d0e7_digital-ocean.png',
        title: '$5,000 Credits',
        description: "The only customer service tool you'll need"
    },
    {
        id: 5,
        image: 'https://assets-global.website-files.com/60473d8edc329c41a58f1151/65fbecba31cf9a3136480162_zendesk.jpg',
        title: '6 Months Free',
        description: "The only customer service tool you'll need"
    },
    {
        id: 6,
        image: 'https://assets-global.website-files.com/60473d8edc329c41a58f1151/65fbecba31cf9a3136480162_zendesk.jpg',
        title: '6 Months Free',
        description: "The only customer service tool you'll need"
    },
    {
        id: 7,
        image: 'https://assets-global.website-files.com/60473d8edc329c41a58f1151/65fbecba31cf9a3136480162_zendesk.jpg',
        title: '6 Months Free',
        description: "The only customer service tool you'll need"
    }
    // Add more card objects as needed
  ];

//   const Card_QUERY = `*[
//     _type == "card" &&
//     slug.current == $slug
//   ][0]{
//   ...,
//   }`;

//   const { projectId, dataset } = client.config();
// export const urlFor = (source) =>
//   projectId && dataset
//     ? imageUrlBuilder({ projectId, dataset }).image(source)
//     : null;


 
export default function ActionAreaCard({card}) {

  // // const cards = await sanityFetch({ query: CARDS_QUERY });
  // const card = await sanityFetch({
  //   query: EVENT_QUERY,
  //   params,
  // });
  console.log(card);

  return (
      
     <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
         {card.map((card, id) => (
          <Link
          href={`/blogs/${card.slug.current}`}        
          >
        <Card sx={{ maxWidth: 250, marginLeft: 4, marginTop: card.id % 2 === 0 ? 5 : 0 }} key={id}>
        <CardActionArea>
            <CardMedia
          component="img"
          height="100"
          image={card.headline}
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {card.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {card.description}
          </Typography>
         
        </CardContent>
        </CardActionArea>
        </Card>
        </Link>
      ))}
     </div>
    
   
  );
}

// export async function getStaticPaths() {
//   // // Call an external API endpoint to get posts
//   // const res = await fetch('https://.../posts')
//   // const posts = await res.json()
 
//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => ({
//     params: { id: post.id },
//   }))
 
//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

// export async function getStaticProps() {
//   const CARDS_QUERY = `*[_type == "card"]{_id, slug}`;
//   const cards = await sanityFetch({ query: CARDS_QUERY });
//   console.log(cards);

//   return {
//     props: {
//       cards,
//     },
//   };
// }