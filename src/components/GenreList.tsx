import { List, ListItem, HStack, Image, Text, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void; 
  selectedGenre: Genre | null;
}
const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
  const { data: genres, isLoading, error} = useGenres();

  if (isLoading) return <Spinner />;
  if(error) return null;

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button fontSize="lg" fontWeight={genre.id === selectedGenre?.id ? 'bold': 'normal'}  variant="link" onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
