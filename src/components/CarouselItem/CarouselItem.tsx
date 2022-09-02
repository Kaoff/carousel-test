import { AddIcon } from "../Icons/AddIcon/AddIcon";
import { StyledCarouselItem, StyledName, StyledThumbnailButton, StyledThumbnailImg, StyledThumnailWrapper } from "./CarouselItem.styles";
import { CarouselItemProps } from "./CarouselItem.types";

export const CarouselItem: React.FC<CarouselItemProps> = ({ imageUrl, name }) => {
    return (
        <StyledCarouselItem>
            <StyledThumnailWrapper>
                <StyledThumbnailImg imageUrl={imageUrl} />
                <StyledThumbnailButton>
                    <AddIcon />
                </StyledThumbnailButton>
            </StyledThumnailWrapper>
            <StyledName>{name}</StyledName>
        </StyledCarouselItem>
    );
}
