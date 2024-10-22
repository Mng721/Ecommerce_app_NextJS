import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import { env } from "~/env";
const authOptions = {
    providers: [
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET
        })
    ]
}
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
