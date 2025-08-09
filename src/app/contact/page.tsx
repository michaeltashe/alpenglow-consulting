"use client";

import {
  Box,
  Button,
  Callout,
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
import { useEffect, useState } from "react";
import Navbar from "../navbar";
import { motion } from "framer-motion";
import axios from "axios";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const resetFields = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async () => {
    setSuccess(false);
    setError(false);

    await axios
      .post("/api/requestServices", { name, email, message })
      .then((res) => {
        setSuccess(true);
        setError(false);
      })
      .catch((err) => {
        setSuccess(false);
        setError(true);
      });
    resetFields();
  };

  return (
    <div className="bg-linear-to-bl from pink-950 to-violet-950 font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Navbar />
      <motion.main
        initial={{ transform: "translateY(-150px)", opacity: 0 }}
        animate={{ transform: "translateY(0px)", opacity: 1 }}
        className="w-full max-w-[1100px] h-full flex justify-center align-center"
      >
        <Grid height="100%" mt="8" gap="6" columns={{ xs: "1", md: "1fr 1fr" }}>
          <Flex align="center">
            <Flex className="w-auto" direction="column" gap="2" align="start">
              <Heading size="8">Contact Us</Heading>
              <Text color="gray">
                We appreciate your interest and will respond to your inquiry
                within two business days.
              </Text>
            </Flex>
          </Flex>

          <Flex
            m="auto"
            width="100%"
            justify="center"
            align="center"
            height="100%"
          >
            <Card style={{ width: "100%" }}>
              <Box mb="4">
                <Heading size="5" mb="2">
                  Request for Services
                </Heading>
              </Box>
              {success && (
                <Box mb="2">
                  <Callout.Root color="grass">
                    <Callout.Text>
                      We have received your request and will reach out shortly!
                    </Callout.Text>
                  </Callout.Root>
                </Box>
              )}
              {error && (
                <Box mb="2">
                  <Callout.Root color="ruby">
                    <Callout.Text>
                      Failed to send request, please try again
                    </Callout.Text>
                  </Callout.Root>
                </Box>
              )}
              <Text size="1" color="gray" mt="2">
                <Em>Name</Em>
              </Text>
              <TextField.Root
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                mb="2"
              ></TextField.Root>
              <Text size="1" color="gray" mt="2">
                <Em>Email</Em>
              </Text>
              <TextField.Root
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                mb="2"
              ></TextField.Root>
              <Text size="1" color="gray" mt="2">
                <Em>Message</Em>
              </Text>
              <TextArea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                mb="2"
              ></TextArea>
              <Flex justify="end" gap="2" mt="2">
                <Button
                  disabled={!name || !email || !message}
                  onClick={handleSubmit}
                  style={{ cursor: "pointer" }}
                  variant="soft"
                >
                  Submit
                </Button>
              </Flex>
            </Card>
          </Flex>
        </Grid>
      </motion.main>
    </div>
  );
}
