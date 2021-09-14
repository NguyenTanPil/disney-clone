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
import { collection } from 'firebase/firestore';

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection('movies')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists()) {
          setDetailData(doc.data());
        } else {
          console.log('No such document in firebase!');
        }
      })
      .catch((error) => {
        console.log('Error gettin document: ', error.message);
      });
  }, [id]);

  return (
    <Container>
      <Background>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/456A711C19899C881600F6247705E5253EB18C2471D75E5281E1FF6ACB6D2FBA/scale?width=1440&aspectRatio=1.78&format=jpeg"
          alt="backgound"
        />
      </Background>
      <ImgTitle>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4A67A42FB16607DAE7E22266D3F00181965178ED1884047C2D982EE7D89D3554/scale?width=1440&aspectRatio=1.78"
          alt="image title"
        />
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
        <SubTitle>subtitle</SubTitle>
        <Description>description</Description>
      </ContentMeta>
    </Container>
  );
};

export default Detail;
