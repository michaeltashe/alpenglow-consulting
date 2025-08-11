import { Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import * as React from "react";

interface EmailTemplateProps {
  name: string;
  message: string;
}

export function EmailTemplate({ name, message }: EmailTemplateProps) {
  return (
    <div>
      <Text as="div">Hello {name},</Text>
      <br />
      <Text mt="4" as="div">
        Thank you for reaching out. We have received your request and will
        review the details promptly. You can expect a follow-up from us within
        two business days with the next steps or any questions we might have. In
        the meantime, please feel free to reply to this email if you have
        additional information to share.
      </Text>
      <Text mt="4" as="div">
        Your request is as follows:
      </Text>
      <Text as="div">{message}</Text>
      <br />
      <Text mt="4" as="div">
        Best regards,
      </Text>
      <Text as="div">Alpenglow Software Solutions</Text>
    </div>
  );
}
