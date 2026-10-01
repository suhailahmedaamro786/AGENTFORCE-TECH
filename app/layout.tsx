import type {Metadata} from "next";
import "./globals.css";

export const metadata:Metadata={
  title:"AgentForce Tech | AI-Powered Software & Automation Agency",
  description:"AgentForce Tech builds AI agents, automation systems, RAG solutions, SaaS products, web apps and intelligent business workflows.",
  metadataBase:new URL("https://agentforce-tech.vercel.app"),
  openGraph:{title:"AgentForce Tech",description:"Build Smarter. Automate Faster. Scale Further.",type:"website"}
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body>{children}</body></html>;
}