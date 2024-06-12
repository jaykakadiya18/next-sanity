// export default function blogs({params}){
//   console.log(params)
//   return(
   
//     <div className="relative h-screen">
//        <div className="bg-[#f2f9ff] h-screen flex flex-col items-center">
//           <div className="mt-20 flex flex-col items-center">
//               <h1 className="text-4xl font-bold">Google workspace</h1>
//                 <img src="https://cdn.prod.website-files.com/60473d8edc329c41a58f1151/65368d50745ae22a7052180b_google-workspace.jpg" className="w-28 border 1px border-solid border-[#dedede] rounded-lg my-3" />
//                 <p className="my-5">Everything you need to get anything done, all in one place with Google</p>
              
//               <div className="bg-[#cde5d9]">
//                     <div className="py-[3px] px-[5px] text-xs font-normal text-[#419a6f]  ">Free Deal</div>
//               </div>
//           </div>
//           <div className="flex flex-col items-center">
//             <p className="mt-[10px] text-base font-medium">FounderPass member get</p>
//             <h1 className="text-5xl font-bold mt-[10px] text-center leading-[50px]">20% Off For 12 Months</h1>
//               <p className="text-lg my-10">
//                   20% off Standard Plan or 15% off Plus plans for 12 months
//               </p>
              
//           </div>
//           <div className="flex flex-col items-center">
//               <p className="text-base mb-[10px] font-bold">You need to be a member to see this deal. </p>
//               <button className="bg-[#05a56e] text-white text-center rounded-md py-4 px-6 text-sm font-bold shadow-[rgba(24,16,99,.36)]"> Get Free instant access to this deal</button>
//               <p className="text-[#868e96] text-center mt-2 text-sm">Free to join • No credit card required</p>
//           </div>
//        </div>
//         <div
//             className="absolute inset-x-0 h-[100px] bg-[#f2f9ff] z-[-1]"
//             style={{
//                 borderBottomLeftRadius: '50% 100px',
//                 borderBottomRightRadius: '50% 100px',
//             }}
//         ></div>
           
//     </div>
//   )
// }


import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { client, sanityFetch } from "@/sanity/client";

const CARD_QUERY = `*[
  _type == "card" &&
    slug.current == $slug
  ][0]
{
...,
}`;

// const { projectId, dataset } = client.config();
// export const urlFor = (source) =>
//   projectId && dataset
//     ? imageUrlBuilder({ projectId, dataset }).image(source)
//     : null;

