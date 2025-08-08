'use client'

import { Avatar, Box, Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
  return (
    <div className="8font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col items-start">
        <Heading style={{marginTop: "400px"}}>2Freakz</Heading>
        <Text>The best thing since sliced bread.</Text>
        <Button className="cursor-pointer" onClick={() => alert("Hello Jordan")}>Learn more</Button>

        <Heading style={{marginTop: "32px"}} size="4">Meet the Team</Heading>
        <Flex gap="3" direction="column">
        <Box>
          <Card>
            <Flex gap="3" align="center">
              <Avatar src="https://media.licdn.com/dms/image/v2/D4E03AQEVdIML0AQvgQ/profile-displayphoto-shrink_200_200/B4EZb_yvqEHQAY-/0/1748048214923?e=2147483647&v=beta&t=_Nnj6wNeCHZ3KAb7bKVycCbj0UNQHh0H4G4geVQExmQ" radius="full" size="3" fallback="JM"/>
              <Box>
                <Text as="div" weight="bold" size="2">Jordan Miller</Text>
                <Text as="div" color="gray" size="2">ML Engineer at Crimson Phoenix</Text>
              </Box>
            </Flex>
          </Card>
        </Box>
        <Box>
          <Card>
            <Flex gap="3" align="center">
              <Avatar src="https://media.licdn.com/dms/image/v2/D4E03AQF0gdFu7Za9dA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1637720480289?e=2147483647&v=beta&t=b_LuCFAXFCa30lX0le-QC-RYPw3bQAsNUOjFMh7FY_E" radius="full" size="3" fallback="MA"/>
              <Box>
                <Text as="div" weight="bold" size="2">Michael Ashe</Text>
                <Text as="div" color="gray" size="2">Associate Software Engineer at Lowe's</Text>
              </Box>
            </Flex>
          </Card>
        </Box>
        </Flex>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
