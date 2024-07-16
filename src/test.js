// curl -X POST 'https://iam.cloud.ibm.com/identity/token' -H 'Content-Type: application/x-www-form-urlencoded' -d 'grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=nkXZb0uUeel0kKrEuHRZRoR9lyjcLJfQLbRRxj-zB92q'

// accessotken
// eyJraWQiOiIyMDI0MDcwNDA4NDAiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC02OTEwMDA5TzE5IiwiaWQiOiJJQk1pZC02OTEwMDA5TzE5IiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiOTY3Y2Q2OGYtZWY4MC00NjU0LWIxNmEtMjJlNjc4YTlhMTlkIiwiaWRlbnRpZmllciI6IjY5MTAwMDlPMTkiLCJnaXZlbl9uYW1lIjoiTmlraGlsIiwiZmFtaWx5X25hbWUiOiJUb21hciIsIm5hbWUiOiJOaWtoaWwgVG9tYXIiLCJlbWFpbCI6Ik5JS0hJTC5UT01BUkBpYm0uY29tIiwic3ViIjoiTklLSElMLlRPTUFSQGlibS5jb20iLCJhdXRobiI6eyJzdWIiOiJOSUtISUwuVE9NQVJAaWJtLmNvbSIsImlhbV9pZCI6IklCTWlkLTY5MTAwMDlPMTkiLCJuYW1lIjoiTmlraGlsIFRvbWFyIiwiZ2l2ZW5fbmFtZSI6Ik5pa2hpbCIsImZhbWlseV9uYW1lIjoiVG9tYXIiLCJlbWFpbCI6Ik5JS0hJTC5UT01BUkBpYm0uY29tIn0sImFjY291bnQiOnsidmFsaWQiOnRydWUsImJzcyI6IjdiMTU5MjkyNzI4ZDQ3MjJiYzFlMjQ2MDUwMzRkZmFhIiwiaW1zX3VzZXJfaWQiOiIxMjM0NzY2MyIsImZyb3plbiI6dHJ1ZSwiaW1zIjoiMjg0Nzg3MSJ9LCJpYXQiOjE3MjEwMzQwMTcsImV4cCI6MTcyMTAzNTIxMiwiaXNzIjoiaHR0cHM6Ly9pYW0uY2xvdWQuaWJtLmNvbS9pZGVudGl0eSIsImdyYW50X3R5cGUiOiJ1cm46aWJtOnBhcmFtczpvYXV0aDpncmFudC10eXBlOmFwaWtleSIsInNjb3BlIjoiaWJtIG9wZW5pZCIsImNsaWVudF9pZCI6ImRlZmF1bHQiLCJhY3IiOjEsImFtciI6WyJwd2QiXX0.oov2P9QJJ7ghqvkLsvX4tlnberUtXtyi0QBRb8_Fc92PnVlK_mDw5CgeqzRuTAKFJ78KdOnjLTwdfns_QDRgY9LGAie4U9gmfsCj_vIN_I0EupWyvBzVE1K5XmhU2lyRCwraipQMmgFCiqKDanrafvdFGhN8VVp6DnzFDeb12hPqh1F7veriOd68BQrmHoYPlwqaZKcuzvt2r8hJT9CNWteSqYAO9AQP6D4i3LaFZS6sb7TYviGiGR--zXqkEG843asyG_nGtY7eyub_BlsLWqwjdB7dxtxhu6ogJvtNlOIDY_vmYAVyAiLysWgD1yioTLvEWKMBqOOCXXqHyE7znw

