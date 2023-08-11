import { useEffect, useState } from 'react';

const useEventSource = (dataType, sessionId, nickname) => {
  // const url = process.env.REACT_APP_GAME_SERVER_URL + `/${server}`;

  // 해당 유저아이디 구독
  const url = `http://localhost:8080/sse/enter/${sessionId}/${nickname}`;
  const [data, setData] = useState();
  const [listening, setListening] = useState(false);
  const [eventSource, setEventSource] = useState(undefined);
  let eventType = 'role';
  const startListening = () => {
    if (!listening) {
      console.log('리스닝asdasd');
      const source = new EventSource(url); // 구독했어요
      setEventSource(source);
      console.log(source, '구독완료');

      source.onmessage = async (event) => {
        const response = await event.data;

        console.log(response, '메시지보내줘ㅁㄴㅇ');
        const parsedData = JSON.parse(response);
        setData(parsedData);
      };
      source.addEventListener(eventType, function (e) {
        console.log(e.data);
        setData(e.data);
      });
      source.onopen = () => {
        console.log('연결 성공');
      };

      source.onerror = () => {
        console.log('연결 중 에러 발생');
        source.close();
      };

      setListening(true);
    }
  };

  const stopListening = () => {
    console.log('이벤트소스 닫힘');
    if (eventSource) {
      // eventSource.close();
      setListening(true);
    }
  };

  useEffect(() => {
    startListening();

    return () => {
      stopListening();
    };
  }, []);

  return data;
};

export default useEventSource;
