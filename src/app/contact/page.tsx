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
import { EmailTemplate } from "../emailTemplate";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const resetFields = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async () => {

    setLoading(true);

    setSuccess("");
    setError("");

    await axios
      .post("/api/requestServices", { name, email, message })
      .then((res) => {
        sendEmail();
      })
      .catch((err) => {
        setSuccess("");
        setError("Failed to send request for services");
        setLoading(false);
      });

    resetFields();
  };

  const sendEmail = async () => {
    await axios
      .post("/api/sendEmail", { name, email, message })
      .then(async (res) => {
        setSuccess("Successfully sent request for services.");
        setError("");
      })
      .catch((err) => {
        setSuccess("");
        setError("Failed to send email for services");
      })
      .finally(() => setLoading(false));
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
                    <Callout.Text>{success}</Callout.Text>
                  </Callout.Root>
                </Box>
              )}
              {error && (
                <Box mb="2">
                  <Callout.Root color="ruby">
                    <Callout.Text>{error}</Callout.Text>
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
                  loading={loading}
                  disabled={loading || !name || !email || !message}
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