//const apikey = `eyJraWQiOiIyMDI0MDcwNDA4NDAiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC02OTEwMDA5TzE5IiwiaWQiOiJJQk1pZC02OTEwMDA5TzE5IiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiOTY3Y2Q2OGYtZWY4MC00NjU0LWIxNmEtMjJlNjc4YTlhMTlkIiwiaWRlbnRpZmllciI6IjY5MTAwMDlPMTkiLCJnaXZlbl9uYW1lIjoiTmlraGlsIiwiZmFtaWx5X25hbWUiOiJUb21hciIsIm5hbWUiOiJOaWtoaWwgVG9tYXIiLCJlbWFpbCI6Ik5JS0hJTC5UT01BUkBpYm0uY29tIiwic3ViIjoiTklLSElMLlRPTUFSQGlibS5jb20iLCJhdXRobiI6eyJzdWIiOiJOSUtISUwuVE9NQVJAaWJtLmNvbSIsImlhbV9pZCI6IklCTWlkLTY5MTAwMDlPMTkiLCJuYW1lIjoiTmlraGlsIFRvbWFyIiwiZ2l2ZW5fbmFtZSI6Ik5pa2hpbCIsImZhbWlseV9uYW1lIjoiVG9tYXIiLCJlbWFpbCI6Ik5JS0hJTC5UT01BUkBpYm0uY29tIn0sImFjY291bnQiOnsidmFsaWQiOnRydWUsImJzcyI6IjdiMTU5MjkyNzI4ZDQ3MjJiYzFlMjQ2MDUwMzRkZmFhIiwiaW1zX3VzZXJfaWQiOiIxMjM0NzY2MyIsImZyb3plbiI6dHJ1ZSwiaW1zIjoiMjg0Nzg3MSJ9LCJpYXQiOjE3MjEwMzQwMTcsImV4cCI6MTcyMTAzNTIxMiwiaXNzIjoiaHR0cHM6Ly9pYW0uY2xvdWQuaWJtLmNvbS9pZGVudGl0eSIsImdyYW50X3R5cGUiOiJ1cm46aWJtOnBhcmFtczpvYXV0aDpncmFudC10eXBlOmFwaWtleSIsInNjb3BlIjoiaWJtIG9wZW5pZCIsImNsaWVudF9pZCI6ImRlZmF1bHQiLCJhY3IiOjEsImFtciI6WyJwd2QiXX0.oov2P9QJJ7ghqvkLsvX4tlnberUtXtyi0QBRb8_Fc92PnVlK_mDw5CgeqzRuTAKFJ78KdOnjLTwdfns_QDRgY9LGAie4U9gmfsCj_vIN_I0EupWyvBzVE1K5XmhU2lyRCwraipQMmgFCiqKDanrafvdFGhN8VVp6DnzFDeb12hPqh1F7veriOd68BQrmHoYPlwqaZKcuzvt2r8hJT9CNWteSqYAO9AQP6D4i3LaFZS6sb7TYviGiGR--zXqkEG843asyG_nGtY7eyub_BlsLWqwjdB7dxtxhu6ogJvtNlOIDY_vmYAVyAiLysWgD1yioTLvEWKMBqOOCXXqHyE7znw`;
const apikey = `eyJraWQiOiIyMDI0MDcwNDA4NDAiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC02OTEwMDA5TzE5IiwiaWQiOiJJQk1pZC02OTEwMDA5TzE5IiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiZGFmNWU2MmUtNzlmZi00ZjA4LTliY2UtODkwYTZkM2ZkMTAyIiwiaWRlbnRpZmllciI6IjY5MTAwMDlPMTkiLCJnaXZlbl9uYW1lIjoiTmlraGlsIiwiZmFtaWx5X25hbWUiOiJUb21hciIsIm5hbWUiOiJOaWtoaWwgVG9tYXIiLCJlbWFpbCI6Ik5JS0hJTC5UT01BUkBpYm0uY29tIiwic3ViIjoiTklLSElMLlRPTUFSQGlibS5jb20iLCJhdXRobiI6eyJzdWIiOiJOSUtISUwuVE9NQVJAaWJtLmNvbSIsImlhbV9pZCI6IklCTWlkLTY5MTAwMDlPMTkiLCJuYW1lIjoiTmlraGlsIFRvbWFyIiwiZ2l2ZW5fbmFtZSI6Ik5pa2hpbCIsImZhbWlseV9uYW1lIjoiVG9tYXIiLCJlbWFpbCI6Ik5JS0hJTC5UT01BUkBpYm0uY29tIn0sImFjY291bnQiOnsidmFsaWQiOnRydWUsImJzcyI6IjdiMTU5MjkyNzI4ZDQ3MjJiYzFlMjQ2MDUwMzRkZmFhIiwiaW1zX3VzZXJfaWQiOiIxMjM0NzY2MyIsImZyb3plbiI6dHJ1ZSwiaW1zIjoiMjg0Nzg3MSJ9LCJpYXQiOjE3MjEwNDI5ODUsImV4cCI6MTcyMTA0NDE4MCwiaXNzIjoiaHR0cHM6Ly9pYW0uY2xvdWQuaWJtLmNvbS9pZGVudGl0eSIsImdyYW50X3R5cGUiOiJ1cm46aWJtOnBhcmFtczpvYXV0aDpncmFudC10eXBlOmFwaWtleSIsInNjb3BlIjoiaWJtIG9wZW5pZCIsImNsaWVudF9pZCI6ImRlZmF1bHQiLCJhY3IiOjEsImFtciI6WyJwd2QiXX0.UHiE9TLj4yPFj_BGABy6YsQ7wxd4ykJ-gRH0yCTo3yqIq7oSy_mdECqwNAZruhdU3dGhlYE7TzBlZn0tu1FK-iqxJT8SaIKRR4-b2NO0VvTDQhtArbMu3OeUGMVsd6Y1dSqyI-rEG1c7pseVESOKL-mdrw1eF3DDs6CBvf1KbRg1ExFtoMuwqb-UlnKoqWP1X_5edcpJaOD8Nku8iqz2tsmio_UdM_OdSA-nsB-GB8r4c5lb6UiQ-38g_CHjO7Cn6wIXYIY6v0OA4Erdxe2-MWgfbJsXjhZoOdfB0jwhEtJKWYg8RdSNNXAyNAWT5WyXPwsd8Z-lEm9_AVlRkzrSXA`;
const custompropmt = `Tell me about carbon design system`;

