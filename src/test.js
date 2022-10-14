// /* eslint-disable import/no-extraneous-dependencies */
// import React from "react";
// import ReactFullpage from "@fullpage/react-fullpage";

// import "./App.css";
// const SEL = "custom-section";
// const SECTION_SEL = `.${SEL}`;

// // NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// const pluginWrapper = () => {
//   /*
//    * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
//    */
// };

// const originalColors = [
//   "#ff5f45",
//   "#0798ec",
//   "#fc6c7c",
//   "#435b71",
//   "orange",
//   "blue",
//   "purple",
//   "yellow",
// ];

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sectionsColor: [...originalColors],
//       isHovering: false,
//       fullpages: [
//         {
//           text: "HOME",
//         },
//         {
//           text: "ABOUT",
//         },
//         {
//           text: "PORTFOLIO",
//         },
//         {
//           text: "CONTACT",
//         },
//         {
//           text: "BLOG",
//         },
//       ],
//     };
//   }

//   onLeave(origin, destination, direction) {
//     console.log("onLeave", { origin, destination, direction });
//     // arguments are mapped in order of fullpage.js callback arguments do something
//     // with the event
//   }

//   render() {
//     const { fullpages, isHovering } = this.state;

//     if (!fullpages.length) {
//       return null;
//     }

//     const Menu = () => (
//       <ul className="menu">
//         <li data-menuanchor="firstPage" class="active">
//           <a href="#firstPage">HOME</a>
//           <i class="fa fa-home" aria-hidden="true"></i>
//         </li>
//         <li data-menuanchor="secondPage">
//           <a href="#secondPage">ABOUT</a>
//           <i class="fa fa-user" aria-hidden="true"></i>
//         </li>
//         <li data-menuanchor="thirdPage">
//           <a href="#thirdPage">CONTACT</a>
//           <i class="fa fa-id-badge" aria-hidden="true"></i>
//         </li>
//       </ul>
//     );

//     return (
//       <div className="App">
//         {/* <Menu /> */}

//         <ReactFullpage
//           // debug /* Debug logging */
//           // Required when using extensions
//           pluginWrapper={pluginWrapper}
//           // fullpage options
//           licenseKey={"YOUR_KEY_HERE"} // Get one from https://alvarotrigo.com/fullPage/pricing/
//           navigation={true}
//           anchors={[
//             "firstPage",
//             "secondPage",
//             "thirdPage",
//             "fourthPage",
//             "fifthPage",
//           ]}
//           sectionSelector={SECTION_SEL}
//           onLeave={this.onLeave.bind(this)}
//           sectionsColor={this.state.sectionsColor}
//           // navigationTooltips={["HOME", "ABOUT", "PORTFOLIO", "CONTACT", "BLOG"]}
//           // showActiveTooltip={false}
//           // scrollBar={false}
//           // css3={true}
//           // scrollingSpeed={1000}
//           // parallax
//           // waterEffect={true}
//           // controlArrows
//           // easing="easeInOutCubic"
//           // menu=".menu"
//           dropEffect
//           render={(comp) => (
//             <ReactFullpage.Wrapper>
//               {fullpages.map(({ text }) => (
//                 <div
//                   key={text}
//                   // className="section"
//                   data-drop="down"
//                   className={SEL}
//                 >
//                   <h3>{text}</h3>
//                 </div>
//               ))}
//             </ReactFullpage.Wrapper>
//           )}
//         />
//       </div>
//     );
//   }
// }
