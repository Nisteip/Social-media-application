import {
  Button,
  Divider,
  Flex,
  HStack,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Postslists from "components/post/Postslists";
import { usePosts } from "hooks/posts";
import { useParams } from "react-router-dom";
import Avatar from "./Avatar";
import { useUser } from "hooks/users";
import format from "date-fns/format";
import EditProfile from "./EditProfile";
import { useAuth } from "hooks/auth";

export default function Profile() {
  const { id } = useParams();
  const { posts, isLoading: postsLoading } = usePosts(id);
  const { user, isLoading: userLoading } = useUser(id);
  const { user: authUser, isLoading: authLoading } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (userLoading) return "Loading...";

  return (
    <Stack spacing="5">
      <Flex p={["4", "6"]} pos="relative" align="center">
        <Avatar user={user} size="2xl" />

        {!authLoading && authUser.id === user.id && (
          <Button
            pos="absolute"
            mb="2"
            top="6"
            right="6"
            colorScheme="teal"
            onClick={onOpen}
          >
            Change Avatar
          </Button>
        )}

        <Stack ml="10">
          <Text fontSize="2xl">{user.username}</Text>
          <HStack spacing="10">
            <Text color="gray.700" fontSize={["sm", "lg"]}>
              Posts: {posts.length}
            </Text>
            <Text color="gray.700" fontSize={["sm", "lg"]}>
              Joined: {format(user.date, "dd MMMM yyyy")}
            </Text>
          </HStack>
        </Stack>

        <EditProfile isOpen={isOpen} onClose={onClose} />
      </Flex>
      <Divider />
      {postsLoading ? (
        <Text>Posts are Loading...</Text>
      ) : (
        <Postslists posts={posts} />
      )}
    </Stack>
  );
}
