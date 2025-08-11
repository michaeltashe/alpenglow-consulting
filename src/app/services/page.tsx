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
import PersonCard from "../personCard";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Navbar from "../navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-linear-to-bl from pink-950 to-violet-950 font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Navbar />
      <motion.main initial={{transform: "translateY(-150px)", opacity: 0}}animate={{transform: "translateY(0px)", opacity: 1}} className="w-full max-w-[1100px] h-full flex justify-center align-center">
        <Grid height="100%" mt="8" columns={{ xs: "1", md: "1fr 1fr" }}>
          <Flex align="center">
            <Flex className="w-auto" direction="column" gap="2" align="start">
              <Heading size="8">Services</Heading>
              <Text color="gray">We will work closely with you to design a robust and scalable software architecture tailored to your business needs. Our team ensures that every architectural decision aligns with your goals, supports long-term growth, and lays a solid foundation for future development.</Text>

              <Heading mt="8" size="6" color="plum">System Design</Heading>
              <Text color="gray">We'll design your architecture.</Text>
              <Heading size="6" color="plum">End-to-End Development</Heading>
              <Text color="gray">An entire application, start to finish.</Text>
              <Link href="/contact">
                <Button style={{ cursor: "pointer" }} mt="4">
                  Reach out now
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Grid>
      </motion.main>
      
    </div>
  );
}