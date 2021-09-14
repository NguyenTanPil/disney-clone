import React, { useEffect, useState } from 'react';
import {
  AddList,
  Background,
  Container,
  ContentMeta,
  Controls,
  Description,
  GroupWatch,
  ImgTitle,
  Player,
  SubTitle,
  Trailer,
} from './DetailStyles';
import playIcon from '../../assets/images/play-icon-black.png';
import trailerIcon from '../../assets/images/play-icon-white.png';
import groupIcon from '../../assets/images/group-icon.png';

import { useParams } from 'react-router-dom';
import db from '../../firebase-app';
import { doc, getDoc } from 'firebase/firestore';

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const { title, backgroundImg, titleImg, subTitle, description } = detailData;

  useEffect(() => {
    const getDetail = async () => {
      try {
        const detail = await getDoc(doc(db, 'movies', id));
        if (detail) {
          setDetailData(detail.data());
        } else {
          console.log('No such document in firebase!');
        }
      } catch (error) {
        console.log('Error gettin document: ', error.message);
      }
    };

    getDetail();
  }, [id]);

  return (
    <Container>
      <Background>
        <img src={backgroundImg} alt={title} />
      </Background>
      <ImgTitle>
        <img src={titleImg} alt={title} />
      </ImgTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src={playIcon} alt="play icon" />
            <span>play</span>
          </Player>
          <Trailer>
            <img src={trailerIcon} alt="trailer icon" />
            <span>trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src={groupIcon} alt="group icon" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{subTitle}</SubTitle>
        <Description>{description}</Description>
      </ContentMeta>
    </Container>
  );
};

export default Detail;
