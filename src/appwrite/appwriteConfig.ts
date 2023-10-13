import { Client, Account, Databases } from "appwrite";
import { PROJECT_ID } from "@env";

export const client = new Client().setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID);