export default function blogs({}){
  
  // const card = await sanityFetch({
  //   query: CARD_QUERY,
  //   params,
  // });
  const {
    headline,
    image,
    Text,
    Tags,
    offerUpper,
    offer,
    offerLower,
    btnUpper,
    Button,
  } = cards;
  console.log(cards);
  // const eventImageUrl = image
  // ? urlFor(image)?.width(550).height(310).url()
  // : null;
  return(
   
    <div className="relative ">
       <div className="bg-[#f2f9ff] flex flex-col items-center">
          <div className="mt-20 flex flex-col items-center">
            {headline ? (<h1 className="text-4xl font-bold">{headline}</h1>) : null}
            {headline && (<h1 className="text-4xl font-bold">{headline}</h1>)}
              
                <img src={eventImageUrl} className="w-28 border 1px border-solid border-[#dedede] rounded-lg my-3" />
                <p className="my-5 px-5 text-center sm:px-0">Everything you need to get anything done, all in one place with Google</p>
              
              <div className="bg-[#cde5d9]">
                    <div className="py-[3px] px-[5px] text-xs font-normal text-[#419a6f]  ">Free Deal</div>
              </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="mt-[10px] text-base font-medium">FounderPass member get</p>
            <h1 className="text-5xl font-bold mt-[10px] text-center leading-[50px]">20% Off For 12 Months</h1>
              <p className="text-lg sm:my-10 my-5 px-5 text-center sm:px-0">
                  20% off Standard Plan or 15% off Plus plans for 12 months
              </p>
              
          </div>
          <div className="flex flex-col items-center">
              <p className="text-base mb-[10px] font-bold">You need to be a member to see this deal. </p>
              <button className="bg-[#05a56e] text-white text-center rounded-md py-4 px-6 text-sm font-bold shadow-[rgba(24,16,99,.36)]"> Get Free instant access to this deal</button>
              <p className="text-[#868e96] text-center mt-2 text-sm">Free to join • No credit card required</p>
          </div>
       </div>
        <div
            className="absolute inset-x-0 h-[100px] bg-[#f2f9ff] z-[-1]"
            style={{
                borderBottomLeftRadius: '50% 100px',
                borderBottomRightRadius: '50% 100px',
            }}
        ></div>

        <div className="flex  justify-center ">
            <div className="w-[70%] mt-24 px-5">
                <h1>Google Workspace Promo Code</h1>
                <img src="https://cdn.prod.website-files.com/60473d8edc329c41a58f1151/653fee41a8ac8a0416fdbbc5_google-workspace-promo-code.jpg"/>
                <div>
                The Google Workspace has become one of the most popular set of productivity tools that teams use across the world, it's no surprise that companies of all sizes use it for all of their team's needs to ensure their work can be done effectively. What's more by using a Google Workspace promo code that we can give you you'll be able to use all of the tools and features whilst saving money.

                Many businesses use Google Workspace so they can have a professional email (names@yourcompanyname) as well as for video meetings, document storage, calendars, creating documents and much more.

                The discount you can enjoy on Google Workspace:

                20% off for 12 months on the Google Workspace Standard plan or 15% off for 12 months on the Google Workspace Plus plan
                14 day free trial - Experience all the benefits before making your decision
                This offer is valid for new customers only, follow the instructions below to get your promo code instantly.

                How to redeem this Google Workspace promo code
                If you're ready to get the promo code and use it then follow the below simple steps:

                Make sure you're logged in to your FounderPass account (or if you don't have one you can join for free in seconds)
                Then at the top of this page, you'll find a redeeem button
                Head to the redeem page, enter your email into the box relating to the plan you want a promo code for (Standard or Plus)
                We'll then email your unique Google Workspace promo code to you instantly
                Then sign up for Google Workspace*
                Select the plan and input your company information
                After inputting contact information and domain name, you will be prompted to choose a Flexible or Annual payment plan (the promo code will work for either payment choice)
                Click the 'Promotion code' text and enter your unique promo code
                You should see the "20% off each month for 12 month(s)" or "15% off each month for 12 months" message appear dependant on the plan you pick, this will be confirmation that the promotional code has been successfully applied
                Which plans do the Google Workspace promo codes work on?
                The 20% discount will work on the Google Workspace Business Standard plans and the 15% off will work for the Google Workspace Plus plan. If you do want to use the other plans such as the Starter or Enterprise plan then these coupons won't work.

                The Google Workspace promo code will work on either the Flexible or Annual payment options for the Standard or Plus plans

                Seeing an error saying "The Promotion Code you entered is not valid for the selected product"?
                If you get the error "The promotion code you entered is not valid for the selected product" then this means that the country in which you are based may not be applicable for the promo code.

                Why we love Google Workspace
                The range of tools that Google Workspace provides is extensive, covering a wide range of areas that are essential to your businesses needs when it comes to connecting, creating and collaborating, these tools include:
                </div>

                <img src="https://cdn.prod.website-files.com/60473d8edc329c41a58f1151/653fadf46a4e51a055abe911_google-workspace-apps.jpg" alt="" />

                <div>
                ‍Gmail - Secure email on your company domain
Drive - For all of your secure online storage and file-sharing needs
Meet - Video meetings, conferencing, and meetings
Calendar - For all of your meetings and time management needs
Chat - The powerful group messaging tool for personal and professional collaboration
Docs - Online document editor that you can sync and share
Sheets - The online spreadsheet application
Slides - Allows you to create online slideshows
Some of the core reasons that people sign up to Google Workspace include:

Ability to have your own professional email address i.e yourname@yourcompany.com
Be able to work in real-time on documents with your team
99.9% uptime guarantee
Use the apps and tools on the go on mobile as well as desktop/laptop
99.9% accuracy in blocking spam
Gmail
It's likely that you'll be familiar with Gmail, whether you've used it for a personal email or you just know about it from others who have used it for their email provider. Gmail in Google Workspaces is similar but designed for businesses, you'll not see any adverts within your email account and you'll have Admin controls.

Businesses often use Gmail for the ability to create their own professional email, you'll be able to use your companies domain name at the end of the email rather than @gmail.com. So for example you can have yourname@yourcompany.com. Not only does this look more professional but it's easier to remember and you can create a custom email for all of your employees as well as general purpose ones such as hello@ help@ and sales@ for example.

Google Meet
With the rise in remote working it's no surprise that the demand for video meeting tools is so high, Google Meet is a fantastic option giving you and your team the ability to create video meetings with your team, potential or existing customers and so on. You can create these from within the Calendar or via your Gmail account.

People can join these from a laptop, tablet, desktop or mobile device whether they're in the office, at home or on the go.

Google Drive
The need to access files from anywhere at any time is essential for most businesses nowadays and with Google Drive you'll be able to do so easily. You'll also be able to control how files are shared, who have permissions and much more.

Use your Google Drive to host your core files, to allow people to access the files they need when they want, to allow team members to update documents when they need to as well as easily share and manage the documents and files when they need to.

Google Calendar
For all time management and calendar needs, you'll be able to share calendars between teams as well as integrate it with other tools such as Meet, Gmail, Drive etc. Companies all over the world and of all sizes use this to help manage their meetings, events, worktime and more.

                </div>
                <img src="https://cdn.prod.website-files.com/60473d8edc329c41a58f1151/653fb0af7c9b29432c3d7501_google-calendar.jpg" alt="" />
            <div>
            Google Docs
            This tool helps you and your business to edit text documents directly in your web browser, eliminating the need to download any software. Whether you're working independently or collaboratively as a team, you can make edits in real-time, allowing for seamless teamwork and enhancing the whole collaboration experience.
            </div>
            <img src="https://cdn.prod.website-files.com/60473d8edc329c41a58f1151/653fb094a6a6e81da6762880_google-docs.jpg" alt="" />
            <div>
            These documents are easily shareable and printable as required. Plus, you have access to a collection of templates, that can help speed up the creation of documents for your company.

Google Sheets
Google Sheets facilitates seamless collaboration, allowing multiple team members to collaborate on a single spreadsheet simultaneously. You can leverage its robust set of features, including formulas, functions, and formatting tools, to enhance efficiency and streamline routine spreadsheet activities

Google Slides
For the times when your business needs to create presentations, whether thats for internal or external parties, the Google Slide app can help you to create beautiful presentations that are effective in getting the information on them to your audience.


            </div>
            <img src="https://cdn.prod.website-files.com/60473d8edc329c41a58f1151/653fb085cabfba49d4623e99_google-slides.jpg" alt="" />
            <div>
            The presentations can be worked on as a team or individually, with changes made in real time and you'll be able to share these presentations with anyone in your team or externally.

Google Workspace free trial
As you can imagine when introducing a range of new tools for your business for the first time you may want to try them out first, see if they fit you and your business needs, that's why Google Workspace offer a free 14 day trial.

This trial lets you test out all of the tools, see if it works with how your business operates and will let you do this for 14 days, if during this time it isn't a good fit for you, then you can cancel and not pay anything. If on the other hand you enjoy it then you can continue and you'll be charged the amount you opted for during your sign up.

Promo code for Google Workspace
For many using a promo code for Google Workspace is a great way to make that extra saving that you can then invest back into your business, as a member of FounderPass you'll be able to make use of this discount so that you can enjoy all of the tools at a discounted rate for the first year.

The Google Workspace promo code is available for all of our members, if you're not a member you can sign up for free and request a Google Workspace promo code, which will be emailed directly to you.

Google Workspace Coupons
If you are looking for Google Workspace coupons then you've come to the right place, we work directly with companies to help you get the best coupon and promo codes on software and tools and Google Workspace is one of the deals that we have available.

To redeem the Google Workspace promo code you'll need to make sure you're signed in to your FounderPass account and you'll then be able to access the discount. The Google Workspace promo code is available for new customers only.

FAQ's
Which businesses are suited to Google Workspace?
One of the great things about Google Workspace is that it's been designed and works brilliantly for businesses of all sizes, whether it's just you running your business or you have 1,000+ employees, you can use them to power all of your needs relating to meetings, calendars, documents and much more.

You can view the different plans available on the Google Workspace site and compare your options to see which is most suited to you and your business needs.

How do I get a Google promotional code?
You'll need to be a FounderPass member (which is free) and then you'll be able to request your own unique Google Workspace promo code which will be emailed to you. This will only work once so make sure you don't share this with anyone else as you will not be able to use it after it's been used.

Which plans can I use this discount on?
Currently, the Google Workspace coupons can be used on the Standard plan or the Plus plan, make sure to request the discount for the plan you're going to pick as if you request one for Standard and try it on Plus it won't work and vice versa.

Is there a free version of Google Workspace?
No, there is currently no free plans available for Google Workspace.

Is this the same as G Suite?
G suite is Google Workspace, the former being the previous name given to the range of tools. It is now known as Google Workspace and this encapsulates all of the different tools and features that you get from them under one name.

Are the promotional codes valid and working?
Yes, we work directly with Google to ensure that the Google Workspace promo code that they provide us is passed on to you correctly. If for any reason the coupon code does not work for you then please get in touch with us and we will look into the matter.

How long does the discount apply for?
By applying this exclusive Google Workspace promo code, you can enjoy a significant 20% discount for a duration of 12 months. This special offer is designed to provide you with a year-long opportunity for substantial savings.

I've requested a Google Workspace promo code but it's not come through?
We emailed across the promo codes instantly, there can be a small delay of a few minutes for your email servers to pull the email in but it typically arrives in under a minute.

If after 5 minutes you've not got the code, please make sure to check your junk or spam folder and if it is still not there, then submit once again but double check your email is correct.

If in the rare circumstance the email with the Google Workspace coupon code is still not in your email or junk/spam folder then please contact us and we can manually send it to you.
            </div>
            </div>
            <div className="w-[30%]  hidden md:block">
               <div className="shadow-2xl shadow-slate-500 sticky top-14 mx-5 rounded-md ">
               <div className="bg-[#f2f9ff] flex flex-col justify-center items-center ">
                  <img src="https://cdn.prod.website-files.com/60473d8edc329c41a58f1151/65368d50745ae22a7052180b_google-workspace.jpg" alt="" className="w-36 border 1px border-solid border-[#dedede] rounded-lg mt-7 mb-4"/>
                  <h1 className="xl:text-2xl font-bold p-4 text-center text-xl">20% Off For 12 Months</h1>
                </div>

                <div className="p-2 mx-5 my-3 ">
                  <div className="xl:flex xl:justify-center">
                  <div className="border-dashed border-2 border-green-700 text-center py-1 px-5 m-2 xl:px-7">
                        use Link 
                  </div>
                  <div className="bg-[#49b882] text-white text-center py-2 px-5 m-2 xl:px-7">
                      use this deal
                  </div>
                  </div>
                  <hr />
                  <p className="m-1 text-center text-[12px] py-1 ">https://workspace.google.com/</p>

                </div>
               </div>
            </div>
        </div>
           
    </div>
  )
}

