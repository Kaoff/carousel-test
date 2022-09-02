import styled from "@emotion/styled";

export const StyledCarouselItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledThumnailWrapper = styled.div`
    position: relative;
    margin-bottom: 12px;
`;

interface StyledThumbnailImgProps {
    imageUrl: string;
}
export const StyledThumbnailImg = styled.div<StyledThumbnailImgProps>`
    width: 200px;
    height: 266px;
    border-radius: 8px;
    background: url(${props => props.imageUrl});
    background-position: center;
`;

export const StyledThumbnailButton = styled.button`
   width: 32px;
   height: 32px;
   padding: 8px;
   position: absolute;
   bottom: 6px;
   right: 7px;
`;

export const StyledName = styled.div`
    color: white;
`;