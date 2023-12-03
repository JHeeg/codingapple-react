// import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import React from "react";

function App() {

  let [title, setTitle] = useState(['코트 추천', '숏패딩 추천', '머플러 추천']);
  let [like,setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [idx, setIdx] = useState(0);
  let [inputText, setInputText] = useState('');

  const liked = (i) => {
    let likeCopy = [...like];
    likeCopy[i] = likeCopy[i] + 1;
    setLike(likeCopy);
  }

  const titleChange = () => {
    let titleList = [...title];

    titleList = ['여자코트 추천', '숏패딩 추천', '머플러 추천'];
    setTitle(titleList.sort());
  }

  const modalOpen = (i) => {
    setIdx(i);
    setModal(!modal);
  }

  // map() 모든 array 자료 뒤에 사용 가능
  // 함수 안에 적은 코드들을 배열의 개수만큼 반복실행

  const publishing = () => {
    // title.push(inputText);
    // like.push(0);
    // setLike([...like]);
    // setTitle([...title]);
    // console.log(title.length);

    let titleList = [...title];
    titleList.unshift(inputText);
    setTitle(titleList);
  }

  const deleteTitle = (i) => {
    let titleList = [...title];
    titleList.splice(i, 1);
    setTitle(titleList);
  }

  return (
    <>
      <div className="App">
        <div className="black-nav">
          <h4>Helog</h4>
        </div>
      {
        title.map((a, i) => {
          return (
            <div className="list" key={i}>
              {/* e.stopPropagation : 이벤트 버블링 차단 */}
              <h4 onClick={() => {modalOpen(i)}}>{ title[i] } <span onClick={(e) => { e.stopPropagation(); liked(i)}}>🩵&nbsp;{like[i]}</span></h4>
              <p>3월 01일 발행</p>

              <button onClick={() => {deleteTitle(i)}}>삭제</button>
            </div>
          )
        })
      }
      </div>

      <input type="text" onChange={(e) => { setInputText(e.target.value) }} />
      <button onClick={publishing}>발행</button>

      {
        modal ? <Modal idx={idx} title={title} /> : null
      }
    </>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.idx]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button >삭제</button>
    </div>
  )
}


export default App;
