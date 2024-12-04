"use client"

import * as S from "./styles";


const Blog: React.FC = () => {
  return (
    <S.Container>
     
      <S.Content>
        <S.MainBanners>
          <S.Banner>
            <S.BannerContent>
              <S.Tag>crazy deals</S.Tag>
              <S.Title>buy 1 get 1 free</S.Title>
              <S.Description>The best classic dress is on sale at cara</S.Description>
              <S.Button>Learn More</S.Button>
            </S.BannerContent>
          </S.Banner>
          <S.Banner>
            <S.BannerContent>
              <S.Tag>spring/summer</S.Tag>
              <S.Title>upcomming season</S.Title>
              <S.Description>The best classic dress from sale at cara</S.Description>
              <S.Button>Collection</S.Button>
            </S.BannerContent>
          </S.Banner>
        </S.MainBanners>
        
        <S.SmallBanners>
          <S.SmallBanner>
            <S.SmallBannerContent>
              <S.SmallTitle>SEASONAL SALE</S.SmallTitle>
              <S.SmallDescription>Winter Collection -50% OFF</S.SmallDescription>
            </S.SmallBannerContent>
          </S.SmallBanner>
          <S.SmallBanner>
            <S.SmallBannerContent>
              <S.SmallTitle>NEW FOOTWEAR COLLECTION</S.SmallTitle>
              <S.SmallDescription>Spring/Summer 2024</S.SmallDescription>
            </S.SmallBannerContent>
          </S.SmallBanner>
          <S.SmallBanner>
            <S.SmallBannerContent>
              <S.SmallTitle>T-SHIRTS</S.SmallTitle>
              <S.SmallDescription>New Trendy Prints</S.SmallDescription>
            </S.SmallBannerContent>
          </S.SmallBanner>
        </S.SmallBanners>
      </S.Content>
    </S.Container>
  );
};

export default Blog;