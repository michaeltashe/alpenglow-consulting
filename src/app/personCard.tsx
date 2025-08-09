import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Box, Card, Flex, Avatar, Text, IconButton } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface PersonCardProps {
  avatarFallback: string;
  avatarUrl: string;
  name: string;
  role: string;
  githubLink?: string;
  linkedinLink?: string;
}

const PersonCard = (props: PersonCardProps) => {
  return (
    <Box style={{ width: "100%" }}>
      <Card>
        <Flex gap="3" align="center">
          <Avatar
            radius="full"
            size="3"
            src={props.avatarUrl}
            fallback={props.avatarFallback}
          />
          <Box>
            <Text as="div" weight="bold" size="2">
              {props.name}
            </Text>
            <Text as="div" color="gray" size="2">
              {props.role}
            </Text>
            <Flex gap="1" mt="1">
              {props.githubLink && <IconButton variant="ghost" color="gray">
                <Link href={props.githubLink} target="_blank">
                <GitHubLogoIcon />
                </Link>
              </IconButton>}
              {props.linkedinLink && <IconButton variant="ghost" color="gray">
                <Link href={props.linkedinLink} target="_blank">
                <LinkedInLogoIcon />
                </Link>
              </IconButton>}
            </Flex>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
};

export default PersonCard;
