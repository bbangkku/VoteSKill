import { useEffect, useState } from 'react';

const useEventSource = (eventType, sessionId, nickname) => {
  // const url = process.env.REACT_APP_GAME_SERVER_URL + `/${server}`;

  // 해당 유저아이디 구독
  const url = `http://localhost:8080/sse/enter/${sessionId}/${nickname}`;
  const [realData, setRealData] = useState([]);
  const [listening, setListening] = useState(false);
  const [eventSource, setEventSource] = useState(undefined);

  const startListening = () => {
    if (!listening) {
      const source = new EventSource(url); // 구독했어요
      setEventSource(source);
      console.log(source, '구독완료');

      source.onmessage = async (event) => {
        console.log(event.data);
        console.log('onmessage 완료');
      };
      source.addEventListener('role', function (e) {
        console.log(e.data, '백엔드가보낸데이터');
        setRealData(e.data);
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
  }, [sessionId, nickname]);

  return realData;
};
export default useEventSource;
