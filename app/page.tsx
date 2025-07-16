import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TypographyH1 } from "@/components/ui/typographyH1";
import { TypographyP } from "@/components/ui/typographyP";
import Link from "next/link";
import GitHub from "~icons/mdi/github";
import LinkedIn from "~icons/mdi/linkedin";
import TechStack from "./components/TechStack";
import { TypographyH2 } from "@/components/ui/typographyH2";
import ProjectHeader from "./projects/components/ProjectHeader";
import { getProjects } from "./projects/utils";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <TypographyH1>Namaste, I&apos;m Aayush Mishra.</TypographyH1>
        <span className="font-semibold mt-2">MIT Manipal, Udupi 📌</span>
        <TypographyP>
          Undergraduate at MIT Manipal - Pursuing B.Tech in Mechatronics.
        </TypographyP>
        <TypographyP>
          I&apos;m a Full-Stack Developer and an Embedded Roboticist, I build and break projects - be it Hardware or Software related.
        </TypographyP>

        <div className="grid md:grid-cols-2 gap-1.5 my-8">
          <TechStack />
          <Link href="https://github.com/aayushmishramechatronics">
            <Card>
              <CardHeader className="flex-row justify-between">
                <div className="flex flex-col gap-2">
                  <CardTitle>GitHub</CardTitle>
                  <CardDescription>aayushmishramechatronics</CardDescription>
                </div>
                <GitHub className="w-8 h-8" />
              </CardHeader>
            </Card>
          </Link>
          <Link href="https://www.linkedin.com/in/aayush-anil-mishra/">
            <Card>
              <CardHeader className="flex-row justify-between">
                <div className="flex flex-col gap-2">
                  <CardTitle>LinkedIn</CardTitle>
                  <CardDescription>Aayush Anil Mishra</CardDescription>
                </div>
                <LinkedIn className="w-8 h-8" />
              </CardHeader>
            </Card>
          </Link>
        </div>

        <TypographyH2 className="mb-6">Highlight</TypographyH2>
        <ProjectHeader
          metadata={
            getProjects().find(({ metadata }) => metadata.name === "MyFit")!
              .metadata
          }
        />
      </div>
    </>
  );
}
