export enum IFormInputId {
  "senderEmail" = "senderEmail",
  "name" = "name",
  "message" = "message",
}
export type IFormValues = { [id in IFormInputId]: string };
