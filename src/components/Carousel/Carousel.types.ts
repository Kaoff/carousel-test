export interface CarouselItemType {
    program: Array<{
        id: string;
        name: string;
        thumnail: {
            url: string;
        };
    }>;
}
