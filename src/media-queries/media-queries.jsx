/** @jsx jsx */
// import { jsx, css } from "@emotion/react";

const breakpoints = [576, 768, 992, 1200];
const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

console.log(mq);

// render(
//   <div>
//     <div
//       css={{
//         color: "green",
//         [mq[0]]: {
//           color: "gray",
//         },
//         [mq[1]]: {
//           color: "hotpink",
//         },
//       }}
//     >
//       Some text!
//     </div>
//     <p
//       css={css`
//         color: green;
//         ${mq[0]} {
//           color: gray;
//         }
//         ${mq[1]} {
//           color: hotpink;
//         }
//       `}
//     >
//       Some other text!
//     </p>
//   </div>
// );
