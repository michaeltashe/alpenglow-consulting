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
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import PersonCard from "./personCard";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-linear-to-bl from green-950 to-emerald-950 font-sans grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
      <motion.main initial={{transform: "translateY(-150px)", opacity: 0}}animate={{transform: "translateY(0px)", opacity: 1}} transition={{duration: 0.5, ease: "easeInOut"}} className="w-full max-w-[1100px] h-full flex justify-center align-center">
        <Grid height="100%" mt="8" columns={{ xs: "1", md: "1fr 1fr" }}>
          <Flex align="center">
            <Flex className="w-auto" direction="column" gap="2" align="start">
              <Heading size="8">2Freakz</Heading>
              <Heading size="6" color="grass">Consultancy Services</Heading>
              <Text color="gray">The best thing since sliced bread.</Text>
              <Link
                href="https://www.linkedin.com/in/michaeltashe"
                target="_blank"
              >
                <Button style={{cursor: "pointer"}} mt="4">Learn more</Button>
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
                avatarUrl={"JordanMiller.jpg"}
                name={"Jordan Miller"}
                role={"ML Engineer at Crimson Phoenix"}
              />
              <PersonCard
                avatarFallback={"MA"}
                avatarUrl={"MichaelAshe.jpg"}
                name={"Michael Ashe"}
                role={"Software Engineer at Lowe's"}
              />
            </Flex>
            <Text mt="4">
              <Strong>2Freakz</Strong> is a creative software development duo
              building unique, high-impact <Em>digital experiences.</Em> From
              web apps to experimental tools, they combine sharp code with bold
              ideas to craft projects that push boundaries and spark curiosity.
            </Text>
            
          </Flex>
                  <Box m="auto" mt="6" width="100%" gridColumn={"1 / -1"}>
              <Card>
                <Box mb="4">
                <Heading size="5" mb="2">Request for Services</Heading>
                <Text size="2" color="gray">Please fill out this request form and we will reach out to you shortly with a quote.</Text>
                </Box>
                <Text size="1" color="gray" mt="2"><Em>Name</Em></Text>
                <TextField.Root mb="2"></TextField.Root>
                <Text size="1" color="gray" mt="2"><Em>Email</Em></Text>
                <TextField.Root mb="2"></TextField.Root>
                <Text size="1" color="gray" mt="2"><Em>Message</Em></Text>
                <TextArea mb="2"></TextArea>
                <Flex justify="end" gap="2" mt="2">
                <Button style={{cursor: "pointer"}} variant="soft">Submit</Button>
                {/* <Button>Submit</Button> */}
                </Flex>
              </Card>
            </Box>
        </Grid>

      </motion.main>
    </div>
  );
}
