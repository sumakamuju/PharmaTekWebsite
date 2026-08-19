import dotenv from "dotenv"
dotenv.config({path:".env.qa", override: true})
export class ConfigManager{
    static get BASE_URL(){
        return process.env.BASE_URL; // !---not null
    }
    static get ACCOUNT_ID(){
        return process.env.ACCOUNT_ID!;
    }
    static get EMAIL(){
        return process.env.EMAIL!;
    }
    static get PASSWORD(){
        return process.env.PASSWORD!;
    }
}