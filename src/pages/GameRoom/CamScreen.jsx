import React, { useEffect, useRef, useState } from 'react';
import { OpenVidu } from 'openvidu-browser';
import axios from 'axios';
import {
  CustomScreen,
  Day,
  JoinInput,
  KillVote,
  UserId,
  VideoComponent,
  VideoWrapper,
  VoteImage,
} from './CamScreen.Style';
import useOpenVidu from 'hooks/useOpenVidu';

function CamScreen({ sessionId }) {
  const { session, publisher, subscribers, setRoomId, setUserName, joinSession } = useOpenVidu();

  useEffect(() => {
    const nickname = sessionStorage.getItem('nickname');
    setRoomId(sessionId);
    setUserName(nickname);

    joinSession();
  }, [sessionId]);

  const users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

  const [imageOn, setImageOn] = useState('');

  console.log(imageOn);
  const handleClickKillVote = (id) => {
    setImageOn(id);
  };
  return (
    <div>
      {session !== undefined ? (
        <VideoWrapper>
          {subscribers.map((sub) => (
            <div
              key={sub.stream.streamId}
              onClick={() => {
                handleClickKillVote(sub.id);
              }}
            >
              {imageOn === sub.id ? <KillVote src={process.env.PUBLIC_URL + '/image/game/killvote.png'} /> : null}
              <VideoComponent>
                <UserVideoComponent streamManager={sub}>
                  <UserId>{sub.id}</UserId>
                </UserVideoComponent>
              </VideoComponent>
            </div>
          ))}
          {/* {users.map((users) => (
            <div
              key={users.id}
              onClick={() => {
                handleClickKillVote(users.id);
              }}
            >
              {imageOn === users.id ? <KillVote src={process.env.PUBLIC_URL + '/image/game/killvote.png'} /> : null}

              <VideoComponent>
                <UserId>{users.id}</UserId>
              </VideoComponent>
            </div>
          ))} */}
        </VideoWrapper>
      ) : null}
    </div>
  );
}

function UserVideoComponent(props) {
  const videoRef = useRef();

  const getNicknameTag = () => {
    return JSON.parse(props.streamManager.stream.connection.data).clientData;
  };

  useEffect(() => {
    if (props.streamManager && !!videoRef.current) {
      console.log(videoRef.current);
      props.streamManager.addVideoElement(videoRef.current);
    }
  }, []);

  return (
    <div>
      {props.streamManager !== undefined ? (
        <div>
          <CustomScreen autoPlay={true} ref={videoRef}></CustomScreen>
          <p>{getNicknameTag()}</p>
        </div>
      ) : null}
    </div>
  );
}

export default CamScreen;
