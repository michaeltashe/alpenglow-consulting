"use client";

import {
  Button,
  Em,
  Flex,
  Grid,
  Heading,
  Strong,
  Text,
} from "@radix-ui/themes";
import PersonCard from "./personCard";
import Link from "next/link";

export default function Home() {
  return (
    <div className="8font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="w-full max-w-[1100px] h-full flex justify-center align-center">
        <Grid mt="8" columns={{ xs: "1", md: "1fr 1fr" }}>
          <Flex align="center">
            <Flex className="w-auto" direction="column" gap="2" align="start">
              <Heading size="8">2Freakz</Heading>
              <Text color="gray">The best thing since sliced bread.</Text>
              <Link
                href="https://www.linkedin.com/in/michaeltashe"
                target="_blank"
              >
                <Button mt="4">Learn more</Button>
              </Link>
            </Flex>
          </Flex>

          <Flex direction="column" className="w-auto" justify="end">
            <Heading mt="6" mb="2" size="4">
              Meet the Team
            </Heading>
            <Flex gap="3" direction="column" align="start">
              <PersonCard
                avatarFallback={"JM"}
                name={"Jordan Miller"}
                role={"ML Software Engineer at Crimson Phoenix"}
              />
              <PersonCard
                avatarFallback={"MA"}
                name={"Michael Ashe"}
                role={"Associate Software Engineer at Lowe's"}
              />
            </Flex>
            <Text mt="4">
              <Strong>2Freakz</Strong> is a creative software development duo
              building unique, high-impact <Em>digital experiences.</Em> From
              web apps to experimental tools, they combine sharp code with bold
              ideas to craft projects that push boundaries and spark curiosity.
            </Text>
          </Flex>
        </Grid>
      </main>
    </div>
  );
}
