import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("668228eb0025d87951b1");

const account = new Account(client);

export { account, client };
