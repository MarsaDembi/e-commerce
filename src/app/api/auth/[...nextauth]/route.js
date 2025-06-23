import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { username, password } = credentials

                // Dummy akun
                if (
                    (username === "admin" && password === "pass") ||
                    (username === "user" && password === "pass")
                ) {
                    return {
                        id: 1,
                        name: username,
                        email: `${username}@example.com`,
                        role: username === "admin" ? "admin" : "user",
                    }
                }

                return null
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.role = user.role
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user.role = token.role
            }
            return session
        },
    },
    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET || "secret",
})

export { handler as GET, handler as POST }
