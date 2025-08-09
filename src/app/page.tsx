"use client";

import {
  Box,
  Button,
  Card,
  Em,
  Flex,
  Grid,
  Heading,
  Strong,
  TabNav,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import PersonCard from "./personCard";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Navbar from "./navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-linear-to-bl from pink-950 to-violet-950 font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Navbar />
      <motion.main
        initial={{ transform: "translateY(-150px)", opacity: 0 }}
        animate={{ transform: "translateY(0px)", opacity: 1 }}
        className="w-full max-w-[1100px] h-full flex justify-center align-center"
      >
        <Grid height="100%" mt="8" columns={{ xs: "1", md: "1fr 1fr" }}>
          <Flex align="center">
            <Flex className="w-auto" direction="column" gap="2" align="start">
              <Heading size="8">Alpenglow</Heading>
              <Heading size="6" color="plum">
                Consultancy Services
              </Heading>
              <Text color="gray">The best thing since sliced bread.</Text>
              <Link href="/services">
                <Button style={{ cursor: "pointer" }} mt="4">
                  Learn more
                </Button>
              </Link>
            </Flex>
          </Flex>

          <Flex direction="column" className="w-auto" justify="center">
            <Heading mt="6" mb="2" size="4">
              Meet the Team
            </Heading>
            <Flex gap="3" direction="column" align="start">
              <PersonCard
                avatarFallback={"JM"}
                avatarUrl={"JordanMiller.jpg"}
                name={"Jordan Miller"}
                role={"ML Engineer at Crimson Phoenix"}
                githubLink={"https://github.com/MangoStikkyRice"}
                linkedinLink={"https://www.linkedin.com/in/jaycsc/"}
              />
              <PersonCard
                avatarFallback={"MA"}
                avatarUrl={"MichaelAshe.jpg"}
                name={"Michael Ashe"}
                role={"Software Engineer at Lowe's"}
                githubLink={"https://github.com/michaeltashe"}
                linkedinLink={"https://www.linkedin.com/in/michaeltashe/"}
              />
            </Flex>
            <Text mt="4">
              <Strong>Alpenglow</Strong> is a creative software development duo
              building unique, high-impact <Em>digital experiences.</Em> From
              web apps to experimental tools, they combine sharp code with bold
              ideas to craft projects that push boundaries and spark curiosity.
            </Text>
          </Flex>
        </Grid>
      </motion.main>
    </div>
  );
}
