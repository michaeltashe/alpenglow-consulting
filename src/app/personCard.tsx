import { Box, Card, Flex, Avatar, Text } from "@radix-ui/themes";
import React from "react";

interface PersonCardProps {
  avatarFallback: string;
  avatarUrl: string;
  name: string;
  role: string;
}

const PersonCard = (props: PersonCardProps) => {

  return (
    <Box style={{ width: "100%" }}>
      <Card>
        <Flex gap="3" align="center">
          <Avatar radius="full" size="3" src={props.avatarUrl} fallback={props.avatarFallback} />
          <Box>
            <Text as="div" weight="bold" size="2">
              {props.name}
            </Text>
            <Text as="div" color="gray" size="2">
              {props.role}
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
};

export default PersonCard;
