// import axios from "axios";

// export const fetchGit = async () => {
//   const owner = "carbon-design-system";
//   const repo = "carbon";
//   const path = "packages/react/src/components/Accordion/Accordion.stories.js";

//   const preMessage =
//     "You are an AI assistant tasked with creating a comprehensive and user-friendly usage document for a UI component. Analyze the following code snippet and use the guidelines to generate a detailed guide:";
//   const postMessage =

//   const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

//   await axios
//     .get(url)
//     .then((response) => {
//       if (response.status === 200) {
//         const fileContent = atob(response.data.content);

//         const prompt = preMessage + "\n\n" + fileContent + "\n\n" + postMessage;
//         console.log("custom promt", prompt);
//         let last500Chars = prompt.slice(-500);
//         console.log("last500Chars", last500Chars);
//         return prompt;
//       }
//     })
//     .catch((error) => {
//       console.error("An error occurred:", error);
//       return "";
//     });
// };