const inputPrompt = ` You are an AI assistant tasked with creating a comprehensive and user-friendly usage document for a UI component. Analyze the provided code snippet and use the following guidelines to generate a detailed guide:
    
Document Structure:
Create a document titled 'Accordion Component Guide' with the following sections:
1. Description
2. Purpose
3. When to Use
4. When Not to Use
5. Anatomy
6. States
7. Variants
8. Interactions

Guidelines for Each Section:

1. Description (3-4 sentences):
Provide a detailed explanation of what the component is and its main function. Describe its basic appearance and how it behaves, using analogies if helpful.

2. Purpose (4-5 sentences):
Elaborate on how the component improves the user's experience on a website or app. Explain in detail how it helps organize information or facilitate user interactions, and why that's beneficial. Discuss common problems it solves and how it enhances user experience.

3. When to Use (5-6 bullet points):
Provide a comprehensive list of scenarios where using this component would be advantageous. Consider various types of content, website layouts, and user needs where it might be particularly useful. For each point, briefly explain why the component is a good choice.

4. When Not to Use (4-5 bullet points):
Offer a detailed list of situations where a different design choice might work better. For each point, explain why this component isn't the best fit and suggest an alternative approach or component that might work better.

5. Anatomy (detailed list with descriptions):
Break down the component into its main parts. Provide a thorough explanation of what each part does, how it contributes to the overall functionality, and how users interact with it.

6. States:
Describe in detail the different ways the component can appear (e.g., default, active, disabled). Explain how users can identify each state, what triggers state changes, and how these states affect the user experience.

7. Variants:
If the component comes in different styles or sizes, describe these options comprehensively. Explain when each variant might be used and how it affects the component's appearance and functionality.

8. Interactions:
Provide a detailed explanation of how people can use the component with various input methods (mouse, touchscreen, keyboard). Describe what happens during each type of interaction, including any visual feedback or changes in the component's state.

Formatting Instructions:
- Use appropriate text formatting to indicate headings and subheadings.
- Use bullet points or numbered lists where appropriate.
- When mentioning specific features or options, indicate them clearly (e.g., by using quotes or capital letters).
- Keep the language clear and simple, avoiding technical terms where possible. If you must use a technical term, provide a brief explanation.

Important Notes:
1. Do not include any code examples in your response. Focus on explaining how the component works and how to use it effectively, without getting into the technical details of how to implement it.
2. Do not add any links to external websites. If you need to reference other UI components, use Carbon Design System components.
3. Aim to make your explanations about 15% more detailed than a typical concise response. Provide examples, elaborations, or additional context where appropriate to give a more comprehensive understanding of the component.

Ensure your guide covers all specified aspects of the component based on the provided code, explaining everything in a way that both designers and non-technical people can understand easily while providing a deeper level of detail.`;

export const generateText = async (inputPrompt) => {
  const url =
    "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29";
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${apikey}`,
  };

  const body = {
    input: inputPrompt,

    parameters: {
      decoding_method: "greedy",
      max_new_tokens: 8000,
      min_new_tokens: 0,
      stop_sequences: [],
      repetition_penalty: 1,
    },
    model_id: "ibm/granite-13b-chat-v2",
    project_id: "e393fe30-ffff-459e-9687-c26a86e8cc96",
    moderations: {
      hap: {
        input: {
          enabled: true,
          threshold: 0.5,
          mask: {
            remove_entity_value: true,
          },
        },
        output: {
          enabled: true,
          threshold: 0.5,
          mask: {
            remove_entity_value: true,
          },
        },
      },
    },
  };

  try {
    console.log("trying to fetch");
    const response = await fetch(url, {
      headers,
      method: "POST",
      body: JSON.stringify(body),
      mode: "no-cors",
    });

    console.log("response", response.body);
    if (!response.ok) {
      console.log(response);
      throw new Error("Non-200 response");
    }

    // Read the response body as JSON
    const data = await response.json();
    console.log("DATA23", data);
  } catch (error) {
    console.error(error);
  }
};
